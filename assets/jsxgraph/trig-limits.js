
// BOARD - Adjusted to focus on the first quadrant of a Unit Circle
const board = JXG.JSXGraph.initBoard('jsxgraph-trig-limits', {
    boundingbox: [-0.3, 1.3, 1.3, -0.3], // slightly larger than unit circle
    axis: true,
    grid: false,
    showNavigation: false,
    showCopyright: false,
    keepaspectratio: true
});

// FIXED POINTS FOR THE UNIT CIRCLE ARC
const O = board.create('point', [0, 0], { name: 'O', size: 3, fixed: true });
const pX = board.create('point', [1, 0], { visible: false });
const pY = board.create('point', [0, 1], { visible: false });

// FIRST QUADRANT ARC
const arc = board.create('arc', [O, pX, pY], {
    strokeWidth: 2,
    strokeColor: 'gray',
    dash: 2
});

// GLIDER POINT P (Represents the angle t)
// It is constrained to slide only along the arc
const P = board.create('glider', [0.707, 0.707, arc], { 
    name: 'P', 
    size: 4, 
    color: '#F44336' 
});

// POINT R (Projection of P onto the x-axis)
const R = board.create('point', [
    () => P.X(),
    0
], { name: '', size: 3, fixed: true, visible: false });


// TRIANGLE SEGMENTS
const height = board.create('segment', [R, P], {
    dash: 2,   // dotted
    strokeWidth: 2,
    strokeColor: '#2196F3' // Blue for sin(t)
});

const base = board.create('segment', [O, R], {
    strokeWidth: 3,
    strokeColor: '#4CAF50' // Green for cos(t)
});

const hypotenuse = board.create('segment', [O, P], {
    strokeWidth: 2,
    strokeColor: 'black'
});

// RIGHT ANGLE MARKER
board.create('angle', [P, R, O], {
    radius: 0.1,
    type: 'square'
});

// ANGLE t ARC (Now in Degrees)
board.create('angle', [pX, O, P], {
    radius: 0.25,
    name: function() {
        // Calculate angle in radians, then convert to degrees
        let angleRad = Math.atan2(P.Y(), P.X());
        let angleDeg = angleRad * (180 / Math.PI);
        return 't ≈ ' + angleDeg.toFixed(1) + '°';
    }
});

// COORDINATES OF P
board.create('text', [
    () => P.X() + 0.05,
    () => P.Y() + 0.05,
    () => `P(cos t, sin t) = (${P.X().toFixed(2)}, ${P.Y().toFixed(2)})`
]);

// BASE LABEL (cos t)
board.create('text', [
    () => R.X() / 2 - 0.1,
    -0.08,
    function () {
        return `cos(t) = ${P.X().toFixed(2)}`;
    }
], { fontSize: 14, strokeColor: '#4CAF50' });

// HEIGHT LABEL (sin t)
board.create('text', [
    () => R.X() + 0.03,
    () => P.Y() / 2,
    function () {
        return `sin(t) = ${P.Y().toFixed(2)}`;
    }
], { fontSize: 14, strokeColor: '#2196F3' });

// HYPOTENUSE LABEL (Radius = 1)
board.create('text', [
    () => P.X() / 2 - 0.1,
    () => P.Y() / 2 + 0.08,
    "r = 1"
], { fontSize: 14 });