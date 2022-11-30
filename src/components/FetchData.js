import axios from "axios"
// dotenv.config();


const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3d4d648245mshc0863e3b0caaf09p108d0ejsn122b9d5612ea',
      'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
    }
  };

export  const FetchData = async (url)=>{
    const data = await axios.get(url, options)
    return data


  }

  