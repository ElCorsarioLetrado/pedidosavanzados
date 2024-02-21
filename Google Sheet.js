const scriptURL = 'https://script.google.com/macros/s/AKfycby7VPDp41QLWsWlRp-IzoxhaiubSwRzttrejwJrRhAErNfjRRPUpuQZ3I3U4RBVL2vs/exec'

const form = document.forms['Datos de cliente']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Muchas gracias por suministrar tus datos. En poco tiempo uno de nuestros colaboradores se comunicará contigo." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})