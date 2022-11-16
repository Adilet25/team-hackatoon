import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import { useProducts } from "../../context/ProductContextProvider";
import "../../styles/Filter.css";
import "../../styles/App.css";

export default function ControlledRadioButtonsGroup() {
  const { fetchByParams } = useProducts();

  return (
    <div>
      <FormControl className="filterBlocK">
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          defaultValue="all"
          onChange={e => fetchByParams("type", e.target.value)}>
          <FormControlLabel
            className="filterButtons"
            value="all"
            control={<Radio />}
            label="Products"
          />
          <FormControlLabel
            className="filterButtons"
            value="sport"
            control={<Radio />}
            label="Sport"
          />
          <FormControlLabel
            className="filterButtons"
            value="clothes"
            control={<Radio />}
            label="Clothes"
          />
          <FormControlLabel
            className="filterButtons"
            value="electronics"
            control={<Radio />}
            label="Electronics"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
