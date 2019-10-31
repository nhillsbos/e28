<template>
<div class="col-sm-12 gameHeader">
                <h1 class="text-center">{{ gameTitle }}</h1>
                <h4 class="text-center"><slot name="subtitle"></slot></h4>
        </div>
</template>
<script>
module.exports = {
       data: function () {
        return { }
        },
        props: ['gameTitle']
}

</script>
<style scoped>
h1 {
        font-size: 4.5em;
}
</style>