// function validar() {
//     const name = document.getElementById("name");

//   if (name.value == "") {
//     alert("Por favor,preencha com seu nome!");
//     return
//   }

function validaForm(form) {
  if (
    form.name.value == "" ||
    form.name.value == null 
  ) {
    alert("Por favor, preencha com o seu nome!");
    form.name.focus();
    return false;
  }

  if (
    form.cpf.value == "" ||
    form.cpf.value == null 
  ) {
    alert("Por favor, preencha com o seu cpf!");
    form.cpf.focus();
    return false;
  }

  if (
    form.phone.value == "" ||
    form.phone.value == null 
  ) {
    alert("Por favor, preencha com o seu telefone!");
    form.phone.focus();
    return false;
  }

  if (
    form.address.value == "" ||
    form.address.value == null 
  ) {
    alert("Por favor, preencha com o seu endereço!");
    form.address.focus();
    return false;
  }

  if (
    form.age.value == "" ||
    form.age.value == null 
  ) {
    alert("Por favor, preencha com o sua idade!");
    form.age.focus();
    return false;
  }

  if (
    form.genre.value == "" ||
    form.genre.value == null 
  ) {
    alert("Por favor, escolha seu gênero");
    form.genre.focus();
    return false;
  }

  if(form.email.value.indexOf("@") == -1 ||
      form.email.value.indexOf(".") == -1 ||
      form.email.value == "" ||
      form.email.value == null) {
        alert("Por favor, indique um e-mail válido.");
        form.email.focus();
        return false;
    }
      
}
