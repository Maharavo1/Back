
const basic2Q = `
SELECT u.username, h.hotel_name
FROM "user" u
JOIN hotel h ON u.user_id = h.hotel_id
JOIN role r ON u.role_id = r.role_id
WHERE r.role_name = 'receptionist'
`;

export default basic2Q;