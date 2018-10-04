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
      console.log(childSnapshot.val())
      $(".tickets-list").prepend(`
        <li>
          <div data-task-id=${childKey} />
            <span>${childData.name}</span>
            <span>${childData.product}</span>
            <span>${childData.discount}</span>
            <span>${childData.quantity}</span>
            <button id="details" class="btn"> Ver mais </button>
          </div>
        </li>`
      );
     });
  });
}