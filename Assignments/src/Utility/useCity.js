import { useEffect, useState } from "react";
import StateObj from "./city-state.json";

export const getCities = (state) => {
  const [citylist, setCitylist] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const city = StateObj[state];
      setCitylist(city);
    };
    fetchCities();
  }, [state]);

  return citylist;
};
