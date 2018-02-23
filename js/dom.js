// https://www.youtube.com/watch?v=zPHerhks2Vg

var newItemCounter = 1;
var ourList = document.querySelector("#our-list");
var headline = document.querySelector("#headline");
var ourButton = document.querySelector("#our-button");
var listItems = document.querySelectorAll("#our-list li");


ourList.addEventListener("click", activateItem);

function activateItem(e) {
    if (e.target.nodeName === "LI") {
        headline.innerHTML = e.target.innerHTML;
        for (i=0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }    
}

ourButton.addEventListener("click", (e) => {        
    ourList.innerHTML += `<li>Something New ${newItemCounter++}</li>`;
    // ourList.innerHTML += `<li class="list-group-item">Something New ${newItemCounter++}</li>`;
    var z = ourList.getElementsByTagName("li");
    for (var i=0; i < z.length; i++) {
        z[i].classList.add("list-group-item");
    }    
});


/*
for(i=0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);

    function activateItem(e) {
    console.log(`Coordinates: ${e.clientX} and ${e.clientY}`);
    headline.innerHTML = e.target.innerHTML;
    for(i=0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }
    this.classList.add("active");    
}

ourButton.addEventListener("click", (e) => {
    console.log(e.type);    
    console.log(e.currentTarget);
    ourList.innerHTML += "<li>Something New!</li>";
});
*/