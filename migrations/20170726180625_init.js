
exports.up = knex =>
  knex.schema.raw('create extension if not exists "uuid-ossp"')
    .then(() => knex.schema.createTable("events", (table) => {
      table.uuid("id").notNullable().primary().defaultTo(knex.raw("uuid_generate_v4()"));
      table.string("name").notNullable();
      table.text("description", "mediumText");
      table.dateTime("startTime").notNullable();
      table.dateTime("endTime").notNullable();

      // use json for location since location info can be rather... varied.
      table.json("location");

      // defines the user that created this event.
      // users aren't defined on this DB so we can't do any cool references
      table.string("createdBy");

      table.timestamps(false, true);
    }));

exports.down = knex =>
  knex.schema.dropTable("events");
