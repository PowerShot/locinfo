export const state = () => ({
    location: 'ici'
})

export const mutations = {
    set(state, lieu){
        console.log("changement de lieu : " + lieu)
        state.location = lieu
    }
}

export const getters = {
    get (state) {
      return state.location
    }
}