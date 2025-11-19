# Construa aplicações fullstack com o modo agent do GitHub Copilot

<!-- ![](../../actions/workflows/0-start-course.yml/badge.svg?branch=main) -->
<img src="https://github.com/user-attachments/assets/1b3ea5df-f18d-4ed8-9ae6-f96dc1861818" alt="octofit-tracker" width="300"/>

_Construa uma aplicação com o modo agent do GitHub Copilot em menos de uma hora._

## Bem-vindo

As pessoas adoram como o GitHub Copilot as ajuda a escrever código mais rápido e com menos erros.
Mas e se o GitHub pudesse criar uma aplicação multi-camadas com apresentação e APIs baseadas em requisitos escritos em linguagem natural?
Neste exercício, iremos usar o modo agent do GitHub Copilot para criar uma aplicação completa.


Neste exercício, você irá:

1. Inicializar um ambiente de desenvolvimento pré-configurado para criar uma aplicação multi-camadas.
2. Fazer prompts no GitHub Copilot Chat e selecionar a aba edit e escolher o modo agent no menu suspenso edit/agent.
3. Neste exercício utilizaremos principalmente o LLM padrão mais recente.
4. Experimentar outros modelos LLM para ver diferentes saídas.
5. Para cada etapa, abra uma nova sessão do Copilot Chat clicando no ícone de mais `+` no painel do Copilot Chat.

### Como iniciar este exercício

Simplesmente copie o exercício para sua conta, então dê ao seu Octocat favorito (Mona) **cerca de 20 segundos** para preparar a primeira lição, depois **atualize a página**.

[![](https://img.shields.io/badge/Copiar%20Exerc%C3%ADcio-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/new?template_owner=dev-pods&template_name=agent-mode-fullstack&owner=%40me&name=agent-mode-fullstack&description=Exercicio:+Construa+aplicacoes+com+modo+agent+do+GitHub+Copilot&visibility=public)

<details>
<summary>Tendo problemas? 🤷</summary><br/>

Ao copiar o exercício, recomendamos as seguintes configurações:



Se o exercício não estiver pronto em 20 segundos, verifique a aba "Actions" do seu repositório (ou visite `https://github.com/<SEU-USUARIO>/<SEU-REPO>/actions`).



</details>


## API de Produtos (Backend)

Foi adicionada uma API simples de produtos em `app/backend` com um único endpoint de listagem.

### Instalação

Execute a instalação das dependências (sem mudar de diretório):

```bash
npm install --prefix app/backend
```

Observação: a pasta `node_modules/` é ignorada pelo Git (entrada adicionada em `.gitignore`). Sempre execute o comando acima após clonar ou atualizar o repositório para reconstruir as dependências localmente.

### Execução

```bash
npm start --prefix app/backend
```

O servidor iniciará na porta `3000`.

### Endpoint

- `GET /products` retorna JSON com a lista mock de produtos.

Exemplo de chamada:

```bash
curl http://localhost:3000/products
```

### Estrutura dos Arquivos Principais

- `app/backend/package.json` dependências e script de start
- `app/backend/src/server.js` inicialização Express + CORS
- `app/backend/src/routes/products.js` rota `/products`
- `app/backend/src/data/products.js` dados mock

### Observações

- CORS liberado para todos os hosts (uso de `cors()` padrão).
- Não há paginação ou filtros (implementação mínima solicitada).
- Extensões futuras podem incluir paginação, criação/atualização e segurança adicional.

&copy; 2025 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)
