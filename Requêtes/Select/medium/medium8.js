
const medium8Q = `
SELECT h.hotel_name, COUNT(r.room_id) AS total_rooms
FROM hotel h
LEFT JOIN room r ON h.hotel_id = r.hotel_id
GROUP BY h.hotel_id, h.hotel_name;
`;

export default medium8Q;