import colors from 'colors';
import Spinnies from 'spinnies';
import inquirer from 'inquirer';

import openai from './config/open-ai.js';

const spinner = new Spinnies();
const chatHistory = []; // Store conversation history

async function getUserInput() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'userInput',
                message: colors.yellow('You: '),
            },
        ]);

        const userName = answers.userInput;
        return userName;
    } catch (error) {
        console.error(colors.red('Error:', error.message));
        return null;
    }
}

async function chatLoop() {
    while (true) {
        const userInput = await getUserInput();

        try {
            if (!userInput) {
                console.log(colors.yellow('Please provide some input.'));
                continue;
            }

            // Construct messages by iterating over the history
            const messages = chatHistory.map(([role, content]) => ({
                role,
                content,
            }));

            // Add latest user input
            messages.push({ role: "user", content: userInput });

            // Call the API with user input and history
            spinner.add('thinking', { text: "Bot is processing..." });
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: messages,
            });

            // Get completion text/content
            const completionText = completion.data.choices[0].message.content;

            if (userInput.toLowerCase() === "bye") {
                spinner.update('thinking', { text: 'Thank you for using our services!' });
                console.log(colors.green('Bot: ') + completionText);
                spinner.succeed('thinking');

                return;
            }

            spinner.update('thinking', { text: 'Bot is Done!' });
            console.log(colors.green('Bot: ') + completionText);
            spinner.succeed('thinking');

            // Update history with user input and assistant response
            chatHistory.push(["user", userInput]);
            chatHistory.push(["assistant", completionText]);
        } catch (error) {
            spinner.fail('thinking', { text: `Error: ${error.message}` });
        }
    }
}

export default chatLoop;