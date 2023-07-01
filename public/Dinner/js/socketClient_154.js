<!DOCTYPE html><html><head>
        <title>CSS Diner - Where we feast on CSS Selectors!</title>

        <script src="config_615.js" type="text/javascript" charset="utf-8"></script>
        <script src="sso_615.js" type="text/javascript" charset="utf-8"></script>
        <script src="pusher.min.js"></script>
        <script src="echo.iife.js"></script>
        <script src="socketClient_615.js" type="text/javascript" charset="utf-8"></script>
        <script src="jquery_615.js" type="text/javascript" charset="utf-8"></script>
        <script src="main_615.js" type="text/javascript" charset="utf-8" defer=""></script>
        <script src="levels_615.js" type="text/javascript" charset="utf-8"></script>
        <script src="restaurant_615.js" type="text/javascript" charset="utf-8"></script>
        <script src="jquery.mCustomScrollbar.min_615.js"></script>

        <link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon_615.png">
        <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon_32x32_615.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon_16x16_615.png">
        <link href="../css/css.css" rel="stylesheet">
        <link href="../css/css_1.css" rel="stylesheet">
        <link rel="stylesheet" href="../css/jquery.mCustomScrollbar_615.css" type="text/css" media="screen" title="no title" charset="utf-8">
        <link rel="stylesheet" href="../css/style_615.css" type="text/css" media="screen" title="no title" charset="utf-8">

        <meta charset="utf-8">
        <meta property="og:url" content="http://cssdiner.com">
        <meta property="og:type" content="website">
        <meta property="og:title" content="CSS Diner">
        <meta property="og:description" content="A fun game to help you learn and practice CSS selectors.">
        <meta property="og:image" content="../images/fb-share.jpg">
    </head>

    <body>
        <div id="header">
            <a class="header-logo" href="" target="_blank" rel="noreferrer noopener">
                <img src="../images/f8_avatar_615.png" alt="">
                <span>Học Lập Trình Để Đi Làm</span>
            </a>

            <div id="current-user">
                <a id="user-avatar" href="" target="_blank" rel="noreferrer noopener">
                    <img class="user-avatar" src="" alt="">
                </a>
            </div>
        </div>
        <div>
            <div class="left-col">
                <header>
                    CSS Diner
                    <div class="logo">
                        <plate><apple></apple></plate>
                    </div>
                </header>

                <h2 class="order"></h2>

                <div class="note">
                    <h3>Trợ giúp</h3>
                    <p>
                        Để vượt qua thử thách, bạn phải viết đúng css selector để lấy ra đúng đồ vật đang được chuyển
                        động ở trên bàn.
                    </p>
                    <p>Di chuột vào đồ vật ở trên bàn để xem đồ vật đấy được đánh dấu bởi code HTML nào bên dưới.</p>
                    <p>Nếu không thể vượt qua thử thách, tham khảo giải thích và ví dụ ở bên phải.</p>
                    <a class="note-toggle" href="#">Đã hiểu</a>
                </div>

                <a class="note-toggle" href="#">Trợ giúp</a>

                <div class="game-wrapper">
                    <div class="table-wrapper">
                        <div class="table-surface"></div>
                        <div class="nametags"></div>
                        <div class="table"></div>
                    </div>
                    <div class="table-edge">
                        <div class="table-leg"></div>
                        <div class="table-leg"></div>
                    </div>
                </div>

                <div class="editor">
                    <div class="editor-pane">
                        <div class="input-header">
                            <div class="file-name">style.css</div>
                            CSS Editor
                        </div>
                        <div class="file-window css-view">
                            <div class="line-numbers">
                                1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20
                            </div>
                            <input class="input-strobe" type="text" placeholder="Type in a CSS selector"><span class="plus">+</span>
                            <div class="enter-button">enter</div>
                            <div>
                                {<br>
                                /* Styles would go here. */<br>
                                }
                            </div>
                            <div class="help">
                                <br>
                                /* <br>
                                Type a number to skip to a level.<br>
                                Ex → "5" for level 5 <br>*/
                            </div>
                        </div>
                    </div>

                    <div class="editor-pane html-view">
                        <div class="input-header">
                            <div class="file-name">table.html</div>
                            HTML Viewer
                        </div>
                        <div class="file-window">
                            <div class="line-numbers">
                                1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20
                            </div>
                            <div class="markup"></div>
                        </div>
                    </div>
                </div>

                <div class="what-is-this">
                    <p>Thiết kế bởi <span style="color: white; opacity: 0.5">@flukeout</span></p>
                    <p>Triển khai bởi F8</p>
                </div>

                <div class="helper"><!-- This is the popup that floats over table elements --></div>
            </div>
            <!-- /left-col -->

            <div class="right-col">
                <div class="help-wrapper">
                    <h1 class="level-header">
                        <span class="level-text"></span>
                        <span class="checkmark"></span>
                    </h1>

                    <div class="level-nav">
                        <a class="previous" href="#"></a>
                        <a class="next" href="#"></a>
                    </div>

                    <div class="level-progress"><div class="progress"></div></div>

                    <div class="display-help">
                        <h3 class="selector-name"></h3>
                        <h2 class="title"></h2>
                        <h3 class="syntax"></h3>
                        <div class="hint"></div>
                        <h4 class="examples-title">Ví dụ</h4>
                        <div class="examples"></div>
                    </div>
                </div>

                <div class="level-menu">
                    <h2>Choose a level</h2>
                    <div class="levels"><!-- level links are inserted here--></div>
                    <a class="reset-progress" href="#">Reset quá trình</a>
                </div>

                <div class="level-menu-toggle-wrapper">
                    <div class="level-menu-toggle"></div>
                </div>
            </div>
            <!-- /right-col -->
        </div>

        <script>
            if (location.hostname != 'localhost') {
                (function (i, s, o, g, r, a, m) {
                    i['GoogleAnalyticsObject'] = r;
                    (i[r] =
                        i[r] ||
                        function () {
                            (i[r].q = i[r].q || []).push(arguments);
                        }),
                        (i[r].l = 1 * new Date());
                    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
                    a.async = 1;
                    a.src = g;
                    m.parentNode.insertBefore(a, m);
                })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

                ga('create', 'UA-62998410-1', 'auto');
                ga('send', 'pageview');
            } else {
                var ga = false;
            }
        </script>
    

</body></html>