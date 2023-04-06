<h1 align="center"> Hub de jogos 🎮</h1>

## :memo: Descrição
Projeto criado para a matéria de Códigos de Alta Performance Web. Hub de jogos 🎮.

## :books: Contextualização
* <b>Contextualização </b>: A aplicação em si será um hub de jogos, que terá como funcionalidades pricipais: disponibilizar os jogos, filtrar por estilo, e selecionar o jogo, na aplicação o usuario poderá acessar/jogar os jogos de forma online.

## :wrench: Tecnologias utilizadas
* HTML
* CSS
* Javascript
* node JS
* SQlite

## 🛰️ API
* API: https://www.igdb.com/api

## :game_die: Estrutura de dados
- Usuário
  - as informações de cadastro do usuário no hub
  
```s
  Usuário {
        user_name: "nome do usuário"
        user_sobrenome: "sobrenome do usuário"
        user_img: "img.jpg"
        user_email: "xxxxxx@gmail.com"
        user_password: "xxxxxxxxx"
        user_id: 0000
        user_nickname: "xxxxxxx"
    }
```

- Filtro
  - o usuário deve ser capaz de filtar os jogos por: estilo, nome e quantidade de estrelas
  
```s
  filtro {
        game_name: "Nome do jogo"
        game_style: "estilo do jogo"
        game_Q-rate: "1 star" , "2 stars" , "3 stars" , "4 stars" , "5 stars"
    }
```
- Games
  - o usuário deve ser capaz de ver: o nome do jogo, imagem e estilo
  
```s
  games {
        game_name:"Nome do jogo"
        game_img:"img.jpg"
        game_style:"estilo do jogo"
        game_id:0000
        game_rate:"x stars"
    }
```

## :soon: Implementação futura
* Projeto poderá conter algumas alterações de melhorias.

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Joaogabriel148">
        <sub>
          <b>Joaogabriel148</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto
* em fase de desenvolvimento.

