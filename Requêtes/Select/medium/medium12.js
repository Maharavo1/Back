
const medium12Q = `
SELECT discount_name, discount_start, discount_end
FROM discount
WHERE discount_start <= CURRENT_DATE AND discount_end >= CURRENT_DATE;
`;

export default medium12Q;