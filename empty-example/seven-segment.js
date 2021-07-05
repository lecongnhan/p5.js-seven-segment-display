const N_SEGMENTS = 7;

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
        
        this._initSegments();
        this._initEncodings();
    }
    show(digit){
        this._update(digit);
        for (let i = 0; i < this._segments.length; i++)
            this._segments[i].show();
    }
    _update(digit){
        let encoding = this._encodings[digit];

        // this is getting the nth bit of a number
        // reference: https://codeforwin.org/2016/01/c-program-to-get-value-of-nth-bit-of-number.html
        for (let i = 0; i < N_SEGMENTS; i++)
            this._segments[i].turn((encoding >> (N_SEGMENTS - i - 1)) & 1)
        this._dp.turn(false);
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
    _initSegments(){
        this._segments = [];

        this._a = this._createSegment(
            this._x + this._segmentShortSide + this._offset,
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
        this._dp = new DecimalPoint(
            this._x + this._segmentShortSide * 2 + this._segmentLongSide     + this._offset * 3,
            this._y + this._segmentShortSide * 3 + this._segmentLongSide * 2 + this._offset * 4 - this._decimalPointRadius  * 2,
            this._decimalPointRadius,
            this._onColor,
            this._offColor
        )
        
        this._segments.push(this._a);
        this._segments.push(this._b);
        this._segments.push(this._c);
        this._segments.push(this._d);
        this._segments.push(this._e);
        this._segments.push(this._f);
        this._segments.push(this._g);
        this._segments.push(this._dp);
    }
    _initEncodings(){
        this._encodings = {};

        // referenve: https://en.wikipedia.org/wiki/Seven-segment_display#Hexadecimal
        this._encodings['0'] = 0x7E;
        this._encodings['1'] = 0x30;
        this._encodings['2'] = 0x6D;
        this._encodings['3'] = 0x79;
        this._encodings['4'] = 0x33;
        this._encodings['5'] = 0x5B;
        this._encodings['6'] = 0x5F;
        this._encodings['7'] = 0x70;
        this._encodings['8'] = 0x7F;
        this._encodings['9'] = 0x7B;
        this._encodings['A'] = 0x77;
        this._encodings['b'] = 0x1F;
        this._encodings['C'] = 0x4E;
        this._encodings['d'] = 0x3D;
        this._encodings['E'] = 0x4F;
        this._encodings['F'] = 0x47;
    }
}