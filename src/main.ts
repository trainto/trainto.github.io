import './style.css';

const appElem = document.querySelector<HTMLDivElement>('#app');

if (appElem) {
  appElem.innerHTML = `
    <h1>Vanilla</h1>
  `;
}
