const have_reduce_price_conference_roomQ = `
insert into "have_reduce_price_conference_room"  (have_reduced_price_conference_room_id, conference_room_id, discount_id) VALUES($1,$2,$3) RETURNING* ;
    `
export default have_reduce_price_conference_roomQ;