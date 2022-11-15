.PHONY: start-local-mysql
start-local-mysql:
	cd mysql && docker compose up -d
	cd ..
	# migration
	node -r esbuild-register node_modules/typeorm/cli.js -d ormconfig.ts migration:run
	# データ投入
	node -r esbuild-register src/core/database/mysql/tasks/insert-test-data.ts
