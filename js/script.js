function showDiv(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
}

var quotes = [
    { quote:"Success isn't about being the best. It's about always getting better.", name:"Unknown"},
    { quote:"Nothing ventured, nothing gained.", name:"Ben Franklin"},
    { quote:"To me, mathematics, computer science, and the arts are insanely related. They're all creative expressions.", name:"Sebastian Thrun"},
    { quote:"We can only see a short distance ahead, but we can see plenty there that needs to be done.", name:"Alan Turing"},
    { quote:"Young man, in mathematics you don't understand things. You just get used to them.", name:"John von Neumann"},
    { quote:"You don't manage people; you manage things. You lead people.", name:"Grace Hopper"}
];

function randomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var q = quotes[randomNumber];
    return q;
}

window.onload = function() {
    var q = randomQuote();
    document.getElementById("quote").innerHTML = '"' + q.quote + '"' + " - " + q.name;
}