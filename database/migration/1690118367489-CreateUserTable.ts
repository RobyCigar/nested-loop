import {
  MigrationInterface,
  QueryRunner,
  Table,
  Index,
  TableIndex,
} from 'typeorm';

export class CreateUsersTable implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'uuid',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'first_name',
            type: 'varchar',
          },
          {
            name: 'last_name',
            type: 'varchar',
          },
        ],
      }),
      true, // Set to "true" to create the table with a "IF NOT EXISTS" clause
    );

    // Create index on the "id" column (primary key is automatically indexed)
    await queryRunner.createIndex(
      'users',
      new TableIndex({ columnNames: ['id'] }),
    );

    // Create index on the "uuid" column
    await queryRunner.createIndex(
      'users',
      new TableIndex({ columnNames: ['uuid'] }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the "users" table and indexes
    await queryRunner.dropTable('users');
    await queryRunner.dropIndex('users', 'IDX_users_id');
    await queryRunner.dropIndex('users', 'IDX_users_uuid');
  }
}
