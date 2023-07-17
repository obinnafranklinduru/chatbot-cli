import colors from 'colors';
import chatLoop from './chatbot.js';

async function main() {
    console.log(colors.bold.green('Welcome to the Chatbot Program!'));
    console.log(colors.bold.green('You can start chatting with the bot.\n'));

    try {
        await chatLoop();
    } catch (error) {
        console.error(colors.red('Error:', error.message));

        return
    }
}

main();
