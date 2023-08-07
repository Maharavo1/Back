const basic4Q = `
SELECT r.room_id, r.room_type_id, h.hotel_name
FROM room r
JOIN room_type rt ON r.room_type_id = rt.room_type_id
JOIN hotel h ON r.hotel_id = h.hotel_id
WHERE rt.room_type_name = '<room_type>'
  AND h.hotel_id = <hotel_id>;
`;

export default basic4Q;