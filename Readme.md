# Amigo Secreto

🎉 **Descrição**  
Este projeto consiste em uma aplicação web simples para realizar o sorteio de Amigo Secreto. Ele permite que os usuários insiram nomes de participantes, valide as entradas e gere pares aleatórios de forma justa.

---

## Funcionalidades

✅ Adicionar nomes de participantes.  
✅ Validar entradas para evitar nomes duplicados ou campos vazios.  
✅ Sortear os pares de Amigo Secreto de forma aleatória.  
✅ Exibir os resultados de forma clara e organizada.  

---

## Como Usar

1. Digite o nome dos seus amigos no campo de entrada.
2. Clique em **"Adicionar"** para incluir o nome na lista.
3. Repita o processo para adicionar mais nomes.
4. Clique em **"Sortear amigo"** para gerar os pares aleatoriamente.
5. O resultado será exibido abaixo do botão de sorteio.

---

## Estrutura do Projeto

### HTML
Contém a estrutura básica da página, incluindo:
- Título principal: **"Amigo Secreto"**.
- Campo de entrada para digitar os nomes.
- Botões para adicionar nomes e sortear amigos.
- Área para exibir o resultado do sorteio.

### CSS
Define estilos modernos e responsivos para melhorar a experiência do usuário, como:
- Cores personalizadas para botões e textos.
- Layout centralizado e alinhado.
- Estilização para botões e listas.

### JavaScript
Implementa a lógica principal:
- **Adicionar nomes**: Valida entradas e atualiza a lista de participantes.
- **Sortear amigos**: Embaralha os nomes usando o algoritmo Fisher-Yates e cria pares circulares.
- **Exibir resultados**: Apresenta os pares gerados de forma clara.

---

## Contribuições

Contribuições são bem-vindas! Se você encontrar bugs ou quiser adicionar novas funcionalidades, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch com sua feature ou correção:  
   ```bash
   git checkout -b feature/nova-funcionalidade