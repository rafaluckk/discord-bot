const { ApplicationCommandOptionType } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'playnext',
    description: "song you want to playnext",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the song you want to playnext',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ inter }) { 
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando no momento ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        const song = inter.options.getString('song');

        const res = await player.search(song, {
            requestedBy: inter.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return inter.reply({ content: `Nenhum resultado encontrado ${inter.member}... tente novamente ? ❌`, ephemeral: true });

       if (res.playlist) return inter.reply({ content: `Este comando não suporta listas de reprodução ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        queue.insert(res.tracks[0], 0)

        await inter.reply({ content:`A faixa foi inserida na fila... ela vai tocar a seguir 🎧`});

    }
}