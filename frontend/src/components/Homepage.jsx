// src/components/HomePage.js
import React, { useState } from "react";
import { Button, DatePicker, Input } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const { RangePicker } = DatePicker;

const HomePage = () => {
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (location && dates.length === 2) {
      // Format dates
      const checkInDate = dates[0].format("YYYY-MM-DD");
      const checkOutDate = dates[1].format("YYYY-MM-DD");

      // Navigate to the search results page with query parameters
      navigate(
        `/search?location=${location}&checkIn=${checkInDate}&checkOut=${checkOutDate}`
      );
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-10">
        Explore Hotel Sentiments
      </h1>
      <div className="flex space-x-2 justify-center">
        <div className="w-1/4">
          {" "}
          {/* Adjust this class as needed */}
          <Input
            placeholder="Enter location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            size="large"
          />
        </div>
        <div className="w-64">
          {" "}
          {/* You might adjust this for RangePicker as well */}
          <RangePicker
            onChange={(dates) => setDates(dates)}
            format="YYYY-MM-DD"
            size="large"
          />
        </div>
        <div>
          <Button type="primary" onClick={handleSearch} size="large">
            Search Hotels
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
