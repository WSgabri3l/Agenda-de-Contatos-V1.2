/* 
Chama uma função no Script principal a partir do Formulário. 
*/

//Variáveis de controle da tabela.
const contactsTbody = document.querySelector(".contactsTbody");

function newContact(){

    //Criando as células da tabela.
    let nameCell = document.createElement("td");
    let emailCell = document.createElement("td");
    let phoneCell = document.createElement("td");

    //Criando a TR para as células.
    let elementTr = document.createElement("tr");
    elementTr.id = "newContact";

    //Adicionando os valores de cada elemento.
    nameCell.textContent = localStorage.getItem("valueName");
    emailCell.textContent = localStorage.getItem("emailValue");
    phoneCell.textContent = localStorage.getItem("phoneValue");

    //Criando os botões de editar e excluir.
    let editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.id = "edit";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.id = "delete";

    let buttonsCell = document.createElement("td");
    buttonsCell.id = "buttonsSpace";

/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
    //Configuração dos botões.

    editButton.addEventListener("click", (event) =>{

        modalDiv.style.display = "block";
        contactsTbody.removeChild(elementTr);
    
    });
    
    deleteButton.addEventListener("click", (event) =>{
    
        contactsTbody.removeChild(elementTr);
    
    });

    //Adicionando os botões na célula.
    buttonsCell.appendChild(editButton);
    buttonsCell.appendChild(deleteButton);

    //Testando os valores do Cachê.
    /*
    console.log(nameCell.textContent);
    console.log(emailCell.textContent);
    console.log(phoneCell.textContent);
    */

    //Adicionando as células à tabela.
    elementTr.appendChild(nameCell);
    elementTr.appendChild(emailCell);
    elementTr.appendChild(phoneCell);
    elementTr.appendChild(buttonsCell);

    //Adicionando a Tr na tabela.
    contactsTbody.appendChild(elementTr);

    //Cleaning.

}

/*
function teste() {

    console.log(localStorage.getItem("valueName"));
    console.log(localStorage.getItem("emailValue"));
    console.log(localStorage.getItem("phoneValue"));

}
*/