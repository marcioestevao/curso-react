import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Família</h1>
        {/* Pode ser feito assim, passando o objeto props diretamente para o objeto filho */}
        {/* { React.cloneElement(props.children, props) } */}
        
        {/* 
        Mas o jeito correto é passando um clone do objeto para o filho, através do spread { ...}
        Deve instalar o plugin para o babel conseguir fazer o transpiling: 
        npm i --save-dev babel-plugin-transform-object-rest-spread@6.22.0
        
        e após adicionar a seguinte linha no webpack.config.js
        plugins: ['transform-object-rest-spread']
        
        */}
        {/* { React.cloneElement(props.children, {...props}) } */}

        {/* 
            Porem o metodo acima, funciona somente com um elemento filho, se tiver mais que um filho não funciona 
            Para funcionar deve-se utilizar o metodo map (mesmo funcionamento do javaScript), que tem a funcionalidade
            de pegar um array e devolver um outro array transformado.
            P ex. pode pegar uma lista de objetos Aluno, contendo Nome e Nota cada objeto e retornar um array contendo 
            apenas a nota, ou seja, um array de double.

            No caso abaixo, vai retornar a lista de children, porém cada item adicionado do complemento LastName que está no objeto PAI
        */}
        {/* { React.Children.map(props.children,
                child => React.cloneElement(child, {...props})) } */}

        {/*
            Ou para não ficar repetindo sempre a função acima, pode-se encapsular esta funcionalidade em outro arquivo 
            e chamar sempre que necessário:

            como o exemplo abaixo que foi encapsulado no reactUtils, na pasta utils
            Deve-se criar a referência para o mesmo import { childrenWithProps } from '../utils/reactUtils'
          */}

          { childrenWithProps(props.children, props) }

    </div>
)