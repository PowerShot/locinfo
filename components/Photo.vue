<template>
    <div class="liste-photo colle {
">
        <h1>#Instagram</h1>
        <div class="brick">
            <img src="./files/images/cherry-plant.jpg" alt="Cherry plant" title="Cherry plant">
        </div>
        <div class="brick">
            <img src="./files/images/oranges-pomegranates.jpg" alt="Oranges and Pomegranates" title="Oranges and Pomegranates">
        </div>
        <div class="brick">
            <img src="./files/images/strawberry.jpg" alt="Strawberry" title="Strawberry">
        </div>
        <div class="brick">
            <img src="./files/images/blueberries.jpg" alt="Blueberries" title="Blueberries">
        </div>
        <div class="brick">
            <img src="./files/images/pears.jpg" alt="Pears" title="Pears">
        </div>
        <div class="brick">
            <img src="./files/images/easter-eggs.jpg" alt="Easter-eggs" title="Easter-eggs">
        </div>
        <div class="brick">
            <img src="./files/images/lemons.jpg" alt="Lemons" title="Lemons">
        </div>
        <div class="brick">
            <img src="./files/images/cherries.jpg" alt="Cherries" title="Cherries">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Photo"
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
