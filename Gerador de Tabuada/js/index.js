// Função para criar a tabuada
function criarTabuada() {
    // Obtém o número digitado pelo usuário
    let number = parseInt(document.getElementById("number").value);
    // Obtém o elemento da tabela onde a tabuada será exibida
    let tabuada = document.getElementById("tabuada");
    // Obtém o elemento para exibir mensagens de erro
    let error = document.getElementById("error");
    // Limpa o conteúdo da tabela
    document.getElementById("tabuada").innerHTML = "";
    
    // Verifica se o número digitado é válido (maior ou igual a 1)
    if(number >= 1){
        // Limpa a tabela antes de criar uma nova tabuada (isso já foi feito acima)
        tabuada.innterHTML = "";

        // Loop para calcular e exibir a tabuada do número digitado
        for(let i = 1; i <= 10; i++){
            // Calcula o resultado da multiplicação
            let result = number * i;
            // Cria uma linha <tr> para a tabela
            let line = document.createElement("tr");
            // Cria duas colunas <td> para a linha: uma para a expressão e outra para o resultado
            let column1 = document.createElement("td");
            let column2 = document.createElement("td");
            // Define o texto das colunas: expressão (número x i) e resultado
            column1.textContent = number + " x " + i;
            column2.textContent = result; 

            // Adiciona as colunas à linha
            line.appendChild(column1);
            line.appendChild(column2);
            // Adiciona a linha à tabela
            tabuada.appendChild(line);
        }
        // Limpa mensagens de erro e exibe o botão de limpar
        error.textContent = "";
        document.getElementById("clear").style.display = "block";
        document.getElementById("error").style.display = "none";   
    } else {
        // Se o número digitado não for válido, exibe mensagem de erro
        document.getElementById("error").style.display = "flex";
        error.textContent = "Número inválido";
        error.className = "error";   
    }
}

// Função para limpar o input e a tabela
function clearInput(){
    document.getElementById("number").value = "";
    document.getElementById("tabuada").innerHTML = "";
    document.getElementById("error").textContent = "";
    document.getElementById("error").className = "";
    // Esconde o botão de limpar
    document.getElementById("clear").style.display = "none";   
}
