import React from 'react';
import axios from 'axios';

const Api = async () => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://fashion4.p.rapidapi.com/v1/version',
      headers: {
        'X-RapidAPI-Key': '70144e800emshb3bb7dcbdb9e81cp132078jsne7f46091142f',
        'X-RapidAPI-Host': 'fashion4.p.rapidapi.com'
      },
      params: 10
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

export default Api;
