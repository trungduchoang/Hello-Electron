// types
import { TRootReducer, TPageReducer } from "@/configs/redux";

export type TSelector = {
  <TSelected>(
    selector: (state: TRootReducer) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected;
};

export type TUseStore = <TPage extends TPageReducer>(
  page: TPage
) => TRootReducer[TPage];
