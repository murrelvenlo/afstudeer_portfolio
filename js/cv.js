const main = document.querySelector("#divResult");

document.addEventListener('DOMContentLoaded', async () => {
    tempArr = await makeRequest();
    main.innerHTML = makeGall(tempArr);
});

const makeRequest = async () => {
    return await fetch(`../api/cv.json`)
        .then(response => response.json())
}

makeGall = (myCv) => {
    let result = '';
    result =
        `
        <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 me">
        <img src="${myCv.basics.image}" class="img-fluid" alt="...">
        </div>
        <div class="col-sm-12 col-md-6 col-lg-8 text">
        <h2>Wie ben ik</h2>
        <hr className="line" />
        <h3>${myCv.basics.label}</h3>
        <hr class="line2" />
        <p>${myCv.basics.summary}</p>
        <p>Wil je echt meer te weten komen over mij, kan je mij persoonlijk contacteren.</p>
        <di>
        <span class="cv">
            <a href="/documents/cv_murrel_venlo.pdf" download="cv">Dowload hier mijn cv</a>
        </span>
        </div>
        </div>
        `;
        /*`<div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 one">
        <div class="myImage">
        <img src="${myCv.basics.image}" class="card-img-top rounded-circle" alt="...">
        </div>
        <div class="text-center cv-right-content">
        <h5>${myCv.basics.name}</h5>
        <h5>${myCv.basics.label}</h5>
        <h5>${myCv.basics.nationality}</h5>
        <h5><a href="${myCv.basics.profiles.url}" target="_blank"><i class="fa fa-linkedin-square"></i></a></h5>
        <h5><a href="mailto:${myCv.basics.email}" target="_blank"><i class="fa fa-envelope"></i></a></h5>
        </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-8">
        <h3>Wie ben ik</h3>
        <hr className="line" />
        <p>${myCv.basics.summary}</p>
        <p>Wil je echt meer te weten komen over mij, kan je mij persoonlijk contacteren.</p>
        <di>
        <span class="cv">
            <a href="/documents/cv_Murrel_Venlo.pdf" download="cv">Dowload hier mijn cv</a>
        </span>
        </div>
        </div>
    </div>`;*/
    return result;
}
