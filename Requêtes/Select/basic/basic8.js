const basic8Q = `
SELECT SUM(rt.room_type_base_price) AS total_payment_received
FROM reservation res
JOIN room r ON res.room_id = r.room_id
JOIN room_type rt ON r.room_type_id = rt.room_type_id
JOIN payment_method pm ON res.payment_method_id = pm.payment_method_id
WHERE pm.payment_method_name = 'Mobile Money'
  AND res.is_paid = true;
`;

export default basic8Q;