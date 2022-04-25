import {
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  IconButton,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React, { useState } from "react";
import New from "../../new";
import content from "./content";
import postsdata from "./Data";
import Post from "./Post";
// import MuiAlert from "@mui/material-ui/Lab/Alert";

const useStyles = makeStyles((theme) => ({
  icon: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
      height: "80vh",
    },
  },
  from: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(2),
  },
}));

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

const Add = () => {
  const classes = useStyles();
  const [open, setopen] = useState(false);
  const [cont, setcont] = useState(postsdata.posts);
  // const posts = cont.posts()
  const handleClick = () =>{
    setopen(true)
    // content.inputs.push("")
    // const arr = [...cont];
    //     arr.push({ name: "", desc: "", img:"" });
    //     setcont(arr);
    // console.log(cont)
    // props.handleClic()
  }

  const handleChange = () =>{
    
    setopen(false)
  }
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
  console.log("This is Add", cont)
  return (
    <div>
      {/* <New i={cont} /> */}
      {/* <Post data={cont} /> */}
      <Tooltip title="Add" onClick={handleClick}>
        <IconButton color="primary" className={classes.icon}>
          <AddCircle fontSize="large" />
        </IconButton>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                name="title"
                label="Title"
                size="small"
                variant="outlined"
                style={{ width: "100%", marginTop: "10px" }}
                // onChange={(e)=>handleChange1(e)}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="Multiline-basic"
                name="desc"
                label="Description"
                multiline
                rows={4}
                placeholder="Tell your story.."
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
                // onChange={(e)=>handleChange1(e)}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="visibility" defaultValue="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel id="demo-radio-buttons-group-label">
                Who can comment?
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={handleChange}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setopen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar> */}
      
    </div>
  );
};

export default Add;
