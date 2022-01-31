import { CssBaseline , Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlaceData } from "./api"
import { useEffect, useState } from 'react';
const App = () => {
    const [places , setPlaces] = useState([]);
    const [coords , setCoords] = useState({lat : 0 , lng: 0});
    const [bounds , setBounds] = useState(null);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude , longitude}})=>{
            setCoords({lat:latitude , lng:longitude});
        });
    } ,[]);
    useEffect(()=>{
        getPlaceData(bounds?.sw , bounds?.ne)
        .then((data)=>{
            setPlaces(data);
        });
    } , [coords , bounds]);
    return (  
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width : '100%'}}>
                <Grid item xs={12} md={4}>
                    <List places={places} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        coords={coords}
                        setCoords={setCoords}
                        setBounds={setBounds}
                    />
                </Grid>
            </Grid>
        </>
    );
}
 
export default App;