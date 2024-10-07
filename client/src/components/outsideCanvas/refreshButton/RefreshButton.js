import React from 'react';
import '../popups/instructions/instructionPopup.css'

const RefreshButton = () => {
    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <button
            className="floating-ui-button"
            onClick={refreshPage}>refresh</button>
    );
};

export default RefreshButton;
