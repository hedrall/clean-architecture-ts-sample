import { MigrationInterface, QueryRunner } from "typeorm";

export class Story1668468099058 implements MigrationInterface {
    name = 'Story1668468099058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`story\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL COMMENT 'タイトル', \`body\` varchar(255) NOT NULL COMMENT '本文', \`categoryIndex\` int NOT NULL COMMENT 'カテゴリのインデックス', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`story\``);
    }

}
