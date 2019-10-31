<template>
<div v-if="playerWins || cpuWins" class="row text-center allTheWins" v-bind:class="{goodJob: whoIsWinning}">
                <div  class="col-sm-4" >
                    <h3>
                     Score:
                    </h3>
                    <i v-for="win in playerWins" class=" fa fa-star pulse animated delay-1s rotateIn"></i>

                </div> <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <h3>Score:</h3>
                    <i v-for="win in cpuWins" class="fa fa-star animated delay-1s rotateIn cpuStar"></i>

                </div>

            </div>
</template>
<script>
module.exports = {
        data: function() {
        return {

        }
    },
    props: ['playerWins','cpuWins','whoIsWinning'],
    template: '#display-stars',
}
</script>
<style scoped></style>