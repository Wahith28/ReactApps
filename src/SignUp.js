import {
  Grid,
  Card,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
  MenuItem,
} from "@material-ui/core";
import React from "react";

const SignUp = () => {
  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid
      container
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        // marginLeft: "250px",
        backgroundImage:
          "url(" +
          "https://images.pexels.com/photos/990121/pexels-photo-990121.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" +
          ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {/* <Card
          elevation={10}
          style={{
            Height: "90vh",
            width: "400px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            //   marginTop: "60px",
            backgroundColor: "rgb(231 236 240 / 49%)",
            padding: 30,
          }}
        > */}
        <Grid
          container
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            width: "100%",
          }}
        >
          <Grid item xs={6} md={3}>
            <Typography
              variant="h5"
              align="center"
              style={{ marginBottom: "10px" }}
            >
              <b>Create Account</b>
            </Typography>
            <TextField
              // label="* First Name"
              placeholder="* First Name"
              fullWidth
              variant="outlined"
              size="small"
              style={{
                backgroundColor: "rgb(231 236 240 / 49%)",
                height: "10%",
                marginBottom: "10px",
              }}
            >
              Name
            </TextField>
            <TextField
              placeholder="* Last Name"
              fullWidth
              size="small"
              variant="outlined"
              style={{
                backgroundColor: "rgb(231 236 240 / 49%)",
                marginBottom: "10px",
              }}
            ></TextField>
            <TextField
              placeholder="* Email"
              fullWidth
              size="small"
              variant="outlined"
              style={{
                backgroundColor: "rgb(231 236 240 / 49%)",
                marginBottom: "10px",
              }}
            ></TextField>
            <TextField
              placeholder="* Phone"
              fullWidth
              size="small"
              variant="outlined"
              style={{
                backgroundColor: "rgb(231 236 240 / 49%)",
                marginBottom: "10px",
              }}
            ></TextField>
            <TextField
              placeholder="* Country"
              fullWidth
              size="small"
              variant="outlined"
              style={{
                backgroundColor: "rgb(231 236 240 / 49%)",
                marginBottom: "10px",
              }}
            ></TextField>
            <FormControl
              variant="outlined"
              size="small"
              fullWidth
              style={{ backgroundColor: "rgb(231 236 240 / 49%)" }}
            >
              {/* <InputLabel htmlFor="age-native-simple">Age</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{
                  width: "100%",
                  //   marginLeft: "30px",
                  // marginTop: "10px",
                  fontWeight: "500",
                }}
                value={age}
                onChange={handleChange}
                // style={{  }}
              >
                {/* <MenuItem value={0}>Age</MenuItem> */}
                <MenuItem
                  value={0}
                  disabled
                  style={{
                    font: "inherit",
                    color: "currentcolor",
                    fontWeight: "200",
                  }}
                >
                  * Age
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              align="center"
              style={{ marginTop: "10px" }}
            >
              SIGN UP
            </Button>
          </Grid>
        </Grid>
        {/* </Card> */}
      </Grid>
    </Grid>
  );
};

export default SignUp;
