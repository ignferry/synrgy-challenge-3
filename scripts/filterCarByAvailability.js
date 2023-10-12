function filterCarByAvailability(cars) {
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available) result.push(cars[i]);
  }

  return result;
}
