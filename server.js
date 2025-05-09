pinInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < pinInputs.length - 1) {
      pinInputs[index + 1].focus();
    } else if (index === pinInputs.length - 1) {
      // Submit automatically on last digit
      const pin = Array.from(pinInputs).map(input => input.value).join('');
      fetch('/verify-pin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pin }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            alert('Correct PIN!');
          } else {
            alert('Incorrect PIN.');
          }
        });
    }
  });
});
