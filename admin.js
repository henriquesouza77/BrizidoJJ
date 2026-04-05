function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (!email || !senha) {
    alert('Preencha email e senha!');
    return;
  }

  window.signInWithEmailAndPassword(window.auth, email, senha)
    .then(() => {
      document.querySelector('.card').style.display = 'none';
      document.getElementById('adminPainel').style.display = 'block';
      carregar();
    })
    .catch(() => {
      alert('Email ou senha incorretos');
    });
}

function carregar() {
  const tabela = document.getElementById('tabela');

  window.onValue(window.ref(window.db, 'inscricoes'), (snapshot) => {
    tabela.innerHTML = '';

    if (!snapshot.exists()) {
      tabela.innerHTML = '<tr><td colspan="5">Nenhuma inscrição ainda</td></tr>';
      return;
    }

    snapshot.forEach((child) => {
      const id = child.key;
      const item = child.val(); 

tabela.innerHTML += `
  <tr>
    <td>${item.nome}</td>
    <td>${item.idade}</td>
    <td>${item.peso}</td>
    <td>${item.sexo}</td>
    <td>${item.email}</td>
    <td>
      <button onclick="editar('${id}', '${item.nome}', '${item.idade}', '${item.peso}', '${item.sexo}', '${item.email}')">✏️</button>
    </td>
  </tr>
      `;
    });
  });
}

function voltar() {
  window.location.href = "index.html";
}
let idEditando = null

function editar (id, nome, idade, peso, sexo, email) {
  idEditando = id

  document.getElementById('editNome').value = nome;
  document.getElementById('editIdade').value = idade;
  document.getElementById('editPeso').value = peso;
  document.getElementById('editSexo').value = sexo;
  document.getElementById('editEmail').value = email;

  document.getElementById('editarPainel').style.display = 'block';
}

function salvarEdicao(){
  const nome = document.getElementById('editNome').value;
  const idade = document.getElementById('editIdade').value;
  const peso = document.getElementById('editPeso').value;
  const sexo = document.getElementById('editSexo').value;
  const email = document.getElementById('editEmail').value;

window.update(window.ref(window.db, 'inscricoes/' + idEditando), {    nome,
    idade,
    peso,
    sexo,
    email
  });
  
  alert('✅ Inscrição editada com sucesso!');

  document.getElementById('editarPainel').style.display = 'none';

}