let Del ;

/*role */
const deleteRole = ` 
        DELETE FROM "role" WHERE id = $1;
`;

/*user */
const deleteUser = ` 
        DELETE FROM "user" WHERE id = $1;
`;
/*PAYEMENT_METHOD*/
const deletePayment_method = ` 
        DELETE FROM "payment_method" WHERE id = $1;
`;

/*CITY*/
const deleteCity = ` 
        DELETE FROM "city" WHERE id = $1;
`;

/*HOTEL*/
const deleteHotel = ` 
        DELETE FROM "hotel" WHERE id = $1;
`;

/*ROOM-TYPE*/
const deleteRoom_type = ` 
        DELETE FROM "room_type" WHERE id = $1;
`;

/*ROOM*/
const deleteRoom = ` 
        DELETE FROM "room" WHERE id = $1;
`;

/*ROOM-OPTION*/
const deleteRoom_option = ` 
        DELETE FROM "room_option" WHERE id = $1;
`;

/*HAVE-ROOM-TYPE*/
const deleteHave_room_type = ` 
        DELETE FROM "have_room_option" WHERE id = $1;
`;

/*CONFERENCE-ROOM*/
const deleteConference_room = ` 
        DELETE FROM "coference_room" WHERE id = $1;
`;

/*RESERVATION*/
const deleteReservation = ` 
        DELETE FROM "reservation" WHERE id = $1;
`;

/*RATING*/
const deleteRating= ` 
        DELETE FROM "rating" WHERE id = $1;
`;

/*DISCOUNT*/
const deleteDiscount = ` 
        DELETE FROM "discount" WHERE id = $1;
`;


/*HAVE-REDUCE-PRICE-*/
const deleteHave_reduce_price= ` 
        DELETE FROM "have_reduce_price" WHERE id = $1;
`;
 
/*HAVE-REDUCE-PRICE-CONFERENCE-ROOM*/
const deleteHave_reduce_price_conference_room = ` 
        DELETE FROM "have_reduce_price_conference_room" WHERE id = $1;
`;


export default Del ={
         deleteCity,
        deleteConference_room,
        deleteDiscount,
        deleteHave_reduce_price,
        deleteHave_reduce_price_conference_room,
        deleteHave_room_type,
        deleteHotel,
        deletePayment_method,
        deleteRating,
        deleteReservation,
        deleteRole,
        deleteRoom,
        deleteRoom_option,
        deleteRoom_type,
        deleteUser
}








