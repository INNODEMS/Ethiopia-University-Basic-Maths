
//BOARD
const board = JXG.JSXGraph.initBoard('jsxgraph-distance', {
    boundingbox: [-2, 10, 10, -2],
    axis: true,
    grid:false,
    showNavigation: false,
    showCopyright: false
});

// POINTS
const P = board.create('point', [2, 3], { name: '', size: 4 ,label: {
    offset: [-440, -5] }});

const Q = board.create('point', [7, 7], { name: '', size: 4 });

const R = board.create('point', [
    () => Q.X(),
    () => P.Y()
], { name: '', size: 3, fixed: true });

// TRIANGLE 
const PR = board.create('segment', [P, R], {
    dash: 2,   // dotted
    strokeWidth: 2
});

const RQ = board.create('segment', [R, Q], {
    dash: 2,   // dotted
    strokeWidth: 2
});

const PQ = board.create('segment', [P, Q], {
    strokeWidth: 3
});

// Right angle marker
board.create('angle', [Q, R, P], {
    radius: 0.5,
    type: 'square'
});

// COORDINATES 
board.create('text', [
    () => P.X() - 0.8,
    () => P.Y() - 0.3,
    () => `P(${P.X().toFixed(2)}, ${P.Y().toFixed(2)})`
]);

board.create('text', [
    () => Q.X() + 0.2,
    () => Q.Y() + 0.1,
    () => `Q(${Q.X().toFixed(2)}, ${Q.Y().toFixed(2)})`
]);

board.create('text', [
    () => R.X() + 0.1,
    () => R.Y() - 0.3,
    () => `R(${R.X().toFixed(2)}, ${R.Y().toFixed(2)})`
]);

// BASE (MIDPOINT POSITIONED)
board.create('text', [
    () => (P.X() + R.X()) / 2 - 0.7,
    () => P.Y() - 0.4,
    function () {
        const dx = R.X() - P.X();
        return `|Rₓ - Pₓ| = |${dx.toFixed(2)}| = ${Math.abs(dx).toFixed(2)}`;
    }
]);

// HEIGHT (MIDPOINT POSITIONED) 
board.create('text', [
    () => R.X() + 0.3,
    () => (R.Y() + Q.Y()) / 2,
    function () {
        const dy = Q.Y() - P.Y();
        return `|Qᵧ - Pᵧ| = |${dy.toFixed(2)}| = ${Math.abs(dy).toFixed(2)}`;
    }
]);

// HYPOTENUSE LABEL
board.create('text', [
    () => (P.X() + Q.X()) / 2 - 0.9,
    () => (P.Y() + Q.Y()) / 2 + 0.4,
    function () {
        const dx = Q.X() - P.X();
        const dy = Q.Y() - P.Y();
        const dist = Math.sqrt(dx * dx + dy * dy);

        return `|PQ| = ${dist.toFixed(2)}`;
    }
]);