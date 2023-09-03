document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Add event listener to the button
    document.getElementById('getLocationBtn').addEventListener('click', getLocation);
}

function getLocation() {
    const locationDisplay = document.getElementById('locationDisplay');

    // Check if geolocation is available
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                locationDisplay.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
            },
            function(error) {
                locationDisplay.innerHTML = `Error: ${error.message}`;
            }
        );
    } else {
        locationDisplay.innerHTML = "Geolocation is not supported by this device.";
    }
}
