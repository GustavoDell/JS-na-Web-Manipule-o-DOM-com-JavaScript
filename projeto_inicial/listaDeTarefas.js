const criarTarefa = (evento) => {
    
    evento.preventDefault();//previne comportamento padrão(previne que a pagina seja recarregada apos execulção do evento)

    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    console.log(valor);
    input.value = " ";
}

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa)

