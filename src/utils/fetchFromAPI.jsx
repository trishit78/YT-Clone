import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '06f7ea99c0mshc96464b28708660p1df2b3jsndb14557ed3bb',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async(url) =>{
    const {data}=
    await axios.get(`${BASE_URL}/${url}`,options)

    return data;

}



// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }