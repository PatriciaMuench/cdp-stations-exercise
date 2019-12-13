"use strict";

/**
 * This purpose of this function is essentially to mock an API call or AJAX request to fetch the JSON data
 * and force the JS to be asynchronous by introducing a promise,
 * in an attempt to meet the requirements and objectives of the assignment.
 */
const getStationInfo = async () => {
  const stationInfo = require('./CDPStations.json');
  return await stationInfo.clients.stations;
}

/**
 * This function receives the array of station objects and reformats the data 
 * into the HTML elements that will eventually be displayed by index.html.
 */
const formatStationInfo = () => {
  getStationInfo()
    .then(result => {
      result.forEach(station => {

        let logo = document.createElement("img");
        logo.src = station.logo;
        // Use the first word from the title (generally a station acronym) to help create a simple yet specific image alt tag.
        let firstWordOfTitle = station.title.split(' ')[0];
        logo.alt = `logo image for ${firstWordOfTitle}`;
        
        let title = document.createElement("p");
        title.className = "title";
        title.innerText = station.title; 
        
        let description = document.createElement("p");
        description.className = "description";
        description.innerText = station.description;  

        let address = document.createElement("p");
        address.className = "address";
        address.innerHTML = 
          `${station.address.street}<br/>${station.address.city}, ${station.address.state}&ensp;${station.address.zip}`;

        let div = document.createElement("div");
        div.className = "station";

        div.appendChild(logo);
        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(address);

        document.getElementById("main").appendChild(div);
      });
    })
    .catch(error => {throw error});
}

module.exports = formatStationInfo();
