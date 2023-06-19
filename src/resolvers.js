module.exports = {
  Query: {
    ping: async (_source, {}, {}) => {
      return "pong"
    },

    timestamp: async (_source, {}, {}) => {
      return Date.now().toString()
    }
  },
}
