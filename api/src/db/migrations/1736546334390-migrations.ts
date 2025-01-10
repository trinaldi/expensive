import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1736546334390 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      ALTER TABLE "Expenses" ADD "userId" integer
    `);

        await queryRunner.query(`
      ALTER TABLE "Expenses"
      ADD CONSTRAINT "FK_user"
      FOREIGN KEY ("userId")
      REFERENCES "Users"("id")
      ON DELETE CASCADE
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      ALTER TABLE "Expenses" DROP CONSTRAINT "FK_user"
    `);

        await queryRunner.query(`
      ALTER TABLE "Expenses" DROP COLUMN "userId"
    `);
    }
}
