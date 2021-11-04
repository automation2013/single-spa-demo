/**
 * 参考文档：https://zh-hans.single-spa.js.org/docs/ecosystem-html-web-components
 */
import singleSpaHtml from 'single-spa-html';

const htmlStr = `
<div style="background: black">
  <div style="color: white">
      测试single-spa-html
  </div>
</div>
`;

const htmlLifecycles = singleSpaHtml({
    template        : `<x-my-web-component>${htmlStr}</x-my-web-component>`,
    domElementGetter: () => {
        return document.querySelector('#app-single-spa-html');
    },
});

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;