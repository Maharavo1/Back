
const room_optionQ = `
insert into "room_option" (room_option_id, room_option_name, room_option_description, room_option_price) VALUES($1,$2,$3,$4) RETURNING* ;
    `
export default room_optionQ;