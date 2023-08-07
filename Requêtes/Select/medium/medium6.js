
const medium6Q = `
SELECT h.hotel_name, COUNT(*) AS total_reservations
FROM hotel h
LEFT JOIN room r ON h.hotel_id = r.hotel_id
LEFT JOIN reservation res ON r.room_id = res.room_id
GROUP BY h.hotel_id;
`;

export default medium6Q;