import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';

export default function({ store }) {
  Vue.use(
    new VueSocketIO({
      debug: true,
      connection: 'https://lit-taiga-04192.herokuapp.com:8080',
      vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
      }
    })
  )
}