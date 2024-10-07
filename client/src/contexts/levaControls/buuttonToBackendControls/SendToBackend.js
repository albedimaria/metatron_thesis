
import {socket} from "../../../socket/Socket";

export function sendDataToBackend(sampleData) {
    // Emit data to the Flask server
    socket.emit('send_data_to_server', sampleData);
}
