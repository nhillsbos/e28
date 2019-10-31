<template>
<div v-if="playerChoice" id="playerDraw" class="col-sm-4">
                    <p class="text-center alert alert-info"><strong>You chose:</strong></p>
                    <img v-if="playerChoice == 'playerRock'" v-bind:src="rockImg" alt="rock" class="img-responsive"/>
        <img v-else-if="playerChoice == 'playerPaper'" v-bind:src="paperImg" alt="paper" class="img-responsive"/>
        <img v-else-if="playerChoice == 'playerScissors'" v-bind:src="scissorsImg" alt="playerScissors" class="img-responsive"/>
                </div>
</template>
<script>
module.exports = {
        data: function() {
        return {
            rockImg: 'imgs/rock.gif',
            paperImg: 'imgs/paper.gif',
            scissorsImg: 'imgs/scissors.gif',
        }
    },
    props: ['playerChoice'],
    template: '#display-player-choice',
}
</script>
<style scoped></style>