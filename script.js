function ambilAngka() {
    let value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = "Isi angka dulu";
        return null;
    }
    return value;
}

// SIN
function sin() {
    let value = ambilAngka();
    if (value === null) return;

    display.value = Math.sin(value * Math.PI / 180).toFixed(4);
}

// COS
function cos() {
    let value = ambilAngka();
    if (value === null) return;

    display.value = Math.cos(value * Math.PI / 180).toFixed(4);
}

// TAN
function tan() {
    let value = ambilAngka();
    if (value === null) return;

    display.value = Math.tan(value * Math.PI / 180).toFixed(4);
}

// AKAR
function akar() {
    let value = ambilAngka();
    if (value === null) return;

    if (value < 0) {
        display.value = "Error";
        return;
    }

    display.value = Math.sqrt(value).toFixed(4);
}