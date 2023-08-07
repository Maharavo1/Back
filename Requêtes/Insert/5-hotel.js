
const hotelQ = `
insert into "hotel" (hotel_id, hotel_name, hotel_address, hotel_is_active, city_id) VALUES($1,$2,$3,$4,$5) RETURNING* ;
    `
export default hotelQ;