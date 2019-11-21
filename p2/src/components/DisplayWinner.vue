<template>
<div v-if="playerChoice">
    <!-- displays the winner -->
<div  id="theWinnerIs" class="col-sm-4">
    <p v-if="victor == 'cpu'" class="text-center alert alert-danger" > <strong>CPU wins.</strong></p>
    <p v-else-if="victor == 'player'" class="text-center alert alert-success"><strong>{{ playerName }} wins.</strong></p>
    
    <p v-else-if="victor == 'draw'" class="text-center alert alert-info"><strong>Draw Game.</strong></p>

</div>
 
</div> 
</template>
<script>
module.exports = {
        data: function() {
        return {
        }
    },
    props: ['playerChoice','playerName','victor'],
    template: '#display-winner',
}
</script>
<style scoped></style>