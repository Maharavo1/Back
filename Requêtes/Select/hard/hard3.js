
const hard3Q = `
SELECT h.hotel_name, r.room_id, rt.room_type_name
FROM hotel h
JOIN room r ON h.hotel_id = r.hotel_id
JOIN room_type rt ON r.room_type_id = rt.room_type_id
LEFT JOIN (
    SELECT room_id
    FROM reservation
    WHERE (start_timestamp, end_timestamp) OVERLAPS ('2023-06-22', '2023-06-25')
) res ON r.room_id = res.room_id
WHERE res.room_id IS NULL;
`;

export default hard3Q;