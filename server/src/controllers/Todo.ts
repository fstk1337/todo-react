import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Todo from "../models/Todo";

const createTodo = (req: Request, res: Response, next: NextFunction) => {
    const { category, description, priority, created, deadline, status, finished } = req.body;

    const todo = new Todo({
        _id: new mongoose.Types.ObjectId(),
        category,
        description,
        priority,
        created,
        deadline,
        status,
        finished
    });

    return todo
        .save()
        .then((todo) => res.status(201).json({ todo }))
        .catch((error) => res.status(500).json({ error }));
};

const readTodo = (req: Request, res: Response, next: NextFunction) => {
    const todoId = req.params.todoId;

    return Todo
        .findById(todoId)
        .then((todo) => (
            todo ? res.status(200).json({ todo }) 
            : res.status(404).json({ message: `Todo with id = ${todoId} not found` })))
        .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Todo
        .find()
        .then((todos) => res.status(200).json({ todos }))
        .catch((error) => res.status(500).json( { error }))
};

const updateTodo = (req: Request, res: Response, next: NextFunction) => {
    const todoId = req.params.todoId;

    return Todo.findById(todoId)
        .then((todo) => {
            if (todo) {
                todo.set(req.body);

                return todo
                    .save()
                    .then((todo) => res.status(200).json({ todo }))
                    .catch((error) => res.status(500).json({ error }));
            }
            res.status(404).json({ message: `Todo with id = ${todoId} not found`});
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
    const todoId = req.params.todoId;

    return Todo
        .findByIdAndDelete(todoId)
        .then((todo) => (
            todo ? res.status(204).json({ message: `Todo with id = ${todoId} deleted`})
            : res.status(404).json({ message: `Todo with id = ${todoId} not found` })
        ))
        .catch((error) => res.status(500).json({ error }));
};

export default { createTodo, readTodo, readAll, updateTodo, deleteTodo };