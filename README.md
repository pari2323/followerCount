# followerCount
Java script followers count lab

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Interactive Counter </title>
    </head>
    <body>
        <h1> Interactive Counter</h1>
        <h2>Account holder Name: Peter Parker</h2>
        <p> Followers:<span id="countDisplay"> 0 </span></p>
        <hr>
        <h2> Click one button to follow</h2>
        <button onclick="increaseCoount()"> Follow </button>
        <script>

        let countDisplay = document.getElementById("countDisplay") ;        

        function increaseCount() {
        let currentCount = parseInt (countDisplay.textContent)
        let updatedFollowers = 1 + currentCount ;
        countDisplay.textContent = updatedFollowers ;
        }
    
        </script>
    </body>
</html>
