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

const TypeOptions = ["Refill", "Withdrawal"];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectType() {
  const { setType } = useActions();

  const theme = useTheme();
  const [type, setTypeFilter] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof type>) => {
    const {
      target: { value },
    } = event;
    setTypeFilter(typeof value === "string" ? value.split(",") : value);
    setType(typeof value === "string" ? value.split(",")[0] : value);
  };

  const clearSelect = () => {
    setTypeFilter([]);
    setType("");
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-wedwd-name-label">Type</InputLabel>
        <Select
          labelId="demo-wwdw-name-label"
          id="demo-ewd-name"
          value={type}
          onChange={handleChange}
          input={<OutlinedInput label="Type" />}
          MenuProps={MenuProps}
          defaultValue={[""]}
        >
          {TypeOptions.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, type, theme)}
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
