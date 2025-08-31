# Pontifícia Universidade Católica de Minas Gerais

**Curso:** Arquitetura de Software Distribuído  
**Disciplina:** Plataforma Node.js  
**Professor:** Samuel Martins  

<img width="1558" height="667" alt="image" src="https://github.com/user-attachments/assets/510898e7-3bfb-4abf-a515-82235230a224" />

O projeto final da disciplina consiste em desenvolver um produto de gerenciamento de tarefas como mostra o desenho arquitetural de alto nível acima.
 
Este projeto será subdividido em etapas, onde cada etapa será representada por uma branch própria, sendo:
- [**Exercício 1:**](docs/Exercicio01.pdf) Setup do ambiente de desenvolvimento e modelagem inicial dos dados.
- [**Exercício 2:**](docs/Exercicio02.pdf) Implementação da aplicação de gerenciamento de projetos utilizando a Arquitetura CLEAN, juntamente com a persistência utilizando o padrão repository.
- [**Exercício 3:**](docs/Exercicio03.pdf) Implementação da autenticação no módulo de usuários, juntamente com um sistema de cache.
- [**Exercício 4:**](docs/Exercicio04.pdf) Conversão da aplicação para uma arquitetura baseada em microserviços, utilizando o padrão Pub/Sub do Redis. Iremos extrair o módulo de Tasks da nossa base de código e colocá-lo em um pacote separado, onde este irá rodar separadamente da aplicação. O modelo utilizado será o de monorepos, uma vez que conseguimos aproveitar algumas vantagens desse modelo em comparação com o de multi-repositórios.
