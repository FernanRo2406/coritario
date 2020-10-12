// Registro del Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    // Registration was successful
    .then(function(registration) {  
      console.log('ServiceWorker Registration SUCCESS: ', registration);
    })
    // Registration failed :(
    .catch(function(error) {
      console.log('ServiceWorker Registration FAILED: ', error);
    })
}

window.onload = function() {
  // Obtengo el objeto por el ID (theme-toggler)
  // Y le asigno la siguiente función (toggler()) cuando hace clic
  document.getElementById("theme-toggler").onclick = function toggler() {
    // Evalúo si tiene presente la clase para tema oscuro
    if (document.body.classList.contains('dark-mode')) {
      // Si la encuentra pasa por aquí. Remueve la clase y le agrega la necesaria para el tema claro.
      console.log('Actual Theme is DARK');
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      console.log("Switching to LIGHT");
    } else {
      // Si no pasó la validación anterior es porque el tema estaba seteado en claro. Hace la misma operatoria pero con los valores invertidos.
      console.log('Actual Theme is LIGHT');
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      console.log("Switching to DARK");
    }
    console.log("-----------")
  };
}
