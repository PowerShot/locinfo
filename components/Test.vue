<template>

    <!-- Grid row -->
    <div class="gallery" id="gallery">

        <!-- Grid column -->
        <div class="mb-1 pics animation all 1">
            <Meteo/>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-1 pics animation all 1">
            <GaleriePhoto/>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-1 pics animation all 2">
            <Carte/>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-1 pics animation all 1">
            <Avis/>
        </div>
        <!-- Grid column -->




    </div>
    <!-- Grid row -->
</template>

<script>
    import Meteo from "@/components/Meteo";
    import GaleriePhoto from "@/components/GaleriePhoto";
    import Avis from "@/components/Avis";
    import Carte from "@/components/Carte";
    export default {
        name: "Test",
        components: {Carte, Avis, GaleriePhoto, Meteo}
    }
</script>

<style scoped>
    .gallery {
        //height: 100vh;
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
        -webkit-column-width: 33%;
        -moz-column-width: 33%;
        column-width: 33%;
    }

    .gallery .pics {
        -webkit-transition: all 350ms ease;
        transition: all 350ms ease; }
    .gallery .animation {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1); }

    @media (max-width: 450px) {
        .gallery {
            -webkit-column-count: 1;
            -moz-column-count: 1;
            column-count: 1;
            -webkit-column-width: 100%;
            -moz-column-width: 100%;
            column-width: 100%;
        }
    }

    @media (max-width: 400px) {
        .btn.filter {
            padding-left: 1.1rem;
            padding-right: 1.1rem;
        }
    }
</style>
