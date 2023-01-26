     let setup = document.getElementById("setup");
     let punchlinebtn = document.getElementById("punclinebtn");
     let punchline = document.getElementsByClassName("punchline");
     let jokeimg = document.getElementById("joke-img");
     let resetBtn = document.getElementById("reset")

     let joke = {};
    

     const tellAJoke = () => {
     fetch("https://official-joke-api.appspot.com/random_joke")
     .then(res => res.json())
     .then(
      data => (
          (setup.innerHTML= data.setup),
          (punchlinebtn.style.display = "block"),

          (joke = data)
       )
     )

     .catch(err => console.log(err));
     };


     const tellPunchline = () =>{
          punchline.innerHTML = joke.punchline;
          jokeimg.src = "https://i.pinimg.com/564x/f0/05/39/f00539302feb966bfbf8530377d22bdb.jpg"
          resetBtn.style.display = "block"

     };
     
     //reset button

     const $ResetBtn = () =>{
          setup.innerHTML = "";
          punchlinebtn.style.display = "none";
          // setup.innerHTML = data.setup;
          punchline.innerHTML = "";
          joke = {};
          resetBtn.style.display = "none";
       }