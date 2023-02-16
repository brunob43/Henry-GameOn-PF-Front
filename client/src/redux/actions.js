export const GET_DETAIL_FROM_STATE = "GET_DETAIL_FROM_STATE";

export function getDetailFromState(payload) {
    return {
      type: GET_DETAIL_FROM_STATE,
      payload,
    };
  };