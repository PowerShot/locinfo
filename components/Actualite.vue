<template>
    <div class="row rounded-lg overflow-hidden shadow">
        <!-- Users box-->
        <div class="bg-white">

            <div class="bg-gray px-4 py-2 bg-light">
                <p class="h5 mb-0 py-1">📃 Actualité</p>
            </div>

            <div class="messages-box">
                <div class="list-group rounded-0">

                    <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                        <div class="media">
                            <div class="media-body ml-4">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">14 Dec</small>
                                </div>
                                <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                            </div>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                        <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                            <div class="media-body ml-4">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">9 Nov</small>
                                </div>
                                <p class="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                        <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                            <div class="media-body ml-4">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">18 Oct</small>
                                </div>
                                <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                        <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                            <div class="media-body ml-4">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">17 Oct</small>
                                </div>
                                <p class="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                        <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                            <div class="media-body ml-4">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">2 Sep</small>
                                </div>
                                <p class="font-italic text-muted mb-0 text-small">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                        <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                            <div class="media-body ml-4">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">30 Aug</small>
                                </div>
                                <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                        <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                            <div class="media-body ml-4">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">21 Aug</small>
                                </div>
                                <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
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
                visible: false,
                afficherErreur: false,
                miniature: '',

                emplacement: '',
                pays : '',
                articles: []

            }
        },
        methods:{
            traiter: function(){
                console.log("debut1")
                console.log("https://gnews.io/api/v3/search?q="+this.leChoix+"&lang=fr&token="+ process.env.GEOCODE_KEY)
                this.$axios.$get(
                        `https://gnews.io/api/v3/search?q="${this.leChoix}"&lang=fr&token=${process.env.NEWS_API}`
                    )
                .then(
                    res => {
                        console.log("debut")
                        console.log(res)
                        this.articles = res.articles
                        console.log(res.articles)
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
