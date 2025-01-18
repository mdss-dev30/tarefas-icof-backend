# Plano de desenvolvimento

1. Criar o Projeto NestJS
   1. Passo 1: Criar um Novo Projeto
2. Instalar e Configurar o TypeORM
   1. Passo 2.1: Instalar Dependências
3. Configurar o Banco de Dados
   1. Passo 3.1: Criar o Banco de Dados (task_manager)
   2. Passo 3.2: Configurar o .env:
      (DB_HOST=localhost
      DB_PORT=5432
      DB_USER=postgres
      DB_PASS=senha
      DB_NAME=task_manager
      )
   3. Passo 3.3: Configurar o TypeORM no AppModule
4. Criar o Módulo de Tarefas (CRUD Simples)

   1. Passo 4.1: Gerar Estruturas Básicas
   2. Passo 4.2: Criar a Entidade Tarefa
   3. Passo 4.3: Registrar a Entidade no Módulo
   4. Passo 4.4: Implementar o Serviço
   5. Passo 4.5: Implementar o Controlador

5. Testar a API Localmente
   1. Iniciar o Servidor
   2. Testar os Endpoints Use o Postman, Insomnia, ou outro cliente HTTP para testar:
      1. (POST /tasks: Criar uma nova tarefa.
         GET /tasks: Listar todas as tarefas.
         GET /tasks/:id: Buscar uma tarefa específica.
         PUT /tasks/:id: Atualizar uma tarefa.
         DELETE /tasks/:id: Excluir uma tarefa.
         )
6. Adicionar Validação de Dados
   1. Passo 6.1: Instalar Dependências - class-validator e class-transformer
   2. Passo 6.2: Configurar o ValidationPipe
   3. Passo 6.3: Criar DTOs para Validação
   4. Passo 6.4: Atualizar o Controlador

Plano de Implementação
Adicionar Autenticação (Login e Registro)

Criar o módulo de autenticação.
Implementar autenticação usando JWT.
Adicionar registro de usuários e login.
Associar Tarefas a Usuários

Atualizar a entidade User.
Adicionar um relacionamento entre User e Task.
Proteger os endpoints de tarefas para que cada usuário veja apenas suas tarefas.

1. Autenticação com JWT

   1. Passo 1.1: Instalar Dependências
   2. Passo 1.2: Criar o Módulo de Usuários
   3. Passo 1.3: Criar a Entidade User
   4. Passo 1.4: Registrar a Entidade User
   5. Passo 1.5: Criar DTOs para Registro e Login
   6. Passo 1.6: Implementar o Serviço de Usuários
   7. Passo 1.7: Configurar JWT no Módulo de Autenticação
   8. Passo 1.8: Implementar Login e Geração de Token

2. Associar Tarefas a Usuários
   1. Atualize a entidade Task para incluir a relação com User:
   2. Atualize o serviço de tarefas para filtrar pelo usuário autenticado:
   3. Proteger os endpoints usando o @UseGuards(AuthGuard('jwt')).
