export class PokemonDetails {
    constructor(public id: number,
        public name: string,
        public abilities: string[],
        public weight: number,
        public image: string,
        public height: number,
        public types: string[]) {

    }
}
export class Pokemon {
    public image: string
    constructor(public name: string, public url: string) {
        let urlTemp = this.url.replace("http://pokeapi.co/api/v2/pokemon/", "")
        urlTemp = urlTemp.replace("/", "");
        this.image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + urlTemp + '.png';
    }
}

export class PokemonContainer{
    constructor(public previous:string, public pokemons:Pokemon[], public next:string){

    }
}
