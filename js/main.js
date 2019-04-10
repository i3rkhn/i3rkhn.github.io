
feelings();
localName();




function feelings(){
    var image= document.querySelector("img.image");

    image.onclick= function (){
    var imgSrc= image.getAttribute("src");
    var feeling= document.querySelector(".feeling");

    if (imgSrc== "img/clown.png"){
        image.setAttribute ('src','img/confused.png');
        feeling.textContent= " Confused";
        }else if (imgSrc== "img/confused.png"){
            image.setAttribute ('src','img/faint.png'); 
            feeling.textContent= " Sick";
            }else if (imgSrc== "img/faint.png"){
                image.setAttribute ('src','img/scared.png'); 
                feeling.textContent= " Scared";
                }else if (imgSrc== "img/scared.png") {
                    image.setAttribute ('src','img/clown.png'); 
                    feeling.textContent= " Funny";
                    }
    }
}


function localName (){
    var l_name = document.querySelector(".l_name");
    function setname(){
        var myName = prompt("hi! whats your name ?");
        localStorage.setItem("name", myName); 
        l_name.textContent= myName;       
    }

    if (!localStorage.getItem("name")){
        setname();     
    }else{           
        var storedName = localStorage.getItem("name");
        l_name.textContent= storedName;    
    }

}


