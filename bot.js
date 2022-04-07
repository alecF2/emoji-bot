const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL'] });

const prefix = '>';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.channels.cache.get('437829904415850497')
        .send(`Online!`).catch(console.log);
})

client.on('message', message => {
    if (message.author.bot) {
        return;
    }
    if (!message.content.startsWith(prefix)) {
        return;
    }

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    if (command === "emoji") {
        if (args.length === 2) {
            if (!((pattern.test(args[1])) && (args[1].startsWith('https://') ||
                args[1].startsWith('http://')))) {
                message.channel.send(`That doesn't look like a valid link.`)
                    .catch(console.log);
                return;
            }
            if (!(/^[a-zA-Z0-9_]+$/.test(args[0]))) {
                message.channel.send(`Emoji name can contain only ` +
                `alphanumeric characters and underscores.`)
                    .catch(console.log);
                return;
            }
            message.guild.emojis.create(args[1], args[0])
                .then(emoji => {
                    console.log(message.author.tag + " created new emoji: " +
                        emoji.name);
                    const newEmoji = message.guild.emojis.cache
                        .find(newEmoji => newEmoji.name === args[0]);
                    message.channel.send(`Added ${newEmoji} to the server!`)
                        .catch(console.error);
                })
                .catch(error => {
                    console.error(`Couldn't add that emoji: `, error);
                    message.channel.send("I couldn't add that" +
                        " emoji.\nEither a bad link or you have reached max" +
                        " emojis in this server.\n```\nUsage: >emoji" +
                        " {emoji_name} {link_to_image}\n```")
                            .catch(console.error);
                });
        } else {
            message.channel.send("```\nUsage: >emoji {emoji_name}" +
                " {link_to_image}\n```").catch(console.error);
        }
    }
})

client.login(config.TOKEN).catch(console.error);
