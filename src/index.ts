#!/usr/bin/env node

import { TaskService } from "./services/task.service";

const taskService = new TaskService();

const [, , command, ...args] = process.argv;

switch (command) {
    case "add":
        taskService.addTask(args.join(" "));
        break;
    case "update":
        taskService.updateTask(Number(args[0]), args.slice(1).join(" "));
        break;
    case "delete":
        taskService.deleteTask(Number(args[0]));
        break;
    case "done":
        taskService.markAsDone(Number(args[0]));
        break;
    case "progress":
        taskService.markAsInProgress(Number(args[0]));
        break;
    case "list":
        console.table(taskService.listTasks());
        break;
    case "list:done":
        console.table(taskService.listDone());
        break;
    case "list:progress":
        console.table(taskService.listInProgress());
        break;
    case "list:todo":
        console.table(taskService.listTodo());
        break;
    default:
        console.log("Comando não reconhecido");
        break;
}