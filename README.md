## CSS in JS

-

## Eslint

    - yarn add eslint -D
    - yarn add @rocketseat/eslint-config -D
    - yarn eslint --init

    - create arquivo ' .eslintrc.json'
    - adicionar { "extends": "@rocketseat/eslint-config/react" }
    - yarn eslint src --ext .ts,.tsx --fix

## Controlled vs uncontrolled

    - Controlled: fica monitorando a cada digitação e salvar no estado
    - Uncontrolled: !controlled

## useEffect

    useEffect -> efeito colateral

## Prop Drilling

    -  Nesse artigo vamos entender o que é, quando acontece e qual a solução para lidar com prop drilling dentro de uma aplicação React.

    Prop drilling é um estágio do desenvolvimento que acontece quando precisamos obter dados que estão em várias camadas na árvore de componente react. Vamos ver esse conceito funcionando na prática, passando props de um componente para outro.
    [artigo](https://www.alura.com.br/artigos/prop-drilling-no-react-js)


