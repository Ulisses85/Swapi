function peopleData (characters) {
  return characters.results.map(function (element) {
    return element.name;
  });
}

module.exports = {peopleData};
