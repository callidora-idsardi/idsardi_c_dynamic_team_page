console.log('js is wired!');

let theButtons = document.querySelectorAll('button'),
    infoDiv = document.querySelector('#info-div');


let members = {
    calli : {
		Name: 'Callidora Idsardi',
		Bio: 'Calli Info',
		Image:

    },

    magnus : {
       Name: 'Magnus Bane',
	   Bio: 'Magnus is an essential team member here at Squeezit. As our in-house dog, he provides daily happiness for our team and clients. Without Magnus, we would not be happy.' 
	   Image: 
    },  
};

// functions go here
function listInfo() {
    // empty out the list
    infoDiv.innerHTML = "";
    
    // and then repopulate it with the correct data
    for (item in members[this.dataset.team]) {
        let newItem = document.createElement('p');

        newItem.textContent = members[this.dataset.team][item];
        infoDiv.appendChild(newItem);
    }    


}



// add event handling here
theButtons.forEach(teamButton => teamButton.addEventListener('click', listInfo)),













// HAMBURGER MENU

(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();

//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/