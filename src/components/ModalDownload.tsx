import { Box, Modal } from "@mui/material";
import { FC } from "react";
import { ModalProps } from "../models/interfaces";
import Button from "@mui/material/Button/";
import { CSVLink } from "react-csv";
import { useAppSelector } from "../hooks/redux";

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

const ModalForm: FC<ModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  const { dataList } = useAppSelector((state) => state.transactions);

  const handleClose = () => {
    setIsModalOpen(false);
  };

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
          <h2 className="font-bold text-2xl mt-16">
            {" "}
            do you want to download csv-file?
          </h2>

          <div className="mt-4 mx-auto flex justify-center">
            <CSVLink data={dataList}>
              <Button variant="contained">
                <span className="text-2xl font-bold text-gray-100">
                  download
                </span>
              </Button>
            </CSVLink>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModalForm;
