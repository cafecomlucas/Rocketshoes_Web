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
