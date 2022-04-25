import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import data from "./content";


const useStyles = makeStyles((theme) => ({
  media: {
    height: 350,
    width: "1200px",
    objectFit:"cover",
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <div>
            {data.posts?.map((item) => {
        return (
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.img}
                title="My Post"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {item.name}
                </Typography>
                <Typography>{item.desc}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        );
      })}
        {/* <CardActionArea>
          
          <CardMedia
            className={classes.media}
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            title="My Post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Lizards
            </Typography>
            <Typography>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea> */}
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card> */}
    </div>
  );
};

export default Post;
