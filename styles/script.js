// Fungsi untuk memperbesar input berdasarkan panjang teks
function autoResizeInput(input) {
  // Mengubah lebar input berdasarkan panjang teks yang dimasukkan
  input.style.width = input.value.length + 1 + "ch";
}
