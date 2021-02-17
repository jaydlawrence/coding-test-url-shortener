const TABLE_NAME = 'urls';

exports.up = (knex) => {
  return knex.raw(
    `CREATE TABLE "${TABLE_NAME}" (
      "id" char(6) NOT NULL,
      "url" text NOT NULL,
      PRIMARY KEY ("id"),
      UNIQUE ("id")
    );`,
  );
};



exports.down = (knex) => {
  return knex.schema.dropTable(TABLE_NAME);
};
