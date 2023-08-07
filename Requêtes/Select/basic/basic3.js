const basic3Q = `
SELECT res.reservation_id, res.start_timestamp, res.end_timestamp, res.is_paid, res.is_canceled, res.penalty_rate, res.user_id
FROM reservation res
JOIN room r ON res.room_id = r.room_id
JOIN hotel h ON r.hotel_id = h.hotel_id
WHERE h.hotel_id = <hotel_id>
ORDER BY res.start_timestamp DESC;
`;

export default basic3Q;