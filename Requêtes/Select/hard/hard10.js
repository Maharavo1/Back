
const hard10Q = `
SELECT
    h.hotel_id,
    h.hotel_name
FROM
    hotel h
WHERE
    h.hotel_id IN (
        SELECT
            r.hotel_id
        FROM
            room r
        LEFT JOIN
            reservation res ON r.room_id = res.room_id
        WHERE
            (res.start_timestamp IS NULL OR res.end_timestamp < '2023-06-30') 
    );
`;

export default hard10Q;