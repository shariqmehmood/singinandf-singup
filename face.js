
let facebooklog=()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    
    firebase.auth().useDeviceLanguage();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
  var token=result.credential.accessToken
      document.querySelector("#singout").style.display="block"
      console.log(user)
      var user=result.user
      console.log(user.email)
     var userimg=document.querySelector("#userimg")
      var userpic=document.createElement("img");
      userpic.src=userpic.photoURL;
      userimg.append(userpic)

      var useremail=document.querySelector("#useremail")
      useremail.innerHTML=user.email;
    })
    
  
  
  }