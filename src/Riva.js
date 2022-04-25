import {
  Button,
  Card,
  Grid,
  Box,
  Typography,
  makeStyles,
  FormControl,
  Select,
  MenuItem,
  Link,
  InputLabel,
  Toolbar,
  IconButton,
  fade,
  InputBase,
  AppBar,
  Tabs,
  Tab,
  InputAdornment,
  TextField
} from "@material-ui/core";
import React from "react";

import PropTypes from "prop-types";
import { MenuIcon, SearchIcon } from "@material-ui/icons/Menu";
import SearchAppBar from "./SearchBar";
import { ArrowDropDown, Person, Search, TextFields } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  rivaPage:{
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
      borderColor: "black !important",
      border:"none",
      borderLeft:"2px solid"
    }
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

const Riva = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handle = () => {
    alert("hi")
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [age, setAge] = React.useState(0);

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };
  return (
            
    <div className={`${classes.root, classes.rivaPage}`} >
      <AppBar position="static">
        <Tabs
          variant="standard"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          style={{ backgroundColor: "black" }}
        >
          <LinkTab label="Women" href="/Login" {...a11yProps(0)} />
          <LinkTab label="Teens" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Kids" href="/spam" {...a11yProps(2)} />
          <FormControl
            variant="outlined"
            size="small"
            fullWidth
            style={{
              // backgroundColor: "white",
              marginLeft: "600px",
              //   marginTop: "10px",
              height: "8vh",
            }}
          >
            <InputLabel htmlFor="age-native-simple"></InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              color="inherit"
              style={{
                width: "100%",
                //   marginLeft: "30px",
                // marginTop: "10px",
                fontWeight: "500",
                height: "8vh",
                // backgroundColor: "black",
                color: "white",
              }}
              value={age}
              onChange={handleChange1}
              IconComponent={() => (
                <IconButton onClick={handle}>
    <ArrowDropDown style={{backgroundColor:"whitesmoke", color:"black"}} /></IconButton>
  )}
              // style={{  }}
            >
              <MenuItem value={0}>USD</MenuItem>
              <MenuItem value={10}>INR</MenuItem>
              <MenuItem value={20}>AED</MenuItem>
              <MenuItem value={30}>QAR</MenuItem>
            </Select>
          </FormControl>

          <Link
            component="button"
            variant="inherit"
            underline="none"
            color="inherit"
            style={{ marginLeft: "40px" }}
          >
            Arabic
          </Link>
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
        Page One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel> */}

      <Grid
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        <img
          style={{ width: "150px" }}
          src="https://www.rivafashion.com/skin/frontend/riva/default/images/@x2/logo@x2.png
"
        ></img>
        <div style={{padding: 30}}>
        <TextField 
        variant="outlined" 
        fullWidth 
        InputProps={{
          endAdornment:
          <IconButton>
            <Search />
          </IconButton>
        }}
        />
        </div>

        {/* <SearchAppBar /> */}
        <Grid
          container
          style={{
            // alignItems: "center",
            justifyContent: "center",
            display: "flex",
            height: "100%",
            marginTop: "100px",
          }}
        >
          <Grid style={{ marginLeft: "10px" }}>
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                height: "100vh",
                width: "390px",
                backgroundImage:
                  "url(" +
                  "https://www.rivafashion.com/media/wysiwyg/riva-new/home-page/1.jpg" +
                  ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Button
                style={{
                  marginTop: "450px",
                  backgroundColor: "rgba(255,255,255,0.7)",
                  fontWeight: "500",
                  fontSize: "15px",
                  fontFamily: "'Poppins', sans-serif",
                  width: "190px",
                }}
                variant="filled"
              >
                SHOP NOW
              </Button>
            </Card>
          </Grid>
          <Grid style={{ marginLeft: "20px" }}>
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                height: "100vh",
                width: "390px",
                backgroundImage:
                  "url(" +
                  "https://www.rivafashion.com/media/wysiwyg/riva-new/home-page/3.jpg" +
                  ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {" "}
              <Button
                style={{
                  marginTop: "450px",
                  backgroundColor: "rgba(255,255,255,0.7)",
                  fontWeight: "500",
                  fontSize: "15px",
                  fontFamily: "'Poppins', sans-serif",
                  width: "190px",
                }}
                variant="filled"
              >
                SHOP NOW
              </Button>
            </Card>
          </Grid>
          <Grid style={{ marginLeft: "20px" }}>
            <Card
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                height: "100vh",
                width: "390px",
                backgroundImage:
                  "url(" +
                  "	https://www.rivafashion.com/media/wysiwyg/riva-new/home-page/2.jpg" +
                  ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {" "}
              <Button
                style={{
                  marginTop: "450px",
                  backgroundColor: "rgba(255,255,255,0.7)",
                  fontWeight: "500",
                  fontSize: "15px",
                  fontFamily: "'Poppins', sans-serif",
                  width: "190px",
                }}
                variant="filled"
              >
                SHOP NOW
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Riva;
