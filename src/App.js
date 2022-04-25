import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Card,
  Grid,
  TextField,
  Checkbox,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import Login from "./Login";
import RouterApp from "./Router/Router";

function App() {
  const [state, setstate] = useState(0);
  const [checked, setchecked] = useState(false);

  function handlechange() {
    setstate(state + 1);
  }

  function handlecheck(e) {
    setchecked(e.target.checked);
  }
  console.log(state);
  return <RouterApp />;
}
//     style={{
//       backgroundImage:
//         "url(" +
//         "https://online-exam-app.netlify.app/static/media/Frame1680.f6267175.png" +
//         ")",
//       // backgroundPosition: 'top',
//       backgroundSize: "cover",
//       // backgroundRepeat: 'no-repeat'
//       width: "700px",
//     }}
//   >
//     <div className="App" style={{ marginLeft: "715px" }}>
//       <Card>
//         <Typography variant="h6">
//           <b>Registration Form</b>
//         </Typography>
//         <Typography variant="h6" style={{ marginBottom: "10px" }}>
//           <b>User SignUp</b>
//         </Typography>
//         {/* <h5 style={{fontSize:"20px", fontWeight:400}}>Registration Page</h5>
//     <h2 style={{fontSize:"20px", fontWeight:400}}>User SignUp</h2> */}
//         <Grid container direction="row" spacing={1}>
//           <Grid item xs={6}>
//             <TextField
//               variant="standard"
//               style={{
//                 backgroundColor: "white",
//                 marginLeft: "15px",
//                 marginTop: "10px",
//                 marginBottom: "5px",
//               }}
//               // label="First Name"
//               placeholder="First Name"
//               size="small"
//             ></TextField>
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               variant="standard"
//               style={{ backgroundColor: "white", marginTop: "10px" }}
//               // label="Last Name"
//               placeholder="Last Name"
//               size="small"
//             ></TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               variant="standard"
//               style={{
//                 backgroundColor: "white",
//                 marginTop: "10px",
//                 marginBottom: "15px",
//                 width: "440px",
//                 marginLeft: "33px",
//               }}
//               placeholder="Mail"
//               type="email"
//               size="small"
//             ></TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               // label="password"
//               variant="standard"
//               type="password"
//               style={{
//                 backgroundColor: "white",
//                 marginBottom: "15px",
//                 width: "440px",
//                 marginLeft: "33px",
//               }}
//               // label="Password"
//               placeholder="Password"
//               size="small"
//             ></TextField>
//           </Grid>
//         </Grid>

//         <Checkbox checked={checked} onChange={handlecheck} color="primary" />
//         <label>Agree terms and conditions</label>
//         <br></br>
//         <Button
//           disabled={!checked}
//           onClick={() => handlechange(state)}
//           variant="contained"
//           color="primary"
//           style={{ marginBottom: "5px" }}
//         >
//           Sign Up
//         </Button>
//       </Card>
//     </div>

export default App;
