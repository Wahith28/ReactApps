import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import logo from "./image8.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "linear-gradient(180deg, black 225px, #fff 0, #fff 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image1: {
    width: "300px",
    height: "100vh",
  },
  logo: {
    marginTop: "10px",
    height: "100px",
    width: "300px",
    marginBottom: "-5px",
    // padding: "20px 60px",
    maxWidth: "300px",
    maxHeight: "100px",
  },
  grid: {
    height: "100vh",
    width: "300px",
    // display: "flex",
    // justifyContent: "center",
  },
  imgGrid: {
    padding: "20px 60px",
  },
  img: {
    height: "150px",
    width: "300px",
    borderRadius: "10px",
  },
}));

const Practice = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.grid}>
        <Grid className={classes.imgGrid}>
          <img src={logo} className={classes.logo} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Practice;
