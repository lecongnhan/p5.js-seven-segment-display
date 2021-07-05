class DecimalPoint{
    constructor(x, y, radius){
        this._x = x;
        this._y = y;
        this._radius = radius;
    }
    show(){
        ellipseMode(CORNER);
        ellipse(this._x, this._y, this._radius, this._radius);
    }
}