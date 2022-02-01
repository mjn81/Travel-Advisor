import {Box , Button , Typography , Card , CardActions , CardMedia , CardContent , Chip} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";
const DetailsCard = ({ cardInfo , selected , refProps }) => {
    const classes = useStyles();
    if(selected) refProps?.current?.scrollIntoView({behavior : "smooth" , block: "start"})
    return (
        <Card elevation={6}>
            <CardMedia
              style={{height:350}}
              image={cardInfo.photo ? cardInfo.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
              title={cardInfo.name}
              />
            <CardContent>
                <Typography gutterBottom variant="h5">{cardInfo.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating size="small" value={Number(cardInfo.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1">out of {cardInfo.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{cardInfo.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{cardInfo.ranking}</Typography>
                </Box>
                {cardInfo?.awards?.map((award , index)=>(
                    <Box key={index} my={1}  display="flex" justifyContent="space-between" alignItems="center">
                      <img src={award.images.small} alt={award.display_name} /> 
                      <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                  ))}
                  {cardInfo?.cuisine?.map(({name})=>(
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                  ))}
                  {cardInfo?.address && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                      <LocationOnIcon /> {cardInfo.address}
                    </Typography> 
                  )}
                  {cardInfo?.phone && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                      <PhoneIcon /> {cardInfo.phone}
                    </Typography> 
                  )}
                  <CardActions>
                      <Button size="small" color="primary" onClick={() => window.open(cardInfo.web_url , '_blank')}>
                        Trip Advisor
                      </Button>
                      <Button size="small" color="primary" onClick={() => window.open(cardInfo.website , '_blank')}>
                        Website
                      </Button>
                  </CardActions>
            </CardContent>
        </Card>
      );
}
 
export default DetailsCard;