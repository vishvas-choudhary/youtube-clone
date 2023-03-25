const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`, options);
  const data = await response.json();
  return data;
};
