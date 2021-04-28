import {string, object } from 'yup'

export let userSchema = object().shape(
    {
        // id: number(),
        // nome: string().required().max(30),
        // sigla: string().required().max(5)
        username: string().required().max(30),
        password: string().required().min(6)
    }
)