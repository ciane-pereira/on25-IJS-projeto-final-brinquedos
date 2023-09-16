<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

---

# Projeto Final IJS- Conexão de Crianças e Brinquedos

Turma On25 - Imersão JavaScript | Projeto Final | 2023 | Aluna: [Ciane Pereira](https://github.com/ciane-pereira)


<h1 align="center">
  <img src="assets/blocos de brinquedo.jpg" alt="foto brinquedos" width="500">
</h1>

## Objetivo

A proposta do projeto é conectar famílias que tem brinquedos em casa, que as crianças cresceram, então não brincam mais, com instituições carentes que cuidam de crianças.


### Detalhes do Projeto

A ideia do projeto surgiu, porque tenho brinquedos em casa que meu filho não brinca mais e não sei onde doar. Também para ensiná-lo a solidariedade com as pessoas a e reutização de objetos. São brinquedos bem cuidados, sem nenhum quebrado ou estragado.

O primeiro passo é buscar estalecimentos parceiros no bairro como padaria, supermercado e academia para receber os brinquedos. Recolher os brinquedos e selecionar as condições de uso. Criar um cadastro de instutuições na região onde moro, que apoiam famílias carentes no cuidado com as crianças, para repassar os brinquedos.

As pessoas que doaram também podem se cadastrar para acompanhar o momento de entrega nas instituições que acolhem as crianças diariamente.


### Detalhes Técnicos do Projeto

O projeto foi desenvolvido aplicando os conteúdos ministrados durante as aulas:
- Test Driven Development 
- Orientação a Objetos 
- Clean Code
- Refatoração
- SOLID

Tecnologias utilizadas:

JavaScript
Jest
Node.js

```javascript
class Doador {
    nome;
    telefone;
    email;
  
    constructor(nome, telefone, email) {
        if(this.validarEmail(email) && this.validarCelular(telefone)) {            
        this.nome = nome;    
        this.telefone = telefone; 
        this.email = email;
        
        } else {
            const errorMessage = 'Dados inválidos.';            
            throw new Error(errorMessage);
        }       
    }

    validarEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);     
      }      

<h2 align="center">
  <img src="./assets/codigo teste.png" width="500">
</h2>


### Contatos

- [LinkedIn](https://www.linkedin.com/in/ciane-pereira/)
- [Github](https://github.com/ciane-pereira)

<p align="center">
  Desenvolvido por Ciane Pereira
</p>