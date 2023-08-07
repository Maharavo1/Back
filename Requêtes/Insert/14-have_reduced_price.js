const have_reduce_priceQ= `
insert into "have_reduced_price" (have_reduced_price_id, room_type_id, discount_id) VALUES($1,$2,$3) RETURNING* ;
    `
export default have_reduce_priceQ;