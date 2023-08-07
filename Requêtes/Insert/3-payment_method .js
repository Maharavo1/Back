
const payment_methodQ = `
insert into "payment_method" (payment_method_id, payment_method_name) VALUES($1,$2) RETURNING* ;
    `
export default payment_methodQ;