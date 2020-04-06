export const state = () => ({
    requete: '',
    location: 'ici',
    lon: '',
    lat: '',
    temp: []
})

export const mutations = {
    set(state, lieu){
        if(state.location === lieu) return false
        console.log("changement de lieu : " + lieu + " avant : " + state.location)
        state.location = lieu
        return true
    },
    setLong(state, lon){
        console.log("changement de longitude : " + lon)
        state.lon = lon
    },
    setLat(state, lat){
        console.log("changement de latitude : " + lat)
        state.lat = lat
    },
    setTem(state, temp){
        console.log("changement de  : " + temp)
        state.temp = temp
    },
    setRequete(state, lieu){
        if(state.requete === lieu) return false
        console.log("changement de la requete : " + lieu + " avant : " + state.requete)
        state.requete = lieu
        return true
    }
}

export const getters = {
    get (state) {
      return state.location
    },
    getLat(state){
        return state.lat;
    },
    getLong(state){
        return state.long;
    },
    getTem(state){
        return state.temp;
    },
    getRequete(state){
        return state.requete;
    }

}