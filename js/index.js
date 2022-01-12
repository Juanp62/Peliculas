$(document).ready(function() {
    
    const API_KEY = '75f374e0e90aaddc14d86a23109d710a';
    const BASEURL = 'https://api.themoviedb.org/3/tv/';
    const URL = `${BASEURL}popular?api_key=${API_KEY}`;


    fetch(URL).then(response => response.json()).then(results => {

        let a = this.original_title = results;
        let b = a.results;
        //console.log(b)

        for(let i=0; i<b.length;  i++){  

            if(b[i].backdrop_path == null){
                $('#p').append(`<div class="card">`+`<img src="/../src/img/broken-image.png" />`+`<div class="cont-sub"><h2   class="sub">${b[i].name}</h2><input class="id-movie" type="hidden"  value="${b[i].id}"></div></div>`) 
            }else{
                $('#p').append(`<div class="card">`+`<img src="https://image.tmdb.org/t/p/w500${b[i].backdrop_path}" />`+`<div class="cont-sub"><a class="sub cta">${b[i].name}</a><input class="id-movie" type="hidden"  value="${b[i].id}"></div></div>`) 
            }
        }

        //Ventana modal
        let abrir = document.querySelectorAll('.cta')
        let id_movie = document.querySelectorAll('.id-movie');
        abrir.forEach((btn, i) =>{
            
            abrir[i].addEventListener('click', ()=>{
                $('.modal-container').css({'opacity': '1', "visibility" : "visible"})
                $('.modal').removeClass('modal-close')
                console.log(id_movie[i].value)
                id_m = id_movie[i].value
                const URL_season = `${BASEURL}${id_m}?api_key=${API_KEY}`;
                //console.log(URL_season)
                fetch(URL_season).then(response => response.json()).then(results => {
                let a = results
                let season = a.seasons
                console.log(a)
                $('.cont-img').append(`<img src="https://image.tmdb.org/t/p/w500${a.poster_path}"/>`);
                $('.cont-des').append(`<p>${a.overview}</p>`);

                for (let i = 0; i < season.length; i++) {
                    $('.cont-btn').append(`<input class="btn-season" value="${season[i].name}" type="button" >`)    
                }
                })
            })
        })

        
        
        $('.close').click(function(e){
            
            $('.modal').addClass('modal-close')
            setTimeout(function(){
                $('.modal-container').css({'opacity': '0', "visibility" : "hidden"})
            }, 800) 
        })
    })
   
      
    
    //Buscador
    $('#form-search').keyup( e=> {

        if (e.target.matches('#form-search')) {
            document.querySelectorAll(".card").forEach( movie=>{
                movie.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                ?movie.classList.remove("filter")
                :movie.classList.add("filter")
            })
        }
        
        /* if(e.target.matches('#form-search') != document.querySelectorAll(".card").values) {
            document.querySelectorAll("#form-search").disabled = false;
            modalC.style.opacity = "1";
            modalC.style.visibility = "visible";
            modal.classList.toggle("modal-close");

        } */
    })    
});


