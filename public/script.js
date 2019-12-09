$("input[name='expiry-data']").mask("00 / 00");

const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('details');
detailsRef.on("child_added", function(snapshot, prevChildKey){
    var newPost = snapshot.val();
});

function send(){
    var donate = document.getElementById("dono").value;
    var first = document.getElementById("firstname").value;
    var last = document.getElementById("lastname").value;
    var emailaddy = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenum").value;
    var ccnum = document.getElementById("ccinfo").value;
    detailsRef.push().set({
        donate: donate,
        first: first,
        last: last,
        emailaddy: emailaddy,
        phonenumber: phonenumber,
        ccnum: creditcardnumber
    });
}

