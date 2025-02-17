import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();


// greetHandler()
function greetHandler(name) {
    console.log('Hello '+ name);
}

// goodbyeHandler()
function goodbyeHandler(name) {
    console.log('Goodbye '+ name);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');

// Error Handling
myEmitter.on('error', (err) => {
    console.log('An error occured:', err);
});

// Simulate error
myEmitter.emit('error', new Error('Something went wrong'));