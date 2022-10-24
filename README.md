## KenzieHabit
Projeto realizado ao final do segundo módulo do curso de **Formação em Desenvolvimento Full Stack da Kenzie Academy Brasil**

O objetivo desse projeto é, em equipe, desenvolver do zero uma aplicação, desde a sua estrutura (HTML) e estilização (CSS) até as suas funcionalidades (Javascript).

Principais conceitos utilizados: 
- **OOP**;
- **Spread Operator**;
- **Desconstrução**;
- **Consumo de API**;
- **LocalStorage**;
- **DOM**;
- **Mobile First**.

Aspectos técnicos/ funcionalidades:
- Tela de **Login**:
1. Presença de um formulário contendo um botão de "Entrar", o qual faz uma requisição a API. Caso a requisição de login esteja correta, o token e os dados do usuário são adicionados ao localstorage. Caso esteja incorreta, o usuário é redirecionado para a homepage;
2. Há um retorno visual caso o usuário passe dados inválidos nos inputs. 

- Tela **Homepage**:
1. Possibilidade de criação de um novo hábito;
2. Renderização da lista de hábitos na página;
3. Renderização do nome e imagem do usuário (dados salvos no localstorage);
4. Ao clicar na foto do usuário, abre um dropDownMenu com as funcionalidades de editar perfil e logout; 
5. No dropDownMenu ao escolher a opção de editar perfil, abre-se um menu de edição do usuário;
6. No dropDownMenu ao escolher a opção de logout, apagasse os dados do localstorage e redireciona o usuário para a página de login;
7. Há um botão de "Concluídos" que exibe apenas os hábitos concluídos;
8. Há um botão "Todos" que exibe todos os hábitos do usuário;
9. Há um botão "Criar" que abre um modal para criação de novos hábitos;
10. Os 'cards' dos hábitos possuem um botão "..." que abre um modal para atualizar o hábito;
11. Dentro do modal de atualização de hábito também tem a opção de o excluir, a qual realiza uma requisição de delete;
12. Há um checkbox que realiza uma requisição de atualizar o hábito o tornando concluído ou não concluído.

- Extras:
1. Animação nos botões;
2. Animação durante as transições de tela;
4. Animação durante o popup dos modais;
5. Popup de erro para as requisições;
6. Os commits seguem um padrão Padrão de commits Coventional Commits.

**https://projeto-final-m2.vercel.app/**
