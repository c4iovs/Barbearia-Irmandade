// ====================================================================
// ARQUIVO 3: JAVASCRIPT (O Comportamento do Site)
// ====================================================================
// O JavaScript adiciona interatividade à sua página.

// 'DOMContentLoaded' garante que o script só rode depois que todo o HTML for carregado.
// Isso evita o erro de tentar acessar um elemento que ainda não existe na página.
document.addEventListener('DOMContentLoaded', function() {

// 'querySelector' encontra o primeiro elemento que corresponde ao seletor.
// Aqui, ele encontra o formulário com o ID 'formulario-agendamento'.
const formulario = document.querySelector('#formulario-agendamento');

// 'addEventListener' "ouve" um evento, neste caso, o 'submit' do formulário.
formulario.addEventListener('submit', function(evento) {
    // 'preventDefault' impede o comportamento padrão do formulário, que seria recarregar a página.
    evento.preventDefault();

    // Obtém os valores dos campos do formulário.
    const nome = document.getElementById('nome').value;
    const profissional = document.getElementById('profissional').value;
    const data = document.getElementById('data').value;
    
    // Exemplo: Exibe os dados no console do navegador.
    // Isso simula o envio dos dados para um servidor, sem realmente enviá-los.
    console.log("======================================");
    console.log("NOVO AGENDAMENTO RECEBIDO!");
    console.log(`Nome: ${nome}`);
    console.log(`Profissional: ${profissional}`);
    console.log(`Data e Horário: ${data}`);
    console.log("======================================");
    
    // Em um projeto real, você enviaria esses dados para um servidor.
    // Aqui, mostramos uma mensagem de sucesso para o usuário.
    alert('Agendamento enviado com sucesso! Verifique o console do navegador (F12) para ver os dados.');
});

});