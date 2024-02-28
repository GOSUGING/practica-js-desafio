const caja = document.getElementById('caja');
        const buttons = document.querySelectorAll('button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                caja.style.backgroundColor = button.style.backgroundColor;
            });
        });