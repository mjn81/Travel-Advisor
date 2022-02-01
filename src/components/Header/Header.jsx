import { useState } from "react";
import { AppBar , Toolbar , Typography , InputBase , Box } from "@material-ui/core";
import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from './styles';
const Header = ({setCoords}) => {
    const classes = useStyles();
    const [autocomplete , setAutocomplete] = useState(null);
    const onLoad = (autoC) => setAutocomplete(autoC);
    const onChangePlace = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoords({ lat , lng});
    }
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    TravelAdvisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                <Autocomplete
                onLoad={onLoad}
                onPlaceChanged={onChangePlace}
                >
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='search...'  classes={{ root: classes.inputRoot, input: classes.inputInput }} classes={{ root:classes.inputRoot , input: classes.inputInput}} />
                        </div>
                </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
 
export default Header;

