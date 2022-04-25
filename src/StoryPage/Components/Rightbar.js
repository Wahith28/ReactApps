import {
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(12),
    position: "sticky",
    top: 0,
  },
  title: {
    fontsize: 16,
    fontWeight: 500,
    color: "#555",
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography gutterBottom className={classes.title}>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: "20px" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/7.jpg"
        />
      </AvatarGroup>
      <Typography gutterBottom className={classes.title}>
        Gallery
      </Typography>
      <ImageList
        sx={{ width: 500, height: 450 }}
        cols={3}
        rowHeight={164}
        style={{ marginBottom: "20px" }}
      >
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format" />
        </ImageListItem>
      </ImageList>
      <Typography gutterBottom className={classes.title}>
        Categories
      </Typography>
      <Typography>
        <a href="#" className={classes.link} variant="body2">
          #Sport
        </a>
      </Typography>
      <Typography>
        <a href="#" className={classes.link} variant="body2">
          #Food
        </a>
      </Typography>
      <Typography>
        <a href="#" className={classes.link} variant="body2">
          #Movies
        </a>
      </Typography>
      <Typography>
        <a href="#" className={classes.link} variant="body2">
          #Science
        </a>
      </Typography>
    </Container>
  );
};

export default Rightbar;
