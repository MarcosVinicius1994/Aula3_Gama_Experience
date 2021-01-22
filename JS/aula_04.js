const baseURL= 'https://api.chucknorris.io/jokes/'

const app = document.getElementById('body-app');
const main = document.getElementById('main-category');

// const body = document.querySelector('#body');

axios.get(baseURL+'categories').then(
    res => {
        let Allcategorias = res.data;
        let MainCard = Allcategorias.map(main => (`<li class="nav-item"><a href="">${main}</a></li>`))

        main.innerHTML= MainCard;
    }
)

axios.get(baseURL + 'random').then(
res =>{
    console.log(res.data)
    const FirstCard =`div class="card" style="width: 18rem;">
                        <img src="${res.data.icon_url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${res.data.value}</p>
                        </div>
                     </div`
                     app.innerHTML =FirstCard;
})

// const MainDefault =` <li class="nav-item">
//                         <a href="">1234</a>
//                     </li>`
                
// const Main =`div class="card" style="width: 18rem;">
//                 <img src="..." class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <p class="card-text"></p>
//                 </div>
//             </div>`


function FindJoker(){
    let inputJokeValue = document.getElementById('joke-value')
    axios.get(baseURL +'search?query=' + inputJokeValue).then(
        res => {
            
        }
    )
}