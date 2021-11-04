import singleSpaHtml from 'single-spa-html';

const htmlStr = `
<div style="background: black">
  <div style="color: white">
      测试single-spa-html-demo1
  </div>
</div>
`;

const htmlLifecycles = singleSpaHtml({
  template: `<x-my-web-component>${htmlStr}</x-my-web-component>`,
  domElementGetter: () => {
    return document.querySelector('#id-app-single-spa-html');
  }
})

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;