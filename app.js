let singup=()=>{
    var a=document.getElementById('email')
    var b=document.getElementById("password")
    

firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
.then((result)=>{
  console.log(result)
})
.catch((error) => {
 
  var errorMessage = error.message;
  console.log(errorMessage)
 
});
}


let singin=()=>{
    var email=document.getElementById('singin-email')
    var password=document.getElementById("singin-password")


    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((result)=>{
    console.log("user login secussfully")
    console.log(result)
    window.location.href="./wellcome.html"
  })
  .catch((error) => {
  
    var errorMessage = error.message;
    console.log(errorMessage)
  });

    // if(a=== localStorage.getItem("email")&&b===localStorage.getItem("password")){
    //     window.location.href="./wellcome.html"
    //     alert("you login secussfully")
    // }
    // else{
    //     alert("invalid your pasward or email")
    // }
   
}





