import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ShowLink from "./ShowLink";

const SelectLink = ({ data, names }) => {
  // console.log(data);
  const [source, setSource] = React.useState("");
  const [destination, setDestination] = React.useState("");

  const handleChangeSource = (event) => {
    setSource(event.target.value);
  };

  const handleChangeDestination = (event) => {
    setDestination(event.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault(e);
  //   // console.log(source, destination);
  // };

  return (
    <div className="flex flex-col items-center gap-5 mt-12">
      <h1 className="font-semibold text-2xl capitalize">Let's find out</h1>
      <div className="flex gap-5 items-center">
        <h1 className="font-semibold text-xl">How is</h1>

        <FormControl variant="filled" sx={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={source}
            label="Name"
            onChange={handleChangeSource}
          >
            {data.map((item, idx) => (
              <MenuItem key={idx} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <h1 className="font-semibold text-xl">linked to</h1>

        <FormControl variant="filled" sx={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={destination}
            label="Name"
            onChange={handleChangeDestination}
          >
            {data.map((item, idx) => (
              <MenuItem key={idx} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <h1 className="font-semibold text-xl">?</h1>
      </div>

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
