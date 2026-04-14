// WAJIB ADA DI ATAS
const display = document.getElementById("display");

// Tambah angka / operator
function append(value) {
    display.value += value;
}

// Clear semua
function clearDisplay() {
    display.value = "";
}

// Hapus 1 karakter
function hapus() {
    display.value = display.value.slice(0, -1);
}

// Hitung
function hitung() {
    try {
        let result = eval(display.value);
        if (!isFinite(result)) throw Error();
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// Ambil angka aman
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

// PANGKAT
function pangkat() {
    let value = ambilAngka();
    if (value === null) return;

    display.value = (value * value).toFixed(4);
}

// KEYBOARD SUPPORT
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        display.value += key;
    } else if (key === "Enter") {
        hitung();
    } else if (key === "Backspace") {
        hapus();
    } else if (key === "Escape") {
        clearDisplay();
    }
});