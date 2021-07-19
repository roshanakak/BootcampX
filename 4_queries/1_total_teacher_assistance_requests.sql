SELECT count(*) as total_assistances, teachers.name
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name
ORDER BY teachers.name;