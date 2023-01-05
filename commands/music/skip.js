module.exports = {
    name: 'skip',
    description: 'stop the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

         if (!queue || !queue.playing) return inter.reply({ content:`Nenhuma música tocando no momento ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `música atual ${queue.current.title} pulou ✅` : `algo deu errado ${inter.member}... tente novamente ? ❌`});
    },
};