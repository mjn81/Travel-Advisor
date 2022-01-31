import GoogleMapReact from "google-map-react";
import { Paper , Typography , useMediaQuery } from '@material-ui/core';
import  LocationOnOutlinedIcon  from "@material-ui/icons/LocationCityOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles"
const Map = ({ setCoords , coords , setBounds }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    return ( 
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{key : 'AIzaSyBh-p65MnQYbPYno3HNXkclsFE5PQhAPGY'}}
            defaultCenter={coords}
            center={coords}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={(e)=>{
                setCoords({ lat : e.center.lat , lng:e.center.lng});
                setBounds({ne:e.marginBounds.ne , sw:e.marginBounds.sw});
            }}
            onChildClick={''}
            >

            </GoogleMapReact>
        </div>
     );
}
 
export default Map;