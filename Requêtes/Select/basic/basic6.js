const basic6Q = `
SELECT res.reservation_id, res.start_timestamp, res.end_timestamp, res.is_paid, res.is_canceled, res.penalty_rate, res.room_id, res.conference_room_id
FROM reservation res
WHERE res.user_id = <user_id>;
`;

export default basic6Q;