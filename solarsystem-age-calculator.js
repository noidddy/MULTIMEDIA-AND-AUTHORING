/* ── AGE CALCULATOR ── */
var periods = { mercury: 0.24, venus: 0.62, earth: 1, mars: 1.88, jupiter: 11.86, saturn: 29.46, uranus: 84.01, neptune: 164.8, pluto: 248.6 };

function calculatePlanetAges() {
    var earthAgeInput = document.getElementById('earthAge');
    var age = parseFloat(earthAgeInput && earthAgeInput.value);
    var planet;
    var period;
    var a;
    var cellVal;
    var rowVal;

    if (isNaN(age) || age <= 0) { alert('Please enter a valid age.'); return; }

    for (planet in periods) {
        if (!Object.prototype.hasOwnProperty.call(periods, planet)) continue;
        period = periods[planet];
        a = (age / period).toFixed(2);
        cellVal = document.getElementById('ag-' + planet);
        if (cellVal) animateVal(cellVal, a);
        rowVal = document.getElementById('pr-' + planet);
        if (rowVal) rowVal.textContent = a + ' yrs';
    }
}

function animateVal(el, target) {
    var t = parseFloat(target);
    var c = 0;
    var step = t / 30;
    var tm = setInterval(function() {
        c += step;
        if (c >= t) { c = t;
            clearInterval(tm); }
        el.textContent = c.toFixed(2);
    }, 30);
}

var earthAgeInput = document.getElementById('earthAge');
if (earthAgeInput) {
    earthAgeInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') calculatePlanetAges(); });
}