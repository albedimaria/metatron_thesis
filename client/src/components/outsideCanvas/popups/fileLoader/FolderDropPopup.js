import React from 'react';
import FolderDrop from './FolderDrop';
import './folderDropButton.css';


const FolderDropPopup = ({ isOpen, onToggle, onClose }) => {
    return (
        <div>
            <button
                onClick={onToggle}
                className="folder-drop-button"
            >
                {isOpen ? 'close window' : 'load files'}
            </button>
            {isOpen && <FolderDrop handleClose={onClose} />}
        </div>
    );
};

export default FolderDropPopup;

