<!DOCTYPE html>
<html>
<head>
    <title>Parameter Example</title>
</head>
<body>

<h2>Parameter Example</h2>

<button onclick="greet('Andi')">Greet</button>

<p id="result"></p>

<script>
function greet(name) {
    document.getElementById("result").innerHTML = "Hello " + name;
}
</script>

</body>
</html>