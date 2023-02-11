import { Dispatch, SetStateAction } from "react";

export interface IState {
  dataList: IObject[];
  filteredList: IObject[];
  statusFilter: string;
  typeFilter: string;
  chosenTransaction: IObject | null;
}

export interface IObject {
  TransactionId: number;
  Status: string;
  Type: string;
  ClientName: string;
  Amount: string;
}

export type PaginationProps = {
  nPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export type IListItemProps = {
  item: IObject;
  index: number;
};

export type IListProps = {
  list: IObject[] | undefined;
};