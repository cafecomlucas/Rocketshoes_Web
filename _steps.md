## Estrutura inicial | Removendo itens e configurando padrão de código

Após criar o projeto com `yarn create react-app <nome_da_pasta>` removemos linhas de código e arquivos desnecessários para essa aplicação.

Também foi configurado o padrão de código com ESLint (integrado ao Babel), Prettier e EditorConfig.

---

## Configurando roteamento

Para criar a navegação, instalamos o React Router DOM:

```
yarn add react-router-dom
```

A pasta `pages` foi criada com os componentes `Cart` e `Home`.

Na pasta `src` criamos o arquivo `routes.js` importando os novos componentes para configurar as rotas.

Ainda em `routes.js`, utilizamos os componentes do React Router DOM para configuração das rotas. Utilizamos o componente `Switch` para garantir que apenas uma rota é carregada por vez e o componente `Route` para associar cada rota com uma URL específica.

O `BrowserRouter`, componente que permite utilizar a navegação através da URL do browser, foi configurado no `App.js` ao invés do `routes.js`, já que, além do conteúdo da navegação, também existirá o conteúdo do cabeçalho (componente `Header`) que será fixo entre as páginas e precisará ter acesso as propriedades da navegação (por isso necessita estar dentro do componente `BrowserRouter`).

---

## Instalação do Styled Components e criação da estilização global

Para trabalhar com o CSS com recursos adicionais, utilizamos o Styled Components:

```
yarn add styled-components
```

Criamos o arquivo `src/styles/global.js`, importamos a fonte [Roboto do Google Fonts][https://fonts.google.com/specimen/roboto?selection.family=roboto] no começo do CSS e definimos as estilizações globais. Também utilizamos uma imagem SVG (pasta `assets`) como fundo de toda a aplicação.

Incluímos a estilização global no `App.js`.

---

## Criando o componente de cabeçalho com a estrutura de elementos e a estilização

Instalamos o React Icons para utilização de um ícone de carrinho do Material Design.

```
yarn add react-icons
```

Criamos a pasta `components` para guardar qualquer tipo de componente que não é uma página inteira.

Dentro da pasta `components` criamos o componente `Header` em `Header/index.js` com a estrutura de elementos, links, importação do logo e importação do ícone de carrinho. Em `Header/styles.js` criamos os componentes estilizados que são importados e aplicados na estrutura.

Incluímos o componente `Header` no `App.js`.

---

## Home | Criando a estrutura de elementos e a estilização

Criamos a estrutura da `Home` no arquivo `index.js`, onde definimos a imagem do produto (copiada do site da Netshoes), o título, o preço e um botão para adicionar itens ao carrinho (com um ícone do Material Design). Por enquanto todos os dados exibidos são estáticos.

Criamos também a estilização da `Home` no arquivo `styles.js`, onde definimos o layout principal com utilização de grid, além de definir a responsividade através de media queries (essa parte não estava nos requisitos iniciais e foi feita como um extra). Para estilizar o botão de adicionar ao carrinho no evento `:hover`, adicionamos a biblioteca `polished` (`yarn add polished`) e utilizamos o método `darken` para escurecer o botão.

---

## Cart | Criando a estrutura de elementos e a estilização

Criamos a estrutura do componente `Cart` no arquivo `index.js`, onde definimos uma tabela com a imagem do produto (copiada do site da Netshoes), o título, o preço, a quantidade, o subtotal, botões para adicionar ou remover a quantidade de um produto e um botão para remover um produto (com ícones do Material Design). No rodapé definimos o valor total da compra e um botão para finalizar o pedido. Por enquanto todos os dados exibidos são estáticos.

Criamos também a estilização do componente `Cart` no arquivo `styles.js`, onde definimos a estilização da tabela e do rodapé, além de definir a responsividade através de media queries (essa parte não estava nos requisitos iniciais e foi feita como um extra).

---

## Configuração do Back-end que serve uma REST API (fake)

É possível utilizar um Back-end que serve uma REST API fake enquanto não temos acesso a API real, dessa maneira, quando a migração pra API real acontecer poucas modificações serão necessárias.

Utilizamos a biblioteca [json-server](https://github.com/typicode/json-server), que após ser instalada globalmente, permite servir uma REST API informando apenas um arquivo JSON com os dados a serem servidos.

```bash
yarn global add json-server
```

(`yarn add json-server -D` para instalação local)

Baixamos o arquivo `server.json` com os dados da aplicação (produtos na "tabela" `products`, quantidade em estoque na "tabela" `stock`) e em um novo terminal inicializamos o servidor da REST API na porta 3333 (já que a porta 3000 já está sendo utilizada pela aplicação Front-End):

```bash
json-server server.json -p 3333
```

(`yarn json-server ...` no caso de módulo local)

(a opção `-w` pode ser incluída para observar alterações nos arquivos e reinicializar o servidor quando necessário)

Após inicialização, as rotas [localhost:3333/products](http://localhost:3333/products) e [localhost:3333/stock](http://localhost:3333/stock) já funcionam ao acessá-los pelo browser.

Com essa biblioteca é possível realizar qualquer operação (Create, Read, Update, Delete) como se fosse realmente uma API real. É recomendada apenas para no ambiente de desenvolvimento.

---

## Instalação do Axios para buscar dados na REST API

Instalamos o serviço `axios` para poder buscar os dados da API configurada:

```bash
yarn add axios
```

Definimos as configurações do serviço no arquivo `services/api`.

---
