let selects;

/*ROLE */
const getRoleId = `
    SELECT * FROM "role";
    where id = $1;
`;
const getAllRole = `
    SELECT * FROM "role";
`;

/**USER */
const getUserId = `
    SELECT * FROM "user";
    where id = $1;
`;
const getAllUser = `
    SELECT * FROM "user";
`;

/**PAYMENT-METHOD*/
const getPayment_methodId = `
    SELECT * FROM "payment_method";
    where id = $1;
`;
const getAllPayement_method = `
    SELECT * FROM "payment_method";
`;

/**CITY */
const getCityId = `
    SELECT * FROM "city";
    where id = $1;
`;
const getAllCity = `
    SELECT * FROM "city";
`;

/*HOTEL */
const getHotelId = `
    SELECT * FROM "hotel";
    where id = $1;
`;
const getAllHotel = `
    SELECT * FROM "hotel";
`;


/*ROOM-TYPE */
const getRoom_typeId = `
    SELECT * FROM "room_type";
    where id = $1;
`;
const getAllRoom_type = `
    SELECT * FROM "room_type";
`;

/*ROOM */
const getRoomId = `
    SELECT * FROM "room";
    where id = $1;
`;
const getAllRoom = `
    SELECT * FROM "room";
`;

/*ROOM-OPTION */
const getRoom_optionId = `
    SELECT * FROM "room_option";
    where id = $1;
`;
const getAllRoom_option = `
    SELECT * FROM "room_option";
`;

/*HAVE_ROOM_OPTION */
const getHave_room_optionId = `
    SELECT * FROM "have_room_option";
    where id = $1;
`;
const getAllHave_room_option = `
    SELECT * FROM "have_room_option";
`;

/**CONFERENCE ROOM */
const getConference_roomId = `
    SELECT * FROM "conference_room";
    where id = $1;
`;
const getAllConference_room = `
    SELECT * FROM "conference_room";
`;


/**RESERVATION */
const getReservationId = `
    SELECT * FROM "reservation";
    where id = $1;
`;
const getAllReservation = `
    SELECT * FROM "reservation";
`;


/*RATING */
const getRatingId = `
    SELECT * FROM "rating";
    where id = $1;
`;
const getAllRating = `
    SELECT * FROM "rating";
`;


/**DISCOUNT */
const getDiscountId = `
    SELECT * FROM "discount";
    where id = $1;
`;
const getAllDiscount = `
    SELECT * FROM "discount";
`;


/**HAVE-REDUCE-PRICE */
const getHave_reduce_priceId = `
    SELECT * FROM "have_reduce_price";
    where id = $1;
`;
const getAllHave_reduce_price = `
    SELECT * FROM "have_reduce_price";
`;


/**HAVE-REDUCE-PRICE-CONFERENCE-ROOM*/
const getHave_reduce_price_conference_roomId = `
    SELECT * FROM "have_reduce_price_conference_room";
    where id = $1;
`;
const getAllHave_reduce_price_conference_room= `
    SELECT * FROM "have_reduce_price_conference_room";
`;

export default selects ={
    /**GET */
    getRoleId,
    getUserId ,
    getPayment_methodId,
    getCityId ,
    getHotelId ,
    getRoom_typeId ,
    getRoomId,
    getRoom_optionId ,
    getHave_room_optionId ,
    getConference_roomId ,
    getReservationId,
    getRatingId ,
    getDiscountId ,
    getHave_reduce_priceId ,
    getHave_reduce_price_conference_roomId ,


    /**GETALL */
    getAllCity,
    getAllConference_room,
    getAllDiscount,
    getAllHave_reduce_price,
    getAllHave_reduce_price_conference_room,
    getAllHave_room_option,
    getAllHotel,
    getAllPayement_method,
    getAllRating,
    getAllReservation,
    getAllRole,
    getAllRoom,
    getAllRoom_option,
    getAllRoom_type,
    getAllUser
}