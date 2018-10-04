function counter() {
  console.log("function counter")
  document.getElementById("select").addEventListener("click", function (){

    // $(this).text(code)
    var maxCupons = document.getElementById("conter-body-modal");
    var cuponsMax = (parseInt(maxCupons.textContent));
    if (cuponsMax > 0){
      cuponsMax -= 1
    } else {
      document.getElementById("select").disabled = true;
    }
    console.log(cuponsMax);
    var result = document.getElementById("conter-body-modal").innerHTML = cuponsMax;
  });
}