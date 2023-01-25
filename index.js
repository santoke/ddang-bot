import {Client, Collection, Events, GatewayIntentBits} from "discord.js"
import * as log4js from "log4js";
import * as dotenv from "dotenv";

dotenv.config();

log4js.default.configure({
    appenders: { log: { type: "file", filename: "chatlog.log" } },
    categories: { default: { appenders: ["log"], level: "debug" } }
});


const client = new Client({ intents: [
    GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });
client.once(Events.ClientReady, client => {
   console.log(`log in as ${client.user.tag}`);
});

// set commands
client.commands = new Collection();
client.commands.set("ping", async (interaction) => await interaction.relay("pong"));

client.on(Events.InteractionCreate, interaction => {
    console.log(interaction);
    if (!interaction.isCommand()) return;

    console.log(interaction);
});

const logger = log4js.default.getLogger();
client.on(Events.MessageCreate, message => {
    console.log("$$$$$$$$$=======On Message:", message);
    console.log(message.author.id, message.author.username, ":", message.content, message.attachments, message.reference)
    logger.info(message.author.id, message.author.username, ":", message.content, message.attachments, message.reference)
});

client.login(process.env.BOT_TOKEN);