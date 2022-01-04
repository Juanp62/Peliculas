$(document).ready(function() {
    const API_KEY = '75f374e0e90aaddc14d86a23109d710a';
    const BASEURL = 'https://api.themoviedb.org/3';
    const URL = `${BASEURL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;


    fetch(URL).then(response => response.json()).then(results => {
    let a = this.original_title = results;
    console.log()
    //Iterar la informacion 
    for(let i=0; i<20; i++){            
        $('#p').append(`<div class="card">`+`<img src="https://image.tmdb.org/t/p/w500${a.results[i].backdrop_path}" />`+`<div class="cont-sub"><h2 class="sub">${a.results[i].original_title}</h2></div></div>`)
        
        //BISCADOR
        $('#form').keyup( function(){
            let texto = $('#form').val().toLowerCase();

            for(let b of a.results){     
                let movie = b.original_title.toLowerCase();
                console.log(movie.indexOf(texto) !== -1)
                if (movie.indexOf(texto) !== -1) {
                    $('#p').hide();
                    $('#p').html(`<div class="card">`+`<img src="https://image.tmdb.org/t/p/w500${b.backdrop_path}" />`+`<h2>${b.original_title}</h2><input id="id-movie" type="hidden" value="${b.id}"></div>`)
                } else{
                    $('#p').show(); 
                }

                if ( $('#p').html() === '') {
                    $('#p').html(`<div class="card"><p>No se encontro nada </p></div>`);
                }
                
            }
        })
    }
   /* $('#form').keyup( function(){

        let b = a.results;
        let texto = $('#form').val().toLowerCase();
        let item = '';

        for (let i = 0; i < b.length; i++) {
            item = $(b[i]).html();
            console.log(item)
            for (let x = 0; x < b.length; x++) {
                if( texto.length == 0 || item.indexOf( buscando ) > -1 ){
                    $(b[i]).parents('.item').show(); 
                }else{
                     $(b[i]).parents('.item').hide();
                }
            }
                
        }*/
            
    
     
    })

    
});

