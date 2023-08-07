
const basic18Q = `
SELECT
    u.user_id,
    u.first_name,
    u.last_name,
    COUNT(*) AS total_negative_reviews
FROM
    "user" u
JOIN
    rating r ON u.user_id = r.user_id
WHERE
    r.rating_rate < 2 /*Considérons les avis négatifs comme ceux ayant une note inférieure à 2*/
GROUP BY
    u.user_id,
    u.first_name,
    u.last_name
ORDER BY
    total_negative_reviews DESC
LIMIT 1;
`;

export default basic18Q;