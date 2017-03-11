function longestOrbital (planets) {
  var largest = {};
  largest.orbital_period = 0;
  planets.results.forEach((element) => {
    var orbital = element.orbital_period;
    if (+orbital > largest.orbital_period) {
      largest = element;
    }
  });
  return largest;
}

module.exports = {longestOrbital}
