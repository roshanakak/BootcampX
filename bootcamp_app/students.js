const { Pool } = require('pg');

const args = process.argv;

const pool = new Pool({
  user: 'roshanak',
  password: 'Roshan2040',
  host: 'localhost',
  database: 'postgres'
});

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id 
WHERE cohorts.name LIKE '${args[2]}%'
LIMIT ${args[3]};
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(err => console.error('query error', err.stack));