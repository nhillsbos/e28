<!-- src/components/ShowProduct.vue -->
<template>
    <div class='product'>
 
 <router-link  :to='{name: "product", params: { "id" : product.id }}'>
        <div data-test="product-name" class='product-name'>{{ product.name }}</div>
        <img :alt='"Product image of " + product.name ' class='product-thumb' :src='"./../assets/images/products/" + product.id + ".jpg"' />
 </router-link>
    </div>
</template>

<script>


export default {
    name: 'ShowProduct',
    props: ['product'],
}
</script>

