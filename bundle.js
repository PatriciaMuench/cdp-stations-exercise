(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "clients": {
      "company": "CDP",
      "stations": [
        {
          "title": "DPTV (WTVS-Detroit)",
          "description": "WTVS, virtual channel 56, is a Public Broadcasting Service member television station licensed to Detroit, Michigan, United States. The station is owned by the Detroit Educational Television Foundation.",
          "logo": "https://bento.cdn.pbs.org/hostedbento-prod/filer_public/logos-dptv/DetroitPublicTV.png",
          "address": {
            "street": "1 Clover Ct",
            "city": "Wixom",
            "state": "Michigan",
            "zip": "48393"
          }
        },
        {
          "title": "WyomingPBS (KCWS)",
          "description": "Wyoming PBS is the Public Broadcasting Service member network in the state of Wyoming. It currently consists of flagship KCWC-DT, channel 4 in Riverton; full-power satellites KWYP-DT, channel 8 in Laramie and KPTW, channel 6 in Casper; and over 35 low-power translator stations across the state.",
          "logo": "http://www.wyomingpbs.org/images/wyoming-pbs-logo-home.jpg",
          "address": {
            "street": "2660 Peck Ave",
            "city": "Riverton",
            "state": "Wyoming",
            "zip": "82501"
          }
        },
        {
          "title": "KLVX (Vegas PBS)",
          "description": "KLVX, virtual channel 10, is a Public Broadcasting Service member television station licensed to Las Vegas, Nevada, United States. The station is owned by the Clark County School District, and is the flagship member of the district's communications arm, the KLVX Communications Group.",
          "logo": "https://image.pbs.org/bento3-prod/klvx-bento-live-pbs/vegas_pbs/newsroom/photos/53f5fca371_VegasPBS-50thAnniversary-Logo-4c.jpg",
          "address": {
            "street": "3050 E. Flamingo Road",
            "city": "Las Vegas",
            "state": "Nevada",
            "zip": "89121"
          }
        },
        {
          "title": "KUHT (HPMF-Houston Public Media)",
          "description": "KUHT, virtual and VHF digital channel 8, is a Public Broadcasting Service member television station licensed to Houston, Texas, United States. Owned by the University of Houston System, it is sister to National Public Radio member station KUHF.",
          "logo": "https://cdn.hpm.io/assets/images/HPM_UH_ConnectivityLogo_OUT.jpg",
          "address": {
            "street": "4343 Elgin",
            "city": "Houston",
            "state": "Texas",
            "zip": "77204"
          }
        },
        {
          "title": "SOPTV (Southern Oregon)",
          "description": "Southern Oregon Public Television is the Public Broadcasting Service member network for most of the southwest region of the U.S. state of Oregon. It operates KSYS in Medford and full-time satellite KFTS in Klamath Falls. Studios are located on South Fir Street in downtown Medford.",
          "logo": "http://www.soptv.org/wp-content/themes/soptv/assets/img/soptv-logo.png",
          "address": {
            "street": "28 South Fir Street, Ste. 200",
            "city": "Medford",
            "state": "Oregon",
            "zip": "97501"
          }
        }
      ]
    }
  } 
},{}],2:[function(require,module,exports){
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

},{"./CDPStations.json":1}]},{},[2]);
