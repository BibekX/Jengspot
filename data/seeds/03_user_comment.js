
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, comment_content: 'First comment here', post_id: 2},
        {id: 2, comment_content: 'Second comment Here', post_id: 2},
        {id: 3, comment_content: 'Third comment here', post_id: 2},
      ]);
    });
};
