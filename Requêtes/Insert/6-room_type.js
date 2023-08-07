
const room_typeQ= `
insert into "room_type" (room_type_id, room_type_name, room_type_base_price) VALUES($1,$2,$3) RETURNING* ;
    `
export default room_typeQ;