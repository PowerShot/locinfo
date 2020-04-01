<template>

    <div class="features-boxed">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">{{this.emplacement}}, <b>{{this.pays}}</b></h2>
                <p class="text-center">Voici l'essentiel de ce qu'il y a à savoir pour '{{this.leChoix.split(',')[0]}}'</p>
            </div>

            <div class="row justify-content-center features pb-0">
                <div class="col-md-4">
                        <Meteo/>
                    <div class="row">
                        <Actualite class="mr-3 ml-3"/>
                    </div>

                </div>
                <div class="col-md-8">
                    <div class="row">
                        <Carte/>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <Photo/>
                        </div>
                        <div class="col-md-6">
                            <Avis/>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import Meteo from "@/components/Meteo";
    import Avis from "@/components/Avis";
    import Carte from "@/components/Carte";
    import Actualite from "@/components/Actualite";
    import Photo from "@/components/Photo";
    
    

    export default {
        name: "Box",
        components: {Photo, Actualite, Carte, Avis, Meteo},
        data() {
            return {
                visible: false,
                afficherErreur: false,
                miniature: '',

                emplacement: '',
                pays : ''
            }
        },
        methods:{
            traiter: function(){
                this.$axios.$get(
                        `https://api.opencagedata.com/geocode/v1/json?q=${this.leChoix}&key=${process.env.GEOCODE_KEY}&language=fr&pretty=1`
                    )
                .then(
                    res => {
                        
                        console.log(res.results[0].annotations.flag)
                        
                        let info = res.results[0]

                        this.$store.commit('choix/set', info.formatted);
                        this.$store.commit('choix/setLat', info.annotations.DMS.lat);
                        this.$store.commit('choix/setLong', info.annotations.DMS.lng);

                        let infoFractionnee = info.formatted.split(", ")
                        console.log(infoFractionnee)

                        let endroit = infoFractionnee.slice(0, infoFractionnee.length-1).join(", ")
                        this.pays = infoFractionnee[infoFractionnee.length-1]

                        console.log(endroit)
                        console.log(info.components)
                        this.emplacement = info.annotations.flag + " " + endroit
                        console.log(this.emplacement)
                    }
                )
            }
            
        },
        mounted() {
            console.log("https://api.opencagedata.com/geocode/v1/json?q="+this.leChoix+"&key="+process.env.GEOCODE_KEY+"&language=fr&pretty=1")
            this.traiter()
        },
        computed:{
            ...mapState(['choix']),
            leChoix: function() {
                return this.choix.location
            }
        },
        watch: {
            leChoix: function(){
                this.traiter()
            }
        }
        
    }
</script>

<style scoped>

    .features-boxed {
        color:#313437;
        background-color:#eef4f7;
        padding-bottom: 5em;
    }

    .features-boxed p {
        color:#7d8285;
    }

    .features-boxed h2 {
        font-weight:bold;
        margin-bottom:40px;
        padding-top:40px;
        color:inherit;
    }

    @media (max-width:767px) {
        .features-boxed h2 {
            margin-bottom:25px;
            padding-top:25px;
            font-size:24px;
        }
    }

    .features-boxed .intro {
        font-size:16px;
        max-width:500px;
        margin:0 auto;
    }

    .features-boxed .intro p {
        margin-bottom:0;
    }

    .features-boxed .features {
        padding:50px 0;
    }

    .features-boxed .item {
        text-align:center;
    }

    .features-boxed .item .box {
        text-align:center;
        padding:30px;
        background-color:#fff;
        margin-bottom:30px;
    }

    .features-boxed .item .icon {
        font-size:60px;
        color:#1485ee;
        margin-top:20px;
        margin-bottom:35px;
    }

    .features-boxed .item .name {
        font-weight:bold;
        font-size:18px;
        margin-bottom:8px;
        margin-top:0;
        color:inherit;
    }

    .features-boxed .item .description {
        font-size:15px;
        margin-top:15px;
        margin-bottom:20px;
    }


</style>
