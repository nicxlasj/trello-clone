import { ToDo } from "./ToDo";

export class Column {
    title: string;
    todos : ToDo[]
    expanded : boolean;
    constructor(title: string, todos:ToDo[], expanded: boolean) {
        this.title = title;
        this.todos = todos;
        this.expanded = expanded;
    }
}