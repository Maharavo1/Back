
const reservationQ = `
insert into "reservation" (reservation_id, creation_timestamp, start_timestamp, end_timestamp, special_requests, is_paid, is_canceled, penalty_rate, room_id, conference_room_id, user_id, payment_method_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING* ;
    `
export default reservationQ;