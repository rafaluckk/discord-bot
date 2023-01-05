module.exports = {
    name: 'back',
    description: "Go back the song before",
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando no momento ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        if (!queue.previousTracks[1]) return inter.reply({ content: `Não havia música tocada antes ${inter.member}... tente novamente ? ❌`, ephemeral: true });

        await queue.back();

        inter.reply({ content:`Reproduzindo a faixa **anterior** ✅`});
    },
};