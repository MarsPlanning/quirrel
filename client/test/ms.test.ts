import { QuirrelClient } from "../src";
import { runQuirrel } from "quirrel";
import type { AddressInfo } from "net";
import * as http from "http";
import delay from "delay";

function getAddress(server: http.Server): string {
  const { address, port } = server.address() as AddressInfo;
  return `http://${address}:${port}`;
}

test("encryption", async () => {
  const server = await runQuirrel({
    port: 0,
    redis: process.env.REDIS_URL,
  });

  const quirrel = new QuirrelClient({
    baseUrl: getAddress(server.httpServer),
  });

  const encryptedBodies: string[] = [];
  const decryptedBodies: string[] = [];

  const endpoint = http
    .createServer((req) => {
      let body = "";
      req.on("data", (data) => {
        body += data;
      });
      req.on("end", () => {
        encryptedBodies.push(body);
        const { body: decryptedBody, isValid } = quirrel.verifyRequestSignature(
          req.headers as any,
          body
        );
        decryptedBodies.push(isValid ? decryptedBody : "-invalid");
      });
    })
    .listen(0);

  const endpointAddress = getAddress(endpoint);

  await quirrel.enqueue(endpointAddress, {
    body: "hello world",
    delay: "1s",
  });

  await delay(1500);

  expect(decryptedBodies).toHaveLength(1);
  expect(decryptedBodies).toEqual(["hello world"]);

  server.close();
  endpoint.close();
});