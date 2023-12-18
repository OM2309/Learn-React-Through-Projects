// REDUX SLICE CREATOR
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IReqState } from "@app/state/app.req.slice";
import {
  addAmountSpentAction, hybridCheckInAction,redeemHybRewardAction,
} from "./hybrid.dashboard.actions";
import {
  BackendResponseType,
} from "@shared/constants/backend.types";

// Type of hybrid dashboard state
export interface IHybridDashboardState {
  addAmountSpent?: BackendResponseType;
  hybridCheckIn?: BackendResponseType;
  redeemHybReward?: BackendResponseType;
}

// Initial state of hybrid dashboard
const initialState: IHybridDashboardState = {
  addAmountSpent: undefined,
  hybridCheckIn: undefined,
  redeemHybReward: undefined
};

// Reducers for hybrid dashboard request state
export const hybridDashboardReqStateReducers = {
  [addAmountSpentAction.request.type]: (state: IReqState) => {
    state.type = addAmountSpentAction.request.type;
    state.isLoading = true;
  },
  [addAmountSpentAction.success.type]: (state: IReqState) => {
    state.type = addAmountSpentAction.success.type;
    state.isLoading = false;
  },
  [addAmountSpentAction.failure.type]: (
    state: IReqState,
    action: PayloadAction<any>
  ) => {
    state.type = addAmountSpentAction.failure.type;
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
  },
  [addAmountSpentAction.fullfill.type]: (state: IReqState) => {
    state.type = addAmountSpentAction.fullfill.type;
    state.isLoading = false;
  },
  [hybridCheckInAction.request.type]: (state: IReqState) => {
    state.type = hybridCheckInAction.request.type;
    state.isLoading = true;
  },
  [hybridCheckInAction.success.type]: (state: IReqState) => {
    state.type = hybridCheckInAction.success.type;
    state.isLoading = false;
  },
  [hybridCheckInAction.failure.type]: (
    state: IReqState,
    action: PayloadAction<any>
  ) => {
    state.type = hybridCheckInAction.failure.type;
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
  },
  [hybridCheckInAction.fullfill.type]: (state: IReqState) => {
    state.type = hybridCheckInAction.fullfill.type;
    state.isLoading = false;
  },
  [redeemHybRewardAction.request.type]: (state: IReqState) => {
    state.type = redeemHybRewardAction.request.type;
    state.isLoading = true;
  },
  [redeemHybRewardAction.success.type]: (state: IReqState) => {
    state.type = redeemHybRewardAction.success.type;
    state.isLoading = false;
  },
  [redeemHybRewardAction.failure.type]: (
    state: IReqState,
    action: PayloadAction<any>
  ) => {
    state.type = redeemHybRewardAction.failure.type;
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
  },
  [redeemHybRewardAction.fullfill.type]: (state: IReqState) => {
    state.type = redeemHybRewardAction.fullfill.type;
    state.isLoading = false;
  }
};

// Reducers for hybrid dashboard
export const hybridDashboardSlice = createSlice({
  name: "hybridDashboard",
  initialState,
  reducers: {},
  extraReducers: {
    
    [addAmountSpentAction.success.type]: (
      state: IHybridDashboardState,
      action: PayloadAction<any>
    ) => {
      state.addAmountSpent = action.payload;
    },
    [addAmountSpentAction.fullfill.type]: (state: IHybridDashboardState) => {
      state.addAmountSpent = undefined;
    },
    [hybridCheckInAction.success.type]: (
      state: IHybridDashboardState,
      action: PayloadAction<any>
    ) => {
      state.hybridCheckIn = action.payload;
    },
    [hybridCheckInAction.fullfill.type]: (state: IHybridDashboardState) => {
      state.hybridCheckIn = undefined;
    },
    [redeemHybRewardAction.success.type]: (
      state: IHybridDashboardState,
      action: PayloadAction<any>
    ) => {
      state.redeemHybReward = action.payload;
    },
    [redeemHybRewardAction.fullfill.type]: (state: IHybridDashboardState) => {
      state.redeemHybReward = undefined;
    }
  },
});

export default hybridDashboardSlice.reducer;
