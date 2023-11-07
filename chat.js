// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyAdG6MtJijb0WxggX2MBELk7SNIH1Gwlbs",
    authDomain: "chat-clube-21a68.firebaseapp.com",
    projectId: "chat-clube-21a68",
    storageBucket: "chat-clube-21a68.appspot.com",
    messagingSenderId: "251398494905",
    appId: "1:251398494905:web:6d581864ac0a08288a5968",
    measurementId: "G-S0R28CLL42"
  };
// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage

    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */

    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html"
}



