class Box {
  constructor(length, width, height) {
    this._length = length;
    this._width = width;
    this._height = height;
  }

  getVolume(){
    return this._length * this._width * this._height;
  }
};

export default Box;