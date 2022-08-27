    
    function consumo_pokemon_api(url_api) {
        // let ulr_api = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
        let consumo = fetch(url_api)
        consumo.then(res => res.json())
            .then(data_pokemon => {
                console.log(data_pokemon)
                document.querySelector("#grilla-pokemon").innerHTML = ''
                for (const pokemon of data_pokemon.results) {
                    let ingreso_data_pokemon = fetch(pokemon.url)
                    ingreso_data_pokemon.then(res2 => res2.json())
                        .then(pokemon_info => {
                            let vida_pokemon = pokemon_info.stats[0].base_stat
                            let ataque_pokemon = pokemon_info.stats[1].base_stat
                            let defensa_pokemon = pokemon_info.stats[2].base_stat
                            let nombre_estadistica_hp = pokemon_info.stats[0].stat.name
                            let nombre_estadistica_atque = pokemon_info.stats[1].stat.name
                            let nombre_estadistica_defensa = pokemon_info.stats[2].stat.name
                            document.querySelector("#grilla-pokemon").innerHTML += `
                                <div class="col">
                                    <div class="card som">
                                        <img src="${pokemon_info.sprites.other.home.front_default}" class="card-img-top" alt="...">
                                        <div class="card-body rounded-3 color">
                                            <h5 class="card-title text-white text-center mb-5">${pokemon_info.name}</h5>
                                            <div class="row">
        
        
                                                <div class="col-3">
                                                    <label class="h6 text-danger">${nombre_estadistica_hp}</label>
                                                </div>
                                                <div class="col-9">
                                                    <div class="progress">
                                                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-label="Warning striped example" style="width: ${vida_pokemon}%" aria-valuenow="${vida_pokemon}" aria-valuemin="0" aria-valuemax="100">${vida_pokemon}%</div>
                                                    </div>
                                                </div>
        
        
                                            </div>
                                            <div class="row">
                                                <div class="col-3">
                                                    <label class="h6 text-warning">${nombre_estadistica_atque}</label>
                                                </div>
                                                <div class="col-9">
                                                    <div class="progress">
                                                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-label="Warning striped example" style="width: ${ataque_pokemon}%" aria-valuenow="${ataque_pokemon}" aria-valuemin="0" aria-valuemax="100">${ataque_pokemon}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-3">
                                                    <label class="h6 text-primary">${nombre_estadistica_defensa}</label>
                                                </div>
                                                <div class="col-9">
                                                    <div class="progress">
                                                    <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" aria-label="Warning striped example" style="width: ${defensa_pokemon}%" aria-valuenow="${defensa_pokemon}" aria-valuemin="0" aria-valuemax="100">${defensa_pokemon}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `
                        })
                }
                crear_botones_paginacion(data_pokemon.next, data_pokemon.previous)
            })
    }
    
    function crear_botones_paginacion(url_pagina_siguiente, url_pagina_anterior) {
        let div_paginacion = document.querySelector("#paginacion")
        div_paginacion.innerHTML = ''
    
    
        //creamos el boton pagina anterior
        let btn_anterior = document.createElement("button")
        if (url_pagina_anterior != null) {
            btn_anterior.setAttribute("onclick", `consumo_pokemon_api('${url_pagina_anterior}')`)
        } else {
            btn_anterior.setAttribute("disabled", ``)
            btn_anterior.classList.add("prohibido")
        }
    
        btn_anterior.classList.add("btn", "btn-warning", "fw-bold")
        btn_anterior.innerText = "Página anterior"
        div_paginacion.appendChild(btn_anterior)
    
        //creamos boton pagina siguiente
        let btn_siguiente = document.createElement("button")
        if (url_pagina_siguiente != null) {
            btn_siguiente.setAttribute("onclick", `consumo_pokemon_api('${url_pagina_siguiente}')`)
        } else {
            btn_siguiente.setAttribute("disabled", ``)
            btn_siguiente.classList.add("prohibido")
        }
    
        btn_siguiente.classList.add("btn", "btn-warning", "fw-bold")
        btn_siguiente.innerText = "Página siguiente"
        div_paginacion.appendChild(btn_siguiente)
    }
    
    consumo_pokemon_api("https://pokeapi.co/api/v2/pokemon")


