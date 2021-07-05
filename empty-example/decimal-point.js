class DecimalPoint{
    constructor(x, y, radius, onColor, offColor){
        this._isOn = true;
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._onColor = onColor;
        this._offColor = offColor;
    }
    show(){
        ellipseMode(CORNER);
        if (this._isOn)
            fill(this._onColor);
        else
            fill(this._offColor);

        ellipse(this._x, this._y, this._radius * 2, this._radius * 2);
    }
    turn(isOn){
        this._isOn = isOn;
    }
}