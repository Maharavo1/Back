 const basic10Q = `
    SELECT
    h.hotel_name,
    h.hotel_address,
    c.city_name
FROM
    hotel h
JOIN
    city c ON h.city_id = c.city_id
WHERE
    c.city_name = 'Bual';
`;

export default basic10Q;