export function isEmail(email) {
  const regex = new RegExp('^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$', 'i');

  if (email.match(regex)) return true;
  else return false;
}

export function isPhone(phone: string) {
  // eslint-disable-next-line no-useless-escape
  return /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/.test(phone);
}

export function isValidCPF(cpf: string) {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf == '' || cpf.length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let resto = 11 - (soma % 11);
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  resto = 11 - (soma % 11);
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.charAt(10))) return false;

  return true;
}
