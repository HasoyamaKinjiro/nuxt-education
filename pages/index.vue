<script setup>
const { data: products } = await useFetch('/api/currency');
</script>

<template>
    <v-container>
        <v-banner-text class="font-italic font-semibold">
            This page have no sense, please go on 'products'
        </v-banner-text>
        {{ products }}
    </v-container>
</template>
