const app = {
    api: {
        getCurrentUser() {
            const url = config.baseUrl + 'api/auth/current-user?v=' + new Date().getTime();

            return client.get(url);
        },
    },
    setupAuthenticate() {
        const currentUser = JSON.parse(window.localStorage.getItem('user') || 'null');

        if (currentUser) {
            const currentUserEle = document.querySelector('#current-user');
            const avatarEle = document.querySelector('.user-avatar');

            currentUserEle.style.opacity = 1;
            avatarEle.src = currentUser.avatar_url;
            avatarEle.alt = currentUser.full_name;
        }

        this.api
            .getCurrentUser()
            .then((res) => res.json())
            .then((res) => {
                window.localStorage.setItem('user', JSON.stringify(res.data));
                const currentUserEle = document.querySelector('#current-user');
                const avatarEle = document.querySelector('.user-avatar');
                const userProfileLink = document.querySelector('#user-avatar');

                currentUserEle.style.opacity = 1;
                avatarEle.src = res.data.avatar_url || '../images/fallback-avatar.jpg';
                avatarEle.alt = res.data.full_name;
                userProfileLink.href = `${config.routes.root}/@${res.data.username}`;

                socketClient.private(res.data.logout_channel).listen('.App\\Api\\Events\\LogoutInvalidSession', () => {
                    window.localStorage.clear();

                    const cookies = document.cookie.split(';');
                    for (const cookie of cookies) {
                        const eqPos = cookie.indexOf('=');
                        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
                    }
                    window.location.href = `${config.routes.logout}?continue=${encodeURIComponent(
                        window.location.href,
                    )}&over_device=1`;
                });
            })
            .catch(() => {
                window.localStorage.clear();

                const cookies = document.cookie.split(';');
                for (const cookie of cookies) {
                    const eqPos = cookie.indexOf('=');
                    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
                }
                window.location.href = `${config.routes.login}?continue=${encodeURIComponent(window.location.href)}`;
            });
    },
    bindingEvent() {
        // Binding event avatar on error
        const userAvatar = document.querySelector('#current-user .user-avatar');
        userAvatar.onerror = (e) => {
            e.target.src = '../images/fallback-avatar.jpg';
        };
    },
    run() {
        const logoLinkEle = document.querySelector('#header .header-logo');
        logoLinkEle.href = config.routes.root;

        this.setupAuthenticate();
        this.bindingEvent();
    },
};

app.run();
