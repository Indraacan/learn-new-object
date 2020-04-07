// const glintsXImpactByte =[
//     "arb712",
//     "Frederick-88",
//     "EvanCharles16"
// ]
// glintsXImpactByte.forEach(item => {
//     fetch ('https://api.github.com/users/${item}')
//     .then(response=> {
//         console.log(response);

//     })
// })


// //let url = "https://api.github.com/users/herdanuyp";

fetch('https://swapi.co/api/people/1')
    .then(response => {
        //console.log(response.json());
        return response.json();
    })
    .then(data => {
        console.log(data);
        const {
            name,
            skinn_color,
            gender,
            films
        } = data;
        const linkHTML = `<a href = ""> </a>`;
        let linkFilm = "";
        films.forEach((item, index) => {
            linkFilm += `<a href = "${item}"> film ${index +1}</a>`;
        });
        const peopleHTMLString = `<div class = "col-sm-6 col-md-4">
    name : ${data.name}
    <br>
    skin color : ${data.skin_color}
    <br>
    gender : ${data.gender} 
    <br>
    films : ${linkFilm}
    
    </div>`


        document.getElementById('starwars').innerHTML = peopleHTMLString;

    })

//wanderlink api untuk sebagian array
const addWanderLink = item => {
    const {
        destinationName,
        address,
        city,
        images
    } = item;


const stringHTML = `<div class="col-sm-6 col-md-4">  
                    <img width="100%" height="200px" src =" ${serverWanderlink}${item.images && item.images[0]}"/>
${item.destinationName}
<br>
${address}
<br>
${city}
</div>`;
document.getElementById('wanderlink').innerHTML += stringHTML;
}
const serverWanderlink = 'http://35.240.201.155:3000/';
fetch(`${serverWanderlink}api/v1/wanderlink/show/idn/destination`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        for (let i = 0; i < 10; i++) {
            addWanderLink (data[i])
        }

    })

// untuk semua array

// .then (data => {
//     console.log(data);
//     data.forEach(item => {
//         const stringHTML = `<div class="col-sm-6 col-md-4"> 
//         <img width="100%" height="200px" src =" ${serverWanderlink}${item.images && item.images[0]}"/>
//         ${item.destinationName}
//         <br>
//         ${item.address}
//         <br>
//         ${item.city}
//         </div>`;
//         document.getElementById('wanderlink').innerHTML += stringHTML;
//     })

// })