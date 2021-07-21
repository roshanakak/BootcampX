const { Pool } = require('pg');

const args = process.argv;

const pool = new Pool({
  user: 'roshanak',
  password: 'Roshan2040',
  host: 'localhost',
  database: 'postgres'
});

const queryString = `
SELECT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON assistance_requests.teacher_id = teachers.id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;
  `;
const cohortName = process.argv[2] || 'JUL02';
const values = [cohortName];

pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(teacher => {
      console.log(`${teacher.cohort}: ${teacher.teacher}`);
    });
  })
  .catch(err => console.error('query error', err.stack));