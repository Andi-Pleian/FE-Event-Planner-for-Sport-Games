import { updateObject, pushMessage } from "./utils";

describe("updateObject()", () => {
  let obj1 = { test: { key1: "value1" } };
  let obj2 = { test2: "test2", test: { key2: "value2" } };
  beforeEach(() => {
    obj1 = { test: { key1: "value1" } };
    obj2 = { test2: "test2", test: { key2: "value2" } };
  });
  it("should merge 2 objects together", () => {
    const merge = updateObject(obj1, obj2);
    expect(merge.test.key2).toEqual("value2");
  });
  it("should overwrite the first object's values if overlaping", () => {
    obj2.test.key1 = "new value";
    expect(obj1.test.key1).toEqual("value1");
    const merge = updateObject(obj1, obj2);
    expect(merge.test.key1).toEqual("new value");
  });
});

describe("pushMessage()", () => {
  let state = { messages: [] };
  beforeEach(() => {
    state.messages = [];
  });
  it("should push a new message to state.messages", () => {
    pushMessage(state, "just a test", "error");
    expect(state.messages[0]).toEqual({
      message: "just a test",
      type: "error",
    });
  });
});
