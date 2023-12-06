const express = require('express');
const Router = express.Router();

const Todos = require('./models');

Router.get('/todo',async (req,res)=>{
    const todoList = await Todos.findAll();
    res.status(200).json(todoList);
})

Router.post('/addtodo',async (req,res)=>{
    const {title, description} = req.body;

    const newTodo = Todos.build({
        'title':title,
        'description':description
    });

    try {
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        console.log(error);
    }
})


Router.get('/todo/:id',async (req,res)=>{
    const todo = await Todos.findOne({
        where:{
            id:req.params.id
        }
    });

    res.status(200).json(todo);
})

Router.patch('/todo/:id',async (req,res)=>{
    const todo = await Todos.findOne({
        where:{
            id:req.params.id
        }
    })

    // const {tit,des,is_completed} = req.body;

    await todo.set({
        is_completed : true
    })

    await todo.save();

    res.status(200).json(todo);
})

Router.put('/todo/:id',async(req,res)=>{
    const todo = await Todos.findOne({
        where:{
            id:req.params.id
        }
    })

    const {title,desc,is_completed} = req.body;

    await todo.set({
        is_completed : is_completed,
        title:title,
        description:desc
    })

    await todo.save();

    res.status(200).json(todo);
})


Router.delete('/todo/:id', async (req,res)=>{
    const todo = await Todos.findOne({
        where:{
            id:req.params.id
        }
    })

    await todo.destroy()

    res.status(200).json({"MESG":"TODO DELETED"});
})

module.exports =  Router;