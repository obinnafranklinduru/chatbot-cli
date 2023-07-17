# Chatbot Command Line Interface

A simple chatbot program that utilizes the OpenAI API to provide interactive conversations with users.

## Description

This chatbot program allows users to have conversations with an AI-powered assistant. It uses the OpenAI API, specifically the GPT-3.5-turbo model, to generate responses based on user input and previous conversation history. The chatbot is designed to simulate natural language conversations and provide helpful and engaging responses.

## Features

- Interactive conversation: Users can have back-and-forth conversations with the chatbot.
- Natural language processing: The chatbot utilizes advanced natural language processing capabilities to understand and generate meaningful responses.
- Exit command: Users can exit the conversation by typing "bye".

## Prerequisites

Before running the chatbot, make sure you have the following:

- Node.js (v14 or higher) installed on your machine.
- An OpenAI API key. You can obtain one from the OpenAI website.
- Yarn - a package manager for your code.

## Installation

1. Clone the repository:

   ```bash
   https://github.com/obinnafranklinduru/chatbot-cli
   ```

2. Navigate to the project directory:

   ```bash
   cd chatbot-cli
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

4. Set up environment variables:

   - Create a .env file in the project directory.
   - Add the following line to the .env file, replacing YOUR_API_KEY with your actual
     OpenAI API key:
     ```bash
     OPENAI_API_KEY=YOUR_API_KEY
     ```

5. Run the chatbot:

   ```bash
   yarn run start
   ```

## Usage

1. Run the chatbot by following the installation instructions.
2. The chatbot will display a prompt, waiting for your input.
3. Type your message and press Enter to send it to the chatbot.
4. The chatbot will respond with its generated message.
5. Continue the conversation as desired, and type "bye" to exit.

## Customization

- Model Selection: You can modify the code to use a different OpenAI model by changing the model parameter in the `openai.createChatCompletion` method call in the `chatLoop` function.
- Conversation History: If you want to persist the conversation history across chatbot sessions, you can store it in a database or file system and load it when the chatbot starts.
- UI Enhancements: If you want to create a more interactive user interface, you can modify the `getUserInput` function to use a graphical interface or voice input.

## Limitations

- The chatbot's responses are generated based on patterns learned from a large dataset. It may produce inaccurate or nonsensical answers in some cases.
- The OpenAI API has usage limitations, such as rate limits and token consumption. Ensure that you stay within the limits of your API plan to avoid disruptions.

## Contributing

Contributions to the project are welcome! If you find any issues or would like to suggest improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
