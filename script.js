// Validação do formulário
document.getElementById("formContato").addEventListener("submit", function(event){
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const confirmacao = document.getElementById("mensagemConfirmacao");

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(nome === "" || email === "" || mensagem === ""){
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if(!emailValido.test(email)){
    alert("Por favor, insira um email válido.");
    return;
  }

  confirmacao.innerText = "Mensagem enviada com sucesso!";
  document.getElementById("formContato").reset();
});

// Alternar tema claro/escuro
document.getElementById("temaBtn").addEventListener("click", function(){
  document.body.classList.toggle("dark-mode");
});
