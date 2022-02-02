let input = qs('#password');
let ojito = qs('#ojito1');


ojito.addEventListener('click', () => {
    // 1. Identificar el valor del atributo type
    if(input.type == 'password') {
        ojito.classList.remove('fa-eye-slash');
        ojito.classList.add('fa-eye');
        input.type = 'text';
    } else {
        ojito.classList.remove('fa-eye');
        ojito.classList.add('fa-eye-slash');
        input.type = 'password';
    }
})