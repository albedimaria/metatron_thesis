import React, {useEffect, useState} from "react";
import InstructionPopup from "../popups/instructions/InstructionPopup";
import FolderDropPopup from "../popups/fileLoader/FolderDropPopup";
import ClearCacheButton from "../popups/deleteButton/ClearCacheButton";
import '../outsideContainer.css'
import RefreshButton from "../refreshButton/RefreshButton";

export default function Popups({ setIsPopupOpen }) {
    // State to track which popup is open ('instruction', 'folderDrop', 'clearCache', or null)
    const [openPopup, setOpenPopup] = useState(null);

    // Function to open a specific popup and close others
    const handleOpenPopup = (popupName) => setOpenPopup(popupName);

    // Function to close all popups
    const handleClosePopup = () => setOpenPopup(null);

    // Effect to communicate popup state to the main app
    useEffect(() => {
        setIsPopupOpen(openPopup !== null);
    }, [openPopup, setIsPopupOpen]);

    return (
        <>
            {openPopup !== null && <div className="overlay" onClick={handleClosePopup}></div>}
            <div className="outside-container">
                <InstructionPopup
                    isOpen={openPopup === 'instruction'}
                    onToggle={() => handleOpenPopup('instruction')}
                    onClose={handleClosePopup}
                />
            {/*    <FolderDropPopup
                    isOpen={openPopup === 'folderDrop'}
                    onToggle={() => handleOpenPopup('folderDrop')}
                    onClose={handleClosePopup}
                />
                <ClearCacheButton
                    isOpen={openPopup === 'clearCache'}
                    onToggle={() => handleOpenPopup('clearCache')}
                    onClose={handleClosePopup}
                />*/}
                <RefreshButton />

            </div>
        </>
    );
}


