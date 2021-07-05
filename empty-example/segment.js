class Segment{
    constructor(x, y, width, height, onColor, offColor){
        this._isOn = true;

        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._onColor = onColor;
        this._offColor = offColor;
    }
    show(){
        noStroke();
        if (this._isOn)
            fill(this._onColor);
        else
            fill(this._offColor);

        rect(this._x, this._y, this._width, this._height);
    }
    turn(isOn){
        this._isOn = isOn;
    }
}