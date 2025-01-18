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
