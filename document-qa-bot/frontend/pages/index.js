// import { useState } from 'react';
// import axios from 'axios';
// import UploadForm from '../components/UploadForm';
// import ChatBox from '../components/ChatBox';

// export default function Home() {
//     return (
//         <div>
//             <h1>Document Q&A Bot</h1>
//             <UploadForm />
//             <ChatBox />
//         </div>
//     );
// }



import React from 'react';
import UploadForm from '../components/UploadForm';
import ChatBox from '../components/ChatBox';
import styles from '../styles/Home.module.css'; // Ensure this path is correct

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Document Q&A Bot</h1>
            <UploadForm />
            <ChatBox />
        </div>
    );
}

