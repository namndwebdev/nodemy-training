const LiHeaderElement = document.querySelectorAll('.li-header');
const UlHeader = document.querySelector('.ul-header');
const StrongElement = UlHeader.querySelector('strong');

const chapter = [
    'html', 'css'
]

function HTMLChapter() {
    return `
    <div class="row mb-4" style="border-radius: 10px">
    <div class="hilight-code col-12 col-lg-6">
        <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;">
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">h1</span>&gt;Heading <span style="color:rgb(247, 140, 108); font-weight:400;">1</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">h1</span>&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">h2</span>&gt;Heading <span style="color:rgb(247, 140, 108); font-weight:400;">2</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">h2</span>&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">h3</span>&gt;Heading <span style="color:rgb(247, 140, 108); font-weight:400;">3</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">h3</span>&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">h4</span>&gt;Heading <span style="color:rgb(247, 140, 108); font-weight:400;">4</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">h4</span>&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">h5</span>&gt;Heading <span style="color:rgb(247, 140, 108); font-weight:400;">5</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">h5</span>&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">h6</span>&gt;Heading <span style="color:rgb(247, 140, 108); font-weight:400;">6</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">h6</span>&gt;</code></pre>
    </div>
    <div class="col-12 col-lg-6 light-hilight">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
    </div>
</div>

<div class="row mb-4" style="border-radius: 10px">
                                <div class="hilight-code col-12 col-lg-6">
                                    <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;">&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">input</span> <span style="color:rgb(173, 219, 103); font-weight:400;">type</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;text&quot;</span> /&gt;
&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">input</span> <span style="color:rgb(173, 219, 103); font-weight:400;">type</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;checkbox&quot;</span> /&gt;
&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">input</span> <span style="color:rgb(173, 219, 103); font-weight:400;">type</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;radio&quot;</span> /&gt;
&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">input</span> <span style="color:rgb(173, 219, 103); font-weight:400;">type</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;range&quot;</span> /&gt;
&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">input</span> <span style="color:rgb(173, 219, 103); font-weight:400;">type</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;date&quot;</span> /&gt;
&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">input</span> <span style="color:rgb(173, 219, 103); font-weight:400;">type</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;email&quot;</span> /&gt;
&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">input</span> <span style="color:rgb(173, 219, 103); font-weight:400;">type</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;password&quot;</span> /&gt;
&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">textarea</span> /&gt;
&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">button</span> <span style="color:rgb(173, 219, 103); font-weight:400;">type</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;button&quot;</span>>Click me button&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">button</span>/&gt;
&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">button</span> <span style="color:rgb(173, 219, 103); font-weight:400;">type</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;submit&quot;</span>>Click me submit&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">button</span>/&gt;
&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">button</span> <span style="color:rgb(173, 219, 103); font-weight:400;">type</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;reset&quot;</span>>Click me reset&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">button</span>/&gt;
</code></pre>
                                </div>
                                <div class="col-12 col-lg-6 light-hilight">
                                    <form action="">
                                        <input
                                            type="text"
                                            placeholder="Nhập text của bạn ở đây"
                                        />
                                        <br />
                                        <input type="checkbox" />
                                        <input type="checkbox" />
                                        <input type="checkbox" />
                                        <br />
                                        <input type="radio" />
                                        <input type="radio" />
                                        <input type="radio" />
                                        <br />
                                        <input type="range" />
                                        <br />
                                        <input type="date" />
                                        <br />
                                        <br />
                                        <input
                                            type="email"
                                            required
                                            placeholder="Nhap email ban o day"
                                        />
                                        <br />
                                        <br />
                                        <input
                                            type="password"
                                            placeholder="Nhap password..."
                                        />
                                        <br />
                                        <br />
                                        <textarea
                                            placeholder="Nhap text cua ban vao day..."
                                        ></textarea>
                                        <br />
                                        <br />
                                        <button type="button">
                                            ClickMe button
                                        </button>
                                        <br />
                                        <br />
                                        <button type="submit">
                                            ClickMe submit
                                        </button>
                                        <br />
                                        <br />
                                        <button type="reset">
                                            ClickMe reset
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div class="row mb-4" style="border-radius: 10px">
                            <div class="hilight-code col-12 col-lg-6">
<pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">table</span> <span style="color:rgb(127, 219, 202); font-weight:400;">class</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;table&quot;</span>&gt;</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">thead</span>&gt;</span>
    <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">tr</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">th</span> <span style="color:rgb(127, 219, 202); font-weight:400;">scope</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;col&quot;</span>&gt;</span>#<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">th</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">th</span> <span style="color:rgb(127, 219, 202); font-weight:400;">scope</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;col&quot;</span>&gt;</span>First<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">th</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">th</span> <span style="color:rgb(127, 219, 202); font-weight:400;">scope</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;col&quot;</span>&gt;</span>Last<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">th</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">th</span> <span style="color:rgb(127, 219, 202); font-weight:400;">scope</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;col&quot;</span>&gt;</span>Handle<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">th</span>&gt;</span>
    <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">tr</span>&gt;</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">thead</span>&gt;</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">tbody</span>&gt;</span>
    <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">tr</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">th</span> <span style="color:rgb(127, 219, 202); font-weight:400;">scope</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;row&quot;</span>&gt;</span>1<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">th</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">td</span>&gt;</span>Mark<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">td</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">td</span>&gt;</span>Otto<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">td</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">td</span>&gt;</span>@mdo<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">td</span>&gt;</span>
    <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">tr</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">tr</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">th</span> <span style="color:rgb(127, 219, 202); font-weight:400;">scope</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;row&quot;</span>&gt;</span>2<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">th</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">td</span> <span style="color:rgb(127, 219, 202); font-weight:400;">colspan</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;2&quot;</span>&gt;</span>Jacob<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">td</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">td</span> <span style="color:rgb(127, 219, 202); font-weight:400;">colspan</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;1&quot;</span>&gt;</span>Thornton<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">td</span>&gt;</span>
        <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">td</span>&gt;</span>@fat<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">td</span>&gt;</span>
    <span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">tr</span>&gt;</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">tbody</span>&gt;</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">table</span>&gt;</span></code></pre>
                            </div>
                            <div
                                class="col-12 col-lg-6 light-hilight"
                                style="font-size: 16px"
                            >
                            <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td colspan="2">Jacob</td>
                                    <td colspan="1">Thornton</td>
                                    <td>@fat</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                        </div>

                        <div class="row mb-4" style="border-radius: 10px">
                        <div class="hilight-code col-12 col-lg-6">
                            <pre>
                                <code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;">
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">span</span>&gt;text <span style="color:rgb(255, 99, 99); font-weight:400;">span</span> <span style="color:rgb(247, 140, 108); font-weight:400;">1</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">span</span>&gt; &lt;<span style="color:rgb(255, 99, 99); font-weight:400;">span</span>&gt;text <span style="color:rgb(255, 99, 99); font-weight:400;">span</span> <span style="color:rgb(247, 140, 108); font-weight:400;">2</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">span</span>&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">p</span>&gt;text <span style="color:rgb(255, 99, 99); font-weight:400;">p</span> <span style="color:rgb(247, 140, 108); font-weight:400;">1</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">p</span>&gt; &lt;<span style="color:rgb(255, 99, 99); font-weight:400;">p</span>&gt;text <span style="color:rgb(255, 99, 99); font-weight:400;">p</span> <span style="color:rgb(247, 140, 108); font-weight:400;">2</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">p</span>&gt;</code></pre>
                        </div>
                        <div class="col-12 col-lg-6 light-hilight">
                            <span>text span 1</span>
                            <span>text span 2</span>
                            <p>text p 1</p>
                            <p>text p 2</p>
                        </div>
                    </div>
                    <div class="row mb-4" style="border-radius: 10px">
                    <div class="hilight-code col-12 col-lg-6">
                        <pre>
                            <code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;">
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">div</span>&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">div</span>&gt;<span style="color:rgb(247, 140, 108); font-weight:400;">Block the div 1</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">div</span>&gt;
&lt;<span style="color:rgb(173, 219, 103); font-weight:400;">hr</span> /&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">div</span>&gt;<span style="color:rgb(247, 140, 108); font-weight:400;">Block the div 2</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">div</span>&gt;
&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">div</span>&gt;</code></pre>
                    </div>
                    <div class="col-12 col-lg-6 light-hilight">
                        <div>
                            <div>Block the div 1</div>
                            <hr />
                            <div>Block the div 2</div>
                        </div>
                    </div>
                </div>

                <div class="row mb-4" style="border-radius: 10px">
                <div class="hilight-code col-12 col-lg-6">
                    <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">iframe</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">src</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5436.558266166924!2d105.80514108064148!3d20.98302705185573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad3c4fbc9f81%3A0x86771cef039ba86f!2sNodemy!5e0!3m2!1svi!2s!4v1688014858449!5m2!1svi!2s&quot;</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">width</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;100%&quot;</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">height</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;200&quot;</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">style</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;border: 0&quot;</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">allowfullscreen</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;&quot;</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">loading</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;lazy&quot;</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">referrerpolicy</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;no-referrer-when-downgrade&quot;</span>
&gt;</span><span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">iframe</span>&gt;</span>
</code></pre>
                </div>
                <div class="col-12 col-lg-6 light-hilight">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5436.558266166924!2d105.80514108064148!3d20.98302705185573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad3c4fbc9f81%3A0x86771cef039ba86f!2sNodemy!5e0!3m2!1svi!2s!4v1688014858449!5m2!1svi!2s"
                        width="100%"
                        height="200"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>


            <div class="row mb-4" style="border-radius: 10px">
            <div class="hilight-code col-12 col-lg-6">
                <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(127, 219, 202); font-weight:400;">&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">video</span>
<span style="color:rgb(127, 219, 202); font-weight:400;">src</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4&quot;</span>
&gt;</span><span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">video</span>&gt;</span>
</code></pre>
            </div>
            <div class="col-12 col-lg-6 light-hilight">
                <video
                    controls
                    src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4"
                ></video>
            </div>
        </div>

        <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
                <code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(127, 219, 202); font-weight:400;">
&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">img</span> <span style="color:rgb(127, 219, 202); font-weight:400;">src</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg&quot;</span> <span style="color:rgb(127, 219, 202); font-weight:400;">alt</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;hinh anh&quot;</span>&gt;</span></code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
            <img
                src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                alt="hinh anh"
            />
        </div>
    </div>

    <div class="row mb-4" style="border-radius: 10px">
    <div class="hilight-code col-12 col-lg-6">
        <pre>
            <code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;padding-bottom: 24px;">
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">ul</span>&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;<span style="color:rgb(247, 140, 108); font-weight:400;">Toan</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;<span style="color:rgb(247, 140, 108); font-weight:400;">Hoa</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;<span style="color:rgb(247, 140, 108); font-weight:400;">Li</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;<span style="color:rgb(247, 140, 108); font-weight:400;">Anh</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;<span style="color:rgb(247, 140, 108); font-weight:400;">Yeu</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;
&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">ul</span>&gt;</code></pre>
    </div>
    <div class="col-12 col-lg-6 light-hilight">
        <ul>
            <li>Toan</li>
            <li>Hoa</li>
            <li>Li</li>
            <li>Anh</li>
            <li>Yeu</li>
        </ul>
    </div>
</div>


<div class="row mb-4" style="border-radius: 10px">
                                <div class="hilight-code col-12 col-lg-6">
                                    <pre>
                                        <code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;padding-bottom: 24px;">
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">ol</span>&gt;
    &lt;<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;<span style="color:rgb(247, 140, 108); font-weight:400;">Toan</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;
    &lt;<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;<span style="color:rgb(247, 140, 108); font-weight:400;">Hoa</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;
    &lt;<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;<span style="color:rgb(247, 140, 108); font-weight:400;">Li</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;
    &lt;<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;<span style="color:rgb(247, 140, 108); font-weight:400;">Anh</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;
    &lt;<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;<span style="color:rgb(247, 140, 108); font-weight:400;">Yeu</span>&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">li</span>&gt;
&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">ol</span>&gt;</code></pre>
                                </div>
                                <div class="col-12 col-lg-6 light-hilight">
                                    <ol>
                                        <li>Toan</li>
                                        <li>Hoa</li>
                                        <li>Li</li>
                                        <li>Anh</li>
                                        <li>Yeu</li>
                                    </ol>
                                </div>
                            </div>

                            <div class="row mb-4" style="border-radius: 10px">
                            <div class="hilight-code col-12 col-lg-6">
                                <pre>
                                    <code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(127, 219, 202); font-weight:400;">
&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">u</span>&gt;</span>Chữ gạch chân<span style="color:rgb(255, 99, 99); font-weight:400;">&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">u</span>&gt;</span>
<span style="color:rgb(255, 99, 99); font-weight:400;">&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">i</span>&gt;</span>Chữ nghiêng<span style="color:rgb(255, 99, 99); font-weight:400;">&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">i</span>&gt;</span>
<span style="color:rgb(255, 99, 99); font-weight:400;">&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">b</span>&gt;</span>Chữ in đậm<span style="color:rgb(255, 99, 99); font-weight:400;">&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">b</span>&gt;</span>
<span style="color:rgb(255, 99, 99); font-weight:400;">&lt;<span style="color:rgb(255, 99, 99); font-weight:400;">a <span style="color:rgb(173, 219, 103); font-weight:400;">href</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;https://nodemy.vn/&quot;</span></span>&gt;</span>Nodemy<span style="color:rgb(255, 99, 99); font-weight:400;">&lt;/<span style="color:rgb(255, 99, 99); font-weight:400;">a</span>&gt;</span>
                                   </code></pre>
                            </div>
                            <div class="col-12 col-lg-6 light-hilight">
                                <u>Chữ gạch chân</u>
                                <br />
                                <i>Chữ nghiêng</i>
                                <br />
                                <b>Chữ in đậm</b>
                                <br />
                                <a href="https://nodemy.vn/">Nodemy</a>
                            </div>
                        </div>

                        <div class="row mb-4" style="border-radius: 10px">
                        <div class="hilight-code col-12 col-lg-6">
                            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;">&lt;<span style="color:rgb(199, 146, 234); font-weight:400;">select</span> name=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;&quot;</span> id=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;&quot;</span>&gt;
&lt;<span style="color:rgb(199, 146, 234); font-weight:400;">option</span> value=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;---chọn lựa chọn của bạn---&quot;</span>&gt;---chọn lựa chọn của bạn---&lt;/<span style="color:rgb(199, 146, 234); font-weight:400;">option</span>&gt;
&lt;<span style="color:rgb(199, 146, 234); font-weight:400;">option</span> value<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;Lựa chọn số 1&quot;</span>&gt;Lựa chọn số <span style="color:rgb(247, 140, 108); font-weight:400;">1</span>&lt;/<span style="color:rgb(199, 146, 234); font-weight:400;">option</span>&gt;
&lt;<span style="color:rgb(199, 146, 234); font-weight:400;">option</span> value<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;Lựa chọn số 2&quot;</span>&gt;Lựa chọn số <span style="color:rgb(247, 140, 108); font-weight:400;">2</span>&lt;/<span style="color:rgb(199, 146, 234); font-weight:400;">option</span>&gt;
&lt;<span style="color:rgb(199, 146, 234); font-weight:400;">option</span> value<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;Lựa chọn số 3&quot;</span>&gt;Lựa chọn số <span style="color:rgb(247, 140, 108); font-weight:400;">3</span>&lt;/<span style="color:rgb(199, 146, 234); font-weight:400;">option</span>&gt;
&lt;<span style="color:rgb(199, 146, 234); font-weight:400;">option</span> value<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;Lựa chọn số 4&quot;</span>&gt;Lựa chọn số <span style="color:rgb(247, 140, 108); font-weight:400;">4</span>&lt;/<span style="color:rgb(199, 146, 234); font-weight:400;">option</span>&gt;
&lt;/<span style="color:rgb(199, 146, 234); font-weight:400;">select</span>&gt;</code></pre>
                        </div>
                        <div class="col-12 col-lg-6 light-hilight">
                            <select name="" id="" class="form-control">
                                <option value="---chọn lựa chọn của bạn---">---chọn lựa chọn của bạn---</option>
                                <option value"Lựa chọn số 1">Lựa chọn số 1</option>
                                <option value"Lựa chọn số 2">Lựa chọn số 2</option>
                                <option value"Lựa chọn số 3">Lựa chọn số 3</option>
                                <option value"Lựa chọn số 4">Lựa chọn số 4</option>
                            </select>
                        </div>
                    </div>
    
 `
}

function CSSChapter() {
    return `
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(99, 119, 119); font-weight:400;">/* 
&lt;h1&gt;The Tag&lt;/h1&gt;
&lt;div class=&quot;product&quot;&gt;San Pham&lt;/div&gt;
&lt;div id=&quot;logo&quot;&gt;My Logo&lt;/div&gt;
*/</span>

<span style="color:rgb(255, 99, 99); font-weight:400;">h1</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">color</span>: red;
}
<span style="color:rgb(173, 219, 103); font-weight:400;">.product</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">color</span>: blue;
}
<span style="color:rgb(250, 212, 48); font-weight:400;">#logo</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">color</span>: pink;
}
* {
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
                                        Css selector (Lấy ra các thẻ)
                                    </p>
            <h1
                style="
                    color: red;
                    background-color: #ccc;
                    margin-bottom: 10px;
                "
            >
                The Tag
            </h1>
            <div
                style="
                    color: blue;
                    background-color: #ccc;
                    margin-bottom: 10px;
                "
                class="product"
            >
                San Pham
            </div>
            <div
                style="
                    color: pink;
                    background-color: #ccc;
                "
                id="logo"
            >
                My Logo
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
                <code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(127, 219, 202); font-weight:400;">
&lt;<span style="color:rgb(127, 219, 202); font-weight:400;">h1</span> <span style="color:rgb(127, 219, 202); font-weight:400;">style</span>=<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;color: red&quot;</span>&gt;</span>Chữ có màu đỏ<span style="color:rgb(127, 219, 202); font-weight:400;">&lt;/<span style="color:rgb(127, 219, 202); font-weight:400;">h1</span>&gt;</span>
               </code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        Css Color
    </p>
            <h1 style="color: red">Chữ có màu đỏ</h1>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(255, 99, 99); font-weight:400;">h1</span>{
<span style="color:rgb(128, 203, 196); font-weight:400;">font-size</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">20px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">font-family</span>: Arial, Helvetica, sans-serif;
<span style="color:rgb(128, 203, 196); font-weight:400;">font-weight</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">700</span>;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
                                        Css Font chữ
                                    </p>
            <h1
                style="
                    font-size: 20px;
                    font-family: Arial, Helvetica,
                        sans-serif;
                    font-weight: 700;
                "
            >
                Your Text Lorem
            </h1>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(255, 99, 99); font-weight:400;">h1</span>{
<span style="color:rgb(128, 203, 196); font-weight:400;">font-style</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">italic</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">text-align</span>:center;
<span style="color:rgb(128, 203, 196); font-weight:400;">letter-spacing</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">10px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">line-height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">30px</span>;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        Css Font chữ ( style , text-align)
    </p>
            <h1
                style="
                    font-style: italic;
                    text-align: center;
                    letter-spacing: 10px;
                    line-height: 30px;
                "
            >
                Your Text Lorem
            </h1>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(255, 99, 99); font-weight:400;">h1</span>{
<span style="color:rgb(128, 203, 196); font-weight:400;">cursor</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">pointer</span>;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        Css bàn tay chuột
    </p>
            <h1 style="cursor: pointer">
                Di chuột vào đây
            </h1>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(255, 99, 99); font-weight:400;">h1</span>{
<span style="color:rgb(128, 203, 196); font-weight:400;">text-decoration</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">line-through</span>;
}</code></pre>
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(255, 99, 99); font-weight:400;">h2</span>{
<span style="color:rgb(128, 203, 196); font-weight:400;">text-decoration</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">underline</span>;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        text-decoration
    </p>
            <h1 style="text-decoration: line-through">
                Lorem Your Text H1
            </h1>
            <h2 style="text-decoration: underline">
                Lorem Your Text H2
            </h2>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(99, 119, 119); font-weight:400;">/* trong your class có nhiều thẻ h1 */</span>
<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">overflow</span>: scroll;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        overflow
    </p>
            <div
                style="
                    width: 200px;
                    height: 200px;
                    overflow: scroll;
                "
            >
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(99, 119, 119); font-weight:400;">/* trong your class có nhiều thẻ h1 */</span>
<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">overflow</span>: hidden;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        overflow
    </p>  <p class="css-title-chung">
        overflow
    </p>
            <div
                style="
                    width: 200px;
                    height: 200px;
                    overflow: hidden;
                "
            >
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Obcaecati assumenda, totam cumque
                    amet nihil exercitationem ipsam
                    quasi! Animi at iure amet ullam ad
                    iste, porro incidunt quas!
                    Veritatis, corporis quaerat.
                </h1>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(99, 119, 119); font-weight:400;">/* loai bo dau cham den o dau the li */</span>

<span style="color:rgb(255, 99, 99); font-weight:400;">ul</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">list-style</span>: none;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        list-style
    </p>
            <ul style="list-style: none">
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span>{
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        width ,height
    </p>
            <div
                style="
                    width: 100px;
                    height: 100px;
                    background-color: #ccc;
                "
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-image</span>: <span style="color:rgb(173, 219, 103); font-weight:400;">url</span>(<span style="color:rgb(236, 196, 141); font-weight:400;">&quot;https://phuongtanphuoc.gov.vn/wp/vietnam/anhdepvietnam%20(32).jpg&quot;</span>);
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        background-image
    </p>
            <div
                style="
                    width: 100px;
                    height: 100px;
                    background-image: url('https://phuongtanphuoc.gov.vn/wp/vietnam/anhdepvietnam%20(32).jpg');
                    background-position: center;
                    background-size: cover;
                "
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">border-radius</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">10px</span>;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        border-radius
    </p>
            <div
                style="
                    width: 100px;
                    height: 100px;
                    background-color: #ccc;
                    border-radius: 10px;
                "
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">box-shadow</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">10px 10px 10px 10px red;</span>;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        box-shadow
    </p>
            <div
                style="
                    width: 100px;
                    height: 100px;
                    box-shadow: 10px 10px 10px 10px red;
                "
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;">
<span style="color:rgb(99, 119, 119); font-weight:400;">/* trong your-class có 1 đứa com */</span>
<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">margin</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">20px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">padding</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">20px</span>;
}

<span style="color:rgb(173, 219, 103); font-weight:400;">.children</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">50px</span>;
<span style="color:#80cbc4; font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">50px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#666</span>;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        margin, padding
    </p>
            <div style="display: flex">
                <div
                    style="
                        width: 100px;
                        height: 100px;
                        margin: 20px;
                        padding: 20px;
                        background-color: #ccc;
                    "
                >
                    <div
                        style="
                            width: 50px;
                            height: 50px;
                            background-color: #666;
                        "
                    ></div>
                </div>
                <img
                    src="./training/assets/images/Screenshot 2023-06-29 145147.png"
                    style="
                        width: 200px;
                        height: 200px;
                        object-fit: contain;
                    "
                    alt=""
                />
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
                <code id="htmlViewer" style="color:rgb(173, 219, 103); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;">
<span style="color:rgb(173, 219, 103); font-weight:400;">/</span><span style="color:rgb(173, 219, 103); font-weight:400;">*</span> Phần tử <span style="color:rgb(173, 219, 103); font-weight:400;">c</span>ó vị trí tương đối.  đượ<span style="color:rgb(173, 219, 103); font-weight:400;">c</span> định vị so với vị trí bình thường <span style="color:rgb(173, 219, 103); font-weight:400;">c</span>ủa nó. <span style="color:rgb(214, 222, 235); font-weight:400;">*</span><span style="color:rgb(173, 219, 103); font-weight:400;">/</span>

.your<span style="color:rgb(173, 219, 103); font-weight:400;">-</span><span style="color:rgb(173, 219, 103); font-weight:400;">class</span> <span style="color:rgb(173, 219, 103); font-weight:400;">{</span>
position<span style="color:rgb(173, 219, 103); font-weight:400;">:</span> relative;
<span style="color:rgb(173, 219, 103); font-weight:400;">}</span>
               </code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        position
    </p>
            <div
                style="
                    border: 1px dotted #ee4d2d;
                    width: 100%;
                    height: 100%;
                "
            >
                <div
                    style="
                        position: relative;
                        width: 100px;
                        height: 100px;
                        background-color: #ccc;
                    "
                ></div>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
<pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(255, 99, 99); font-weight:400;">ul</span> <span style="color:rgb(255, 99, 99); font-weight:400;">li</span><span style="color:rgb(199, 146, 234); font-weight:400;">:before</span>{
    <span style="color:rgb(128, 203, 196); font-weight:400;">content</span>: <span style="color:rgb(236, 196, 141); font-weight:400;">&#x27;♡ 💜&#x27;</span>;
    <span style="color:rgb(128, 203, 196); font-weight:400;">color</span>: red;
}

<span style="color:rgb(255, 99, 99); font-weight:400;">ul</span> <span style="color:rgb(255, 99, 99); font-weight:400;">li</span><span style="color:rgb(199, 146, 234); font-weight:400;">:after</span>{
    <span style="color:rgb(128, 203, 196); font-weight:400;">content</span>: <span style="color:rgb(236, 196, 141); font-weight:400;">&#x27;💜♡&#x27;</span>;
    <span style="color:rgb(128, 203, 196); font-weight:400;">color</span>: red;
}</code></pre>
                    </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        after before
    </p>
            <ul  class="dfghjkl45678fghjkl">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            </ul>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(255, 99, 99); font-weight:400;">input</span><span style="color:rgb(199, 146, 234); font-weight:400;">:focus</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">border</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">5px</span> solid black;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        focus
    </p>
            <input
                type="text"
                placeholder="nhap chu cua ban"
                class="dsf456789iuyjhgfdxcvbjhkhgfdcsxcvbjkyu"
            />
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">transition</span>: all linear <span style="color:rgb(247, 140, 108); font-weight:400;">0.4s</span>;
}

<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span><span style="color:rgb(199, 146, 234); font-weight:400;">:hover</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">transform</span>: <span style="color:rgb(173, 219, 103); font-weight:400;">scale</span>(<span style="color:rgb(247, 140, 108); font-weight:400;">1.6</span>);
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        scale
    </p>
            <div
                class="dsfghjkjhgx45678987ytredsfghjkhgfdegf"
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">transition</span>: all linear <span style="color:rgb(247, 140, 108); font-weight:400;">0.4s</span>;
}

<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span><span style="color:rgb(199, 146, 234); font-weight:400;">:hover</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">transform</span>:<span style="color:rgb(247, 140, 108); font-weight:400;">skew(15deg, 15deg)</span>;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        skew
    </p>
            <div
                class="dsfghjkjhgx45678987ytr234tytfdsedsfghjkhgfdegf"
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span>{
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">transform</span>: <span style="color:rgb(173, 219, 103); font-weight:400;">translateX</span>(<span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>);
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        translateX
    </p>
            <div
                style="
                    display: block;
                    width: 100%;
                    height: 100%;
                    border: 1px dotted red;
                "
            >
                <div
                    style="
                        width: 100px;
                        height: 100px;
                        background-color: #ccc;
                        transform: translateX(100px);
                    "
                ></div>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.children-1</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">display</span>: inline-block;
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">border</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">4px</span> solid <span style="color:rgb(247, 140, 108); font-weight:400;">#ee4d2d</span>;
}

<span style="color:rgb(173, 219, 103); font-weight:400;">.children-2</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">display</span>: inline-block;
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">border</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">4px</span> solid blue;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        display: inline-block
    </p>
            <div
                style="
                    display: inline-block;
                    width: 100px;
                    height: 100px;
                    background-color: #ccc;
                    border: 4px solid #ee4d2d;
                "
            ></div>
            <div
                style="
                    display: inline-block;
                    width: 100px;
                    height: 100px;
                    background-color: #ccc;
                    border: 4px solid blue;
                "
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.children-1</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">display</span>: inline-block;
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">border</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">4px</span> solid <span style="color:rgb(247, 140, 108); font-weight:400;">#ee4d2d</span>;
}

<span style="color:rgb(173, 219, 103); font-weight:400;">.children-2</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">display</span>: none;
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">border</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">4px</span> solid blue;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        display: inline-none;
    </p>
            <div
                style="
                    display: inline-block;
                    width: 100px;
                    height: 100px;
                    background-color: #ccc;
                    border: 4px solid #ee4d2d;
                "
            ></div>
            <div
                style="
                    display: none;
                    width: 100px;
                    height: 100px;
                    background-color: #ccc;
                    border: 4px solid blue;
                "
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.children-1</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">display</span>: inline-block;
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">border</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">4px</span> solid <span style="color:rgb(247, 140, 108); font-weight:400;">#ee4d2d</span>;
}

<span style="color:rgb(173, 219, 103); font-weight:400;">.children-2</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">visibility</span>:hidden ;
<span style="color:rgb(128, 203, 196); font-weight:400;">width</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">height</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">100px</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">#ccc</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">border</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">4px</span> solid blue;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        visibility: hidden
    </p>
            <div
                style="
                    display: inline-block;
                    width: 100px;
                    height: 100px;
                    background-color: #ccc;
                    border: 4px solid #ee4d2d;
                "
            ></div>
            <div
                style="
                    visibility: hidden;
                    width: 100px;
                    height: 100px;
                    background-color: #ccc;
                    border: 4px solid blue;
                "
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
                <code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(99, 119, 119); font-weight:400;">/* Phần tử có vị trí tương đối.  được định vị so với vị trí bình thường của nó. */</span>

<span style="color:rgb(99, 119, 119); font-weight:400;">/* Absolute nó sẽ ăn ra ngoài thằng cha có thuộc tính position ( TH này children sẽ là con của your-classclass) */</span>

<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">position</span>: relative;
}

<span style="color:rgb(173, 219, 103); font-weight:400;">.children</span>{
<span style="color:rgb(128, 203, 196); font-weight:400;">position</span>: absolute;
<span style="color:rgb(128, 203, 196); font-weight:400;">right</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">0</span>;
<span style="color:rgb(128, 203, 196); font-weight:400;">bottom</span>: <span style="color:rgb(247, 140, 108); font-weight:400;">0</span>;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        position: absolute
    </p>
            <div
                style="
                    border: 1px dotted #ee4d2d;
                    width: 100%;
                    height: 100%;
                "
            >
                <div
                    style="
                        position: relative;
                        width: 100px;
                        height: 100px;
                        background-color: #ccc;
                    "
                >
                    <div
                        style="
                            width: 30px;
                            height: 30px;
                            background-color: red;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                        "
                    ></div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">position</span>: relative;
<span style="color:rgb(128, 203, 196); font-weight:400;">transform</span>: <span style="color:rgb(173, 219, 103); font-weight:400;">rotate</span>(<span style="color:rgb(247, 140, 108); font-weight:400;">40deg</span>);
}
               </code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        position: rotate
    </p>
            <div
                style="
                    position: relative;
                    width: 100px;
                    height: 100px;
                    background-color: #ccc;
                    transform: rotate(40deg);
                    margin-top: 10px;
                "
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.your-class:hover</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">position</span>: relative;
<span style="color:rgb(128, 203, 196); font-weight:400;">transform</span>: <span style="color:rgb(173, 219, 103); font-weight:400;">rotate</span>(<span style="color:rgb(247, 140, 108); font-weight:400;">40deg</span>);
               </code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        position: hover rotate
    </p>
            <div
                class="sdsdfsdfdsfsd3267890"
                style="
                    position: relative;
                    width: 100px;
                    height: 100px;
                    background-color: #ccc;
                    margin-top: 10px;
                "
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(99, 119, 119); font-weight:400;">/* trong your-class có 2 đứa con là 2 thẻ div */</span>

<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">display</span>: flex;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        display: flex
    </p>
            <div
                style="
                    position: relative;
                    display: flex;
                "
            >
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                        margin-right: 10px;
                    "
                ></div>
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                    "
                ></div>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(99, 119, 119); font-weight:400;">/* trong your-class có 2 đứa con là 2 thẻ div */</span>
<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">display</span>: flex;
<span style="color:rgb(128, 203, 196); font-weight:400;">justify-content</span>: center;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        justify-content
    </p>
            <div
                style="
                    position: relative;
                    display: flex;
                    justify-content: center;
                "
            >
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                        margin-right: 10px;
                    "
                ></div>
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                    "
                ></div>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(99, 119, 119); font-weight:400;">/* trong your-class có 2 đứa con là 2 thẻ div */</span>

<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">display</span>: flex;
<span style="color:rgb(128, 203, 196); font-weight:400;">justify-content</span>: space-between;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        justify-content
    </p>
            <div
                style="
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                "
            >
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                        margin-right: 10px;
                    "
                ></div>
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                    "
                ></div>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(99, 119, 119); font-weight:400;">/* trong your-class có 2 đứa con là 2 thẻ div */</span>
<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">display</span>: flex;
<span style="color:rgb(128, 203, 196); font-weight:400;">justify-content</span>: space-around;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        justify-content
    </p>
            <div
                style="
                    position: relative;
                    display: flex;
                    justify-content: space-around;
                "
            >
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                        margin-right: 10px;
                    "
                ></div>
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                    "
                ></div>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(99, 119, 119); font-weight:400;">/* trong your-class có 2 đứa con là 2 thẻ div */</span>

<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">display</span>: flex;
<span style="color:rgb(128, 203, 196); font-weight:400;">align-items</span>: center;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        align-items
    </p>
            <div
                style="
                    position: relative;
                    display: flex;
                    align-items: center;
                    height: 100%;
                "
            >
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                        margin-right: 10px;
                    "
                ></div>
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                    "
                ></div>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(99, 119, 119); font-weight:400;">/* trong your-class có 2 đứa con là 2 thẻ div */</span>

<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">display</span>: flex;
<span style="color:rgb(128, 203, 196); font-weight:400;">align-items</span>: flex-end;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        align-items
    </p>
            <div
                style="
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    height: 100%;
                "
            >
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                        margin-right: 10px;
                    "
                ></div>
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                    "
                ></div>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(99, 119, 119); font-weight:400;">/* trong your-class có 2 đứa con là 2 thẻ div */</span>

<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">display</span>: flex;
<span style="color:rgb(128, 203, 196); font-weight:400;">align-items</span>: flex-start;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        align-items
    </p>
            <div
                style="
                    position: relative;
                    display: flex;
                    align-items: flex-start;
                    height: 100%;
                "
            >
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                        margin-right: 10px;
                    "
                ></div>
                <div
                    style="
                        width: 30px;
                        height: 30px;
                        background-color: red;
                        right: 0;
                        bottom: 0;
                    "
                ></div>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;">
<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class:hover</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: blue;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        hover
    </p>
            <div
                style="
                    border: 1px dotted #ee4d2d;
                    width: 100%;
                    height: 100%;
                "
            >
                <div
                    class="cusdfghjkl"
                    style="
                        position: relative;
                        display: flex;
                        align-items: flex-start;
                        height: 100px;
                        background-color: #ccc;
                        width: 100px;
                        :hover {
                            background-color: blue;
                        }
                    "
                ></div>
            </div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;">
<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class:hover</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">background-color</span>: blue;
<span style="color:rgb(128, 203, 196); font-weight:400;">transition</span>: all linear 1s;
}
</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        hover, transition
    </p>
            <div
                class="cusdfghjkl"
                style="
                    position: relative;
                    display: flex;
                    align-items: flex-start;
                    height: 100px;
                    background-color: #ccc;
                    width: 100px;
                    transition: all linear 1s;
                    :hover {
                        background-color: blue;
                    }
                "
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;"><span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">animation</span>: Rotate linear .<span style="color:rgb(247, 140, 108); font-weight:400;">3s</span> infinite;
}

<span style="color:rgb(199, 146, 234); font-weight:400;">@keyframes</span> Rotate {
<span style="color:rgb(255, 99, 99); font-weight:400;">from</span>{
<span style="color:rgb(128, 203, 196); font-weight:400;">transform</span>: <span style="color:rgb(173, 219, 103); font-weight:400;">rotate</span>(<span style="color:rgb(247, 140, 108); font-weight:400;">0</span>);
}

<span style="color:rgb(255, 99, 99); font-weight:400;">to</span>{
<span style="color:rgb(128, 203, 196); font-weight:400;">transform</span>: <span style="color:rgb(173, 219, 103); font-weight:400;">rotate</span>(<span style="color:rgb(247, 140, 108); font-weight:400;">360deg</span>);
}
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
     animation
    </p>
            <div
                class="cusdfghjkl"
                style="
                    position: relative;
                    display: flex;
                    align-items: flex-start;
                    height: 100px;
                    background-color: #ccc;
                    width: 100px;
                    transition: all linear 1s;
                    animation: Rotate linear 0.3s
                        infinite;
                    :hover {
                        background-color: blue;
                    }
                "
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;">
<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class:hover</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">animation</span>: Rotate linear .<span style="color:rgb(247, 140, 108); font-weight:400;">3s</span> infinite;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        hover, animation
    </p>
            <div
                class="cusdfghjkl-sdfsdf"
                style="
                    position: relative;
                    display: flex;
                    align-items: flex-start;
                    height: 100px;
                    background-color: #ccc;
                    width: 100px;
                    transition: all linear 1s;
                    :hover {
                        background-color: blue;
                    }
                "
            ></div>
        </div>
    </div>
    <div class="row mb-4" style="border-radius: 10px">
        <div class="hilight-code col-12 col-lg-6">
            <pre>
<code id="htmlViewer" style="color:rgb(214, 222, 235); font-weight:400;background-color:rgb(1, 22, 39);background:rgb(1, 22, 39);display:block;padding: .5em;">
<span style="color:rgb(173, 219, 103); font-weight:400;">.your-class</span> {
<span style="color:rgb(128, 203, 196); font-weight:400;">font-size</span>: 18px;
}</code></pre>
        </div>
        <div class="col-12 col-lg-6 light-hilight">
        <p class="css-title-chung">
        font-size
    </p>
            <div
                style="
                    position: relative;
                    display: flex;
                    align-items: flex-start;
                    height: 100px;
                    background-color: #ccc;
                    width: 100px;
                    font-size: 18px;
                "
            >
                Your Text
            </div>
        </div>
    </div>
`
}

const Element = document.querySelector('.conten-body-wrapper');

LiHeaderElement.forEach((item, index) => {

    item.onclick = () => {
        if (item.getAttribute('data-header') === 'html') {
            Element.innerHTML = HTMLChapter()
            UlHeader.classList.add('active')
            UlHeader.classList.remove('not-active')
        } else {
            Element.innerHTML = CSSChapter()
            UlHeader.classList.remove('active')
            UlHeader.classList.add('not-active')
        }
    }

})

const formElement = document.querySelector('form');

formElement.onsubmit = (e) => {
    e.preventDefault()
}