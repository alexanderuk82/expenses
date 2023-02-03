export function crearId() {
  const array = new Uint32Array(5);
  window.crypto.getRandomValues(array);
  return Array.from(array, (value) => value.toString(26)).join('');
}

export function getDate() {
  const date = new Date();
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return (
    date.toLocaleDateString('en-EN', dateOptions)
    
  );
}


export function formatCurrency(value) {
    const formatter = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GBP',
    });

    return formatter.format(value);
  }
