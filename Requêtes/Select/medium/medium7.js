
const medium7Q = `
SELECT u.username, COUNT(*) AS total_cancelled_reservations
FROM "user" u
JOIN reservation res ON u.user_id = res.user_id
WHERE res.is_canceled = true
GROUP BY u.user_id, u.username;
`;

export default medium7Q;