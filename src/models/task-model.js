import { LEVELS } from "./levels";

export default class TaskModel{
    name;
    description;
    isDone = false;
    level = LEVELS.NORMAL;

    constructor(name, description, isDone, level){
        this.name = name;
        this.description = description;
        this.isDone = isDone;
        this.level = level;
    }
    
}