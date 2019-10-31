<template>
<div class="row" >
                <div id="entPlaNa" class="col-sm-12">    
                    <h3 class="text-center">Enter your name:</h3>
                    <input type="text" class="form-control entName text-center"  v-bind:placeholder="placeholderName" v-bind:value="value" 
                    v-on:input="$emit('input', $event.target.value)"/>
                </div> 
            </div>
</template>
<script>
module.exports = {
        data: function () {
        return {
                
            
            }
        },
        props: ['value','playerName', 'placeholderName'],
        template: '#enter-name',
}
</script>
<style scoped></style>