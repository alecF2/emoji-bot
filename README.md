# Emoji Bot for Discord

A locally run bot that allows you to easily add emojis from other servers to your own server without the need to save images. I could not for the life of me find a Discord bot that simply does this, so I made my own. Or maybe I'm blind.

Written in JavaScript.

## Requirements

* node.js (to run locally)
* Heroku (used if running this bot on the cloud)
* a Discord bot account, learn how to do this here: [Creating a Bot Account (discordpy.readthedocs.io)](https://discordpy.readthedocs.io/en/latest/discord.html)

## Running this locally

* download the repository to a preferred location
* open 'config.json' file, and paste in your bot's token between the empty quotes; learn how to find your bot's token here: [How to Get a Discord Bot Token (Step-by-Step Guide) (writebots.com)](https://www.writebots.com/discord-bot-token/)
* that's all the setup needed. invite your bot to your server. ([Creating a Bot Account (discordpy.readthedocs.io)](https://discordpy.readthedocs.io/en/latest/discord.html#inviting-your-bot)) make sure "Manage Emojis" permission is selected.
* open a terminal in the root of the folder, and run the bot with 'node index.js'. if all went well you should see "Logged in as bot_name#0000" soon after you run it.

## Running this on the cloud

Coming soon.

## Usage

```
>emoji {emoji_name} {link_to_image}
```

## Possible Errors

The bot will send an error message in a number of scenarios:

* you sent an invalid link (links must start with http:// or https://)
* you sent a link but it wasn't a direct image link (e.g. you sent a link to an Imgur album not an actual image)
* you sent a valid image link but the size of the file was too large
* you sent a valid image link but you have already reached the max number of emojis in your server

## Examples

![image-20210212131136850](https://i.imgur.com/ks1WlzI.png)

(no, you don't need to send a picture of the emoji along with the link, that's just the default image embed, and is also a good indication of whether you sent a valid link or not)

![image-20210212131306149](https://i.imgur.com/inHUnfp.png)

(see how there's no image embed here and how it didn't work?)
