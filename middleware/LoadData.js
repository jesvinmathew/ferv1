import RSVP from 'rsvp'

export default async function({store, from}){
  console.log('gg')
  if(!store.state.isLoaded){
    await RSVP.all([
      store.dispatch('loadAll'),
    ])
    store.commit('FINISH_LOADING')
  }
}