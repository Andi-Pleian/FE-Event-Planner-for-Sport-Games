import { merge } from "lodash";

export const updateObject = (oldObject, updatedValues) =>
  merge({}, oldObject, updatedValues);

export const pushMessage = (state, message, type) => {
  const messages = state.messages;
  messages.push({ message, type });
  return state;
};
