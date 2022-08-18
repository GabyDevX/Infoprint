let botonImpresionD = document.getElementById('boton-impresionD')
let botonImpresionO = document.getElementById('boton-impresionO')
let botonMerch = document.getElementById('boton-merch')

//FUNCIÓN PARA MOSTRAR Y CERRAR EL MODAL DE PRODUCTOS
const mostrarModalImpresionD = () => {
  let modal_container = document.getElementById('modal_container-impresionD')
  botonImpresionD.addEventListener('click', () => {
    modal_container.classList.add('show')
  })
  const cerrar = document.getElementById('close-impresionD')
  cerrar.addEventListener('click', () => {
    modal_container.classList.remove('show')
  })
}

const mostrarModalImpresionO = () => {
  let modal_container = document.getElementById('modal_container-impresionO')
  botonImpresionO.addEventListener('click', () => {
    modal_container.classList.add('show')
  })
  const cerrar = document.getElementById('close-impresionO')
  cerrar.addEventListener('click', () => {
    modal_container.classList.remove('show')
  })
}

const mostrarModalMerch = () => {
  let modal_container = document.getElementById('modal_container-merch')
  botonMerch.addEventListener('click', () => {
    modal_container.classList.add('show')
  })
  const cerrar = document.getElementById('close-merch')
  cerrar.addEventListener('click', () => {
    modal_container.classList.remove('show')
  })
}

mostrarModalImpresionD()
mostrarModalImpresionO()
mostrarModalMerch()

const btn = document.getElementById('button')

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault()

  btn.value = 'Enviando...'

  const serviceID = 'default_service'
  const templateID = 'template_l8rmjh9'

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Enviar'
      Swal.fire({
        title: 'Exito!',
        text: 'Pronto nos pondremos en contacto contigo.',
        icon: 'success',
        confirmButtonText: 'Continuar',
      })
    },
    (err) => {
      btn.value = 'Enviar'
      alert(JSON.stringify(err))
    },
  )
})
