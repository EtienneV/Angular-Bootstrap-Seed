app.factory('Trajet', function ($http) {
	return {
		getDuree: function (depart, arrivee) {
			return new Promise( function (resolve, reject) {
				$http({ // Calcul de la distance entre les stations
			      method: 'GET',
			      url: 'https://api.mapbox.com/v4/directions/mapbox.cycling/'+Velov.getPosition(depart).longitude+','+Velov.getPosition(depart).latitude+';'+Velov.getPosition(arrivee).longitude+','+Velov.getPosition(arrivee).latitude+'.json?alternatives=false&instructions=text&geometry=false&steps=false&access_token=pk.eyJ1IjoiZXRpZW5uZXYiLCJhIjoiY2lnaWYycGFiMDAwOHQzbHRwaTloa2szOCJ9.4NR1CkCihYs1-SVZU7zuEg'
			    }).then(function successCallback(response) {
			    	resolve(response.data.routes[0].duration);
			    }, function errorCallback(response) {
			    	reject(Error(response));
			    });
			});
		}
	};
});