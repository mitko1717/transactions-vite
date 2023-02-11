import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useActions } from "../hooks/actions";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const StatusOptions = ["Pending", "Completed", "Canceled"];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectStatus() {
  const { setStatus } = useActions();

  const theme = useTheme();
  const [status, setStatusFilter] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof status>) => {
    const {
      target: { value },
    } = event;
    setStatusFilter(typeof value === "string" ? value.split(",") : value);
    setStatus(typeof value === "string" ? value.split(",")[0] : value);
  };

  const clearSelect = () => {
    setStatusFilter([]);
    setStatus("");
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Status</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={status}
          onChange={handleChange}
          input={<OutlinedInput label="Status" />}
          MenuProps={MenuProps}
          defaultValue={[""]}
        >
          {StatusOptions.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, status, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <button onClick={clearSelect}>X</button>
    </div>
  );
}
