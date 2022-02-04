import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SelectLink from "./SelectLink";

const AddPath = () => {
  const [state, setState] = useState({
    name1: "",
    name2: "",
  });
  const [names, setNames] = useState([]);

  const { name1, name2 } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    const date = { name1, name2 };
    if (name1 && name2) {
      setNames((name) => [...name, date]);
      setState({ name1: "", name2: "" });
    }
  };

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  let data = [""],
    occur = "",
    demoarr = [];

  names.map((name) => (occur = occur + " " + name.name1 + " " + name.name2));
  demoarr = [occur.trim().split(" ")].shift();
  console.log(demoarr);
  data = removeDuplicates(demoarr);
  console.log(data);
  console.log(names);

  return (
    <div className="">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1.5 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="">
          <TextField
            id="outlined-textarea"
            label="Name"
            placeholder="Name"
            name="name1"
            type="text"
            value={name1}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-textarea"
            label="Name"
            placeholder="Name"
            name="name2"
            type="text"
            value={name2}
            onChange={handleInputChange}
          />

          <button className="" onClick={handleSubmit}>
            ADD CONNECTION
          </button>
        </div>
      </Box>
      <SelectLink data={data} names={names} />
    </div>
  );
};
export default AddPath;
