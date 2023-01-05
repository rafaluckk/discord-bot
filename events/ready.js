module.exports = async (client) => {
    console.log(`Conectado ao cliente ${client.user.username}\n-> Pronto em ${client.guilds.cache.size} servidores para um total de ${client.users.cache.size} usuários`);
    client.user.setActivity(client.config.app.playing);

    
};