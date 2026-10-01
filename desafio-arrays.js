// Desafio Arrays
// Métodos Arrays Parte 2

// Map()

const usuarios = [
    { id: 1, nome: 'Ana Silva', idade: 22, ativo: true, cargo: 'Desenvolvedora' },
    { id: 2, nome: 'Bruno Costa', idade: 17, ativo: true, cargo: 'Estagiário' },
    { id: 3, nome: 'Carlos Souza', idade: 30, ativo: false, cargo: 'Designer' },
    { id: 4, nome: 'Diana Lima', idade: 25, ativo: true, cargo: 'Tech Lead' },
];

const listarUsuarios = usuarios.map((usuario) => {
    return {
        nome: usuario.nome,
        cargo: usuario.cargo,
    };
});

console.log('Usuários:', usuarios);
console.log('Lista de usuários com nome e cargo:', listarUsuarios);

// Find()

const buscarUsuario = usuarios.find((usuario) => usuario.id === 3);

console.log('Usuários:', usuarios);
console.log('Usuário encontrado com ID 3:', buscarUsuario);

// Filter()

const usuariosAtivos = usuarios.filter((usuario) => usuario.ativo);

console.log('Usuários:', usuarios);
console.log('Lista de usuários ativos:', usuariosAtivos);

// Some()

const existeUsuariosInativos = usuarios.some((usuario) => !usuario.ativo);

console.log('Usuários:', usuarios);
console.log('Existe algum usuário inativo?', existeUsuariosInativos);

// Every()

const maiorQue18 = usuarios.every((usuario) => usuario.idade > 18);

console.log('Usuários:', usuarios);
console.log('Todos os usuários têm idade maior que 18?', maiorQue18);

// Reduce()

const somaIdades = usuarios.reduce((acumulador, usuario) => {
    return acumulador + usuario.idade;
}, 0);

console.log('Usuários:', usuarios);
console.log('Soma das idades:', somaIdades);
