import { Box, FormLabel } from "@mui/material";
import * as React from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";

export default function ControlledRadioButtonsGroup() {
  const { fetchByParams } = useProducts();

  return (
    <div>
      <FormLabel id="demo-controlled-radio-buttons-group">Categories</FormLabel>
      <div
        defaultValue="all"
        onChange={e => fetchByParams("type", e.target.value)}>
        <button value="all" label="All" />
        <button value="sport" label="Sport" />
        <button value="clothes" label="Clothes" />
        <button value="electronics" label="Electronics" />
      </div>
    </div>
  );
}
