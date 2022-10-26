# Changelog

## [1.13.0](https://github.com/MarsPlanning/quirrel/compare/v1.12.0...v1.13.0) (2022-10-26)


### Features

* add events ([ad664a8](https://github.com/MarsPlanning/quirrel/commit/ad664a8b0e62b9191def6eafdf0401b26fb65576))
* add NextAPIHandler type ([2bff986](https://github.com/MarsPlanning/quirrel/commit/2bff986bd024c6db3d33b614ec0f9c1fe37773f8))
* allow loading tls certificate in ioredis ([20dc430](https://github.com/MarsPlanning/quirrel/commit/20dc4307f0a35f0911eceeab1d86693a6b9873a1))
* allow passing caPath to createRedisFactory ([dc3dc84](https://github.com/MarsPlanning/quirrel/commit/dc3dc841a83d6b85f064f3cf363e83f9db006cd4))
* allow passing in base64 encoded version of the ca-cert ([a5716c4](https://github.com/MarsPlanning/quirrel/commit/a5716c4b183716aff33e14a1ae24b01de5a83764))
* allow passing redisoptions to createRedisFactory ([f1d2830](https://github.com/MarsPlanning/quirrel/commit/f1d2830ff5119ec5c4dea825480908bbac837162))
* allow two tokens to send over jobs ([8825ee1](https://github.com/MarsPlanning/quirrel/commit/8825ee190a6cf5934ac4df0f5517426db42b9b98))
* also export nextapihandler ([28c76ff](https://github.com/MarsPlanning/quirrel/commit/28c76ffd0ee05d74a0db62fb2556455c6638501b))
* ask to open localhost for local dev ([d969f65](https://github.com/MarsPlanning/quirrel/commit/d969f6525447b0219802d2c083460e0ac28b9b0d))
* don't show endpoint field when endpoint is fixed ([9657674](https://github.com/MarsPlanning/quirrel/commit/9657674bee13cf82e5f762748214827fcb280449))
* pass REDIS_TLS_CA_FILE to every factory ([1a06835](https://github.com/MarsPlanning/quirrel/commit/1a0683528450f3811953260d695b3072396660f9))
* set up posthog client ([c14567b](https://github.com/MarsPlanning/quirrel/commit/c14567b51ab2150c2f5967e4c8987fe0a36dd1a5))
* support node v18 ([#1047](https://github.com/MarsPlanning/quirrel/issues/1047)) ([2d520e0](https://github.com/MarsPlanning/quirrel/commit/2d520e0f6f736f049c3eb016c300fb907a2bd8a5))
* support node v18 ([#1057](https://github.com/MarsPlanning/quirrel/issues/1057)) ([a306f8e](https://github.com/MarsPlanning/quirrel/commit/a306f8e66d9f04f053dbc2b3d5b0d5e018de2245))
* track number of cron jobs ([cbc8e63](https://github.com/MarsPlanning/quirrel/commit/cbc8e631a04507f09b6e5a99c2cab868db1d7cbf))
* update owl, ioredis, ioredis-mock ([#1036](https://github.com/MarsPlanning/quirrel/issues/1036)) ([d328c7d](https://github.com/MarsPlanning/quirrel/commit/d328c7d8aaeb57b70ef6ca3b85d55aa902fb102c))


### Bug Fixes

* add env node to bin file ([fdaaa41](https://github.com/MarsPlanning/quirrel/commit/fdaaa412d9c0e9b05d3b4abf17dc71c358be6ad0))
* Add repo to package.json ([a95b12e](https://github.com/MarsPlanning/quirrel/commit/a95b12efc3f9caa7839d7322f448b8cd368f8016))
* decode base64-encoded incoming request bodies ([b40c5cc](https://github.com/MarsPlanning/quirrel/commit/b40c5cc6b85a58f9677a50a481c5c5a1b62246bb))
* **deps:** update dependency @mdx-js/react to v2 ([02622f0](https://github.com/MarsPlanning/quirrel/commit/02622f0444950618ba82da55ae9f3f2b1f697d33))
* **deps:** update dependency @quirrel/owl to ^0.15.0 ([#1066](https://github.com/MarsPlanning/quirrel/issues/1066)) ([4e6eed4](https://github.com/MarsPlanning/quirrel/commit/4e6eed4401a93f820fec0667bfa31879bbc2e19a))
* **deps:** update dependency @types/node to v18 ([#1083](https://github.com/MarsPlanning/quirrel/issues/1083)) ([565e5a8](https://github.com/MarsPlanning/quirrel/commit/565e5a8604cb326ee422784de75af0578e443dc2))
* **deps:** update dependency @types/react to v18 ([8045340](https://github.com/MarsPlanning/quirrel/commit/80453403135fc29b732cc6ae8d6caf3677689cde))
* **deps:** update dependency @types/react-dom to v18 ([76286f8](https://github.com/MarsPlanning/quirrel/commit/76286f8485b5f2740c1b4ba0a08ee2a156c8ad11))
* **deps:** update dependency body-parser to v1.20.0 ([230751a](https://github.com/MarsPlanning/quirrel/commit/230751a974f9984d276ed1550ce911a0488cc97a))
* **deps:** update dependency conditional-type-checks to v1.0.6 ([#1060](https://github.com/MarsPlanning/quirrel/issues/1060)) ([7084e8d](https://github.com/MarsPlanning/quirrel/commit/7084e8d91dae50299e8a236f847986c19e77a84e))
* **deps:** update dependency cron-parser to v4.3.0 ([57f032f](https://github.com/MarsPlanning/quirrel/commit/57f032f5d5fc7b86a1aac1d7879cb59c3e03f672))
* **deps:** update dependency fastify to v3.28.0 ([85b5de6](https://github.com/MarsPlanning/quirrel/commit/85b5de67628a1afb43f05b3f659d0810433928fd))
* **deps:** update dependency fastify-cors to v6.0.3 ([f08ad8d](https://github.com/MarsPlanning/quirrel/commit/f08ad8d8bf9b8ec90ce32312945cff6dd98c9b74))
* **deps:** update dependency fastify-plugin to v4 ([#1070](https://github.com/MarsPlanning/quirrel/issues/1070)) ([913f202](https://github.com/MarsPlanning/quirrel/commit/913f202b4a0d525f7bdd033b971545fc329e9466))
* **deps:** update dependency fastify-websocket to v4.2.2 ([9702bef](https://github.com/MarsPlanning/quirrel/commit/9702bef6d85c16e82cd18cf24732f4b08ce2718a))
* **deps:** update dependency ioredis to v4.28.5 ([4b461d7](https://github.com/MarsPlanning/quirrel/commit/4b461d77fb557cecc97e5d4efb77b12d8f385282))
* **deps:** update dependency pino to v7.11.0 ([e28ce45](https://github.com/MarsPlanning/quirrel/commit/e28ce456ad542b6e57d2b063d1e148b94bc4e233))
* **deps:** update docusaurus monorepo to v2.0.0-beta.18 ([433d680](https://github.com/MarsPlanning/quirrel/commit/433d680201c9ec0093a236dda8ebfaf8910d88da))
* **deps:** update sentry-javascript monorepo to v6.19.6 ([d5893d6](https://github.com/MarsPlanning/quirrel/commit/d5893d69b2bf7a18cbace54f953b4d7f5b4e7e5e))
* **deps:** update sentry-javascript monorepo to v6.19.7 ([1e46b71](https://github.com/MarsPlanning/quirrel/commit/1e46b714be1324cd06ea114285d4900da3a8d320))
* don't set a truthy value for `tls` ([2d7da30](https://github.com/MarsPlanning/quirrel/commit/2d7da30fad53a7b877e21658d8e1ba3cba898da7))
* ensure no trailing slash ([e9e540b](https://github.com/MarsPlanning/quirrel/commit/e9e540b9fc95a9adb9be56631bd488b01126e6ab))
* export types NextApiRequest and NextApiResponse ([0e44f0f](https://github.com/MarsPlanning/quirrel/commit/0e44f0f859eb593cf79c5aa5533af23b594a1c3d))
* Makes UI Headbar responsive ([63a1619](https://github.com/MarsPlanning/quirrel/commit/63a1619c26177d0402e3f2c4ea173948c922c190)), closes [#608](https://github.com/MarsPlanning/quirrel/issues/608)
* node17 returns ipv6 addresses, which fastify doesn't like ([45d00e4](https://github.com/MarsPlanning/quirrel/commit/45d00e4f66561691cec5d985304047082b75e43d))
* show values from bookmark in form ([13facbc](https://github.com/MarsPlanning/quirrel/commit/13facbc74ea14f2b6b2aaf839d9622aeff6b2e8b))
* typo in CronDetector searchpath ([#1058](https://github.com/MarsPlanning/quirrel/issues/1058)) ([0635fd5](https://github.com/MarsPlanning/quirrel/commit/0635fd5e1fe7fe3e27b3cee7fd56a68347c22423))
* update fastify + others ([#1055](https://github.com/MarsPlanning/quirrel/issues/1055)) ([7404f84](https://github.com/MarsPlanning/quirrel/commit/7404f849ef4df6672896759d4abcb66761a35da0))
* update some deps ([#1046](https://github.com/MarsPlanning/quirrel/issues/1046)) ([6f3a8b7](https://github.com/MarsPlanning/quirrel/commit/6f3a8b7aee7d8578c784c583ae014af09ed69fb1))
* update wording ([e49a6e2](https://github.com/MarsPlanning/quirrel/commit/e49a6e2457c5dae93e5612bf7de7e7af97715e2a))

## [1.12.0](https://github.com/quirrel-dev/quirrel/compare/v1.11.0...v1.12.0) (2022-10-21)


### Features

* update owl, ioredis, ioredis-mock ([#1036](https://github.com/quirrel-dev/quirrel/issues/1036)) ([d328c7d](https://github.com/quirrel-dev/quirrel/commit/d328c7d8aaeb57b70ef6ca3b85d55aa902fb102c))


### Bug Fixes

* **deps:** update dependency @quirrel/owl to ^0.15.0 ([#1066](https://github.com/quirrel-dev/quirrel/issues/1066)) ([4e6eed4](https://github.com/quirrel-dev/quirrel/commit/4e6eed4401a93f820fec0667bfa31879bbc2e19a))
* typo in CronDetector searchpath ([#1058](https://github.com/quirrel-dev/quirrel/issues/1058)) ([0635fd5](https://github.com/quirrel-dev/quirrel/commit/0635fd5e1fe7fe3e27b3cee7fd56a68347c22423))

## [1.11.0](https://github.com/quirrel-dev/quirrel/compare/v1.10.0...v1.11.0) (2022-10-21)


### Features

* support node v18 ([#1047](https://github.com/quirrel-dev/quirrel/issues/1047)) ([2d520e0](https://github.com/quirrel-dev/quirrel/commit/2d520e0f6f736f049c3eb016c300fb907a2bd8a5))
* support node v18 ([#1057](https://github.com/quirrel-dev/quirrel/issues/1057)) ([a306f8e](https://github.com/quirrel-dev/quirrel/commit/a306f8e66d9f04f053dbc2b3d5b0d5e018de2245))


### Bug Fixes

* **deps:** update dependency conditional-type-checks to v1.0.6 ([#1060](https://github.com/quirrel-dev/quirrel/issues/1060)) ([7084e8d](https://github.com/quirrel-dev/quirrel/commit/7084e8d91dae50299e8a236f847986c19e77a84e))
* **deps:** update dependency fastify-plugin to v4 ([#1070](https://github.com/quirrel-dev/quirrel/issues/1070)) ([913f202](https://github.com/quirrel-dev/quirrel/commit/913f202b4a0d525f7bdd033b971545fc329e9466))
* update fastify + others ([#1055](https://github.com/quirrel-dev/quirrel/issues/1055)) ([7404f84](https://github.com/quirrel-dev/quirrel/commit/7404f849ef4df6672896759d4abcb66761a35da0))
* update some deps ([#1046](https://github.com/quirrel-dev/quirrel/issues/1046)) ([6f3a8b7](https://github.com/quirrel-dev/quirrel/commit/6f3a8b7aee7d8578c784c583ae014af09ed69fb1))
