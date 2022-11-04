document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('btnGet1').addEventListener('click', () => { //Buscador de registro
        let id = document.getElementById('inputGet1Id').value;
        if (id != "" || id > 0) { //Si el id es distinto de vacio o mayor de 0 
            fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/' + id) //Llama al fetch con el id ingresado en el input
                .then(response => response.json())
                .then(data => document.getElementById('results').innerHTML =
                    `
                        <li>
                            <p>ID: ${data.id}</p>
                            <p>NAME: ${data.name}</p>
                            <p>LASTNAME: ${data.lastname}</p>
                        </li>
                    `) //Se genera un elemento de la lista con el id, el nombre y el apellido del id ingresado

        } else if (id === "") { //Si el id es vacio
            fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/') //LLama al fetch
                .then(response => response.json())
                .then(data => {
                    document.getElementById('results').innerHTML = ""; //Vacía todo lo que haya en la etiqueta con id="results"
                    for (i = 0; i < data.length; i++) { //Se genera un for para iterar todos los registros que hay
                        document.getElementById('results').innerHTML +=
                            `
                                <li>
                                    <p>ID: ${data[i].id}</p>
                                    <p>NAME: ${data[i].name}</p>
                                    <p>LASTNAME: ${data[i].lastname}</p>
                                </li>
                            `//Se va generando tantos elementos de la lista como registros haya, cada uno con su respectivo ID, NAME y LASTNAME
                    }
                })
        }
    })

    document.getElementById('btnPost').addEventListener('click', () => { //Ingresar un nuevo registro

        let nombre = document.getElementById('inputPostNombre').value;
        let appellido = document.getElementById('inputPostApellido').value;

        fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                name: nombre,
                lastname: appellido
            })
        })
            .then(response => response.json())
            .then(data => {

            })
    });


    document.getElementById("btnPut").setAttribute("data-bs-toggle", "modal");
    document.getElementById("btnPut").setAttribute("data-bs-target", "#exampleModal");

    document.getElementById('btnPut').addEventListener('click', () => {

        let id = document.getElementById('inputPutId').value;

        
        let nombre = document.getElementById('inputPostNombre').value;
        let appellido = document.getElementById('inputPostApellido').value;


        fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PUT',
            body: JSON.stringify({
                name: nombre,
                lastname: appellido
            })
        })
            .then(response => response.json())
            .then(data => {

            })
    });

})



