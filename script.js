let chiffreChoisi = document.querySelector('#nombre');
let btn = document.querySelector('#submit');
let resultat = document.querySelector('#result');
let erreur = document.querySelector('small');
let btnEffacer = document.querySelector('#delete');

erreur.style.display = "none";
chiffreChoisi.focus();

chiffreChoisi.addEventListener('keyup', () =>{
    if(isNaN(chiffreChoisi.value)){
        erreur.style.display = 'inline';
    }
    else {
        erreur.style.display = "none";
    }
})

btn.addEventListener('click', () => {
    if(isNaN(chiffreChoisi.value) || chiffreChoisi.value == ''){
        chiffreChoisi.style.border = "3px solid red";
        resultat.style.display = "none";
        
    }
    else{
        resultat.style.dispaly = 'inline';
    }
    for(let i = 1;i <=10 ; i++){
        const calcul = chiffreChoisi.value * i;
        const sousTitre = document.querySelector('h2');
        sousTitre.textContent = ('Table de ' + chiffreChoisi.value + ' :');
        var pElement = document.createElement('div');
        pElement.className = 'pElement';
        pElement.textContent = ( chiffreChoisi.value + ' * ' + i + ' = ' + calcul );
        resultat.appendChild(pElement);
        // console.log(chiffreChoisi.value + ' * ' + i + ' = ' + calcul);

    }
    btn.disabled = true;
    chiffreChoisi.disabled = true;
    
});

btnEffacer.addEventListener('click', () => {
    chiffreChoisi.value ='';
    btn.disabled = false;
    sousTitre.innerHTML = '';  
    chiffreChoisi.disabled = false;
    chiffreChoisi.focus();
    resultat.innerHTML = '';     



    btn.addEventListener('click', () => {
        resultat.innerHTML = '';
    if(isNaN(chiffreChoisi.value) || chiffreChoisi.value == ''){
        chiffreChoisi.style.border = "3px solid red";
        resultat.style.display = "none";
        
    }
    else{
        resultat.style.dispaly = 'inline';
    }
    for(let i = 1;i <=10 ; i++){
        const calcul = chiffreChoisi.value * i;
        let sousTitre = document.querySelector('h2');
        sousTitre.textContent = ('Table de ' + chiffreChoisi.value + ' :');
        const pElement = document.createElement('div');
        pElement.className = 'pElement';
        pElement.textContent = ( chiffreChoisi.value + ' * ' + i + ' = ' + calcul );
        resultat.appendChild(pElement);
        // console.log(chiffreChoisi.value + ' * ' + i + ' = ' + calcul);

    }
    btn.disabled = true;  
});
});