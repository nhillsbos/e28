<template>

                <div id="playerBox" class="col-sm-6 col-sm-offset-3">
    <p v-if="playerName" class="text-center"><strong>Player:</strong> {{ playerName }}</p>
    <p v-else class="text-center"><strong>Player:</strong> {{ placeholderName }}</p>

<!-- player options, the user cannot change names without reloading after the first click -->
<div id="playerChoices"  class="text-center">
    <img @click="$emit('make-choice', 'playerRock')" v-bind:src="rockImg" alt="rock" id="playerRock" class="" />
    <img @click="$emit('make-choice', 'playerPaper')" v-bind:src="paperImg" alt="paper" id="playerPaper" />
    <img @click="$emit('make-choice', 'playerScissors')" v-bind:src="scissorsImg" alt="playerScissors" id="playerScissors" />
</div>
</div>
</template>
<script>
module.exports = {
        data: function() {
        return {
                rockImg: 'imgs/rock.gif',
                paperImg: 'imgs/paper.gif',
                scissorsImg: 'imgs/scissors.gif',
                victor: null,
                
        }
    },
    props: ['playerName','playerChoice','cpuChoice','makeChoice', 'placeholderName'],
    template: '#player-options',
}
</script>
<style scoped></style>