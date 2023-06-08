// Ensure that you are using Node.js v20.2.0 and discord.js v14.11.0

// dotenv is used to load variables from .env file into process.env
require('dotenv').config()

// Importing necessary features from discord.js library
const { Client, GatewayIntentBits } = require("discord.js")

// Creating a new bot client
const client = new Client({
    // Prevents the bot from mentioning @everyone, @here, and all roles
    allowedMentions: { parse: [] },

    // Intents the bot needs for it to work properly, these intents are required for receiving certain events from Discord
    intents: [
        GatewayIntentBits.Guilds,           // Needed for bot to receive guild (server) events
        GatewayIntentBits.GuildMessages,    // Needed for bot to receive message events in guilds (servers)
        GatewayIntentBits.MessageContent    // Needed for bot to receive message content
    ]
})

// Event listener for when the bot has logged in
client.on("ready", () => {
    // Logging the bot's tag to the console
    console.log(`Logged in as ${client.user.tag}!`)
})

// Event listener for when a message is created
client.on("messageCreate", async (message) => {
    // Prevents the bot from responding to its own messages
    if(message.author.id === client.user.id) return

    // Extracting the content of the message
    const content = message.content

    // Logging the message content to the console
    console.log(content)

    // Add your bot logic here
    // This is where you will add your commands and responses for your bot
})

// Bot login using the token from the .env file
client.login(process.env.BOT_TOKEN)
