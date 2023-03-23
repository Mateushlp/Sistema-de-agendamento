
// Função que faz o agendamento da ordem de serviço
function agendar() {
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const descricao = document.getElementById('descricao').value;
  
    // Envia os dados para a API de agendamento
    // Aqui é onde você pode usar o TensorFlow para prever a melhor data/hora para o agendamento
  
    // Simula o resultado da API
    const sucesso = true;
  
    // Exibe a mensagem de sucesso ou de erro, dependendo do resultado
    const mensagem = document.getElementById('mensagem');
    if (sucesso) {
      mensagem.innerText = 'Ordem de serviço agendada com sucesso!';
      mensagem.classList.add('sucesso');
    } else {
      mensagem.innerText = 'Não foi possível agendar a ordem de serviço. Tente novamente mais tarde.';
      mensagem.classList.add('erro');
    }
  }
  
// Adiciona o evento de submit ao formulário
 formAgendamento = document.getElementById('form-agendamento');
formAgendamento.addEventListeneconstr('submit', function(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário de enviar os dados e recarregar a página
  agendar(); // Chama a função de agendamento
});
function agendar() {
  // Valida o formulário antes de enviar os dados para a API
  if (!validateFormulario()) {
    return;
  }

  // Obtém os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const descricao = document.getElementById('descricao').value;

  // Envia os dados para a API de agendamento
  // Aqui é onde você pode usar o TensorFlow para prever a melhor data/hora para o agendamento

  // Simula o resultado da API
  const sucesso = true;

  // Exibe a mensagem de sucesso ou de erro, dependendo do resultado
  const mensagem = document.getElementById('mensagem');
  if (sucesso) {
    mensagem.innerText = 'Ordem de serviço agendada com sucesso!';
    mensagem.classList.add('sucesso');
  } else {
    mensagem.innerText = 'Não foi possível agendar a ordem de serviço. Tente novamente mais tarde.';
    mensagem.classList.add('erro');
  }
}
const botaoAgendar = document.querySelector("#botao-agendar");
if (botaoAgendar) {
  botaoAgendar.addEventListener("click", agendar);
} else {
  console.error("Elemento #botao-agendar não encontrado");
}

