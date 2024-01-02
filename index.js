const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = document.getElementById("genPassword")
let passwordTwo = document.getElementById("genPasswordTwo")

function generate() {
      
    let passwordArray = []
    
    for(let i = 0; i < 15; i ++){
        passwordArray.push(characters[Math.floor(Math.random()*characters.length)])
    }
    
    password.textContent = passwordArray.join("")
    
    let passwordArrayTwo = []
    
    for(let i = 0; i < 15; i ++){
        passwordArrayTwo.push(characters[Math.floor(Math.random()*characters.length)])
    }
    passwordTwo.textContent = passwordArrayTwo.join("")
    
}


