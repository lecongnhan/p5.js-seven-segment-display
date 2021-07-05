class SevenSegment{
    constructor(x, y, segmentShortSide, segmentLongSide, decimalPointRadius, offset, onColor, offColor){
        this._x = x;
        this._y = y;
        this._segmentShortSide = segmentShortSide;
        this._segmentLongSide = segmentLongSide;
        this._decimalPointRadius = decimalPointRadius;
        this._offset = offset;
        this._onColor = onColor;
        this._offColor = offColor;

        this._segments = [];

        this._a = this._createSegment(
            this._x + this._segmentShortSide + offset,
            this._y,
            true
        );
        this._b = this._createSegment(
            this._x + this._segmentShortSide     + this._segmentLongSide     + this._offset * 2,
            this._y + this._segmentShortSide                                 + this._offset,
            false
        );
        this._c = this._createSegment(
            this._x + this._segmentShortSide     + this._segmentLongSide     + this._offset * 2,
            this._y + this._segmentShortSide * 2 + this._segmentLongSide     + this._offset * 3,
            false
        );
        this._d = this._createSegment(
            this._x + this._segmentShortSide                                 + this._offset,
            this._y + this._segmentShortSide * 2 + this._segmentLongSide * 2 + this._offset * 4,
            true
        );
        this._e = this._createSegment(
            this._x,
            this._y + this._segmentShortSide * 2 + this._segmentLongSide     + this._offset * 3,
            false
        );
        this._f = this._createSegment(
            this._x,
            this._y + this._segmentShortSide                                 + this._offset,
            false
        );
        this._g = this._createSegment(
            this._x + this._segmentShortSide                                 + this._offset,
            this._y + this._segmentShortSide     + this._segmentLongSide     + this._offset * 2,
            true
        );
        
        this._segments.push(this._a);
        this._segments.push(this._b);
        this._segments.push(this._c);
        this._segments.push(this._d);
        this._segments.push(this._e);
        this._segments.push(this._f);
        this._segments.push(this._g);
    }
    show(){
        for (let i = 0; i < this._segments.length; i++)
            this._segments[i].show();
    }
    _createSegment(x, y, isHorizontal){
        return new Segment(
            x,
            y,
            this._segmentLongSide * isHorizontal + this._segmentShortSide * !isHorizontal, 
            this._segmentLongSide * !isHorizontal + this._segmentShortSide * isHorizontal, 
            this._onColor,
            this._offColor
        );
    }
}