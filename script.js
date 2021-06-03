let ville = "paris";
recevoirTemperature(ville);

let btn = document.querySelector('#changer');

btn.addEventListener('click', (e) =>{

    ville = prompt("La ville");
    recevoirTemperature(ville);

} )

function recevoirTemperature(ville){

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=e798682b1b6e5b880f1dc4141e7c9be4&units=metric';
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();
    //Dès qu'on reçoit une réponse, cette fonction est exécutée
    requete.onload = function () {
        //Si l'état actuel de notre requete est terminé
        //=== égal et même type
        if(requete.readyState === XMLHttpRequest.DONE) {
            if(requete.status === 200){
                let reponse = requete.response; //on stock notre réponse
                console.log(reponse);
                document.querySelector('#temperature_label').textContent=reponse.main.temp;
                document.querySelector('#ville').textContent=reponse.name;
            }
            else{
                alert('problème');
            }
        }
    }
}