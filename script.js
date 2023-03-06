const footer = document.querySelector('footer');
const firstEditButton = document.querySelector(".btn-outline-secondary");
const firstText = document.getElementsByClassName("card-text")[0];
const secondText = document.getElementsByClassName("card-text")[1];
const secondEditButton = document.getElementsByClassName("btn-outline-secondary")[1];
const viewButton = document.getElementsByClassName("btn-success")[0];
const card = document.getElementsByClassName("col-md-4")[0];



//FONCTION 1
footer.addEventListener('click', Consolefooter);

let a =1;

function Consolefooter() {
    console.log("clic numéro " + a++);
};


//Fonctionnalité 2

var navbarId = document.getElementById("navbarHeader");
var togglebutton = document.querySelector("button.navbar-toggler")
togglebutton.addEventListener('click', Navbar);

function Navbar(){
navbarId.classList.toggle("collapse");
}


//FONCTION 3

  firstEditButton.addEventListener("click", Changecolor);

  function Changecolor() {
    firstText.style.color = "red";
  }

  //FONCTION 4

  secondEditButton.addEventListener('click', () => {
    if (secondText.style.color === 'green') {
      secondText.style.color = '';
    } else {
      secondText.style.color = 'green';
    }
  });

  
  //FUNCTION 5


let navbar = document.querySelector("header");
let bootstrap = document.querySelector("link");

navbar.addEventListener("dblclick", function () {
  bootstrap.disabled = !bootstrap.disabled;
});

//FUNCTION 6




