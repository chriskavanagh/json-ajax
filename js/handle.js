var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/pets-data.json`);
    ourRequest.onload = () => {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};

ourRequest.send();



function renderHTML(petsData) {
    var rawTemplate = document.getElementById("petsTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(petsData);
    var petsContainer = document.getElementById("pets-container");
    petsContainer.innerHTML = ourGeneratedHTML;
}


