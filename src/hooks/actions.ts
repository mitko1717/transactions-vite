import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { transactionsActions } from "../store/transactions/transactions.slice";

const actions = {
  ...transactionsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
