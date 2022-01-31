import { CircularProgress , Grid , Typography , InputLabel , MenuItem ,FormControl , Select } from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles";
import Card from "../Details/Card"

const List = ({places}) => {
    const classes = useStyles();
    const [type , setType] = useState('restaurants');
    const [rate , setRate] = useState('');
    console.log(places);
    return ( 
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants , Hotels , & attractions around you
            </Typography>            
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=>{setType(e.target.value)}}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rate} onChange={(e)=>{setRate(e.target.value)}}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3</MenuItem>
                    <MenuItem value={4}>Above 4</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((cardInfo , cardIndex)=>(
                        <Grid item key={cardIndex} xs={12}>
                            <Card cardInfo={cardInfo} />
                        </Grid>
                    ))}
            </Grid>
        </div>
      );
}
 
export default List;