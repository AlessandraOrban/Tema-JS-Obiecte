// 1. Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

function afisareReteta(titlu, nrPortii, listaIngrediente) {
  const obiect = {
    titlu: titlu,
    nrPortii: nrPortii,
    ingrediente: listaIngrediente,
  }
  console.log(`Retea de ${titlu} are ${nrPortii} portii si va contine: `)
  for(let i=0; i<listaIngrediente.length; i++) {
    console.log(`--> ${listaIngrediente[i]}`);
  }
  console.log('\n');
  return obiect;
}

const ingredienteReteta1 = ["sunca", "ardei", "masline"];
const ingredienteReteta2 = ["piscoturi", "cafea"];
console.log(afisareReteta("Pizza", 3, ingredienteReteta1));
console.log(afisareReteta("Tiramisu", 6, ingredienteReteta2));
console.log("-----------------------------------------");

// 2. Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

function deleteProprietate(obiect, proprietate) {
  const obiectNou = {...obiect};
  delete obiectNou[proprietate];
  console.log("Obiect original", obiect);
  console.log("Obiect nou", obiectNou);
  return obiectNou;
}

obiect1 = { a: 1, b: 2 }
deleteProprietate(obiect1, "b");
console.log("-----------------------------------------");

// Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o). Scrieți o funcție care:
// Iterează prin gama de cărți. Pentru fiecare carte se afișează titlul și autorul cărții astfel: “Hobbitul de J.R.R. Tolkien”.
// Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că ați citit-o sau nu. Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R. Tolkien”, iar dacă nu, se afișează un mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R. Tolkien”

function afiseazaDetaliiLectura(listaCarti) {
  for(i=0; i<listaCarti.length; i++) {
    let carte = `Cartea "${listaCarti[i].titlu}" de ${listaCarti[i].autor}.`
    console.log(carte);
    if(listaCarti[i].esteCitita) {
      console.log(`Ai citit deja: ${carte}`);
    } else {
      console.log(`Trebuie sa citesti: ${carte}`);
    }
  }
}

const listaDeCarti = [
  {
    titlu: 'Mandrie si prejudecata',
    autor: 'Jane Austen',
    esteCitita: false,
  },
  {
    titlu: 'Rosu si negru',
    autor: 'Stendhal',
    esteCitita: true,
  },
  {
    titlu: 'Omul in cautarea sensului vietii',
    autor: 'Viktor Frankl',
    esteCitita: true,
  },
]

afiseazaDetaliiLectura(listaDeCarti);
console.log("-----------------------------------------");