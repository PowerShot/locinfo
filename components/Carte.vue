<template>
    <!--Grid row-->
    <div class="card-body card-body-cascade text-center">
        <!--Google map-->
        <div id="map-container-google-8" class="z-depth-1-half map-container-5" style="height: 300px">
            <iframe :src="URL"
                    frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>

    </div>
    <!--Grid row-->
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Carte",
        data() {
            return {
                URL: ""
            }
        },
        computed:{
            ...mapState(['choix']),
            leChoix: function() {
                return this.choix.location
            }
        },
        watch: {
            leChoix: function(){
                this.URL = "https://maps.google.com/maps?q=" + this.choix.location + "&t=&z=13&ie=UTF8&iwloc=&output=embed"
            }
        },
        mounted(){
            this.URL = "https://maps.google.com/maps?q=" + this.choix.location + "&t=&z=13&ie=UTF8&iwloc=&output=embed"
        }

    }
    
</script>

<style scoped>
    .map-container-5{
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;
        height:0;
    }
    .map-container-5 iframe{
        left:0;
        top:0;
        height:100%;
        width:100%;
        position:absolute;
    }
</style>
