import { ChatGPTUnofficialProxyAPI } from 'chatgpt';
import { Configuration, OpenAIApi } from 'openai';
import express from 'express';
import dotenv from 'dotenv';
// const express = require('express');
dotenv.config();
const app = express();

app.get("/", async (req, res) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_ACCESS_TOKEN
    })
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
        "model": "gpt-3.5-turbo",
        "messages": [{ "role": "user", "content": "Say this is a test!" }],
        "temperature": 0.7
    })
    res.json({ "message": "success", "data": response });
});

app.listen(4000, () => {
    console.log("Server is running, port : 4000");
})