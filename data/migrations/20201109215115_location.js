
exports.up = function(knex) {
    return knex.schema
    .createTable('locations', function(table) {     
      table.increments('id');
      table.string('district');
      table.string('address');
      table.float('lat', 14, 10).notNullable();     
      table.float('lng', 14, 10).notNullable();     
    }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable('locations');
};
