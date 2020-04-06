<template>
    <div class="weather-card one">
        <div class="top">
            <div class="wrapper">
                <div class="mynav">
                    <!-- <a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a> -->
                    <!-- <a href="javascript:;"><span class="lnr lnr-cog"></span></a> -->
                </div>
                <div v-if="erreur == true">
                    <h1>☄️</h1>
                    <h3 class="alert alert-warning" > Houston, nous avons un problème.. Nous ne captons pas la météo..</h3>
                </div>
                <div v-else>
                    <h1 class="heading">{{ this.description_temps }}</h1><a href="javascript:;"><span><img :src="this.url_icone_temps"/></span></a>
                    <h3 class="location">{{ this.position_meteo}}</h3>
                    <p class="temp">
                        <span class="temp-value">{{ this.temperature }}</span>
                        <span class="deg">0</span>
                        <a><span class="temp-type">C</span></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex'
    
    export default {  
        name: "Meteo",
        data() {
            return {
                url_icone_temps: '',
                description_temps: '',
                position_meteo: '',
                temperature: 0,
                erreur: false

            }
        },
        methods:{
            traiter: function(){
                
                // console.log("https://api.weatherbit.io/v2.0/current?lang=fr&units=m&lat="+ this.lat + "&lon=" + this.lon + "&key="+ process.env.WEATHER_API)
                this.$axios.$get(
                        `https://api.weatherbit.io/v2.0/current?lang=fr&units=m&lat=${this.lat}&lon=${this.lon}&key=${process.env.WEATHER_API}`
                    )
                .then(

                    res => {

                        // console.log("ICIIIIIIIIIIIII");
                        // console.log(res)
                        let meteo = res.data[0]                        

                        this.position_meteo = meteo.city_name
                        this.temperature = meteo.temp
                        this.url_icone_temps = 'https://www.weatherbit.io/static/img/icons/' + meteo.weather.icon + '.png'
                        this.description_temps = meteo.weather.description
                        this.erreur = false
                    }
                ).catch(err =>{
                    this.erreur = true
                })
            }

        },
        mounted() {
            this.traiter()
        },
        computed:{
            ...mapState(['choix']),
            lon: function() {
                return this.choix.lon
            },
            lat: function() {
                return this.choix.lat
            }
        },
        watch: {
            lat: function(){
                this.traiter()
            },
            long: function(){
                this.traiter()
            }
        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900");
    @import url("https://cdn.linearicons.com/free/1.0.0/icon-font.min.css");


    .weather-card {
        margin-bottom: 60px;
        background: #fff;
        box-shadow: 0 1px 38px rgba(0, 0, 0, 0.15), 0 5px 12px rgba(0, 0, 0, 0.25);
        overflow: hidden;
    }
    .weather-card .top {
        position: relative;
        overflow: hidden;
        background: url("https://image.freepik.com/free-photo/beautiful-landscape-bamboo-grove-forest-arashiyama-kyoto_74190-2264.jpg") no-repeat;
        background-size: cover;
        background-position: center center;
        text-align: center;
    }
    .weather-card .top .wrapper {
        padding: 30px;
        position: relative;
        z-index: 1;
    }
    .weather-card .top .wrapper .mynav {
        height: 20px;
    }
    .weather-card .top .wrapper .mynav .lnr {
        color: #fff;
        font-size: 20px;
    }
    .weather-card .top .wrapper .mynav .lnr-chevron-left {
        display: inline-block;
        float: left;
    }
    .weather-card .top .wrapper .mynav .lnr-cog {
        display: inline-block;
        float: right;
    }
    .weather-card .top .wrapper .heading {
        margin-top: 20px;
        font-size: 35px;
        font-weight: 400;
        color: #fff;
    }
    .weather-card .top .wrapper .location {
        margin-top: 20px;
        font-size: 21px;
        font-weight: 400;
        color: #fff;
    }
    .weather-card .top .wrapper .temp {
        margin-top: 20px;
    }
    .weather-card .top .wrapper .temp a {
        text-decoration: none;
        color: #fff;
    }
    .weather-card .top .wrapper .temp a .temp-type {
        font-size: 85px;
    }
    .weather-card .top .wrapper .temp .temp-value {
        display: inline-block;
        font-size: 85px;
        font-weight: 600;
        color: #fff;
    }
    .weather-card .top .wrapper .temp .deg {
        display: inline-block;
        font-size: 35px;
        font-weight: 600;
        color: #fff;
        vertical-align: top;
        margin-top: 10px;
    }
    .weather-card .top:after {
        content: "";
        height: 100%;
        width: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
    }
    .weather-card .bottom {
        padding: 0 30px;
        background: #fff;
    }
    .weather-card .bottom .wrapper .forecast {
        overflow: hidden;
        margin: 0;
        font-size: 0;
        padding: 0;
        padding-top: 20px;
        max-height: 155px;
    }
    .weather-card .bottom .wrapper .forecast a {
        text-decoration: none;
        color: #000;
    }
    .weather-card .bottom .wrapper .forecast .go-up {
        text-align: center;
        display: block;
        font-size: 25px;
        margin-bottom: 10px;
    }
    .weather-card .bottom .wrapper .forecast li {
        display: block;
        font-size: 25px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.25);
        line-height: 1em;
        margin-bottom: 30px;
    }
    .weather-card .bottom .wrapper .forecast li .date {
        display: inline-block;
    }
    .weather-card .bottom .wrapper .forecast li .condition {
        display: inline-block;
        vertical-align: middle;
        float: right;
        font-size: 25px;
    }
    .weather-card .bottom .wrapper .forecast li .condition .temp {
        display: inline-block;
        vertical-align: top;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 400;
        padding-top: 2px;
    }
    .weather-card .bottom .wrapper .forecast li .condition .temp .deg {
        display: inline-block;
        font-size: 10px;
        font-weight: 600;
        margin-left: 3px;
        vertical-align: top;
    }
    .weather-card .bottom .wrapper .forecast li .condition .temp .temp-type {
        font-size: 20px;
    }
    .weather-card .bottom .wrapper .forecast li.active {
        color: rgba(0, 0, 0, 0.8);
    }

</style>
