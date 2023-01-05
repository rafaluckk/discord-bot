module.exports = {
    name: 'stop',
    description: 'stop the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content:`Nenhuma música tocando no momento ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        queue.destroy();

        inter.reply({ content: `Musica parou intero desse servidor, até a próxima ✅`});
    },
};