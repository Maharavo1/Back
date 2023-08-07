const discountQ = `
insert into "discount" (discount_id, discount_name, discount_rate, discount_start, discount_end) VALUES($1,$2,$3,$4,$5) RETURNING* ;
    `
export default discountQ;