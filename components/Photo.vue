<template>
    <div class="liste-photo colle {
">
        <h1>#Photos</h1>
        <div v-for="(photo) in this.photos">
            <div class="brick">
                <img :src="photo.previewURL" alt="Cherry plant" title="Cherry plant">
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
                photos: []
            }
        },
        methods:{
            traiter: function(){
                this.$axios.$get(
                    `https://pixabay.com/api/?key=${process.env.PHOTO_API}&q=${this.leChoix.split(',')[0]}&image_type=photo`
                    )
                .then(
                    res => {
                        console.log("debut")
                        console.log(res)
                        this.photos = res.hits
                        console.log(res.hits)
                        console.log("fin")
                    }
                )
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
    }

    h1 {
        font-size: 1.5em;
    }

    .liste-photo {
        max-height: 40em;
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


</style>
