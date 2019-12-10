
function login(){
    if($("#username").val() == "admin" && $("#password").val() =="admin"){
        location.replace("admin-index.html");
    }else{
        alert("Username / Password Salah")
    }
}