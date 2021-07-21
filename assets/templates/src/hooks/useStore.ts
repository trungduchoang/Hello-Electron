// libs
import { useSelector } from "react-redux";
// types
import { TSelector, TUseStore } from "@/@types/redux";

const useTypedSelector: TSelector = useSelector;

/**
 * useStore - Type and Extract page-reducer by pageName
 */
export const useStore: TUseStore = (page) =>
  useTypedSelector((state) => state[page]);
