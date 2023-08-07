
const hard8Q = `
SELECT u.username,
       CASE
           WHEN hrp.discount_id IS NOT NULL THEN
               rt.room_type_base_price - (rt.room_type_base_price * (d.discount_rate / 100))
           ELSE
               rt.room_type_base_price
       END AS total_payment
FROM reservation res
JOIN room r ON res.room_id = r.room_id
JOIN room_type rt ON r.room_type_id = rt.room_type_id
LEFT JOIN have_reduced_price hrp ON hrp.room_type_id = rt.room_type_id
LEFT JOIN discount d ON hrp.discount_id = d.discount_id
JOIN "user" u ON res.user_id = u.user_id
WHERE res.is_paid = false;
`;

export default hard8Q;