export interface IPoorTodo {
    _id: string,
    description: string,
    status?: string
};

export interface ITodo extends IPoorTodo {
    status:      string,
    category:    string;
    priority:    string;
    started:     Date;
    deadline:    Date;
    finished:    Date;
    createdAt:   Date;
    updatedAt:   Date;
};