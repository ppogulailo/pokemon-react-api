import { PokeApi } from '../../api/poke.api.ts'
import { queryClient } from '../../main'
import type { Pokemon } from '../../types/redux/poke.types'

class PokemonCard extends HTMLElement {
    static observedAttributes = ['name']
    private $content!: HTMLElement

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div class="card">
                  <h3>Pokémon</h3>
                  <div class="content">No data</div>
                </div>
            `
            this.$content = this.shadowRoot.querySelector('.content') as HTMLElement
        }
    }

    attributeChangedCallback(attr: string, oldVal: string, newVal: string) {
        if (attr === 'name' && newVal && newVal !== oldVal) {
            this.loadPokemon(newVal)
        }
    }

    async loadPokemon(name: string) {
        try {
            const data = await queryClient.ensureQueryData({
                queryKey: ['pokemon', name],
                queryFn: async () => (await PokeApi.getPokemonByName(name)).data,
            })

            this.render(data)
        } catch (e) {
            const err = e as Error
            this.$content.textContent = `Error: ${err.message}`
        }
    }

    render(data: Pokemon) {
        this.$content.innerHTML = `
              <img src="${data.sprites.front_default}" alt="${data.name}" />
              <h3>${data.name}</h3>
              <small>Base exp: ${data.base_experience}</small>
        `
    }
}

customElements.define('pokemon-card', PokemonCard)
