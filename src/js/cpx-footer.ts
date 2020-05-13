class CPXFooter extends HTMLElement {
    static tag = 'cpx-footer';
    template;
    get html() {
        return `
            <style>
                :host {
                    background-color: black;
                    padding: .5rem 13rem;
                    display: grid;
                    grid: auto / repeat(3, 1fr);
                    grid-gap: 1em;
                    color: white;
                }

                a, span { 
                    color: white;
                    vertical-align: top;
                    line-height: 1.2em; 
                }

                .licence {
                    grid-column: 2;
                    text-align: center;
                }

                .redhat-logo {
                    text-align: right;
                }

                svg { height: 1.2em; }
                .licence svg { width: 1.2em; }

                @media screen and (max-width: 1400px) {
                    .licence { grid-column: span 2; text-align: left;}
                }

                @media screen and (max-width: 960px) {
                    :host { padding: .5rem 5rem; }
                }

                @media screen and (max-width: 700px) {
                    :host { grid: 1fr 1fr / auto; }
                    .licence, .redhat-logo { grid-column: auto; text-align: center;}
                }
            </style>

            <div class="licence">
            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="64px" height="64px" viewBox="5.5 -3.5 64 64" enable-background="new 5.5 -3.5 64 64" xml:space="preserve">
                <g>
                    <circle fill="#FFFFFF" cx="37.785" cy="28.501" r="28.836"/>
                    <path d="M37.441-3.5c8.951,0,16.572,3.125,22.857,9.372c3.008,3.009,5.295,6.448,6.857,10.314
                        c1.561,3.867,2.344,7.971,2.344,12.314c0,4.381-0.773,8.486-2.314,12.313c-1.543,3.828-3.82,7.21-6.828,10.143
                        c-3.123,3.085-6.666,5.448-10.629,7.086c-3.961,1.638-8.057,2.457-12.285,2.457s-8.276-0.808-12.143-2.429
                        c-3.866-1.618-7.333-3.961-10.4-7.027c-3.067-3.066-5.4-6.524-7-10.372S5.5,32.767,5.5,28.5c0-4.229,0.809-8.295,2.428-12.2
                        c1.619-3.905,3.972-7.4,7.057-10.486C21.08-0.394,28.565-3.5,37.441-3.5z M37.557,2.272c-7.314,0-13.467,2.553-18.458,7.657
                        c-2.515,2.553-4.448,5.419-5.8,8.6c-1.354,3.181-2.029,6.505-2.029,9.972c0,3.429,0.675,6.734,2.029,9.913
                        c1.353,3.183,3.285,6.021,5.8,8.516c2.514,2.496,5.351,4.399,8.515,5.715c3.161,1.314,6.476,1.971,9.943,1.971
                        c3.428,0,6.75-0.665,9.973-1.999c3.219-1.335,6.121-3.257,8.713-5.771c4.99-4.876,7.484-10.99,7.484-18.344
                        c0-3.543-0.648-6.895-1.943-10.057c-1.293-3.162-3.18-5.98-5.654-8.458C50.984,4.844,44.795,2.272,37.557,2.272z M37.156,23.187
                        l-4.287,2.229c-0.458-0.951-1.019-1.619-1.685-2c-0.667-0.38-1.286-0.571-1.858-0.571c-2.856,0-4.286,1.885-4.286,5.657
                        c0,1.714,0.362,3.084,1.085,4.113c0.724,1.029,1.791,1.544,3.201,1.544c1.867,0,3.181-0.915,3.944-2.743l3.942,2
                        c-0.838,1.563-2,2.791-3.486,3.686c-1.484,0.896-3.123,1.343-4.914,1.343c-2.857,0-5.163-0.875-6.915-2.629
                        c-1.752-1.752-2.628-4.19-2.628-7.313c0-3.048,0.886-5.466,2.657-7.257c1.771-1.79,4.009-2.686,6.715-2.686
                        C32.604,18.558,35.441,20.101,37.156,23.187z M55.613,23.187l-4.229,2.229c-0.457-0.951-1.02-1.619-1.686-2
                        c-0.668-0.38-1.307-0.571-1.914-0.571c-2.857,0-4.287,1.885-4.287,5.657c0,1.714,0.363,3.084,1.086,4.113
                        c0.723,1.029,1.789,1.544,3.201,1.544c1.865,0,3.18-0.915,3.941-2.743l4,2c-0.875,1.563-2.057,2.791-3.541,3.686
                        c-1.486,0.896-3.105,1.343-4.857,1.343c-2.896,0-5.209-0.875-6.941-2.629c-1.736-1.752-2.602-4.19-2.602-7.313
                        c0-3.048,0.885-5.466,2.658-7.257c1.77-1.79,4.008-2.686,6.713-2.686C51.117,18.558,53.938,20.101,55.613,23.187z"/>
                </g>
            </svg>
            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="64px" height="64px" viewBox="5.5 -3.5 64 64" enable-background="new 5.5 -3.5 64 64" xml:space="preserve">
            <g>
                <circle fill="#FFFFFF" cx="37.637" cy="28.806" r="28.276"/>
                <g>
                    <path d="M37.443-3.5c8.988,0,16.57,3.085,22.742,9.257C66.393,11.967,69.5,19.548,69.5,28.5c0,8.991-3.049,16.476-9.145,22.456
                        C53.879,57.319,46.242,60.5,37.443,60.5c-8.649,0-16.153-3.144-22.514-9.43C8.644,44.784,5.5,37.262,5.5,28.5
                        c0-8.761,3.144-16.342,9.429-22.742C21.101-0.415,28.604-3.5,37.443-3.5z M37.557,2.272c-7.276,0-13.428,2.553-18.457,7.657
                        c-5.22,5.334-7.829,11.525-7.829,18.572c0,7.086,2.59,13.22,7.77,18.398c5.181,5.182,11.352,7.771,18.514,7.771
                        c7.123,0,13.334-2.607,18.629-7.828c5.029-4.838,7.543-10.952,7.543-18.343c0-7.276-2.553-13.465-7.656-18.571
                        C50.967,4.824,44.795,2.272,37.557,2.272z M46.129,20.557v13.085h-3.656v15.542h-9.944V33.643h-3.656V20.557
                        c0-0.572,0.2-1.057,0.599-1.457c0.401-0.399,0.887-0.6,1.457-0.6h13.144c0.533,0,1.01,0.2,1.428,0.6
                        C45.918,19.5,46.129,19.986,46.129,20.557z M33.042,12.329c0-3.008,1.485-4.514,4.458-4.514s4.457,1.504,4.457,4.514
                        c0,2.971-1.486,4.457-4.457,4.457S33.042,15.3,33.042,12.329z"/>
                </g>
            </g>
            </svg>

            <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">CC by 3.0</a> <span>|</span> 
            <a href="https://www.redhat.com/en/about/privacy-policy">Red Hat Privacy Policy</a>
            </div>
            <div class="redhat-logo">
                <a href="https://www.redhat.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1335.27 148"><defs><style>.a{fill:#fff;}.b{fill:#e00;}</style></defs><title>Logo-Red_Hat-Sponsored_By-A-Reverse-RGB</title><path class="a" d="M957,37.81h36.62c13.85,0,25.28,10.49,25.28,24.34,0,9.34-5.56,17-13.64,20.88l16,28.22H1001.1l-13.75-25.7H975.08v25.7H957Zm18.05,15.42V70.65h16.47c4.93,0,9.13-3.67,9.13-8.5a9,9,0,0,0-9.13-8.92Z"/><path class="a" d="M1049.89,112.3c-17,0-30.22-12.59-30.22-28.75a28.51,28.51,0,0,1,29-28.74c16.15,0,28,12.69,28,29.9v4.61h-39.55a14.34,14.34,0,0,0,13.63,8.82c4.62,0,8.5-1.47,11.13-4.2l11.22,10C1066,109.78,1059.22,112.3,1049.89,112.3ZM1037,77.47h23.08c-1.89-5.25-6.29-8.71-11.64-8.71C1042.86,68.76,1038.66,72,1037,77.47Z"/><path class="a" d="M1124.69,107.16a25.1,25.1,0,0,1-14.9,4.93,28.59,28.59,0,1,1,14.69-53.4V37.81l17-5.24v78.68h-16.79Zm-12.17-9.55a16.86,16.86,0,0,0,12-4.4V73.8a17.91,17.91,0,0,0-12-4.3c-8.18,0-14.58,6.19-14.58,14A14.24,14.24,0,0,0,1112.52,97.61Z"/><path class="a" d="M1211.25,82.5h-28.12v28.75h-18V37.81h18V66h28.12V37.81h18v73.44h-18Z"/><path class="a" d="M1268.85,107.89c-4.41,3-9,4.31-14.9,4.31-12.38,0-20.67-7.77-20.67-17.73,0-9.76,7.87-17.11,21.61-17.11a29.74,29.74,0,0,1,14,3.15V77.15c0-5.35-3.57-8.07-10.49-8.07-4.83,0-10.28,1.25-16.68,4l-5-12.69c8.39-3.67,16-5.67,22.87-5.67,17,0,26.33,7.45,26.33,21v35.56h-17Zm-10.39-7.55a19.53,19.53,0,0,0,10.39-2.83V91.74a22.08,22.08,0,0,0-10.91-2.94c-5.25,0-8.5,2.2-8.5,5.67C1249.44,98.14,1252.9,100.34,1258.46,100.34Z"/><path class="a" d="M1318.9,112.09c-11.65,0-18.16-5.56-18.16-17.1V69.92H1289V55.75h11.75V43.06l17-5.25V55.75h15.53V69.92h-15.53V91.11c0,4.72,2.52,6.5,7.66,6.5a18.36,18.36,0,0,0,7.45-1.68l-2.31,13.75A29.57,29.57,0,0,1,1318.9,112.09Z"/><path class="b" d="M857.76,85c12.5,0,30.61-2.58,30.61-17.46a14.52,14.52,0,0,0-.31-3.42l-7.45-32.36c-1.73-7.12-3.24-10.35-15.74-16.6C855.17,10.19,834,2,827.79,2c-5.82,0-7.54,7.54-14.44,7.54-6.68,0-11.64-5.6-17.89-5.6-6,0-9.92,4.1-12.94,12.5,0,0-8.4,23.72-9.48,27.16a6.12,6.12,0,0,0-.22,1.94C772.82,54.76,809.11,85,857.76,85Zm32.55-11.42C892,81.76,892,82.62,892,83.7c0,14-15.73,21.77-36.43,21.77-46.78,0-87.74-27.37-87.74-45.48a18.49,18.49,0,0,1,1.51-7.33c-16.81.86-38.58,3.88-38.58,23.06,0,31.48,74.58,70.28,133.65,70.28,45.27,0,56.69-20.48,56.69-36.65C921.13,96.63,910.14,82.19,890.31,73.57Z"/><path d="M890.31,73.57C892,81.76,892,82.62,892,83.7c0,14-15.73,21.77-36.43,21.77-46.78,0-87.74-27.37-87.74-45.48a18.49,18.49,0,0,1,1.51-7.33L773,43.6a6.12,6.12,0,0,0-.22,1.94c0,9.22,36.29,39.45,84.94,39.45,12.5,0,30.61-2.58,30.61-17.46a14.52,14.52,0,0,0-.31-3.42Z"/><path class="a" d="M8.81,91.06c8,7.87,16.16,11.7,25.62,11.7,10.84,0,18.08-5.11,18.08-12.44,0-6.49-4-9.89-15.1-11.7L25,76.6C11.14,74.26,4.66,67.78,4.66,57.25c0-12.86,10.74-21.37,27.43-21.37a50.41,50.41,0,0,1,30,10.1l-6.16,8.51c-8.08-6.17-16.16-9.15-24.35-9.15-9.68,0-16.16,4.47-16.16,11.06,0,6,3.72,8.93,13.29,10.53l12,1.91C56.55,71.39,63.56,78,63.56,89.47c0,13.61-11.91,22.86-29.66,22.86A44.85,44.85,0,0,1,2,98.93Z"/><path class="a" d="M72.49,57.15H83v5.1a25.54,25.54,0,0,1,16.58-6c15.42,0,27.33,12.34,27.33,27.86s-11.91,28-27.65,28a26.79,26.79,0,0,1-16.16-5.31v26.47H72.49ZM83.12,71.92V96.59a20.12,20.12,0,0,0,15,6.27c10.53,0,18.4-8.08,18.4-18.6,0-10.74-8.08-18.71-18.4-18.71C91.84,65.55,86.63,67.88,83.12,71.92Z"/><path class="a" d="M162.75,56.08a28.13,28.13,0,1,1-28.17,28.07A27.78,27.78,0,0,1,162.75,56.08Zm0,9.36c-9.88,0-17.75,8.19-17.75,18.71S152.76,103,162.75,103s17.76-8.29,17.76-18.82S172.64,65.44,162.75,65.44Z"/><path class="a" d="M200.81,57.15h10.64v5.42a22.07,22.07,0,0,1,16.26-6.49c12.44,0,21.06,8.72,21.06,21.16v34H238.24V79.05c0-8.4-5.1-13.72-13.5-13.72a15.23,15.23,0,0,0-13.29,7v38.91H200.81Z"/><path class="a" d="M261.84,97.23a27.81,27.81,0,0,0,17.65,6.8c8.51,0,13-3.72,13-8.08,0-3.82-2.66-6.06-8.72-6.91L274,87.66c-10.63-1.49-16.16-6.59-16.16-15,0-9.89,8.72-16.38,21.16-16.38a37.08,37.08,0,0,1,21.79,6.92l-5.42,7c-5.21-3.51-10.63-5.63-17.12-5.63-6.27,0-10.84,2.76-10.84,7.33,0,4,2.55,5.85,8.93,6.81l9.78,1.38c10.95,1.6,16.38,6.81,16.38,15.1,0,9.78-9.79,17-22.65,17-9,0-17.54-2.66-23.71-8Z"/><path class="a" d="M336.9,56.08a28.13,28.13,0,1,1-28.17,28.07A27.78,27.78,0,0,1,336.9,56.08Zm0,9.36c-9.89,0-17.76,8.19-17.76,18.71S326.91,103,336.9,103s17.76-8.29,17.76-18.82S346.79,65.44,336.9,65.44Z"/><path class="a" d="M375,57.15h10.63v6.69A17.36,17.36,0,0,1,400.37,56a15.28,15.28,0,0,1,5.53.85V66.4a18.9,18.9,0,0,0-6.38-1.17c-5.63,0-10.95,2.76-13.93,9.78v36.25H375Z"/><path class="a" d="M436,56.29c14.89,0,26.16,12.34,26.16,28.29v3.08H419.4a18.25,18.25,0,0,0,18.29,15.52,21.05,21.05,0,0,0,13.72-4.78l6.8,6.7a31.92,31.92,0,0,1-20.94,7.12c-15.95,0-28.39-12.23-28.39-28.07C408.88,68.63,420.68,56.29,436,56.29Zm-16.48,23.4h32.11c-1.49-8.3-8-14.46-15.84-14.46C427.48,65.23,421.1,71.18,419.51,79.69Z"/><path class="a" d="M513.92,106.16a25.53,25.53,0,0,1-16.58,6c-15.42,0-27.33-12.44-27.33-28s11.91-27.86,27.54-27.86a27.09,27.09,0,0,1,16.26,5.32V36.84l10.64-2.34v76.76H513.92Zm-15.1-3.3a19.35,19.35,0,0,0,15-6.48V71.82a20.2,20.2,0,0,0-15-6.38c-10.52,0-18.39,8.08-18.39,18.61C480.43,94.78,488.51,102.86,498.82,102.86Z"/><path class="a" d="M585.79,112.11a26.52,26.52,0,0,1-16.27-5.42v4.57H559V36.84l10.63-2.34V62.14a25.18,25.18,0,0,1,16.48-5.85c15.42,0,27.33,12.34,27.33,27.86S601.53,112.11,585.79,112.11ZM569.63,71.92V96.59a20.12,20.12,0,0,0,15,6.27c10.53,0,18.4-8.08,18.4-18.6,0-10.74-8.08-18.71-18.4-18.71C578.35,65.55,573.14,67.88,569.63,71.92Z"/><path class="a" d="M637,111.37,615.45,57.15h11.7L643,98.51l17.44-41.36h11.48l-25.84,60c-4.89,11.17-10.42,16.16-20.73,16.16a22.78,22.78,0,0,1-5.63-.53v-9.35a18,18,0,0,0,4.67.42c4.58,0,8.19-2.13,10.74-8Z"/></svg>
                </a>
            </div>
            `;
    }

    constructor() {
        super();
        this.template = document.createElement("template");
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = "";
        this.template.innerHTML = this.html;

        if (window['ShadyCSS']) {
        window['ShadyCSS'].prepareTemplate(this.template, CPXFooter.tag);
        }
     
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}

window.customElements.define('cpx-footer', CPXFooter);

window.addEventListener('load', event => {
    let sponsorFooter = new CPXFooter();
    document.body.appendChild(sponsorFooter);
});