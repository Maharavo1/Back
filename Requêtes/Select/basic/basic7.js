const basic7Q = `
SELECT u.username, u.first_name, u.last_name,
 SUM(rt.room_type_base_price) AS total_reservation_cost, COALESCE(SUM(CASE WHEN res.is_paid = true THEN rt.room_type_base_price ELSE 0 END), 0) AS total_paid_amount, (SUM(rt.room_type_base_price) - COALESCE(SUM(CASE WHEN res.is_paid = true THEN rt.room_type_base_price ELSE 0 END), 0)) AS remaining_amount
FROM "user" u
JOIN reservation res ON u.user_id = res.user_id
JOIN room r ON res.room_id = r.room_id
JOIN room_type rt ON r.room_type_id = rt.room_type_id
GROUP BY u.user_id, u.username
HAVING (SUM(rt.room_type_base_price) - COALESCE(SUM(CASE WHEN res.is_paid = true THEN rt.room_type_base_price ELSE 0 END), 0)) > 0;
`;

export default basic7Q;