import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Add from "./Add";
import content from "./content";
import Feed from "./Feed";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));


const Storypage = () => {
  const classes = useStyles();
  const [cont, setcont] = useState(content.posts);
  const [datajs,setData] = useState(content.posts);

  const handleChange = (e) =>{
    const arr = [...content.posts];
        arr[arr.length-1][e.target.name]=e.target.value
        setData(arr)
        console.log("wahith",arr)
  }
  const handleClick = () =>{
    // setopen(true)
    // content.inputs.push("")
    const arr = [...datajs];
        arr.push({ name: "", desc: "", img:"" });
        setData(arr);
        console.log("arr",arr)
    console.log("datajs",datajs)
  }
// console.log("datajs",datajs)
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={3} xs={2} md={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={5} xs={10} md={7}>
          <Feed />
        </Grid>
        <Grid item sm={4} md={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add  />
    </div>
  );
};

export default Storypage;
