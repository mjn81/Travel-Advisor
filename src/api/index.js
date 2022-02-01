import axios from "axios";

  
export const getPlaceData = async (type , sw , ne) =>{
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
    try{
        const { data: { data } } = await axios.get(URL , {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            restaurant_tagcategory_standalone: '10591',
            restaurant_tagcategory: '10591',
            limit: '30',
            currency: 'USD',
            open_now: 'false',
            lunit: 'km',
            lang: 'en_US'
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '071980314emshbd69b019bd04e0dp1e065ajsnae8a7f2e3ea6'
          }
        });
        return data;
    }catch(error){
       console.log(error) 
    }
}

export const getWeatherData = async (lat , lng)=>{
  try {
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find' , 
      {
        params: { lon: lng, lat: lat },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': '071980314emshbd69b019bd04e0dp1e065ajsnae8a7f2e3ea6'
        }
      });
      return data;
  }catch(error){
    console.log(error);
  }
 
}