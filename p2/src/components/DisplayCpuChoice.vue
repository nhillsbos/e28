<template>
<div v-if="cpuChoice" id="cpuDraw" class="col-sm-4">
                    <p class="text-center alert alert-info"><strong>CPU chose:</strong></p>
                    <img v-if="cpuChoice == 'cpuRock'" v-bind:src="rockImg" alt="rock" class="img-responsive"/>
        <img v-else-if="cpuChoice == 'cpuPaper'" v-bind:src="paperImg" alt="paper" class="img-responsive"/>
        <img v-else-if="cpuChoice == 'cpuScissors'" v-bind:src="scissorsImg" alt="scissors" class="img-responsive"/>
                </div>
</template
<script>
module.exports = {
        data: function() {
        return {
            rockImg: 'imgs/rock.gif',
            paperImg: 'imgs/paper.gif',
            scissorsImg: 'imgs/scissors.gif',
        }
    },
    props: ['cpuChoice'],
    template: '#display-cpu-choice',
}
</script>
<style scoped></style>