import React, { useState } from 'react';
import { AudioFileProcessor } from './AudioFileProcessor';
import './folderDrop.css';

const FolderDrop = ({ handleClose }) => {
    const [dropStatus, setDropStatus] = useState('drag and drop audio files here');

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDropStatus('Analyzing files...');

        let items = e.dataTransfer.items;
        if (items) {
            AudioFileProcessor(items, setDropStatus);
        } else {
            setDropStatus('something went wrong... sorry')
        }
    };

    return (

        <div onClick={handleClose}>
            <div className="dad-container" onClick={stopPropagation}>
                <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="drag-and-drop"
                >
                    {typeof dropStatus === 'string' ? <p>{dropStatus}</p> : dropStatus}
                </div>
            </div>
        </div>


    );
};

export default FolderDrop;
