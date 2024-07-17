<script setup lang="ts">
import { computed } from 'vue';
import axios from 'axios';

import type { ProductI } from '@/types/types';

const { data: products } = await axios.get<ProductI[]>('/api/currency');

const sliceProducts = computed(() => {
    if (products) {
        return products.slice(0, 3);
    }
})
</script>

<template>
    <v-container>
        <v-banner-text class="font-italic font-semibold mb-7">
            This is an example of the products we have. All products are on the 'products' page.
        </v-banner-text>
        <v-row>
            <v-col
                v-for="product in sliceProducts"
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
