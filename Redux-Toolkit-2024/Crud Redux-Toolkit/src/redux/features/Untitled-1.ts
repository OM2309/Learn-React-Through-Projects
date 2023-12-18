// REDUX SAGA TOOLS
import { call, put, takeEvery } from "redux-saga/effects";

// ENDPOINTS
import {
  AMOUNTSPENT,
  REDEEMHYBREWARD,
  RETURNINGCUSTOMER,
} from "@shared/constants/api.endpoints";

// TYPES
import { AnyAction } from "@reduxjs/toolkit";
import {
  addAmountSpentAction,
  hybridCheckInAction,
  redeemHybRewardAction,
} from "./hybrid.dashboard.actions";
import { BackendResponseType } from "@shared/constants/backend.types";
import { addService } from "@shared/rdx/services";

/**
 * @description request for add amount spent
 */
function* addAmountSpentRequest(action: AnyAction) {
  try {
    const result: BackendResponseType = yield call(
      addService,
      AMOUNTSPENT,
      action.payload
    );
    if (result.code == 0) {
      throw new Error(result.message);
    } else {
      yield put(addAmountSpentAction.success(result));
    }
  } catch (err: any) {
    yield put(
      addAmountSpentAction.failure(
        err.message ? err.message : "Failed to add amount spent"
      )
    );
  }
}

/**
 * @description request for redeem reward
 */

function* redeemHybRewardRequest(action: AnyAction) {
  try {
    const result: BackendResponseType = yield call(
      addService,
      REDEEMHYBREWARD,
      action.payload
    );
    if (result.code == 0) {
      throw new Error(result.message);
    } else {
      yield put(redeemHybRewardAction.success(result));
    }
  } catch (err: any) {
    yield put(
      redeemHybRewardAction.failure(
        err.message ? err.message : "Failed to redeem reward"
      )
    );
  }
}

/**
 * @description request for hybrid check in
 */

function* hybridCheckInRequest(action: AnyAction) {
  try {
    const result: BackendResponseType = yield call(
      addService,
      RETURNINGCUSTOMER,
      action.payload
    );
    yield put(hybridCheckInAction.success(result));
  } catch (err: any) {
    yield put(
      hybridCheckInAction.failure(
        err.message ? err.message : "Failed to check in"
      )
    );
  }
}

export function* hybridDashBoardSaga() {
  yield takeEvery(addAmountSpentAction.request, addAmountSpentRequest);
  yield takeEvery(hybridCheckInAction.request, hybridCheckInRequest);
  yield takeEvery(redeemHybRewardAction.request, redeemHybRewardRequest);
}
