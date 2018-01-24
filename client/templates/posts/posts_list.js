var breweryData = [
  {
    brewery: {name: 'Ballast Point'},
    streetAddress: '1600 E. 3rd Ave',
    locality: 'San Mateo',
    region: 'CA',
    postalCode: '94401',
    phone: '1-406-600-3108'
  },
  {
    brewery: {name: 'Ballast Point'},
    streetAddress: '1600 E. 3rd Ave',
    locality: 'San Mateo',
    region: 'CA',
    postalCode: '94401',
    phone: '1-406-600-3108'
  },
  {
    brewery: {name: 'Ballast Point'},
    streetAddress: '1600 E. 3rd Ave',
    locality: 'San Mateo',
    region: 'CA',
    postalCode: '94401',
    phone: '1-406-600-3108'
  }
];

Template.breweryList.helpers({
    breweries: function() { return Session.get('breweryData'); }
});

// Template.breweryList.helpers({
//     breweries: breweryData
// });

// Template.otherTemplate.helpers({
//     randomNum: Session.get('randomNum')
// });