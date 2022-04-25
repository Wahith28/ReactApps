import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import data from "../src/StoryPage/Components/content";

const New = ({ i }) => {
  const [counter, setCounter] = useState(1);
  const [arr, setarr] = useState([1]);
  const handleClick = () => {
    const arr1 = [...arr];
    arr1.push(1);
    setarr(arr1);
  };
  console.log(data);
  console.log(i);
  return (
    <div>
      {i.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
          </div>
        );
      })}
      {/* <Button onClick={() => setCounter(counter + 1)}>ADD</Button>
      {Array.from(Array(counter)).map((item) => {
        return (
          <div>
            <input />
          </div>
        );
      })}
      <Button onClick={handleClick}>Push</Button>
      {arr.map((item) => {
        return <input defaultValue="name" />;
      })}
      <select value="Choose City">
        <option>Chennai</option>
        <option>Delhi</option><option>Goa</option><option>HYD</option>
      </select> */}
    </div>
  );
};

export default New;
