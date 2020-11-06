import { SIGN_UP } from "../type";

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return action.payload;
    default:
      return state;
  }
}
