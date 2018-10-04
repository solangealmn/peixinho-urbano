const database = firebase.database();
$(document).ready(function(){
  dataTickets()
});
const dataTickets = () => {
  database.ref("tickets/").once('value')
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      $(".tickets-list").prepend(`
        <div class="col-4 mb-3">
          <div class="card-group">
            <div class="card" data-task-id=${childKey}>
              <img class="card-img-top" src="dist/assets/comida-natural.png" alt="comida natural">
              <div class="card-body">
                <h5 class="card-title">${childData.name}</h5>
                <p class="card-text">${childData.product}</p>
                <p class="card-text">${childData.discount}</p>
                <p class="card-text">${childData.quantity}</p>
            </div>
            <button data-get-id=${childKey} class="btn btn-success" data-toggle="modal" data-target="#tickets"> Ver mais </button>
          </div>
          </div>
        </div>`
      );
      $(".btn-details").click(function() {
        modal(childKey)
      })
     });
  });
}
function modal(id){
  database.ref("tickets/").once('value')
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      var childData = childSnapshot.val();
      if(id === childKey) {
        $("#title-modal").text(childData.name);
        $("#body-modal").text(childData.product);
        $("#cupom-body-modal").text(childData.code)
      }
     });
  });
}
