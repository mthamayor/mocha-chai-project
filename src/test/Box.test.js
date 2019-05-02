// import { assert } from 'chai';
import Box from "../helpers";
import { assert } from "chai";

describe('Testing Box', () => {
  it('should assert obj is instance of Box', () => {
    var obj = new Box(1, 2, 3);

    assert.instanceOf(obj, Box);
  })
});