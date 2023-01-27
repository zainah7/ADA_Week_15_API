let setup = document.getElementById("setup");
let punchlinebtn = document.getElementById("punchlinebtn");
let punchline = document.querySelector(".punchline");
let jokeimg = document.getElementById("joke-img");
let resetBtn = document.querySelector(".reset")

let joke = {};

const tellAJoke = () => {
     punchline.style.display = "none";
     jokeimg.src = "https://i.pinimg.com/originals/b2/bb/e8/b2bbe8c8f46afa220b048b97be926df3.gif"
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
    
     const tellPunchline = () => {
          punchline.style.display = "block";
          jokeimg.src = 
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3t67tm0PBNcfrGlunoXYPgUktBT2uREjZQ&usqp=CAU"
          console.log(joke.punchline);
     };

     punchlinebtn.addEventListener("click", tellPunchline);

     resetBtn.addEventListener("click", () => {
          window.location.reload();

     });
