function criarTabuada() {
    let number = parseInt(document.getElementById("number").value);
    let tabuada = document.getElementById("tabuada");
    let error = document.getElementById("error");
    document.getElementById("tabuada").innerHTML = "";
    if(number >= 1){
        tabuada.innterHTML = "";

        for(let i = 1; i <= 10; i++){
            let result = number * i;
            let line = document.createElement("tr")
            let column1 = document.createElement("td")
            let column2 = document.createElement("td")
            column1.textContent = number + " x " + i;
            column2.textContent = result; 

            line.appendChild(column1);
            line.appendChild(column2);
            tabuada.appendChild(line);

            
        }
        error.textContent = "";
        document.getElementById("clear").style.display = "block";
        document.getElementById("error").style.display = "none";
        
    } else{
        document.getElementById("error").style.display = "flex";
        error.textContent = "Número inválido"
        error.className = "error"
        
    }

}
function clearInput(){
    document.getElementById("number").value = "";
    document.getElementById("tabuada").innerHTML = "";
    document.getElementById("error").textContent = "";
    document.getElementById("error").className = "";
    document.getElementById("clear").style.display = "none";
    
}
