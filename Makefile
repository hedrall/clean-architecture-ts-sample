.PHONY: start-local-mysql
start-local-mysql:
	cd mysql && docker compose up -d
	cd ..
	node -r esbuild-register node_modules/typeorm/cli.js -d ormconfig.ts migration:run
