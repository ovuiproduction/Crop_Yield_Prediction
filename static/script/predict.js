const districtToSubdivision = {
  Ahmednagar: "Madhya Maharashtra",
  Akola: "Vidarbha",
  Wardha: "Vidarbha",
  Thane: "Konkan",
  Solapur: "Madhya Maharashtra",
  Satara: "Madhya Maharashtra",
  Sangli: "Madhya Maharashtra",
  Ratnagiri: "Konkan",
  Raigad: "Konkan",
  Pune: "Madhya Maharashtra",
  Parbhani: "Marathwada",
  Osmanabad: "Marathwada",
  Nasik: "Madhya Maharashtra",
  Nanded: "Marathwada",
  Nagpur: "Vidarbha",
  Kolhapur: "Madhya Maharashtra",
  Jalgaon: "Madhya Maharashtra",
  Dhule: "Madhya Maharashtra",
  Chandrapur: "Vidarbha",
  Buldhana: "Vidarbha",
  Bhandara: "Vidarbha",
  Beed: "Marathwada",
  Aurangabad: "Marathwada",
  Amarawati: "Vidarbha",
  Yeotmal: "Vidarbha",
  Bombay: "Konkan",
};

const districtElement = document.getElementById("district");
districtElement.addEventListener('change', autoSelectSubdivision);
// Function to auto-select the subdivision based on the selected district
function autoSelectSubdivision() {
  console.log("ok");
  // if(district.value != null){
    const district = districtElement.value;
    const subdivision = districtToSubdivision[district];
  
    const subdivisionDropdown = document.getElementById("subdivision");
    // Reset the subdivision dropdown to "Subdivision"
    subdivisionDropdown.value = " ";
  
    // If a subdivision exists for the selected district, select it
    if (subdivision) {
      subdivisionDropdown.value = subdivision;
    }
  // }
}
