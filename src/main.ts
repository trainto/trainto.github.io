import Layout from './components/layout';
import './style.css';

const appElem = document.querySelector<HTMLDivElement>('#app');

if (appElem) {
  const layout = new Layout();
  window.requestAnimationFrame(() => {
    const newTarget = appElem.cloneNode(true);
    newTarget.textContent = '';
    newTarget.appendChild(layout.component);
    appElem.replaceWith(newTarget);
  });
}
