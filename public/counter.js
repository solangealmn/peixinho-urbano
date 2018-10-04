
  document.getElementById("select").addEventListener("click", function (){
    var maxCupons = document.getElementById("conter-body-modal");
    var cuponsMax = (parseInt(maxCupons.textContent));
    if (cuponsMax > 0){
      cuponsMax -= 1
    } else {
      document.getElementById("select").disabled = true;
    }
    var result = document.getElementById("conter-body-modal").innerHTML = cuponsMax;
    $("#cupom-body-modal").show()
  });