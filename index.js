const database = firebase.database();

$(document).ready(function(){
  dataTickets()
});

const dataTickets = () => {
  // Carregar cupons
  database.ref("tickets/").once('value')
  .then(function(snapshot) {
    // console.log(snapshot.val())
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      console.log(childSnapshot.val())
      $(".tickets-list").prepend(`
        <div class="container">
          <div class="row">
            <div class="col-4">
            <div data-task-id=${childKey} />
              <h3 class="h3"><span>${childData.name}</span></h3> 
              <span>${childData.product}</span>
              <span>${childData.discount}</span>
              <span>${childData.quantity}</span>
            </div>
            </div>
          </div>
        </div>`
      );
     });
  });
}
