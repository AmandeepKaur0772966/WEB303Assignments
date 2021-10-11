/*
    Assignment 4
    Name: Amandeep Kaur
	Student Id: 0772966
*/

$(document).ready(function () {
 
 // Function to get position
  const getPosition = () => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const positionText = `<p>Latitude: ${latitude} °, Longitude: ${longitude} °</p>`;
      $("#youarehere").prepend(positionText);

      localStorage.setItem("latitude", latitude);
      localStorage.setItem("longitude", longitude);
    };

    const error = () => {
      alert("Unable to retrieve your location");
    };

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  // Function to get position from local storage
  const localStoragePosition = () => {
    let latitude = localStorage.getItem("latitude");
    let longitude = localStorage.getItem("longitude");

    if (latitude && longitude) {
      const locationVal = `<p>Latitude: ${latitude} °, Longitude: ${longitude} °</p>`;
      $("#youarehere").append(locationVal);
      compareLocations();
    }
  };

  const compareLocations = () => {
    let localLatitude = localStorage.getItem("latitude");
    let localLongitude = localStorage.getItem("longitude");

    const success = (position) => {
        const currentLatitude = position.coords.latitude;
        const currentLongitude = position.coords.longitude;
  
        let distance = calcDistance(localLatitude, localLongitude, currentLatitude, currentLongitude)
        $("#youarehere").append(`<p>Distance moved: ${distance}</p>`);
      };
  
      const error = () => {
        alert("Unable to retrieve your location");
      };
  
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
      } else {
        navigator.geolocation.getCurrentPosition(success, error);
      }
  }

  // Function to check if LocalStorage is available
  const checkLocalStorage = () => {
    if (typeof localStorage !== "undefined") {
      try {
        localStorage.setItem("feature_test", "yes");
        if (localStorage.getItem("feature_test") === "yes") {
          localStorage.removeItem("feature_test");
          // localStorage is enabled
        } else {
          // localStorage is disabled
          alert("localStorage is disabled");
        }
      } catch (e) {
        // localStorage is disabled
        alert("localStorage is disabled");
      }
    } else {
      // localStorage is not available
    }
  };

  // function to calculate the distance in metres between two lat/long pairs on Earth
  // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
  // Aren't those cool variable names? Yah gotta love JavaScript
  function calcDistance(lat1, lon1, lat2, lon2) {
    var toRadians = function (num) {
      return (num * Math.PI) / 180;
    };
    var R = 6371000; // radius of Earth in metres
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δφ = toRadians(lat2 - lat1);
    var Δλ = toRadians(lon2 - lon1);

    var a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  const updatePosition = () => {
    $("#youarehere").empty()
    getPosition();
    localStoragePosition();
  };

  checkLocalStorage();
  updatePosition();
});
