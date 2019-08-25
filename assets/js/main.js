// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.

(function () {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function () {

    //Função para verificar se o email foi digitado corretamente.
    function isValidEmail(email) {
      return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
    }
    // A propriedade "value" contém o valor atual de um input ou textarea
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;

    //Verificação dos campos deixados em branco utilizando a condicional "if", que  
    //é uma estrutura condicional que executa a afirmação, dentro do bloco, se 
    //determinada condição for verdadeira.
    if (nameValue === '') {
      return alert('Preencha o nome do usuário');
    }
    if (emailValue === '') {
      return alert('Preencha o endereço de email');
    }
    if (messageValue === '') {
      return alert('Preencha a mensagem.');
    }
    if (!isValidEmail(emailInput.value)) {
      return alert('Preencha com um email válido.');
    }

    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    const nameLength = nameValue.length;

    // "window" é um objeto global que representa a janela (ou aba) do
    // navegador que está executando o código do seu site. O método
    // "alert" simplesmente mostra um aviso para o usuário contendo a
    // mensagem provida.
    window.alert(`Mensagem enviada com sucesso!`);

    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();
