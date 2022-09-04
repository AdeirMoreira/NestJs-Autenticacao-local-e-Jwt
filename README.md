<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Autenticação NestJS 💂‍♀️👮‍♀️🚔

Esse case tem o objetivo de praticar autenticação em aplicações [NestJS](https://docs.nestjs.com/).

## Rodar o case 

```
npm install
npm run start
```

## Fazer login

Depois de rodar a aplicação, entre no arquivo api.http e envie a requisição de login preenchendo os campos email e senha com um dos dados moquados no arquivo user.service. Caso os dados enviados estejam corretos, um token jwt é retornado, caso contrario um erro é retornado. Se um token for retornado na requisição de login é possível utilizar a requisição de perfil, caso contratio um erro e retornado.