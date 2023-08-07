
const roleQ = `
insert into "role" (role_id, role_name) VALUES($1,$2) RETURNING* ;
    `
export default roleQ;