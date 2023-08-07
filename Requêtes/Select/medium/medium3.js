
const medium3Q = `
SELECT r.room_id, r.hotel_id, r.room_type_id
FROM room r
LEFT JOIN reservation res ON r.room_id = res.room_id
WHERE res.reservation_id IS NULL
   OR (res.start_timestamp > (CURRENT_DATE + INTERVAL '1 day')
      OR res.end_timestamp <= (CURRENT_DATE + INTERVAL '1 day'));
`;

export default medium3Q;