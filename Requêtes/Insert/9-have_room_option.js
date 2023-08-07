const have_room_optionQ = `
insert into "have_room_option" (have_room_option_id, room_id, room_option_id) VALUES($1,$2,$3) RETURNING* ;
    `
export default have_room_optionQ;