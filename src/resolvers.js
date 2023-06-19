module.exports = {
  Query: {
    pokemon: async (_source, { id }, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemon(id)
    },

    ping: async (_source, {}, {}) => {
      return "pong"
    }
  },
}
