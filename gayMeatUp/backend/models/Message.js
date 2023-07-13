export default class MessageChannel {
    constructor() {
        this.subscribers = {};
    }

    subscribe(eventType, callback) {
        if (!this.subscribers[eventType]) {
            this.subscribers[eventType] = [];
        }
        this.subscribers[eventType].push(callback);
    }

    unsubscribe(eventType, callback) {
        if (!this.subscribers[eventType]) {
            return;
        }
        const index = this.subscribers[eventType].indexOf(callback);
        if (index > -1) {
            this.subscribers[eventType].splice(index, 1);
        }
    }

    publish(eventType, data) {
        if (!this.subscribers[eventType]) {
            return;
        }
        this.subscribers[eventType].forEach(callback => {
            callback(data);
        });
    }
}

// Example usage:
const channel = new MessageChannel();

function handleData(data) {
    console.log("Received data:", data);
}

channel.subscribe('data', handleData);
channel.publish('data', 'Hello, world!');
// Output: "Received data: Hello, world!"

channel.unsubscribe('data', handleData);
channel.publish('data', 'This message will not be received');
