import React, {useEffect, useState} from "react";
import InstructionPopup from "./InstructionPopup";
import './outsideContainer.css'

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
            </div>
        </>
    );
}


