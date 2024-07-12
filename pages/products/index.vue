<script setup>
definePageMeta({
    layout: 'default' // We can define different layouts
});

useHead({
    title: 'Merch' // We can overwrite meta from nuxt.config for any page
});

const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>

<template>
    <v-container>
        <v-row>
            <v-col
                v-for="product in products"
                :key="product.id"
                cols="12"
                sm="4"
                md="3"
            >
                <ProductCard :product="product"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>

</style>
