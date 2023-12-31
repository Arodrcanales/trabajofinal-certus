window.addEventListener('load', () => {
  const form = document.querySelector('#formulario')
  const usuario = document.getElementById('usuario')
  const email = document.getElementById('email')
  const celular = document.getElementById('celular')
  const direccion = document.getElementById('direccion')
  const pass = document.getElementById('pass')
  const passConfirma = document.getElementById('passConfirma')

  //validacion del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    validaCampos()
  })

  const validaCampos = () => {
    const usuarioValor = usuario.value.trim()
    const emailValor = email.value.trim()
    const celularValor = celular.value.trim()
    const direccionValor = direccion.value.trim()
    const passValor = pass.value.trim()
    const passConfirmaValor = passConfirma.value.trim();

    //usuario
    if (!usuarioValor) {
      validaFalla(usuario, 'llenar el form')
    } else {
      validaOk(usuario)
    }

    //celular
    if (!celularValor) {
      validaFalla(celular, 'llenar el form')
    } else {
      validaOk(celular)
    }

    //direccion
    if (!direccionValor) {

      validaFalla(direccion, 'llenar el form')
    } else {
      validaOk(direccion)
    }


    //email
    if (!emailValor) {
      validaFalla(email, 'llenar el form')
    } else if (!validaEmail(emailValor)) {
      validaFalla(email, 'e-mail no es válido')
    } else {
      validaOk(email)
    }
    //password
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
    if (!passValor) {
      validaFalla(pass, 'Cllenar el form')
    } else if (passValor.length < 8) {
      validaFalla(pass, '8 caracteres cómo mínimo.')
    } else if (!passValor.match(er)) {
      validaFalla(pass, 'Debe tener al menos una may., una min. y un núm.')
    } else {
      validaOk(pass)
    }

    //repassword
    if (!passConfirmaValor) {
      validaFalla(passConfirma, 'Confirme su contraseña')
    } else if (passValor !== passConfirmaValor) {
      validaFalla(passConfirma, 'La contraseña no coincide')
    } else {
      validaOk(passConfirma)
    }


  }

  const validaFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje

    formControl.className = 'form-control falla'
  }
  const validaOk = (input, msje) => {
    const formControl = input.parentElement
    formControl.className = 'form-control ok'
  }

  const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

})