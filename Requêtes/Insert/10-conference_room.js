const conference_roomQ = `
insert into "conference_room"  (conference_room_id, conference_room_capacity, conference_room_price_per_hour, hotel_id)VALUES($1,$2,$3,$4) RETURNING* ;
    `
export default conference_roomQ;