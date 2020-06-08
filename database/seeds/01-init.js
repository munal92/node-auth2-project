exports.seed = function(knex) {
  return knex('userAuth').insert([
    {username: 'lambda', password:"1234", department:"admin"},
    {username: 'Colleague 1', password:"123", department:"CS"},
    {username: 'Colleague 2', password:"123", department:"IOS"},
    {username: 'Colleague 3', password:"123", department:"Finance"},
    {username: 'Colleague 4', password:"123", department:"Finance"},
    {username: 'Colleague 5', password:"123", department:"Finance"},
    {username: 'Colleague 6', password:"123", department:"Sales"},
    {username: 'Colleague 7', password:"123", department:"Sales"},
    {username: 'Colleague 8', password:"123", department:"Sales"},
   
  ]);
};