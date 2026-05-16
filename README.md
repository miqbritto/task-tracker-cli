📌 Task Tracker CLI

Uma aplicação de linha de comando (CLI) para gerenciamento de tarefas, desenvolvida em TypeScript. Permite criar, atualizar, remover e acompanhar o status das tarefas diretamente pelo terminal.

🚀 Funcionalidades
Adicionar tarefas
Atualizar tarefas existentes
Deletar tarefas
Marcar tarefas como:
Em progresso
Concluídas
Listar:
Todas as tarefas
Tarefas concluídas
Tarefas em progresso
Tarefas pendentes
Persistência de dados em arquivo JSON

🛠️ Tecnologias utilizadas
Node.js
TypeScript
Módulo nativo fs (filesystem)

📁 Estrutura do projeto
```
task-tracker-cli/
│
├── src/
│   ├── models/
│   │   └── task.model.ts
│   │
│   ├── services/
│   │   └── task.service.ts
│   │
│   ├── utils/
│   │   └── file.util.ts
│   │
│   └── index.ts
│
├── dist/
├── tasks.json
├── package.json
├── tsconfig.json
└── README.md
```

⚙️ Instalação
# Clonar o repositório
```bash
git clone https://github.com/miqbritto/task-tracker-cli.git
```
# Entrar na pasta
```bash
cd task-tracker-cli
```
# Instalar dependências
```bash
npm install
```
▶️ Executando o projeto
Modo desenvolvimento (sem compilar)
```bash
npx ts-node src/cli.ts add "Estudar TypeScript"
```
Modo produção (compilado)
# Compilar
```bash
npx tsc
```
# Executar
```bash
task add "Estudar TypeScript"
```
💻 Uso (Comandos CLI)
➤ Adicionar tarefa
```bash
task add "Descrição da tarefa"
```
➤ Atualizar tarefa
```bash
task update <id> "Nova descrição"
```
➤ Deletar tarefa
```bash
task delete <id>
```
➤ Marcar como concluída
```bash
task done <id>
```
➤ Marcar como em progresso
```bash
task progress <id>
```
➤ Listar todas as tarefas
```bash
task list
```
➤ Listar tarefas concluídas
```bash
task list:done
```
➤ Listar tarefas em progresso
```bash
task list:progress
```
➤ Listar tarefas pendentes
```bash
task list:todo
```
📄 Estrutura do JSON

As tarefas são armazenadas no arquivo tasks.json:
```
[
  {
    "id": 1,
    "description": "Estudar TypeScript",
    "status": 0,
    "createdAt": "2026-01-01T12:00:00.000Z",
    "updatedAt": "2026-01-01T13:00:00.000Z"
  }
]
```
Status possíveis:
```
0 → TODO
1 → IN_PROGRESS
2 → DONE
```
⚠️ Regras e validações
IDs são gerados automaticamente
Operações com IDs inválidos são tratadas
O arquivo tasks.json é criado automaticamente se não existir
Datas são geradas automaticamente

📌 Melhorias futuras
Adicionar cores no terminal
Melhor tratamento de erros
Suporte a comandos abreviados (ex: ls)
Adicionar testes automatizados

🧠 Objetivo do projeto

Este projeto foi desenvolvido para praticar:

Manipulação de arquivos com Node.js
Estruturação de projetos TypeScript
Criação de CLI
Boas práticas de organização de código

📜 Licença

MIT License
