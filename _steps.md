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

## Home | Buscando dados na API e atualizando estrutura

Modificamos o componente `Home` declarando-o como classe ao invés de função para utilizarmos o estado e os métodos do ciclo de vida do componente.

Criamos a propriedade do estado `products` para guardar todos os produtos. Criamos também o método `componentDidMount` para preencher essa nova propriedade com os dados recebidos da API.

Também foi necessário formatar o preço de cada produto de acordo com a localização, para isso criamos a pasta `src/util` (por organização, para que os arquivos criados nela possam ser utilizados em qualquer parte da aplicação), e nela criamos o arquivo `format.js`. No arquivo utilizamos a classe nativa de intercionalização do JavaScript para formatar números do tipo preço e exportamos a função `format` renomeada para `formatPrice`.

Modificamos o componente `Home` para importar a função `formatPrice` e utilizamos na criação de um novo campo com o preço formatado. A formatação do campo foi feita logo após busca dos dados da API ao invés de ser feita dentro do método `render`, pois assim formatamos os dados apenas uma vez (ao carregar o componente) ao invés de várias vezes (ao renderizar cada `<li>`) - quando possível é sempre recomendável fazer qualquer tipo de formatação apenas uma vez e fora do método `render` por questões de performance.

Por enquanto, a quantidade de itens no carrinho permanece estática.

---

## Arquitetura Flux com o Redux - Documentação dos conceitos

### O que é Redux?

- Biblioteca independente (pode ser usada com o Angular, React ou mesmo com JavaScript puro) que implementa Arquitetura Flux (que é uma forma de comunicação entre vários elementos em tela);
- Utilizado para controle de estados globais;
- Quando utilizar o Redux?
  -- Meu estado tem mais de um dono? Ou seja, ele é utilizado por mais de um componente?
  -- Meu estado é manipulado por mais de um componente? Em um e-commerce, por exemplo, um carrinho de compras pode exibir no componente cabeçalho o dado da quantidade de itens adicionados, baseado na adição feita em um outro componente que apenas lista os produtos e possui um botão de adicionar em cada um deles.
  -- As ações do usuário causam efeitos colaterais nos dados? Por exemplo, ao adicionar um produto ao carrinho estando dentro do componente de listagem de produtos, pode exibir uma mensagem em outro componente ou afetar o dado com a quantidade de itens adicionados utilizada em um componente de cabeçalho ou rodapé.

Exemplos: Carrinho de compras, dados do usuário, player de música, etc;

### Artuitetura Flux

Cada biblioteca Front-End possui nomes diferentes ao se referir a essa arquitetura. Pelo contexto do React, utilizaremos os nomes do Redux dentro do React.

### Fluxo da arquitetura

Catálogo de produtos [botão adicionar ao carrinho] => ACTION (objeto) => REDUX STORE (com vários REDUCERS dentro) => REDUCER ADD (faz a alteração) => Nova renderização

Carrinho [botão de atualizar quantidade] => ACTION (objeto) => REDUX STORE (com vários REDUCERS dentro) => REDUCER UPDATE (faz a alteração) => Nova renderização

#### Descrição de cada item

ACTION: Objeto com a informação da ação disparada e qualquer informação adicional (dados a serem adicionados, por exemplo). O disparo de uma ACTION é feito com base em algum evento (carregamento da página, clique no botão, etc). Exemplo:

```js
{
  type: "ADD_TO_CART",
  product: {...}
}
```

REDUX STORE: Container do estado global, guarda todos os REDUCERS.

REDUCER: Função responsável por um pedaço do estado global que ouve as ACTIONS e manipula uma propriedade do estado específica. Por exemplo: REDUCER CART, REDUCER USER, REDUCER PRODUCTS, etc. Cada REDUCER manipula sua respectiva propriedade, quando isso é feito o Redux sinaliza todos os componentes que estão ouvindo alterações e utilizam essa propriedade do estado (renderizando o componente novamente).

#### Princípios

- Toda ACTION deve possuir um `type` (`ADD_TO_CART`, `REMOVE_FROM_CART`, etc). Todo `type` é unico em toda a aplicação.
- Uma vez definido que uma propriedade do estado será global, ela só deve ser acessada ou manipulada através do Redux: O estado do Redux torna-se o seu único ponto de acesso. Não é uma boa prática, por exemplo, ter uma propriedade de estado do Redux e uma propriedade de estado React local ao mesmo tempo (duplicidade) quando elas se referem a uma mesma entidade;
- Não podemos mutar o estado do Redux sem uma ACTION. Assim como os estados do React locais, os estados do Redux também são imutáveis, ou seja, não é possível alterar um estado diretamente.
- As ACTIONS e REDUCERS são funções puras e não lidam com side-effects (efeitos colaterais) assíncronos, ou seja, elas não fazem chamadas a API, não lidam com bancos de dados ou qualquer outra atividade assíncrona. Portanto, ao chamar essas funções puras com os mesmos parâmetros, o resultado esperado é sempre o mesmo, o que facilita a realização de testes unitários. (Para lidar com side-effects assíncronos podemos utilizar o Redux Saga)
- Qualquer lógica síncrona para regras de negócio deve ficar no REDUCER e nunca na ACTION (como cálculos, formatações, etc), ou seja, caso necessário, apenas os REDUCERS mutam os dados.
- **Nem toda aplicação precisa utilizar o Redux, o ideal é iniciar a aplicação sem ele e ir sentindo a necessidade de utilização (ou não utilização) com o passar do tempo. (A exceção é quando a aplicação já tem bem descrita quais informações serão globais com certeza)**

### Exemplos do carrinho

#### Exemplo 01

\/ Propriedade do estado global Cart `[]` (Array vazio)
\/ [Botão adicionar ao carrinho]
\/ ACTION `{ type: 'ADD_TO_CART', procuct: { id: 1, title: 'Novo produto', price: 129.9, ...} }`
\/ CART REDUCER (adiciona dado `formattedPrice` e adiciona ao estado) `[ { id:1, title: 'Novo produto', amount: 1, price: '129,9', formattedPrice: 'R$ 129,9',...} ]`
\/ (Aviso do Redux aos componentes que estão ouvindo a propriedade Cart)
Nova Renderização

#### Exemplo 02

\/ [Botão atualizar quantidade]
\/ ACTION `{ type: 'UPDATE_AMOUNT', procuct: 1, amount: 5 }`
\/ CART REDUCER (modifica o dado `amount` e atualiza o estado) `[ { id:1, title: 'Novo produto', amount: 5, ...} ]`
\/ (Aviso do Redux aos componentes que estão ouvindo a propriedade Cart)
Nova Renderização

---

## Configuração do Redux | Configuração do Redux Store e do primeiro REDUCER

Para configurar o Redux, adicionamos o módulo `redux` e o módulo de integração do Redux com o React `react-redux`:

```bash
yarn add redux react-redux
```

Criamos a pasta `src/store` para guardar toda a configuração referente ao Redux Store. Dentro da pasta `store`, para organizar melhor, criamos a pasta `modules` para guardar todos os REDUCERS.

Dentro da pasta `store/modules` criamos o arquivo `cart/reducer.js` e o arquivo `rootReducers.js`. O `cart/reducer.js` exporta uma função que por enquanto retorna um Array vazio (valor inicial da propriedade do estado Cart) e o `rootReducers.js` utiliza o método `combineReducers` do Redux para combinar todos os REDUCERS da aplicação (por enquanto só existe o CART REDUCER).

Dentro da pasta `store`, criamos o arquivo `index.js`, que importa o método `createStore` do Redux, importa os REDUCERS de `modules/rootReducers.js` e exporta o Redux Store através do método `createStore` passando os REDUCERS como parâmetro (parâmetro obrigatório para funcionar).

Apesar da organização adotada (fazendo a combinação de todos os REDUCERS), também seria perfeitamente possível passar qualquer função/REDUCER diretamente pro método `createStore`.

Modificamos o `App.js`, importando o componente `Provider` do módulo React Redux, importando o Redux Store da pasta `store` e envolvendo toda a estrutura da aplicação com o componente `Provider` informando o `store` via propriedade. O `Provider` é o componente que efetivamente integra o Redux ao React, permitindo que toda a aplicação tenha acesso as propriedades de estado globais do Redux Store.

---
