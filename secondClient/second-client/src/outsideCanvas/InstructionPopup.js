import ModalPopup from "./ModalPopup";
import './instructionPopup.css'

const InstructionPopup = ({ isOpen, onToggle, onClose }) => {

    return (
        <div>
            <button onClick={onToggle} className="floating-ui-button">
                {isOpen ? 'X' : '?'}
            </button>
            {isOpen && <ModalPopup handleClose={onClose} />}
        </div>
    );
};

export default InstructionPopup;



