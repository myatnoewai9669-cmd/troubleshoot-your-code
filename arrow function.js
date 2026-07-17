// Arrow Function
const greet = (name) => {
    return "Hello " + name;
};

function showGreeting() {
    document.getElementById("result").innerHTML = greet("Citra");
}