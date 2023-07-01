let config = {};

const isProd = () => {
    return window.location.origin.endsWith('.fullstack.edu.vn');
};

const isStaging = () => {
    return window.location.origin.endsWith('.f8team.dev');
};

const isUat = () => {
    return window.location.origin.endsWith('.f8team.online');
};

const isLocal = () => {
    return window.location.origin.endsWith('.f8team.local');
};

if (isLocal()) {
    config = {
        baseUrl: 'https://api-gateway.f8team.local/',
        routes: {
            root: 'https://f8team.local',
            login: 'https://accounts.f8team.local/login',
            logout: 'https://accounts.f8team.local/logout',
            register: 'https://accounts.f8team.local/register',
            flashcard: 'https://flash.f8team.local',
        },
        webSocket: {
            wsHost: 'websocket.f8team.dev',
            wsPort: '443',
            key: 'vapdipmafiauhdsa78s6da',
            cluster: 'ap1',
        },
    };
} else if (isStaging()) {
    config = {
        baseUrl: 'https://api-gateway.f8team.dev/',
        routes: {
            root: 'https://f8team.dev',
            login: 'https://accounts.f8team.dev/login',
            logout: 'https://accounts.f8team.dev/logout',
            register: 'https://accounts.f8team.dev/register',
            flashcard: 'https://flash.f8team.dev',
        },
        webSocket: {
            wsHost: 'websocket.f8team.dev',
            wsPort: '443',
            key: 'vapdipmafiauhdsa78s6da',
            cluster: 'ap1',
        },
    };
} else if (isUat()) {
    config = {
        baseUrl: 'https://api-gateway.f8team.online/',
        routes: {
            root: 'https://f8team.online',
            login: 'https://accounts.f8team.online/login',
            logout: 'https://accounts.f8team.online/logout',
            register: 'https://accounts.f8team.online/register',
            flashcard: 'https://flash.f8team.online',
        },
        webSocket: {
            wsHost: 'websocket.f8team.online',
            wsPort: '443',
            key: 'vapdipmafiauhdsa78s6da',
            cluster: 'ap1',
        },
    };
} else if (isProd()) {
    config = {
        baseUrl: 'https://api-gateway.fullstack.edu.vn/',
        routes: {
            root: 'https://fullstack.edu.vn',
            login: 'https://accounts.fullstack.edu.vn/login',
            logout: 'https://accounts.fullstack.edu.vn/logout',
            register: 'https://accounts.fullstack.edu.vn/register',
            flashcard: 'https://flash.fullstack.edu.vn',
        },
        webSocket: {
            wsHost: 'websocket.fullstack.edu.vn',
            wsPort: '443',
            key: 'vapdipmxzu2pht1l2j9je5zl',
            cluster: 'ap1',
        },
    };
}

const apiBaseConfig = {
    credentials: 'include',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
};

const client = {
    get(url, config = {}) {
        return fetch(url, {
            ...config,
            ...apiBaseConfig,
        });
    },
    post(url, config = {}) {
        return fetch(url, {
            ...config,
            ...apiBaseConfig,
            method: 'POST',
        });
    },
    patch(url, config = {}) {
        return fetch(url + '?method=PATCH', {
            ...config,
            ...apiBaseConfig,
            method: 'POST',
        });
    },
    delete(url, config = {}) {
        return fetch(url, {
            ...config,
            ...apiBaseConfig,
            method: 'DELETE',
        });
    },
};
