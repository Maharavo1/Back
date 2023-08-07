
const medium4Q = `
SELECT rt.room_type_name, COUNT(*) AS total_reservations
FROM room_type rt
LEFT JOIN room r ON rt.room_type_id = r.room_type_id
LEFT JOIN reservation res ON r.room_id = res.room_id
GROUP BY rt.room_type_name;
`;

export default medium4Q;