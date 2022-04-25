import {
  Avatar,
  Card,
  Grid,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import React from "react";
import LockIcon from "@material-ui/icons/LockOutlined";
import { useState } from "react";

const Login = () => {
  const [age, setAge] = React.useState(0);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleChange = (event) => {
    //debugger;
    setAge(event.target.value);
    setusername(event.target.value);
    console.log(username);
    setpassword(event.target.value);
  };

  const handleClick = (e) => {
    setAge(0);
    setusername("");
    setpassword("");
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
        direction="row"
      >
        <Card
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
        >
          <Grid item>
            <Grid
              item
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                style={{
                  backgroundColor: "rgb(32 132 116)",
                }}
              >
                <LockIcon />
              </Avatar>
            </Grid>
            <Grid>
              <Typography
                variant="h6"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Sign IN
              </Typography>
              <TextField
                label="UserName"
                placeholder="Enter Username"
                fullWidth
                onChange={handleChange}
                // style={{ width: "320px", marginLeft: "30px" }}
              ></TextField>
              <TextField
                label="Password"
                placeholder="Enter Password"
                type="password"
                fullWidth
                onChange={handleChange}
                // style={{ width: "320px", marginLeft: "30px" }}
              ></TextField>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{
                  width: "100%",
                  //   marginLeft: "30px",
                  marginTop: "10px",
                  fontWeight: "500",
                }}
                value={age}
                onChange={handleChange}
                // style={{  }}
              >
                <MenuItem value={0}>Select</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormControlLabel
                style={{ width: "100%", color: "Black", marginTop: "3px" }}
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember Me"
              />
              <Button
                type="submit"
                variant="text"
                style={{
                  color: "black",
                  backgroundColor: "rgb(32 132 116)",
                  width: "300px",
                  marginLeft: "40px",
                  marginBottom: "15px",
                }}
                onClick={handleClick}
              >
                SIGNIN
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
