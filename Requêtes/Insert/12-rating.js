
const ratingQ = `
insert into "rating" (rating_id, rating_rate, rating_comment, hotel_id, user_id) VALUES($1,$2,$3,$4,$5) RETURNING* ;
    `
export default ratingQ;