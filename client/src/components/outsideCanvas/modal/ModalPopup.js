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
                        <h1>Discover the Latent Space Client</h1>
                    </div>
                    <div className="body">
                        <p>Welcome to the <strong>Latent Space Client (LSC)</strong>, your innovative tool for visualizing and understanding music in a whole new way! The LSC allows you to dive deeper into your music's characteristics through an interactive 3D space.</p>
                        <h2>Why Use the LSC?</h2>
                        <p>Traditional 2D plots can limit your perspective. With LSC, you can explore audio features in a customizable 3D environment, making it easier to see patterns and insights that are not immediately obvious.</p>
                        <h2>Get Started:</h2>
                        <ul>
                            <li><strong>Select Audio Features:</strong> Customize the axes with over ten different features to tailor the visualization to your needs.</li>
                            <li><strong>Interactive Exploration:</strong> Make real-time changes and see instant feedback, helping you understand your music's mood and dynamics.</li>
                            <li><strong>Advanced Filtering:</strong> Use text searches and filters to intuitively navigate through your audio dataset.</li>
                            <li><strong>Sample Selection:</strong> Click on a sample to pass it to the next client to further study it.</li>
                        </ul>
                        <p>Experience the future of music analysis with the Latent Space Client!</p>
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
