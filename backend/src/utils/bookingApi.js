const axios = require("axios");
require("dotenv").config();

const queryLocation = async (location) => {
  const options = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
    params: {
      name: `${location}`,
      locale: "en-gb",
    },
    headers: {
      "x-rapidapi-host": process.env.BOOKING_API_HOST,
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const searchAccommodations = async (destID, checkinDate, checkoutDate) => {
  const options = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/hotels/search",
    params: {
      order_by: "popularity",
      checkout_date: checkoutDate,
      filter_by_currency: "GBP",
      locale: "en-gb",
      units: "metric",
      dest_id: `${destID}`,
      dest_type: "city",
      adults_number: "2",
      room_number: "1",
      checkin_date: checkinDate,
      include_adjacency: "true",
      page_number: "0",
    },
    headers: {
      "x-rapidapi-host": process.env.BOOKING_API_HOST,
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchAccommodationReviews = async (accommodationId) => {
  const options = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/hotels/reviews",
    params: {
      sort_type: "SORT_MOST_RELEVANT",
      locale: "en-gb",
      hotel_id: accommodationId,
      language_filter: "en-gb",
    },
    headers: {
      "x-rapidapi-host": process.env.BOOKING_API_HOST,
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  queryLocation,
  searchAccommodations,
  fetchAccommodationReviews,
};
