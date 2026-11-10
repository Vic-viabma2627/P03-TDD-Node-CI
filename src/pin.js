export function esPinValido(pin) {
  if (typeof pin !== 'string') {
    return false;
  }

  const longitudValida = [4, 6].includes(pin.length);
  const soloDigitos = /^\d+$/.test(pin);
  const noSonTodosIguales = new Set(pin).size > 1;

  return longitudValida && soloDigitos && noSonTodosIguales;
}