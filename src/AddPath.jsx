import React, { useState } from "react";
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
  const [show, setShow] = useState(false);

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
      setShow(false);
    } else {
      setShow(true);
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
  // console.log(demoarr);
  data = removeDuplicates(demoarr);
  // console.log(data);
  // console.log(names);

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
        <div className="flex flex-col items-center mb-4">
          <h1 className="font-bold text-yellow-900 text-3xl uppercase underline underline-offset-2 mb-10">
            Welcome to link up!
          </h1>
          <h1 className="font-semibold text-2xl capitalize mb-2.5">
            Add two names
          </h1>
          {show && (
            <h1 className="text-md font-semibold text-red-600 mb-2.5">
              *PLease enter both the names
            </h1>
          )}
          <div className="flex  items-center">
            <TextField
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              name="name1"
              type="text"
              value={name1}
              onChange={handleInputChange}
            />
            <h1 className="font-semibold text-2xl">∙∙∙∙∙∙∙∙∙</h1>
            <TextField
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              name="name2"
              type="text"
              value={name2}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <button
              className="bg-blue-500 hover:drop-shadow-lg hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              onClick={handleSubmit}
            >
              ADD CONNECTION
            </button>
          </div>
        </div>
      </Box>
      <SelectLink data={data} names={names} />
    </div>
  );
};
export default AddPath;
