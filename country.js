// document.getElementById("card-header").style.backgroundColor = "black";
// document.getElementById("card-header").style.color = "white";

fetch("https://restcountries.com/v3.1/all")
  .then(function(response){
    return response.json();
  })

  .then(function(data){
    appendData(data);
  })
  .catch(function(err){
    console.log(err);
  })

  function appendData(data) {
    var z = document.getElementById("cont");
    var a = document.createElement("div");
    a.className = "row";
    var addhtml = "";

    data.forEach(function (data) {
        addhtml += `<div class='col col-lg-4'> \n
                <div class='card'style="margin:10px; background-color:#f2cc8f"> \n
                <h5 class='card-header' align="center"style="background-color: black; color: white">${data.name.common}</h5> \n
                <div class='card-body'> \n
                    <center> \n
                        <p class='card-text'>  <img src="${data.flags.png}" alt="img" width='90%' height='150'> <br> Capital: ${data.capital} <br>Population: ${data.population} <br> Region: ${data.region} <br> Country Code: ${data.cca3} \n
                        </p>\n
                    </center>\n
                    <br>\n
                    <center><button onclick="getcode('${data.name.common}')" class='btn btn-primary'>Weather</button></center>\n
                </div>\n
            </div >\n
        </div >`;

    });
   // console.log(addhtml);
    a.innerHTML = addhtml;
    z.appendChild(a);
}


let cc="";
function getcode(cc){
  document.getElementById('popout').style.display='block';
  document.getElementById('cont').style.opacity='1';
 const api="https://api.openweathermap.org/data/2.5/weather?q="+cc+"&appid=1365f28158742e3e671ab7697dcd962c";
  fetch(api)
   .then(function(response){
    return response.json()
   })
   .then(function(data){
    let n=data.name;
    let t=data.main['temp'];
    let h=data.main['humidity'];
    let w=data.wind['speed'];
    document.getElementById("county_name").innerHTML=n;
    document.getElementById("humidity").innerHTML=h;
    document.getElementById("windspeed").innerHTML=w;
    document.getElementById("country_temp").innerHTML=t;
  })
  .catch(function(err){
    console.log(err);
  })
}

document.getElementById('clsBtn').addEventListener('click',()=>{
  document.getElementById('popout').style.display='none';
})