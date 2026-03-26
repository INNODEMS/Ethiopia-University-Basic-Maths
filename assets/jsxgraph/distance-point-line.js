
// JXG.Options.text.useMathJax = true;

// const board = JXG.JSXGraph.initBoard('jsxgraph-distance-point-line', {
//     boundingbox: [-8, 8, 8, -8],
//     axis: true,
//     showNavigation: false,
//     showCopyright: false,
//     keepaspectratio: true
// });

// const boardPanel = JXG.JSXGraph.initBoard('jsxgraph-calculation-panel', {
//     boundingbox: [0, 10, 10, 0], // A simple coordinate system just for placing the text box
//     axis: false,
//     showNavigation: false,
//     showCopyright: false,
//     pan: { enabled: false },
//     zoom: { enabled: false }
// });

// board.addChild(boardPanel);

// const ptA = board.create('point', [-6, -2], { name: 'A', size: 3, color: '#999' });
// const ptB = board.create('point', [4, 3],  { name: 'B', size: 3, color: '#999' });

// const lineL = board.create('line', [ptA, ptB], {
//     strokeColor: '#2196F3',
//     strokeWidth: 2,
//     name: 'l',
//     withLabel: true
// });

// const P = board.create('point', [-2, 5], {
//     name: 'P(x_0, y_0)',
//     size: 4,
//     color: '#F44336'
// });

// const perpLine = board.create('perpendicular', [lineL, P], { visible: false });

// const Q = board.create('intersection', [lineL, perpLine, 0], {
//     name: 'Q',
//     size: 3,
//     color: 'black'
// });

// board.create('segment', [P, Q], {
//     strokeColor: 'black',
//     dash: 2,
//     strokeWidth: 1.5
// });

// board.create('angle', [ptB, Q, P], {
//     type: 'square',
//     size: 15,
//     fillColor: 'red',
//     fillOpacity: 0.2
// });

// boardPanel.create('text', [0.2, 5.1, function () {
//     const c = lineL.stdform[0];
//     const a = lineL.stdform[1];
//     const b = lineL.stdform[2];

//     const x0 = P.X();
//     const y0 = P.Y();

//     const num = Math.abs(a * x0 + b * y0 + c);
//     const den = Math.sqrt(a * a + b * b);
//     const dist = num / den;

//     const signB = b >= 0 ? '+' : '-';
//     const signC = c >= 0 ? '+' : '-';
//     const absB = Math.abs(b).toFixed(2);
//     const absC = Math.abs(c).toFixed(2);

//     const eqLatex =
//         a.toFixed(2) + 'x ' +
//         (b === 0 ? '' : (signB + ' ' + absB + 'y ')) +
//         (c === 0 ? '' : (signC + ' ' + absC)) +
//         ' = 0';
//     return `
//   <div ...>
//     <b>Distance from a Point to a Line</b><br><br>
//     <b>Point</b> \\(P(x_0, y_0) = (${x0.toFixed(1)}, ${y0.toFixed(1)})\\)<br>
//     <b>Line</b> \\(l: ${eqLatex}\\)<br><br>
//     <b>Formula</b><br>
//     \\[
//        d(P,l) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}
//     \\]<br>
//     \\[
//        d(P,l) = \\frac{${num.toFixed(2)}}{${den.toFixed(2)}} \\approx ${dist.toFixed(2)}\\,\\text{units}
//     \\]
//   </div>
// `;

//     // return `
//     // <div style="background:rgba(255,255,255,0.9); padding:10px; border:2px solid #333; border-radius:5px; width: 500px; font-family: sans-serif; font-size: 13px;">
//     //     <b>Distance from a Point to a Line</b><br><br>
//     //     <b>Point</b> \\(P(x_0, y_0) = (${x0.toFixed(1)}, ${y0.toFixed(1)})\\)<br>
//     //     <b>Line</b> \\(l: ${eqLatex}\\)
//     //     <b>Formula</b>
//     //     \\[
//     //         d(P,l) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}
//     //     \\]
//     //     \\[
//     //         d(P,l) = \\frac{${num.toFixed(2)}}{${den.toFixed(2)}} \\approx ${dist.toFixed(2)}\\,\\text{units}
//     //     \\]
//     // </div>
//     // `;
// }], {
//     fixed: true,
//     display: 'html',
//     useMathJax: true
// });











JXG.Options.text.useMathJax = true;

const board = JXG.JSXGraph.initBoard('jsxgraph-distance-point-line', {
    boundingbox: [-8, 8, 8, -8],
    axis: true,
    showNavigation: false,
    showCopyright: false,
    keepaspectratio: true
});

const boardPanel = JXG.JSXGraph.initBoard('jsxgraph-calculation-panel', {
    boundingbox: [0, 10, 10, 0],
    axis: false,
    showNavigation: false,
    showCopyright: false,
    pan: { enabled: false },
    zoom: { enabled: false }
});

board.addChild(boardPanel);

const ptA = board.create('point', [-6, -2], { name: 'A', size: 3, color: '#999' });
const ptB = board.create('point', [4, 3],  { name: 'B', size: 3, color: '#999' });

const lineL = board.create('line', [ptA, ptB], {
    strokeColor: '#2196F3',
    strokeWidth: 2,
    name: 'l',
    withLabel: true
});

const P = board.create('point', [-2, 5], {
    name: 'P(x_0, y_0)',
    size: 4,
    color: '#F44336'
});

const perpLine = board.create('perpendicular', [lineL, P], { visible: false });

const Q = board.create('intersection', [lineL, perpLine, 0], {
    name: 'Q',
    size: 3,
    color: 'black'
});

board.create('segment', [P, Q], {
    strokeColor: 'black',
    dash: 2,
    strokeWidth: 1.5
});

board.create('angle', [ptB, Q, P], {
    type: 'square',
    size: 15,
    fillColor: 'red',
    fillOpacity: 0.2
});

// ── CHANGE: added 'const infoText =' to store reference for MathJax targeting ──
const infoText = boardPanel.create('text', [0.2, 5.1, function () {
    const c = lineL.stdform[0];
    const a = lineL.stdform[1];
    const b = lineL.stdform[2];

    const x0 = P.X();
    const y0 = P.Y();

    const num = Math.abs(a * x0 + b * y0 + c);
    const den = Math.sqrt(a * a + b * b);
    const dist = num / den;

    const signB = b >= 0 ? '+' : '-';
    const signC = c >= 0 ? '+' : '-';
    const absB = Math.abs(b).toFixed(2);
    const absC = Math.abs(c).toFixed(2);

    const eqLatex =
        a.toFixed(2) + 'x ' +
        (b === 0 ? '' : (signB + ' ' + absB + 'y ')) +
        (c === 0 ? '' : (signC + ' ' + absC)) +
        ' = 0';

    return `
  <div style="background:rgba(255,255,255,0.9); padding:10px; border:2px solid #333; border-radius:5px; width:500px; font-family:sans-serif; font-size:13px;">
    <b>Distance from a Point to a Line</b><br><br>
    <b>Point</b> \\(P(x_0, y_0) = (${x0.toFixed(1)}, ${y0.toFixed(1)})\\)<br>
    <b>Line</b> \\(l: ${eqLatex}\\)<br><br>
    <b>Formula</b><br>
    \\[
       d(P,l) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}
    \\]<br>
    \\[
       d(P,l) = \\frac{${num.toFixed(2)}}{${den.toFixed(2)}} \\approx ${dist.toFixed(2)}\\,\\text{units}
    \\]
  </div>
`;
}], {
    fixed: true,
    display: 'html',
    useMathJax: true
});

// ── FIX 1: poll until MathJax is ready then force typeset on first load ──
const poll = setInterval(() => {
    if (window.MathJax?.typesetPromise) {
        clearInterval(poll);
        MathJax.typesetPromise();
    }
}, 100);

// ── FIX 2: re-typeset the panel every time board redraws (e.g. dragging P, A, B) ──
board.on('update', () => {
    const el = infoText.rendNode; // DOM node JSXGraph created for the text
    if (el && window.MathJax?.typesetPromise) {
        MathJax.typesetClear([el]);   // clear cached state for this node
        MathJax.typesetPromise([el]); // re-render LaTeX with updated values
    }
});



















