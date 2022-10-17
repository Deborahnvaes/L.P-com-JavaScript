// Os atributos podem ser criados de forma dinamica, não necessarimanete precisa ser sempre no inicio, por exemplo:



// aqui o objeto só tem o atributo do email
const usuario = {
    email: 'deb@gmail.com'
};

//posso fazer a inclusão do nome, separado, dessa forma:

usuario.Nome = "Déborah Novaes";
usuario.senha = "145***12";

//mostrar:

console.log(usuario.email);
console.log(usuario.Nome);
console.log(usuario.senha);

// para mostrar o objeto inteiro:

console.log(usuario);
// organizando com dolarepardechaves
console.log(`${usuario.Nome}- ${usuario.email} - ${usuario.senha}`);