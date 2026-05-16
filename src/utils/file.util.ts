import * as fs from "fs";

const FILE_PATH = "tasks.json";

export function readFile(): any[] {
    if(!fs.existsSync(FILE_PATH)){
        fs.writeFileSync(FILE_PATH, "[]");
        return [];
    }

    const data = fs.readFileSync(FILE_PATH, "utf8");
    return JSON.parse(data);
}

export function writeFile(data: any[]) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), "utf8");
}