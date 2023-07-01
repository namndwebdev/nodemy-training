const socketClient = new Echo({
    ...config.webSocket,
    broadcaster: 'pusher',
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
    disabledTransports: ['sockjs', 'xhr_polling', 'xhr_streaming'],
    disableStats: true,
    authorizer: (channel) => {
        return {
            authorize: (socketId, callback) => {
                client
                    .post(config.baseUrl + 'broadcasting/auth', {
                        body: JSON.stringify({
                            socket_id: socketId,
                            channel_name: channel.name,
                        }),
                    })
                    .then((res) => res.json())
                    .then((res) => {
                        callback(false, res);
                    })
                    .catch((error) => {
                        callback(true, error);
                    });
            },
        };
    },
});
