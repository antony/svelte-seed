import App from './components/app/component.svelte'

export default new App({
  target: document.querySelector('.anchor'),
  data: { name: 'there' }
})
