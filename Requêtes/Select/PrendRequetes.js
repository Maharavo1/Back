
// SELECTS:
/**basic */
import basic2Q from "./basic/basic2.js";
import basic3Q  from "./basic/basic3.js";
import basic4Q from "./basic/basic4.js";
import basic6Q from "./basic/basic6.js";
import basic7Q from "./basic/basic7.js";
import basic8Q from "./basic/basic8.js";
import basic10Q from "./basic/basic10.js";
import basic18Q from "./basic/basic18.js";

/**hard */
import hard3Q from "./hard/hard3.js";
import hard8Q from "./hard/hard8.js";
import hard10Q from "./hard/hard10.js";
import hard11Q from "./hard/hard11.js";

/**medium */
import medium2Q from "./medium/medium2.js";
import medium3Q from "./medium/medium3.js";
import medium4Q from "./medium/medium4.js";
import medium6Q from "./medium/medium6.js";
import medium7Q from "./medium/medium7.js";
import medium8Q from "./medium/medium8.js";
import medium9Q from "./medium/medium9.js";
import medium12Q from "./medium/medium12.js";


// INSERTS:
import roleQ from "../Insert/1role.js";
import userQ from "../Insert/2-user.js";
import payment_methodQ from "../Insert/3-payment_method.js";
import cityQ from "../Insert/4-city.js";
import hotelQ from "../Insert/5-hotel.js";
import room_typeQ from "..Insert/6-room_type.js";
import roomQ from "../Insert/7-room.js";
import room_optionQ from "../Insert/8-room_option.js";
import have_room_optionQ from "../Insert/9-have_room_option.js";
import conference_roomQ from "../Insert/10-conference_room.js";
import reservationQ from "../Insert/11-reservation.js";
import ratingQ from "../Insert/12-rating.js";
import discountQ from "../Insert/13-discount.js";
import have_reduce_priceQ from "../Insert/14-have_reduce_price.js";
import have_reduce_price_conference_roomQ from "../Insert/15-have_reduce_price_conference_room.js";


let queries;

export default queries = {
  // SELECTS:
  /**basic */
basic10Q,
basic18Q,
basic2Q,
basic3Q,
basic4Q,
basic6Q,
basic7Q,
basic8Q,

/**hard */
hard10Q,
hard11Q,
hard3Q,
hard8Q,

/**medium */
medium12Q,
medium2Q,
medium3Q,
medium4Q,
medium6Q,
medium7Q,
medium8Q,
medium9Q,


  // INSERTS:
  roleQ,
ratingQ,
reservationQ,
userQ,
payment_methodQ,
cityQ,
hotelQ,
room_typeQ,
roomQ,
room_optionQ,
have_room_optionQ,
conference_roomQ,
reservationQ,
ratingQ,
discountQ,
have_reduce_priceQ,
have_reduce_price_conference_roomQ
};
