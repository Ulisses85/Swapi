function personVehicle (person, vehicles) {
  var  obj = {};
   obj.name = person.name;
   obj.vehicles = [];
  vehicles.forEach(function (element)  {
     obj.vehicles.push({name: element.name, model: element.model});
  });
  return  obj;
}

module.exports = {personVehicle};
