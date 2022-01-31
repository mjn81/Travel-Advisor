import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
  
export const getPlaceData = async (sw , ne) =>{
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
            'x-rapidapi-key': 'b7ba3cf408mshbc35f5d23d978b7p128f79jsn440bca7204b2'
          }
        });
        return data;
    }catch(error){
       console.log(error) 
    }
}