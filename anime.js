//define class có các thuộc tính title, video url,  description, name, rate, tag, category
// => tạo dùng mảng 10 object đầy đủ các thuộc tính
// => css nav nằm ngang
// => lấy list object dùng vòng for để vẽ ra ở id nav


// let left_btn = document.getElementById('leftScroll');
// let right_btn = document.getElementById('rightScroll');
// let usefuls = document.getElementsByClassName('usefuls')[0];



// let films = document.getElementsByClassName('films');

// let imageIndex = 0;
// films.src = animes[imageIndex];
// right_btn.addEventListener("click", function (){
//     imageIndex--;
//     if(imageIndex < 0){
//         imageIndex = animes.length - 1;
//     }
//     films.src = animes[imageIndex];
// });

// left_btn.addEventListener("click", function(){
//     imageIndex++;
//     if(imageIndex >= animes.length){
//         imageIndex = 0;
//     }
//     films.src = animes[imageIndex];
// })

// let left_btn = document.getElementById('leftScroll');
// let right_btn = document.getElementById('rightScroll');
// let usefuls = document.getElementsByClassName('usefuls')[0];



// left_btn.addEventListener('click', function () {
//     usefuls.scrollLeft -= 150;
// })
// right_btn.addEventListener('click', function () {
//     usefuls.scrollLeft += 150;
//     console.log(usefuls.scrollLeft);


//     for (let Anime of animes) {
//         nav.innerHTML += `

//             <a href="" class="useful">
//                 <img src="${Anime.photo}" class="films" alt="">
//             </a>

//         `
//     }

// })



class Anime {
    constructor(photo) {
        this.photo = photo;
    }
}

let animes = [
    new Anime("https://pbs.twimg.com/media/Ex3U5XeVcAExrNg.jpg:large"),
    new Anime("https://m.media-amazon.com/images/M/MV5BYTIxNjk3YjItYmYzMC00ZTdmLTk0NGUtZmNlZTA0NWFkZDMwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"),
    new Anime("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq47-6GrgtIutcwIywiyemSsZL35IWKSfpKtHwVCBsyVaendea"),
    new Anime("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTetkpViWbXUlcFeCydfzdSp2-VUQsLUzKjwiLoypMe0aAdkUyy"),
    new Anime("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQyst61fUoRxC6mq3z-ho6cDjc3OwVOVbJdW3T7scIepGShLChY"),
    new Anime("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRY3sBsKKZYn67nKY5Pp1IzY7aoxXTGnsDz-X_aLofC4bryq-u2"),
    new Anime("https://i.pinimg.com/originals/09/61/37/096137a98b3ec193f61b5ce3cbdf23d8.jpg"),
    new Anime("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIz_c1PBq_yTn7-OZ5pBi2dUXzv_FcBtPq2L-ozsup4HxM69VM"),
    new Anime("https://pokemonviet.com/wp-content/uploads/2022/03/ss28.jpg"),




]

let nav = document.querySelector('.usefuls');
// for (let Anime of animes) {
//     nav.innerHTML += `

//         <a href="" class="useful">
//             <img src="${Anime.photo}" class="films" alt="">
//         </a>

//     `

// }


let left_btn = document.getElementById('leftScroll');
let right_btn = document.getElementById('rightScroll');
let usefuls = document.getElementsByClassName('usefuls')[0];

left_btn.addEventListener('click', function () {
    usefuls.scrollLeft -= 150;
})

right_btn.addEventListener('click', function () {
    usefuls.scrollLeft += 120;
    console.log(usefuls.scrollLeft);
    if (usefuls.scrollLeft >= 267) {
        usefuls.scrollLeft = 0;

        nav.innerHTML += `
    
    <a href="" class="useful">
        <img src="${Anime.photo}" class="films" alt="">
    </a>

    `
    }

})




let search = document.getElementsByClassName('box_search')[0];
let search_input = document.getElementById('search_input');
let product = document.querySelector('.product')[0];
search_input.addEventListener('keyup', () => {
    let find = search_input.value.toUpperCase();
    let key_find = search.getElementsByTagName('a');

    for (let i = 0; i < key_find.length; i++) {
        let found = key_find[i].getElementsByClassName('next')[0];

        let textValue = found.textContent || found.innerHTML;
        console.log(textValue.toUpperCase().indexOf(find));
        if (textValue.toUpperCase().indexOf(find) > -1) {
            key_find[i].style.display = "flex";
            search.style.visibility = "visible";
            search.style.opacity = 1;
        } else {
            key_find[i].style.display = "none";
        }
        if (textValue.toUpperCase().indexOf(find) == 0) {
            key_find[i].style.display = "flex";
            search.style.visibility = "hidden";
            search.style.opacity = 0;
        }
    }
})




let h3 = document.getElementById('h3');
let title = document.getElementById('title');
let account = document.getElementById('account');
let items = document.getElementById('items');
let video = document.getElementsByTagName('video')[0];
let search_url = "search.json";

function trailer() {
    localStorage.setItem("title", "test");
    window.location = "highlight.html"
}


fetch(search_url).then(Response => Response.json())
    .then((data) => {
        data.forEach(element => {
            let { name, hot, year, picture, genre, video } = element;

            // let element = {name, hot, year, picture, genre, video};
            let item = document.createElement('a');
            item.classList.add('item');
            item.href = '#';

            item.onclick = function () {
                localStorage.setItem("account", element.account);
                localStorage.setItem("title", element.name);
                localStorage.setItem("year", element.year);
                localStorage.setItem("category", element.genre);
                localStorage.setItem("video", video);
                window.location = "highlight.html"

            }
            item.innerHTML = `
        <img src="${picture}" alt="">
                        <div class="next">
                            <h3>${name}</h3>
                            <p>${genre}, ${year} , <span>Hot </span><i class="fa-sharp fa-solid fa-star"></i> ${hot}</p>
                        </div>
        `
            search.appendChild(item);

            let a = document.createElement('a');
            a.classList.add('useful');
            let image = document.createElement('img');

            image.classList.add('films');
            image.src = element.picture;
            a.appendChild(image);

            a.onclick = function () {
                console.log("image click");
                localStorage.setItem("account", element.account);
                localStorage.setItem("title", element.name);
                localStorage.setItem("year", element.year);
                localStorage.setItem("category", element.genre);
                localStorage.setItem("video", element.video);
                window.location = "highlight.html"


            }
            usefuls.appendChild(a);



            // let nav = document.createElement('a');
            // nav.classList.add('useful');
            // nav.href = '#';

            // nav.onclick = function () {
            //     console.log("image click");
            //     localStorage.setItem("account", element.account);
            //     localStorage.setItem("title", element.name);
            //     localStorage.setItem("year", element.year);
            //     localStorage.setItem("category", element.genre);
            //     localStorage.setItem("video", element.video);
            //     window.location = "highlight.html"


            // }

            //     nav.innerHTML += `

            //         <a href="" class="useful">
            //             <img src="${Anime.photo}" class="films" alt="">
            //         </a>

            //     `


            //     usefuls.appendChild(nav);




        })
    })
removeUseful();

let child = document.getElementsByClassName('usefuls');
function removeUseful(animes) {
    for(let i = 0; i <animes.length; i++ ) {
        if(usefuls[i].animes == animes) {
            usefuls.splice(i, 1)
        }
    }
    renderAnime(usefuls);
}

let animesEle = document.querySelector('.animes');
function renderAnime(arr) {
    const p = arr[i];
    animesEle.innerHTML += `
        <a href="" class="useful">
        <img src="${Anime.photo}" class="films" alt="">
        </a>
        `
}


