SELECT teachers.name as teacher, students.name as student, assignments.content as assignment, completed_at - started_at as duration
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
JOIN students ON assistance_requests.student_id = students.id
JOIN assignments ON assistance_requests.assignment_id = assignments.id
ORDER BY duration;