if (Meteor.isServer) {
   Meteor.methods({
    getCity: function (lat, lng) {
      var key = '4c4a40f3d2e3cd21a13759d693c393da';
      console.log('position', lat, lng);
      var radius = 10;
      var url = 'http://api.brewerydb.com/v2/search/geo/point/?key='+ key + '&radius=' + radius + '&lat=' + lat + '&lng=' + lng;
      return Meteor.http.call('GET', url);
    }
  });
}