
const roomQ = `
insert into "room" (room_id, hotel_id, room_type_id) VALUES($1,$2,$3) RETURNING* ;
    `
export default roomQ;