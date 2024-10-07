import React from 'react';
import './clearCacheButton.css';
import '../../modal/modalPopup.css';
import { socket } from '../../../../socket/Socket';

const ClearCacheButton = ({ isOpen, onToggle, onClose }) => {
    const handleConfirmClearCache = () => {
        console.log("Clearing cache confirmed, sending message to backend.");
        // Use socket.emit to send a custom event for clearing cache
        socket.emit('clear_cache_request', { action: 'clearCache' });
        onClose(); // Close the popup
    };


    return (
        <div>
            <button onClick={onToggle} className="clear-cache-button">
                {isOpen ? 'close window' : 'clear cache'}
            </button>
            {isOpen && (
                <div className="confirmation-popup">
                    <p>Are you sure you want to delete all samples?</p>
                    <div className="footer-cache">
                        <button onClick={handleConfirmClearCache}>Yes</button>
                        <button onClick={onClose} id="cancelBtn">No</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClearCacheButton;
