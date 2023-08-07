
const medium9Q = `
SELECT r.room_id
FROM room r
JOIN reservation res ON r.room_id = res.room_id
WHERE res.start_timestamp <= CURRENT_TIMESTAMP
   AND res.end_timestamp > CURRENT_TIMESTAMP;
`;

export default medium9Q;