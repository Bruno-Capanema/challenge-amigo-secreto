// Selecionando elementos do DOM
const inputName = document.querySelector('.input-name');
const addButton = document.querySelector('.button-add');
const drawButton = document.querySelector('.button-draw');
const resultList = document.querySelector('.result-list');
const nameList = [];

// Função para adicionar nomes à lista
addButton.addEventListener('click', () => {
    const name = inputName.value.trim();
    if (name) {
        // Verifica se o nome já foi adicionado
        if (nameList.includes(name)) {
            alert('Este nome já foi adicionado!');
        } else {
            nameList.push(name);
            updateNameList();
            inputName.value = ''; // Limpa o campo de entrada
        }
    } else {
        alert('Por favor, digite um nome válido!');
    }
});

// Função para atualizar a lista de nomes na interface
function updateNameList() {
    const ul = document.querySelector('ul');
    ul.innerHTML = ''; // Limpa a lista atual
    nameList.forEach((name) => {
        const li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
    });
}

// Função para realizar o sorteio
drawButton.addEventListener('click', () => {
    if (nameList.length < 2) {
        alert('Adicione pelo menos dois nomes para realizar o sorteio!');
        return;
    }

    // Embaralha a lista de nomes
    const shuffledList = [...nameList];
    for (let i = shuffledList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }

    // Cria os pares de Amigo Secreto
    const pairs = [];
    for (let i = 0; i < shuffledList.length; i++) {
        const currentName = shuffledList[i];
        const nextName = shuffledList[(i + 1) % shuffledList.length]; // Circular
        pairs.push(`${currentName} tirou ${nextName}`);
    }

    // Exibe os resultados
    resultList.innerHTML = pairs.join('<br>');
});

// Limpa o campo de entrada ao pressionar Enter
inputName.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addButton.click();
    }
});