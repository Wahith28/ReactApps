import { Avatar, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ErrorIcon from "@material-ui/icons/Error";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    width: "400px",
    align: "center",
    display: "flex",
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Card className={classes.card}>
        <Grid>
          <Grid style={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              style={{
                backgroundColor: "red",
              }}
            >
              <ErrorIcon />
            </Avatar>
          </Grid>
          <Typography variant="h4" align="center">
            Error
          </Typography>
          <Typography variant="h6">Page Not Found</Typography>
        </Grid>
      </Card>
    </Grid>
  );
};

export default NotFound;
