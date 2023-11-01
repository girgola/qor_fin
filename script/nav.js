document.getElementById("headerlogo").innerHTML='<a href="index.html"> Furniture Store Badrooms, Dining rooms, Sofas</a>';



const nav = ["home", "about", "gallery", "contact"];

const links = ["index.html", "about.html", "gallery.html", "contact.html"];

let navtext = "<ul>";
for(let i=0; i<nav.length; i++){
    navtext +='<li><a href="'+links[i]+'">' + nav[i] + "<a/></li>";
}

navtext + "</ul>"

document.getElementById("navigation").innerHTML = navtext;

document.getElementById("fb").innerHTML='<a href="https://ka-ge.facebook.com"target=“_blank” rel=“unfollow”></a>'; 


document.getElementById("insta").innerHTML='<a href="https://www.instagram.com"target=“_blank” rel=“unfollow”></a>';


document.getElementById("pint").innerHTML='<a href="https://www.pinterest.com"target=“_blank” rel=“unfollow”></a>';

document.getElementById("in").innerHTML='<a href="https://www.linkedin.com"target=“_blank” rel=“unfollow”></a>';

document.getElementById("you").innerHTML='<a href="https://www.youtube.com/index"target=“_blank” rel=“unfollow”></a>';