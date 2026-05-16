import * as fs from "fs";

interface Task {
    id: number;
    description: string;
    status: Status;
    createdAt: Date;
    updatedAt?: Date;
}

enum Status {
    TODO,
    IN_PROGRESS,
    DONE
}

export class Tasks{

allTasks: Task[] = [];

constructor(){
    this.loadFromFile;
}

getNextId(): number {
    if (this.allTasks.length === 0) return 1;

    const maxId = Math.max(...this.allTasks.map(t => t.id));
    return maxId + 1;
}

addTask(task: string): void{
    let newTask: Task;
    newTask = {
        id: this.getNextId(),
        description: task,
        status: Status.TODO,
        createdAt: new Date()
    }
    this.allTasks.push(newTask);
    console.log(`Task added successfully (ID: ${newTask.id})`);
    this.saveToFile();
}

updateTask(id: number, description: string): void{
    const task = this.allTasks.find(t => t.id === id);
    if(task){
        task.description = description;
        task.updatedAt = new Date();
        this.saveToFile();
    }else{
        console.log("Task não encontrada");
    }
    
}

deleteTaks(id: number){
    const position = this.allTasks.findIndex(t => t.id === id);
    if(position !== -1){
        this.allTasks.splice(position, 1)
        this.saveToFile()
    }else{
        console.log("Task não encontrada");
    }
}

markAsDone(id: number){
    const task = this.allTasks.find(t => t.id === id);
    if(task){
        task.status = Status.DONE
        this.saveToFile()
    }else{
        console.log("Task não encontrada");
    }
}

markAsInProgress(id: number){
    const task = this.allTasks.find(t => t.id === id);
    if(task){
        task.status = Status.IN_PROGRESS
        this.saveToFile()
    }else{
        console.log("Task não encontrada");
    }
}

listTasks(){
    console.log(this.allTasks)
}

saveToFile(): void {
    const data = JSON.stringify(this.allTasks, null, 2);
    fs.writeFileSync("tasks.json", data);
}

loadFromFile(): void{
   if(fs.existsSync("tasks.json")){
    const data = fs.readFileSync("tasks.json", "utf8")
    this.allTasks = JSON.parse(data);
   }
}

get doneTasks() {
    return this.allTasks.filter(t => t.status === Status.DONE);
}

get inProgressTasks() {
    return this.allTasks.filter(t => t.status === Status.IN_PROGRESS);
}

get toDoTasks() {
    return this.allTasks.filter(t => t.status === Status.TODO);
}

}

const task = new Tasks();

task.addTask("Estudar TS");
task.addTask("Fazer almoço")
task.addTask("Arrumar quarto")
task.updateTask(1, "Estudar TS e Angular")
task.deleteTaks(2)



console.log(task.allTasks);



