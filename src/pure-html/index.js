/**
 * 参考文档：https://zh-hans.single-spa.js.org/docs/getting-started-overview
 */
let domEl;

export function bootstrap(props) {
    return Promise
        .resolve()
        .then(() => {
            domEl = document.createElement('div');
            domEl.id = 'app-pure-html';
            document.body.appendChild(domEl);
        });
}

export function mount(props) {
    return Promise
        .resolve()
        .then(() => {
            // 在这里通常使用框架将ui组件挂载到dom。请参阅https://single-spa.js.org/docs/ecosystem.html
            domEl.textContent = 'pure-html is mounted!';
        });
}

export function unmount(props) {
    return Promise
        .resolve()
        .then(() => {
            // 在这里通常是通知框架把ui组件从dom中卸载。参见https://single-spa.js.org/docs/ecosystem.html
            domEl.textContent = '';
        });
}