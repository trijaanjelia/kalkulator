const display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function hitung() {
    try {
        let result = eval(display.value);
        if (!isFinite(result)) throw Error();
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// 🔥 TRIGONOMETRI (DERAJAT)
function toRadians(deg) {
    return deg * (Math.PI / 180);
}

function sin() {
    let value = parseFloat(display.value);
    display.value = Math.sin(toRadians(value)).toFixed(4);
}

function cos() {
    let value = parseFloat(display.value);
    display.value = Math.cos(toRadians(value)).toFixed(4);
}

function tan() {
    let value = parseFloat(display.value);
    display.value = Math.tan(toRadians(value)).toFixed(4);
}
function hapus() {
    display.value = display.value.slice(0, -1);
}
function akar() {
    display.value = Math.sqrt(parseFloat(display.value));
}

function pangkat() {
    let value = parseFloat(display.value);
    display.value = value * value;
}