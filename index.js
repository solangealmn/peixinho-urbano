const database = firebase.database();

$(document).ready(function(){
  dataTickets()
});

const dataTickets = () => {
  // Carregar cupons
  database.ref("tickets/" + 123).once('value')
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
            <footer>
            <button data-btn-id="btn-${childKey}"> <i class="far fa-trash-alt"></i>  </button>
            <button data-edit-id="edit-${childKey}" value="change"> <i class="fas fa-pencil-alt"></i> </button>
            </footer>
          </div>
        </li>`);
      $(`button[data-btn-id="btn-${childKey}"]`).click(function(){
        database.ref("posts/" + PROFILE_ID + "/" + childKey).remove();
        $(this).parent().remove();
      })
    });
  });
}