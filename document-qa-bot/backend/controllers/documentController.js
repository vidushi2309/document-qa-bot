const fs = require('fs');
const pdfParse = require('pdf-parse');
const OpenAI = require('openai');
const Document = require('../models/Document');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.processDocument = async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const fileBuffer = fs.readFileSync(req.file.path);
    const parsedData = await pdfParse(fileBuffer);
    const content = parsedData.text;

    const newDoc = new Document({ filename: req.file.originalname, content });
    await newDoc.save();

    res.json({ message: 'File uploaded and processed successfully', content });
};

exports.askQuestion = async (req, res) => {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: 'Question is required' });

    const document = await Document.findOne().sort({ _id: -1 });
    if (!document) return res.status(404).json({ error: 'No document found' });

    const prompt = `Document Content: ${document.content}\n\nUser Question: ${question}\nAnswer:`;
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: prompt }]
    });

    res.json({ answer: response.choices[0].message.content });
};
