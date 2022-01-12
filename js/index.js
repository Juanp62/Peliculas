$(document).ready(function() {
    
    const API_KEY = '75f374e0e90aaddc14d86a23109d710a';
    const BASEURL = 'https://api.themoviedb.org/3/tv/';
    const URL = `${BASEURL}popular?api_key=${API_KEY}`;


    fetch(URL).then(response => response.json()).then(results => {
        let a = this.original_title = results;
        let b = a.results;
        //console.log(b)
        for(let i=0; i<20;  i++){    
            if(b[i].backdrop_path == null){
                $('#p').append(`<div class="card">`+`<img src="/../src/img/broken-image.png" />`+`<div class="cont-sub"><h2   class="sub">${b[i].name}</h2><a href="#" class="cta" >modal</a><input class="id-movie" type="hidden"  value="${b[i].id}"></div></div>`) 
            }else{
                $('#p').append(`<div class="card">`+`<img src="`+`https://image.tmdb.org/t/p/w500${b[i].backdrop_path}" />`+`<div class="cont-sub"><h2   class="sub">${b[i].name}</h2><a href="#" class="cta" >modal</a><input class="id-movie" type="hidden"  value="${b[i].id}"></div></div>`) 
            }
        }
        /*$('.sub').click(function(){
            let id_m = $('.id-movie').val();
            
            console.log(b[0].id)
            for ( let i = 0; b[i].id = id_m;  i++) {
                console.log("entro"+b[i].id);                
            }
             
        })*/

       
        //Ventana modal
        let cerrar = document.querySelectorAll(".close")[0];
        let abrir = document.querySelectorAll(".cta")[0];
        let modal = document.querySelectorAll(".modal")[0];
        let modalC = document.querySelectorAll(".modal-container")[0];
        
        abrir.addEventListener ("click", function(e) {
            e.preventDefault();
            modalC.style.opacity = "1";
            modalC.style.visibility = "visible";
            modal.classList.toggle("modal-close");
        })

        cerrar.addEventListener("click", function(){
            modal.classList.toggle("modal-close");
            setTimeout(function(){
                modalC.style.opacity = "0";
                modalC.style.visibility = "hidden";
            }, 900)
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
        }/* if(e.target.matches('#form-search') != document.querySelectorAll(".card").values) {
            document.querySelectorAll("#form-search").disabled = false;
            modalC.style.opacity = "1";
            modalC.style.visibility = "visible";
            modal.classList.toggle("modal-close");

        } */
    })

    
    
    

    
});


