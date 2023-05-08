//CV Dowloaden
var link = document.createElement('a');
link.href = url;
link.download = 'cv_murrel_venlo.pdf';
link.dispatchEvent(new MouseEvent('click'));

//Cv ophalen met xhr rquest

document.querySelector("#buttonRequest").addEventListener('click', myRequest);

    function myRequest() {
        // 1. We maken een nieuwe instantie voor het XMLHttpRequest object
        let xhr = new XMLHttpRequest();
        const divRes = document.querySelector('#divResult');

        // 2. We geven de nodige parameters mee voor het GET-request via de URL
        xhr.open('GET', '../api/cv.json', true);

        // 3. We zenden de aanvraag over het netwerk
        xhr.send();

        // 4. Dit wordt opgeroepen als de response ontvangen is
        xhr.onload = function() {
            // Indien de HTTP status van de response is 2xx (success)
            if (xhr.status != 200) {
                // bijvoorbeeld 404: Not Found => wijzig de naam van het json-bestand
                divRes.innerHTML = `Error ${xhr.status}: ${xhr.statusText}`;
            } else { // show the result
                const arrResponse = JSON.parse(xhr.responseText);
                console.log(arrResponse);

                // We spreken de functie createHTMLCard aan en geven de array als argument mee
                divRes.innerHTML = createHTMLCard(arrResponse);

                // We hadden dit ook in één regel kunnen schrijven
                // divRes.innerHTML = createHTMLCard(JSON.parse(xhr.responseText));
            }
        };

        xhr.onerror = function() {
            divRes.innerHTML = "Request failed";
        };
    }

    function createHTMLCard(arrObj) {
        let res = '';
            // In de body tonen we de naam van de campus + pc & city
            res =
                `
                <div class="about">
                    <div class="col-sm-12 col-md-4 col-lg-4 me">
                    <img src="${arrObj.basics.image}" class="img-fluid" alt="${arrObj.basics.image}">
                    </div>
                    <div class="col-sm-12 col-md-8 col-lg-8 text">
                    </div> 
                </div>
                `;

            // Enkel indien er opleidingen zijn maken we een ul aan
            // if (arrObj[i].edu.length > 0) {
            //     res += '<ul class="list-group list-group-flush">';
            //     // We lijsten iedere opleining op in een listitem
            //     for (let value of arrObj[i].edu) {
            //         res += '<li class ="list-group-item">' + value + '</li>';
            //     }
            //     res += '</ul>';
            // }

            // // In de footer tonen we of er parking is of niet
            // res +=
            //     `<div class = "card-footer bg-dark text-white" > 
            //             ${arrObj[i].parking ? 'parking aanwezig' : 'geen parking'} 
            //             </div> 
            //             </div> <!-- // card -->
            //             </div> <!-- // col-4 -->
            //   
        return res;
    }