export const state = () => ({
    location: 'ici',
    lon: '',
    lat: '',
    temp: []
})

export const mutations = {
    set(state, lieu){
        console.log("changement de lieu : " + lieu)
        state.location = lieu
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
    }

}