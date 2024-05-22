const korisnici = [
    { ime: 'Rowan', prezime: "O'Connor" },
    { ime: 'Melody', prezime: 'Norton' },
    { ime: 'Minnie', prezime: 'Terry' },
    { ime: 'Damien', prezime: 'Roach' },
    { ime: 'Ida', prezime: 'Macdonald' },
    { ime: 'Zak', prezime: 'Carlson' },
    { ime: 'Nevaeh', prezime: 'Randolph' },
    { ime: 'Dewi', prezime: 'Sanford' },
    { ime: 'Michelle', prezime: 'Rhodes' },
    { ime: 'Oscar', prezime: 'Carter' },
];

let body = document.getElementsByTagName('body')[0];
body.style.textAlign = 'center';

let lista = document.createElement('ol');
    body.appendChild(lista);  // appendChild, vidi sta radi append

let i = 1;
for (let korisnik of korisnici){

    let stavka = document.createElement('li');
    lista.appendChild(stavka);

    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span1Text = document.createTextNode(korisnik.ime + " ");
    let span2Text = document.createTextNode(korisnik.prezime);
    span1.appendChild(span1Text);
    span2.appendChild(span2Text);

    stavka.appendChild(span1);
    stavka.appendChild(span2);

    if(i){
        span1.style.color = 'red';
        span2.style.color = 'green';
    } else {
        span2.style.color = 'red';
        span1.style.color = 'green';
    }

    i = !i;

}
