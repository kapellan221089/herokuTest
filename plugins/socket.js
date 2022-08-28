import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';
const port = process.env.PORT

export default function({ store }) {
  Vue.use(
    new VueSocketIO({
      debug: false,
      allowEIO3: true,
      connection:'https://mighty-taiga-11038.herokuapp.com',
      vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
      }
    })
  )
}
