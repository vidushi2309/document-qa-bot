// import { useState } from 'react';
// import axios from 'axios';

// export default function UploadForm() {
//     const [file, setFile] = useState(null);

//     const handleUpload = async () => {
//         const formData = new FormData();
//         formData.append('file', file);
//         await axios.post('http://localhost:5000/api/documents/upload', formData);
//         alert('File uploaded successfully');
//     };

//     return (
//         <div>
//             <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//             <button onClick={handleUpload}>Upload</button>
//         </div>
//     );
// }


import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/UploadForm.module.css'; // Ensure correct path

export default function UploadForm() {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        if (!file) return alert("Please select a file!");

        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:5000/api/documents/upload', formData);
            alert('File uploaded successfully');
        } catch (error) {
            console.error("Upload failed:", error);
            alert('Upload failed');
        }
    };

    return (
        <div className={styles.uploadContainer}>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} className={styles.fileInput} />
            <button onClick={handleUpload} className={styles.uploadButton}>Upload</button>
        </div>
    );
}
