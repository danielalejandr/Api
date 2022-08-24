    
    let url_api = "https://pokeapi.co/api/v2/pokemon/"
    let consumo = fetch(url_api)
    consumo.then(res => res.json())
    .then(data_pokemon =>{
        for (const pokemon of data_pokemon.results) {
            let ingreso_data_pokemon = fetch(pokemon.url)
            ingreso_data_pokemon.then(res2 => res2.json())
                .then(pokemon_info => {
                    let vida_pokemon = pokemon_info.stats[0].base_stat 
                    let vida_ataque = pokemon_info.stats[1].base_stat 
                    let vida_defensa = pokemon_info.stats[2].base_stat 
                    let nombre_estadistica_hp = pokemon_info.stats[0].stat.name
                    let nombre_estadistica_ataque = pokemon_info.stats[1].stat.name
                    let nombre_estadistica_defensa = pokemon_info.stats[2].stat.name
                    document.querySelector("#cartas-pokemon").innerHTML += `
                        <div class="col">
                            <div class="card border border-white som">
                                    <img src="${pokemon_info.sprites.other.home.front_default}" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title h2 text-center mb-5 ">${pokemon_info.name}</h5>
                                        <div class="row">
                                            <div class="col-3">
                                                <label class = "text-danger h6">${nombre_estadistica_hp}</label>
                                            </div>    
                                            <div class="col-9">
                                                <div class="progress">
                                                <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-label="Danger striped example" style="width: ${vida_pokemon}%" aria-valuenow="${vida_pokemon}" aria-valuemin="0" aria-valuemax="100">${vida_pokemon}%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-3">
                                                <label class = "text-primary h6">${nombre_estadistica_ataque}</label>
                                            </div>    
                                            <div class="col-9">
                                                <div class="progress">
                                                <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" aria-label="Danger striped example" style="width: ${vida_ataque}%" aria-valuenow="${vida_ataque}" aria-valuemin="0" aria-valuemax="100">${vida_ataque}%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-3">
                                                <label class = "text-warning h6">${nombre_estadistica_defensa}</label>
                                            </div>    
                                            <div class="col-9">
                                                <div class="progress">
                                                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-label="Danger striped example" style="width: ${vida_defensa}%" aria-valuenow="${vida_defensa}" aria-valuemin="0" aria-valuemax="100">${vida_defensa}%</div>
                                                </div>
                                            </div>
                                        </div>
                    `
            })
            
        }
    })




    //function crear_botones_paginacion(url_pagina_siguiente, url_pagina_anterior) {
    //    let div_paginacion = document.querySelector("#paginacion")
    //    let btn_siguiente = document.createElement("button")
    //    btn_siguiente.setAttribute("onclick", `consumo_pokemon_api('${url_pagina_siguiente}')`)
    //    btn_siguiente.classList.add("btn", "btn-dark")
    //    btn_siguiente.innerText = "Pagina siguiente"
    //    div_paginacion.innerHTML = ''
    //    div_paginacion.appendChild(btn_siguiente)
    //}
    


