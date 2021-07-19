SELECT id, name, email, cohort_id
FROM students
WHERE LOWER(email) not like '%gmail%'
AND phone IS NULL;