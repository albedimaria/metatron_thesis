import React from 'react';
import './modalPopup.css'

const ModalPopup = ({ handleClose }) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            <div className="modalBackground" onClick={handleClose}>
                <div className="modalContainer" onClick={stopPropagation}>
                    <div className="titleCloseBtn">
                        <button onClick={handleClose} aria-label="Close">X</button>
                    </div>
                    <div className="title">
                        <h1>Discover the Metatron Client</h1>
                    </div>
                    <div className="body">
                        <p>Welcome to the <strong>Metatron Client (MC)</strong>, an innovative tool for visualizing and understanding the relationship between music and emotions through sacred geometry.</p>
                        <h2>Why Use the MC?</h2>
                        <p>This client uses Metatron and Platonic solids to provide an intuitive mapping between geometric shapes and audio features, offering a unique way to explore music's emotional dimensions.</p>
                        <h2>Get Started:</h2>
                        <ul>
                            <li><strong>Adjust Parameters:</strong> Use the interactive knobs to modify properties like tempo, danceability, and mood.</li>
                            <li><strong>View Changes:</strong> Observe how the geometric shapes in the 3D space transform in real-time in response to your adjustments.</li>
                            <li><strong>Explore Interactions:</strong> Click and drag in the 3D space to explore different perspectives and gain a deeper understanding of the emotional aspects of music.</li>
                            <li><strong>Note:</strong> Some knobs affect the final sound but the visual change is still to be implemented. Think of them as experimental for now.</li>
                            <li><strong>Generate Music:</strong> Click the button to generate music based on the visual aspect.</li>
                            <li><strong>Back to LSC:</strong> You will find the new music in the LSC: use the search bar and type "generated".</li>
                        </ul>
                        <p>Experience the future of music visualization with the Metatron Client!</p>
                    </div>
                    <div className="footer">
                        <button onClick={handleClose} id="cancelBtn">Close</button>
                        <button onClick={handleClose}>Explore</button>
                    </div>
                </div>
            </div>

        </>


    );
};

export default ModalPopup;
