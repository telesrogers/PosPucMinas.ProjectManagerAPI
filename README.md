# Pontifícia Universidade Católica de Minas Gerais

**Curso:** Arquitetura de Software Distribuído  
**Disciplina:** Plataforma Node.js  
**Professor:** Samuel Martins  

**Project Manager API**
![Diagrama C4 Project Manager API](docs/ProjectManagetAPI_Diagram.png)

O projeto final da disciplina consiste em desenvolver um produto de gerenciamento de tarefas como mostra o desenho arquitetural de alto nível acima.
 
Este projeto será subdividido em etapas, onde cada etapa será representada por uma branch própria, sendo:
- [**Atividade 1:**](docs/Atividade01/Atividade01.pdf) Setup do ambiente de desenvolvimento e modelagem inicial dos dados. 
- [**Atividade 2:**](docs/Atividade02/Atividade02.pdf) Implementação da aplicação de gerenciamento de projetos utilizando a Arquitetura CLEAN, juntamente com a persistência utilizando o padrão repository.
- [**Atividade 3:**](docs/Atividade03/Atividade03.pdf) Implementação da autenticação no módulo de usuários, juntamente com um sistema de cache.
- [**Atividade 4:**](docs/Atividade04/Atividade04.pdf) Conversão da aplicação para uma arquitetura baseada em micro-serviços, utilizando o padrão Pub/Sub do Redis. Iremos extrair o módulo de Tasks da nossa base de código e colocá-lo em um pacote separado, onde este irá rodar separadamente da aplicação. O modelo utilizado será o de monorepos, uma vez que conseguimos aproveitar algumas vantagens desse modelo em comparação com o de multi-repositórios.

**C4 Architecture** — Project Manager API
![Diagrama C4 Project Manager API](docs/ProjectManagetAPI_C4.png)

**C4 Architecture** — Project Manager API — Tasks
![Diagrama C4 Project Manager API](docs/ProjectManagetAPI_Tasks_C4.png)

### Evidências de Testes ###

**Estrutura do projeto** 
![Estrutura do projeto](docs/Atividade01/Evidencia01_ProjectStructure.png)

**Hello World**
![Hello World](docs/Atividade01/Evidencia01_HelloWorld.png)

**Create User**
![CreateUser](docs/Atividade02/Evidencia01_CreateUser.png)

**Get User**
![GetUser](docs/Atividade02/Evidencia02_GetUser.png)

**Get All Users**
![GetUsers](docs/Atividade02/Evidencia03_GetAllUsers.png)

**Create Project**
![CreateProject](docs/Atividade02/Evidencia04_CreateProject.png)

**Get Project**
![GetProject](docs/Atividade02/Evidencia05_GetProject.png)

**Get All Projects**
![GetProjects](docs/Atividade02/Evidencia06_GetAllProjects.png)

**Create Task**
![CreateTask](docs/Atividade02/Evidencia07_CreateTask.png)

**Get Task**
![GetTask](docs/Atividade02/Evidencia08_GetTask.png)

**Get All Tasks**
![GetTasks](docs/Atividade02/Evidencia09_GetAllTasks.png)

### Autenticação ###
**Create User**
![CreateUserAuth](docs/Atividade03/Evidencia01_CreateUser.png)

**Login**
![Login](docs/Atividade03/Evidencia02_Login.png)

**Save Token**
![Login](docs/Atividade03/Evidencia03_SetBearerToken.png)

**Get User**
![GetUser](docs/Atividade03/Evidencia04_GetUser.png)

**Get All Users**
![GetUsers](docs/Atividade03/Evidencia05_GetAllUsers.png)

**Create Project**
![CreateProject](docs/Atividade03/Evidencia06_CreateProject.png)

**Get Project**
![GetProject](docs/Atividade03/Evidencia07_GetProject.png)

**Get All Projects**
![GetProjects](docs/Atividade03/Evidencia08_GetAllProjects.png)

**Create Task**
![CreateTask](docs/Atividade03/Evidencia09_CreateTask.png)

**Get Task**
![GetTask](docs/Atividade03/Evidencia10_GetTask.png)

**Get All Tasks**
![GetTasks](docs/Atividade03/Evidencia11_GetAllTasks.png)

### Database ###

**Users**
![Database](docs/Atividade03/Evidencia12_Database_Users.png)

**Projects**
![Database](docs/Atividade03/Evidencia13_Database_Projects.png)

**Tasks**
![Database](docs/Atividade03/Evidencia14_Database_Tasks.png)