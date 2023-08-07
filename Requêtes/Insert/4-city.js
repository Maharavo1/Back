
const cityQ = `
INSERT INTO "city"(city_id, city_name) VALUES($1,$2) RETURNING* ;
    `
export default cityQ;