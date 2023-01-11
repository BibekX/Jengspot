
exports.up = function(knex) {
    return knex.schema
    .createTable('points', function(table) {     
      table.increments('id');
      table.integer('points');
      table.integer('likes_received');
      table.foreign('likes_received').references('received_fav');
      table.integer('user_id');
      table.foreign('user_id').references('users.id');                    
    }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable('points');
};
