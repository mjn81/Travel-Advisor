import { CircularProgress , Grid , Typography , InputLabel , MenuItem ,FormControl , Select } from "@material-ui/core";
import { useState ,useEffect , createRef} from "react";
import useStyles from "./styles";
import Card from "../Details/Card"

const List = ({places , childClick , isLoading , type , rate , setType , setRate}) => {
    const classes = useStyles();

    const [elRefs , setElRefs] = useState([]);
    
    useEffect(()=>{
        const refs = Array(places?.length).fill().map((_,index) => elRefs[index] || createRef());
        setElRefs(refs);
    }, [places]);

    return ( 
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants , Hotels , & attractions around you
            </Typography>            
            {
                isLoading ? (
                    <div>
                        <CircularProgress size="5rem" />
                    </div>
                ) : 
                (<><FormControl className={classes.formControl}>
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
                            <Grid ref={elRefs[cardIndex]} item key={cardIndex} xs={12}>
                                <Card 
                                    cardInfo={cardInfo}
                                    selected={cardIndex===Number(childClick)}
                                    refProps={elRefs[cardIndex]}
                                />
                            </Grid>
                        ))}
                </Grid>
                </>
                )
            }
        </div>
      );
}
 
export default List;