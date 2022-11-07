import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = () => {
  //   const address = 'Av. Perú 476';
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=Av.Perú476&key=AIzaSyDGcdm8k6nIjB52b7-LbiFKOunxuT8IkUY`;

  useEffect(async () => {
    const response = await axios(API);
    console.log(response);
    // setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
