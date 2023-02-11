import { Box, Modal } from "@mui/material";
import { FC, useState } from "react";
import { ModalProps } from "../models/interfaces";
import Button from "@mui/material/Button/";
import { useAppSelector } from "../hooks/redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useActions } from "../hooks/actions";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalEdit: FC<ModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  const { chosenTransaction } = useAppSelector((state) => state.transactions);
  const { changeTransaction } = useActions();
  const [status, setStatus] = useState(chosenTransaction?.Status);

  const handleClose = () => {
    changeTransaction(status);
    setIsModalOpen(false);
  };

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const StatusOptions = ["Pending", "Completed", "Canceled"];
  return (
    <>
      <Modal
        hideBackdrop
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500, height: 300 }}>
          <span className="absolute top-2 right-2">
            <Button variant="contained" onClick={handleClose}>
              <span className="text-2xl font-bold text-gray-400">CLOSE</span>
            </Button>
          </span>
          <h2 className="font-bold text-2xl mt-16 text-center">
            edit transaction
          </h2>

          <div className="flex gap-2 mt-4">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleChangeStatus}
                defaultValue={""}
              >
                {StatusOptions.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="mt-4 flex justify-center">
            <Button variant="contained" type="submit" onClick={handleClose}>
              <span className="text-2xl font-bold text-gray-400">SAVE</span>
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModalEdit;
