function sortCarByYearAscendingly(cars) {
  console.log(cars);

  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // Tulis code-mu disini
  // Lakukan sorting menggunakan bubble sort
  let swapped, temp;
  for (let i = 0; i < result.length - 1; i++) {
    swapped = false;

    for (let j = 0; j < result.length - i - 1; j++) {
      // Lakukan swap jika year elemen index j lebih besar dari year elemen index j+1
      if (result[j].year > result[j+1].year) {
        temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
        swapped = true;
      }
    }

    // Jika tidak ada swap pada iterasi, array sudah terurut
    if (!swapped) break;
  }

  return result;
}
