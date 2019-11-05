import { ProfloAgileActionTypes } from 'node_modules/proflo-sprint-lib/lib/action';
export function sendDataToWebSocket(packet, socket, productId) {
    let action;
    if (packet.payload !== undefined) {
        switch (packet.type) {
            case ProfloAgileActionTypes.MOVE_COLUMN:
                action = packet.type;
                packet.productId = productId;
                socket.emit(`${action}`, packet);
                break;
            case ProfloAgileActionTypes.MOVE_CARD_WITHIN_COLUMN:
                action = packet.type;
                packet.productId = productId;
                socket.emit(`${action}`, packet);
                break;
            case ProfloAgileActionTypes.MOVE_CARD_ACROSS_COLUMN:
                action = packet.type;
                packet.productId = productId;
                socket.emit(`${action}`, packet);
                break;
            case ProfloAgileActionTypes.ADD_COLUMN:
                action = packet.type;
                packet.productId = productId;
                socket.emit(`${action}`, packet);
                break;
            case ProfloAgileActionTypes.DELETE_COLUMN:
                action = packet.type;
                packet.productId = productId;
                socket.emit(`${action}`, packet);
            case ProfloAgileActionTypes.FREEZE_BOARD:
                action = packet.type;
                packet.productId = productId;
                socket.emit(`${action}`, packet);
            case ProfloAgileActionTypes.UNFREEZE_BOARD:
                action = packet.type;
                packet.productId = productId;
                socket.emit(`${action}`, packet);
        }

    }
}
