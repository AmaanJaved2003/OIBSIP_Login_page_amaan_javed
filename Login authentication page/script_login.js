function login(){
           
    emailObj=document.getElementById("email");
    passwordObj=document.getElementById("password");
    

    outputobj = document.getElementById("password_output")
    res="password is incorrect";

    outputobj.innerHTML = res;


    var email="amaanahmed@gmail.com";
    var password="amaan"

    if(emailObj.value=="amaanahmed@gmail.com" && passwordObj.value=="amaan"){
        window.location.assign("index_port.html")
        alert("Welcome to the PORTFOLIO of Amaan Javed")
    }
    else{
       
        outputobj.style.color="red";
    }


}