if (Meteor.isClient) {
  
  var geoOptions = {
    timeout: 10 *1000
  };
    
  var geoSuccess = function (position){
    // console.log(position);
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    //no template for results  yet to display the breweryList
    
    Meteor.call('getCity', lat, lng, function (error, results) {
      // var breweryList = Session.get ('breweryList'); this goes to template helpers
      console.log(JSON.parse(results.content).data);
      Session.set('breweryData', JSON.parse(results.content).data);
    });
    // return Session.get('breweryList' + 'in a 5 mile radius of you.');
  };
    
  var geoError = function(error) {
    console.log('Error occurred. Error code: ' + error.code);
  };
    
    Template.beerButton.events = {
      'click button': function (event) {
        event.preventDefault();
        console.log('button has been clicked');
        $('button').attr('disabled', 'disabled');
        // $('button').text('Finding a watering hole near you...');
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
      }
    };
}