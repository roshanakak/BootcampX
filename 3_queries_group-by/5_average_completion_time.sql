SELECT students.name as student, avg(duration) as average_assignment_duration 
FROM students
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
WHERE end_date IS NULL
GROUP BY students.name
ORDER BY average_assignment_duration DESC;