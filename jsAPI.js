url = fetch('https://api.countapi.xyz/hit/giardinovisitas')
.then(response => response.json())
.then(data => visitas(data))
function visitas(data){
  let visitas;
  visitas = document.getElementById("visitas")
        visitas.innerHTML = data.value
}



