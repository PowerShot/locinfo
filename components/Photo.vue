<template>
    <div>
        <h1 v-if="this.indisponible == true" class="alert alert-secondary h-100" role="alert">
                😳 Oups nous n'avons pas trouvé de photos 
        </h1>
        <div v-else class="liste-photo colle {
    ">
            <h1>#Photos</h1>
            <div v-for="(photo) in this.photos">
                <div class="brick">
                    <img :src="photo.previewURL" alt="Cherry plant" title="Cherry plant">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    
    export default {
        name: "Photo",
        data() {
            return {
                photos: [],
                indisponible: false
            }
        },
        methods:{
            traiter: function(){
                this.$axios.$get(
                    `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=${process.env.PHOTO_API}&q=${this.leChoix.split(',')[0]}&image_type=photo`
                    )
                .then(
                    res => {
                        this.photos = res.hits
                        if(this.photos.length == 0)
                            this.indisponible = true
                        else
                            this.indisponible = false
                    }
                ).catch(err => {
                    
                })
            }
            
        },
        mounted() {
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
    img, video {
        max-width: 100%;
        vertical-align: middle;
        margin: 0.5em;
    }

    h1 {
        font-size: 1.5em;
    }

    .liste-photo {
        height: 40em;
        max-width: 20em;
        overflow:scroll;
        -webkit-overflow-scrolling: touch;
        columns: 1;
        column-gap: 10px;
    }

    @media only screen and (min-width: 1024px) {
        .liste-photo {
            columns: 2;
        }
    }

    .full-width-div {
        position: absolute;
        width: 100%;
        left: 0;
    }

</style>
