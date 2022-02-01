import { CssBaseline , Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlaceData } from "./api"
import { useEffect, useState } from 'react';
const App = () => {
    const [places , setPlaces] = useState([]);
    const [coords , setCoords] = useState({lat : 0 , lng: 0});
    const [bounds , setBounds] = useState({});
    const [type , setType] = useState('restaurants');
    const [rate , setRate] = useState('');
    const [childclick , setChildClick] = useState(null);
    const [isLoading , setIsLoading] = useState(false)
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude , longitude}})=>{
            setCoords({lat:latitude , lng:longitude});
        });
    } ,[]);
    useEffect(()=>{
        setIsLoading(true);
        getPlaceData(bounds.sw , bounds.ne)
        .then((data)=>{
            setPlaces(data);
            setIsLoading(false);
        });
    } , [coords , bounds]);
    return (  
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width : '100%'}}>
                <Grid item xs={12} md={4}>
                    <List places={places} childclick={childclick} isLoading={isLoading} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        coords={coords}
                        setCoords={setCoords}
                        setBounds={setBounds}
                        places={places}
                        setChildClick={setChildClick}
                    />
                </Grid>
            </Grid>
        </>
    );
}
 
export default App;