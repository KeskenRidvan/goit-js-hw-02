function formatMessage(message, maxLength) {
  return message.length <= maxLength ? message : message.slice(0, maxLength) + '...';
}

// "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 16));

// "Curabitur ligula sapien"
console.log(formatMessage('Curabitur ligula sapien', 23));

// "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 20));

// "Vestibulum facilisis purus nec"
console.log(formatMessage('Vestibulum facilisis purus nec', 30));

// "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));

// "Nunc sed turpis a felis in nunc fringilla"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));
