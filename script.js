function irParaAdmin() {
  window.location.href = "admin.html";
}
function abrirConfirmacao() {
  const nome = document.getElementById('nome').value.trim();
  const idade = document.getElementById('idade').value.trim();
  const peso = document.getElementById('peso').value.trim();
  const sexo = document.getElementById('sexo').value;
  const email = document.getElementById('email').value.trim();

  if (!nome || !idade || !peso || !email || !sexo) {
    alert('Preencha todos os campos!');
    return;
  }

  // joga os dados no "relatório"
  document.getElementById('confNome').innerText = nome;
  document.getElementById('confIdade').innerText = idade;
  document.getElementById('confPeso').innerText = peso;
  document.getElementById('confSexo').innerText = sexo;
  document.getElementById('confEmail').innerText = email;

  document.getElementById('modalConfirmacao').style.display = 'flex';
}
function fecharModal() {
  document.getElementById('modalConfirmacao').style.display = 'none';
}
function confirmarEnvio() {
  const nome = document.getElementById('nome').value.trim();
  const idade = document.getElementById('idade').value.trim();
  const peso = document.getElementById('peso').value.trim();
  const sexo = document.getElementById('sexo').value;
  const email = document.getElementById('email').value.trim();

  window.push(window.ref(window.db, 'inscricoes'), {
    nome,
    idade,
    peso,
    sexo,
    email
  });

  alert('✅ Inscrição enviada com sucesso!');

  fecharModal();

  // limpar campos
  document.getElementById('nome').value = '';
  document.getElementById('idade').value = '';
  document.getElementById('peso').value = '';
  document.getElementById('sexo').value = '';
  document.getElementById('email').value = '';
}