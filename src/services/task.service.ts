import { log } from 'node:console';
import { Task, Status } from '../models/task.model';
import { readFile, writeFile } from '../utils/file.util';

export class TaskService {
    private tasks: Task[] = [];

    constructor() {
        this.tasks = readFile();
    }

    getNextId(): number {
    if (this.tasks.length === 0) return 1;

    const maxId = Math.max(...this.tasks.map(t => t.id));
    return maxId + 1;
}

    addTask(description: string): void{
        let newTask: Task;
        newTask = {
            id: this.getNextId(),
            description: description,
            status: Status.TODO,
            createdAt: new Date().toISOString()
        };

        this.tasks.push(newTask);
        writeFile(this.tasks);
        console.log(`Task added successfully (ID: ${newTask.id})`);
    }

    updateTask(id: number, description: string): void{
        const task = this.tasks.find(t => t.id === id);
        if(task){
            task.description = description;
            task.updatedAt = new Date().toISOString();
            writeFile(this.tasks);
        }else{
            console.log("Task não encontrada");
        }
        console.log(`Task updated successfully (Description: ${task?.description})`);
    }

    deleteTask(id: number){
        const position = this.tasks.findIndex(t => t.id === id);
        if(position !== -1){
            this.tasks.splice(position, 1)
            writeFile(this.tasks);
        }else{
            console.log("Task não encontrada");
        }
   }

   markAsDone(id: number){
        this.updateStatus(id, Status.DONE);
   }

   markAsInProgress(id: number){
        this.updateStatus(id, Status.IN_PROGRESS);
   }

   listTasks(): Task[] {
        return this.tasks;
   }

   listDone(): Task[] {
        return this.tasks.filter(t => t.status === Status.DONE);
   }

   listInProgress(): Task[] {
        return this.tasks.filter(t => t.status === Status.IN_PROGRESS);
   }

   listTodo(): Task[] {
        return this.tasks.filter(t => t.status === Status.TODO);
   }

   

   updateStatus(id: number, status: Status){
        const task = this.tasks.find(t => t.id === id);
        if(task){
            task.status = status;
            task.updatedAt = new Date().toISOString();
            writeFile(this.tasks);
        }else{
            console.log("Task não encontrada");
        }
   }




}