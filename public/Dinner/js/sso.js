// Automatically logout from all open tabs when user logout (same a browser)
window.cookieStore.addEventListener('change', ({ changed }) => {
    for (const { name, value } of changed) {
        if (name === 'logined') {
            // eslint-disable-next-line default-case
            switch (value) {
                case '0':
                    window.location.href = `${config.routes.login}?continue=${encodeURIComponent(
                        window.location.href,
                    )}`;
                    break;
                case '1':
                    window.location.reload();
                    break;
            }
        }
    }
});
