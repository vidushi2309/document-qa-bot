// import { useState } from 'react';
// import axios from 'axios';

// export default function ChatBox() {
//     const [question, setQuestion] = useState('');
//     const [answer, setAnswer] = useState('');

//     const handleAsk = async () => {
//         const res = await axios.post('http://localhost:5000/api/documents/ask', { question });
//         setAnswer(res.data.answer);
//     };

//     return (
//         <div>
//             <input type="text" placeholder="Ask a question" value={question} onChange={(e) => setQuestion(e.target.value)} />
//             <button onClick={handleAsk}>Ask</button>
//             <p><b>Answer:</b> {answer}</p>
//         </div>
//     );
// }


import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/ChatBox.module.css';

export default function ChatBox() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleAsk = async () => {
        if (!question.trim()) return alert("Enter a question!");

        try {
            const res = await axios.post('http://localhost:5000/api/documents/ask', { question });
            setAnswer(res.data.answer);
        } catch (error) {
            console.error("Error fetching answer:", error);
            alert('Failed to get response');
        }
    };

    return (
        <div className={styles.chatContainer}>
            <input
                type="text"
                placeholder="Ask a question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className={styles.inputBox}
            />
            <button onClick={handleAsk} className={styles.askButton}>Ask</button>
            <p className={styles.answer}><b>Answer:</b> {answer}</p>
        </div>
    );
}
