
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "I";

function addRoom()
{
      room_name = document.getElementById("room_name").nodeValue;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</dic><hr>";
      document.getElementById("output").innerHTML += row;
    });
}
  
getData();

function redirectionToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}