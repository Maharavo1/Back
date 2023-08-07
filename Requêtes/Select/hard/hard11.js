
const hard11Q = `
SELECT
    r.room_id,
   
    h.hotel_name
FROM
    room r
JOIN
    hotel h ON r.hotel_id = h.hotel_id
WHERE
    r.room_id NOT IN (
        SELECT
            room_id
        FROM
            reservation
        WHERE
            start_timestamp >= CURRENT_DATE + INTERVAL '1 week' 
            AND end_timestamp < CURRENT_DATE + INTERVAL '2 week'
    );
`;

export default hard11Q;