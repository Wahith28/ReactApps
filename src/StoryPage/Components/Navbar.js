import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Button,
  Divider,
  fade,
  InputBase,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import content from "./content";
import Feed from "./Feed";


//import { alpha } from "@mui/material/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "White",
    backgroundColor: theme.palette.success.dark,
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    height:"40px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    //borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
    // [theme.breakpoints.down("sm")]: {
    //   display: (props) => (props.click ? "none" : "flex"),
    // },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  icons: {
    display: "flex",
    alignItems: "center",

    display: (props) => (props.open ? "none" : "flex"),
  },
  searchButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    marginRight: "10px",
    marginTop: "5px",
  },
  cancel: {
    marginLeft: "15px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "250px",
    },
  },
}));

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [click, setclick] = useState(false);
  const [drop, setDrop] = useState("")
  // const handleClick = () => {
  //   setclick(true);
  //   setopen(false);
  // };
  const classes = useStyles({ open, click });
  const posts = [
    {
      name: "Lizards",
      desc:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      img: "https://mui.com/static/images/cards/contemplative-reptile.jpg"
    },
    {
      name: "Tigers",
      desc:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      img:
        "https://www.thoughtco.com/thmb/txShIhchOlOCPEVj8EMjk1OZkIU=/2250x1266/smart/filters:no_upscale()/150644795-56a0089b5f9b58eba4ae8f8d.jpg"
    }
  ]
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            WELCOME! Wahith
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            Hello
          </Typography>
          <div className={classes.search} style={{ borderRadius: "5px" }}>
            <Search style={{width:"40px"}} />
            {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" style={{color:"white"}} /> */}
            <Autocomplete
        freeSolo
        fullWidth
        size="small"
        id="free-solo-2-demo"
        disableClearable
        onSelect={(e) => {
          setDrop(e.target.value);
        }}
        options={content.posts?.map((option) => option.name)}
        renderInput={(params) => (
          <TextField 
          variant="outlined"
            {...params}
            label="Search input"
            style={{display:"flex",alignItems:"center",justifyContent:"center", borderColor:"white"}}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            
          />
        )}
      />
      {/* {content.posts
          .filter((item) => {
            if (drop === "") {
              return  <Feed data={item} /> ;
            } else if (item.name.toLowerCase().includes(drop.toLowerCase())) {
              return <Feed data={item} />;
            }
          })
          
          } */}
          {/* {console.log(item)} */}
          {/* <Feed data={posts} /> */}
            {/* <InputBase placeholder="Search.." className={classes.input} /> */}
            <Cancel className={classes.cancel} onClick={() => setopen(false)} />
          </div>
          <div className={classes.icons}>
            <Search
              className={classes.searchButton}
              onClick={() => setopen(true)}
            />
            <Badge
              badgeContent={4}
              color="secondary"
              style={{ marginRight: "10px", marginTop: "5px" }}
            >
              <Mail color="action" />
            </Badge>
            <Badge
              badgeContent={4}
              color="secondary"
              style={{ marginRight: "10px", marginTop: "5px" }}
            >
              <Notifications color="action" />
            </Badge>
            <Avatar
              alt="Remy Sharp"
              //style={{ marginRight: "10px" }}
              sizes={{ width: 56, height: 56 }}
              src="https://www.pepperhub.in/wp-content/uploads/2020/11/user-male.png"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
