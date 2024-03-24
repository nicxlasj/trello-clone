export class ToDo {
    id: number;
    title: string;
    isAdded?: boolean;
    constructor(id: number, title: string, isAdded?: boolean){
        this.id = id;
        this.title = title;
        this.isAdded = isAdded;
    }
}