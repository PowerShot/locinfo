<template>
    <div class="row rounded-lg overflow-hidden shadow">
        <!-- Users box-->
        <div class="bg-white">

            <div class="bg-gray px-4 py-2 bg-light">
                <p class="h5 mb-0 py-1">📃 Actualité</p>
            </div>

            <div class="messages-box">
                <div class="list-group rounded-0">


                    <div v-for="(article) in this.articles">
                        <a :href="article.url" target = "_blank" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                            <div class="media">
                                <img :src="urlExists(article.image) ? article.image : 'https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/19439217481557740364-512.png'" alt="user" width="50">
                                <div class="media-body ml-4">
                                    <small class="small font-weight-bold">{{article.publishedAt}}</small>
                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                        <h6 class="mb-0">{{article.title}}</h6>
                                    </div>
                                    <p class="font-italic text-muted mb-0 text-small">{{article.description}}</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <a v-if="this.indisponible == true" href="" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                        <div class="media"><h1>😯</h1>
                            <div class="media-body ml-4">
                                <small class="small font-weight-bold">Pas de chance</small>
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0"> Aucune actualité disponible de ce lieu pour le moment</h6>
                                </div>
                                <p class="font-italic text-muted mb-0 text-small"> Il se trouve que nous ne trouvons aucun article pour le lieu sélectionné</p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Actualite",
        data() {
            return {
                articles: [],
                indisponible: false
            }
        },
        methods:{
            traiter: function(){
                this.$axios.$get(
                        `https://cors-anywhere.herokuapp.com/https://gnews.io/api/v3/search?q="${this.leChoix.split(',')[0]}"&lang=fr&token=${process.env.NEWS_API}`
                    )
                .then(
                    res => {
                        this.articles = res.articles
                        if(this.articles.length == 0)
                            this.indisponible = true
                        else
                            this.indisponible = false
                    }
                ).catch(err => {
                    this.indisponible = true;
                })


            },
            urlExists: function(url) {
                try{
                    var http = new XMLHttpRequest()
                    http.open('GET', url, false)
                    http.send()
                    return http.status != 404
                }catch(err){
                    return false
                }
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

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        width: 5px;
        background: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
        width: 1em;
        background-color: #ddd;
        outline: 1px solid slategrey;
        border-radius: 1rem;
    }

    .text-small {
        font-size: 0.9rem;
    }

    .messages-box,
    .chat-box {
        height: 510px;
        overflow-y: scroll;
    }

    .rounded-lg {
        border-radius: 0.5rem;
    }

    input::placeholder {
        font-size: 0.9rem;
        color: #999;
    }
</style>
