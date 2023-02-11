import { FC, useState } from "react";
import { IListItemProps } from "../models/interfaces";
import Button from "@mui/material/Button";
import { useActions } from "../hooks/actions";
import ModalEdit from "./ModalEdit";

const ListItem: FC<IListItemProps> = ({ item, index }) => {
  const { setChosenTransaction, deleteTransaction } = useActions();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setChosenTransaction(item);
    setIsModalOpen(true);
  };

  return (
    <div
      className={`flex w-full ${
        index % 2 === 0 ? "bg-slate-400" : "bg-slate-300"
      }`}
    >
      <span className="p-1 text-center w-[10%]">{item.TransactionId}</span>
      <span className="p-1 text-center w-[15%]">{item.Status}</span>
      <span className="p-1 text-center w-[15%]">{item.Type}</span>
      <span className="p-1 text-center w-[20%]">{item.ClientName}</span>
      <span className="p-1 text-center w-[15%]">{item.Amount}</span>
      <span className="p-1 text-center w-[25%] flex gap-x-1 justify-center">
        <Button size="small" variant="contained" onClick={handleOpen}>
          edit
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => deleteTransaction(item)}
        >
          delete
        </Button>
      </span>

      {isModalOpen && (
        <ModalEdit isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default ListItem;
