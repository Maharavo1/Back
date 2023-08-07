
const medium2Q = `
SELECT user_id, COUNT(*) AS nombre_reservations FROM reservation GROUP BY user_id order by user_id asc;
`;

export default medium2Q;