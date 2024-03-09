
const firebaseConfig = {
      apiKey: "AIzaSyAzyzyNI8uF85GIFqfKfDz8t3hSUFE2q3k",
      authDomain: "letschatapp-d8edb.firebaseapp.com",
      projectId: "letschatapp-d8edb",
      storageBucket: "letschatapp-d8edb.appspot.com",
      messagingSenderId: "196489038833",
      appId: "1:196489038833:web:d519a3c6df71b1fb971250"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
