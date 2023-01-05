module.exports = {
    name: 'resume',
    description: 'play the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Nenhuma música tocando no momento ${inter.member}... tente novamente ? ❌`, ephemeral: true });
        

        if(!queue.connection.paused) return inter.reply({content: `A faixa já está rodando, ${inter.member}... tente novamente ? ❌`, ephemeral: true})

        const success = queue.setPaused(false);
        
        return inter.reply({ content:success ? `música atual ${queue.current.title} resumed ✅` : `algo deu errado ${inter.member}... tente novamente ? ❌`});
    },
};
