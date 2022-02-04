import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ShowLink from "./ShowLink";

const SelectLink = ({ data, names }) => {
  console.log(data);
  const [source, setSource] = React.useState("");
  const [destination, setDestination] = React.useState("");

  const handleChangeSource = (event) => {
    setSource(event.target.value);
  };

  const handleChangeDestination = (event) => {
    setDestination(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log(source, destination);
  };

  return (
    <div className="=">
      <Box sx={{ minWidth: 400 }}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={source}
            label="Age"
            onChange={handleChangeSource}
          >
            {data.map((item, idx) => (
              <MenuItem key={idx} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 400 }}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={destination}
            label="Age"
            onChange={handleChangeDestination}
          >
            {data.map((item, idx) => (
              <MenuItem key={idx} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <ShowLink
        source={source}
        destination={destination}
        names={names}
        data={data}
      />
    </div>
  );
};

export default SelectLink;
