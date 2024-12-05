export const mount = (el) => {
  el.innerHTML = `<div>Vanilla JS App</div>`;
};

if (process.env.NODE_ENV === 'development') {
  // render the page when running the products mfe in isolation
  const el = document.querySelector('#app-vanilla-mfe-env');
  if (el) {
    mount(el);
  }
}