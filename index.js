// let theme = true;
// let cir = document.getElementById("circle");
// let log = document.getElementById("logo");
// let swit = document.getElementById("switch");
// let hom = document.getElementById("home");
// let pro = document.getElementById("profile");
// let con = document.getElementById("contact");
// let abo = document.getElementById("about");
// let line = document.getElementById("navbar")



// function change() {
    
    
//     if ( theme !== true){
//         document.body.style.backgroundColor = "white"
//         cir.style.left = "5px"
//         cir.style.backgroundColor = "yellow"
//         swit.style.backgroundColor ="skyblue"
//         log.style.color = "black"
//         hom.style.color = "black"
//         pro.style.color = "black"
//         con.style.color = "black"
//         abo.style.color = "black"
//         line.style.borderColor = "black"

//     }else{
//         document.body.style.backgroundColor = "black"
//         cir.style.left = "20px"
//         cir.style.backgroundColor = "black"
//         swit.style.backgroundColor= "white"
//         log.style.color = "white"
//         hom.style.color = "white"
//         pro.style.color = "white"
//         con.style.color = "white"
//         abo.style.color = "white"
//         line.style.borderColor = "white"
//     }
//     theme = !theme





// }


// function check() {
//     let userNameElements = document.getElementsByClassName("name");
//     let userAgeElements = document.getElementsByClassName("age");
//     let paraElements = document.getElementsByClassName("result");

//     // Assuming there's only one element with the class "name" and "age"
//     let UName = userNameElements[0].value;
//     let checkAge = userAgeElements[0].value;

//     if (checkAge >= 18) {
//         console.log(UName + " " + "Yes! you are eligible");
//         alert(UName + " " + "Yes! you are eligible");
//         paraElements[0].textContent = UName + " " + "Yes you are eligible";
//     } else {
//         console.log(UName + " " + "nope! you are not eligible");
//         alert(UName + " " + "nope! you are not eligible");
//         paraElements[0].textContent = UName + " " + "No you are not eligible";
//     }
// }


let theme = true;
let cir = document.getElementById("circle");
let log = document.getElementById("logo");
let swit = document.getElementById("switch");
let hom = document.getElementById("home");
let pro = document.getElementById("profile");
let con = document.getElementById("contact");
let abo = document.getElementById("about");
let line = document.getElementById("navbar");
let myHeading = document.querySelector(".inputField h1"); // Assuming you have an h1 element within the .inputField div

function change() {
    if (theme) {
        document.body.style.backgroundColor = "white";
        cir.style.left = "5px";
        cir.style.backgroundColor = "yellow";
        swit.style.backgroundColor = "skyblue";
        log.style.color = "black";
        hom.style.color = "black";
        pro.style.color = "black";
        con.style.color = "black";
        abo.style.color = "black";
        line.style.borderColor = "black";
        myHeading.textContent = "Eligibility Checker - Light Theme";
    } else {
        document.body.style.backgroundColor = "black";
        cir.style.left = "20px";
        cir.style.backgroundColor = "black";
        swit.style.backgroundColor = "white";
        log.style.color = "white";
        hom.style.color = "white";
        pro.style.color = "white";
        con.style.color = "white";
        abo.style.color = "white";
        line.style.borderColor = "white";
        myHeading.textContent = "Eligibility Checker - Dark Theme";
    }
    theme = !theme;
}

function check() {
    let userNameElements = document.getElementsByClassName("name");
    let userAgeElements = document.getElementsByClassName("age");
    let paraElements = document.querySelector(".inputField h1.result");

    let UName = userNameElements[0].value;
    let checkAge = userAgeElements[0].value;

    if (checkAge >= 18) {
        console.log(UName + " " + "Yes! you are eligible");
        //alert(UName + " " + "Yes! you are eligible");
        paraElements.textContent = UName + " you are eligible.";
    } else {
        console.log(UName + " " + "nope! you are not eligible");
        //alert(UName + " " + "nope! you are not eligible");
        paraElements.textContent = UName + " you are not eligible.";
    }
}

// Prevent form submission on button click
document.querySelector(".inputField form").addEventListener("submit", function (event) {
    event.preventDefault();
});




