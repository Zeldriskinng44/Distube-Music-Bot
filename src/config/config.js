require('dotenv').config();


module.exports = {
    token: '',
    clientId: '1310336013876330637',
    guildId: '1331409022632464474',
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    mongoUri:"
mongodb+srv://zonzin736:zin736@diso.wa1fx.mongodb.net/?retryWrites=true&w=majority
",
    spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
