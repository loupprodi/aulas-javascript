//Tipos Primitivos

// string -> "" '' ``
const nome = "Vinicio"
const sobrenome = 'Brejinski'
const nomeCompleto = `${nome} ${sobrenome}`
const nomeConcat = nome + ' ' + sobrenome

// console.log(nomeConcat)
// console.log(nome[0])
// console.log(nome.slice(0, -1))
// console.log(nome.length)
// console.log(nome.replace('i', 'a'))
// console.log(nome.replaceAll('i', 'a'))
// console.log(nome.indexOf('o'))
// console.log(nomeConcat.split(' '))
// console.log(nomeConcat.toUpperCase())
// console.log(nomeCompleto)
// console.log(nomeCompleto.toLowerCase())

// parseInt()
// parseFloat()

// number - int e float são do tipo number
const num1 = 2
const num2 = 2.0
const num3 = -345
const num4 = 0x1123
const num5 = 0b11


// console.log(num1.toString())

let numMath = 9.5685;

console.log(Math.floor(numMath)); //redonda para cima
console.log(Math.ceil(numMath)); //redonda para baixo
console.log(Math.round(numMath)); //redonda para o mais proximo
console.log(Math.max(1,2,3,4,45,800,500,450,90)); //pega o maior numero
console.log(Math.min(1,2,3,4,45,800,500,450,90)); //pega o meno numero
console.log(Math.random()); //num aleatorio entra 0 e 1 porem o 1 numca é incluso
console.log(Math.random() * (10 - 5) + 5); //num aleatorio entra 5 e 10
console.log(Math.round(Math.random() * (10 - 5) + 5)); //num aleatorio entra 5 e 10 arredondado
console.log(Math.pow(2, 10));


//undefined <- erro
let naoDefinido

// null
const nullo = null
// console.log(nullo)

//boolean
const verdade = true
const falso = false

//array - push - pop - atribuição - valor imutavel - indices
const a = [1, 2, 3, 4, 5]
const b = ['a', 'b', 'c', 'd', 'e']
const c = ['a', 1, 'b', 2, 'c', 3]
const d = [a, b]
const e = c
const f = [ ...c ]
const fish = ["Lion", , "Angel"];

a[5] = 6
// console.log(a)

//object - atributos e outros elementos 
const pessoa = { 
    nome: "vinicio", 
    sobrenome: "brejinski", 
    idade: 24, 
    adulto: true, 
    hobbies: [
        'pescar', 
        'jogar', 
        'ir ao cinema', 
        'sair'
    ], 
    endereco: {
        rua: 'Emiliano Ramos Branco',
        numero: 39,
        complemento: 'casa'
    } 
}


// console.log(typeof(nome), typeof(sobrenome), typeof(nomeCompleto))
// console.log(typeof(num1), typeof(num2))
// console.log(typeof(naoDefinido))
// console.log(typeof(nullo))
// console.log(typeof(verdade), typeof(falso))
// console.log(typeof(a), typeof(b))
// console.log(typeof(pessoa), pessoa)

