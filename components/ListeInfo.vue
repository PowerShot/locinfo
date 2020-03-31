<template>
    <div class="container">
        <div class="row">
            <div class="col"><Meteo/></div>
            <div class="col"><GaleriePhoto/> </div>
            <div class="w-100"></div>
            <div class="col">Column</div>
            <div class="col">Column</div>
        </div>
    </div>
</template>

<script>
    import Meteo from "@/components/Meteo";
    import GaleriePhoto from "@/components/GaleriePhoto";
    //import GaleriePhoto from "@/components/GaleriePhoto";
    //import Test from "@/components/Test";
    export default {
        name: "ListeInfo",
        components: {
            GaleriePhoto,
            Meteo
        }
    }
</script>

<style scoped>

</style>
