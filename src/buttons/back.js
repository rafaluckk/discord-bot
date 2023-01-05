module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando no momento... tente novamente ? ❌`, ephemeral: true });

    if (!queue.previousTracks[1]) return inter.reply({ content: `There was no music played before ${inter.member}... tente novamente ? ❌`, ephemeral: true });

    await queue.back();

    inter.reply({ content:`Reproduzindo a faixa **anterior** ✅`, ephemeral: true});
}
