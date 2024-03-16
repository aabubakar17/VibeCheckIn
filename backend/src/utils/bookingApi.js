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

const searchAccommodations = async (destID) => {
  const options = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/hotels/search",
    params: {
      order_by: "popularity",
      checkout_date: "2024-05-20",
      filter_by_currency: "GBP",
      locale: "en-gb",
      units: "metric",
      dest_id: `${destID}`,
      dest_type: "city",
      adults_number: "2",
      room_number: "1",
      checkin_date: "2024-05-19",
      include_adjacency: "true",
      page_number: "0",
      children_number: "2",
      categories_filter_ids: "class::2,class::4,free_cancellation::1",
      children_ages: "5,0",
    },
    headers: {
      "X-RapidAPI-Key": "34e131feb0mshdfb55a9bf93b824p139f6cjsn1f7db5ce6172",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
module.exports = { queryLocation };
