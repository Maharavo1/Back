const userQ = `
   INSERT INTO "user" (user_id, username, password, first_name, last_name, cin, society_name, number, email, secondary_number, gender, birthdate, role_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *; 
    `
export default userQ;