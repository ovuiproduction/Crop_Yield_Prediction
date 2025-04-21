district_markets = {
  "Pune": [
      "Indapur(Nimgaon Ketki)", "Indapur", "Shirur", "Nira(Saswad)", 
      "Indapur(Bhigwan)", "Dound", "Baramati", "Pune"
  ],
  "Sangli": ["Sangli", "Tasgaon", "Palus"],
  "Satara": ["Vaduj", "Lonand", "Phaltan", "Koregaon"],
  "Solapur": [
      "Barshi(Vairag)", "Kurdwadi(Modnimb)", "Dudhani", "Mangal Wedha", 
      "Mohol", "Pandharpur", "Solapur", "Kurdwadi", "Barshi", 
      "Akkalkot", "Akluj", "Karmala"
  ]
}

const district = document.getElementById('district');
const market_select = document.getElementById('market');

district.addEventListener('change',()=>{
  console.log(district.value)
  market_list = district_markets[district.value]
  console.log(market_list)
  market_list.forEach(market => {
    let option = document.createElement('option');
    option.value = market;
    option.innerText = market;
    market_select.appendChild(option);
  });
})

// submit progress
const predict_btn = document.getElementById('predict_btn');

window.addEventListener('pageshow',(event)=>{
  if (event.persisted) { 
    document.getElementById('loader').style.display = "none";
    predict_btn.style.display="block"
}
});

predict_btn.addEventListener('click',()=>{
  document.getElementById('loader').style.display = "grid";
  predict_btn.style.display="none";
});