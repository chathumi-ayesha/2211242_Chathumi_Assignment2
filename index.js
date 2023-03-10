//check all filled for login
function loginValidate(){
    let u=document.getElementById("uname").value;
    let p=document.getElementById("psd").value;

    if(u =="" || p==""){
        confirm("All the fields must be filled out");
    }
}

// //user name and password
function loginfm(){
    let username= ["Chathurika"]
    let password = ["123"];

    localStorage.setItem("textvalue1",username);
    localStorage.setItem("textvalue2",password);

    let name = document.getElementById("uname").value;
    let pword = document.getElementById("psd").value;

    if(username==name){
        if(password==pword){
            window.location="http://127.0.0.1:5500/home.html";
            document.getElementById("label2").innerHTML=localStorage.getItem("textvalue1");
        }
        else{
            alert("Your password is incorrect")
        }
    }
    else{
        alert("Enter correct user name and password");
    }
    return false;
}

//create user button handling
function userCreate(){
    window.location="http://127.0.0.1:5500/home2.html";
}

//create button handling
function make(){
    let cu=document.getElementById("cuname").value;
    let cp=document.getElementById("cpsd").value;

    if(cu =="" || cp==""){
        alert("All the fields must be filled out");
    }
    else{
        window.location="http://127.0.0.1:5500/home.html";
    }
}

//uuser details pass to the local storage
function passvalues(){
    username = document.getElementById("cuname").value;
    password = document.getElementById("cpsd").value;
    localStorage.setItem("textvalue1",username);
    localStorage.setItem("textvalue2", password);
    return false;  
}
// change the text value to create user name
document.getElementById("label2").innerHTML=localStorage.getItem("textvalue1");


//logout button handling
function lgout(){
    window.location="http://127.0.0.1:5500/index.html";
}