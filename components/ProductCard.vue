<script setup lang="ts">
import type { ProductI } from '@/types/types';

defineProps<{
    product: ProductI;
}>();
</script>

<template>
    <v-card
        class="mx-auto"
        max-width="344"
    >
        <v-img
            height="200px"
            :src="product.image"
        />
        <v-card-title>
            {{ product.title }}
        </v-card-title>

        <v-card-actions>
            <NuxtLink :to="`/products/${product.id}`">
                <v-btn
                    color="green-accent-4"
                    text="Explore"
                />
            </NuxtLink>
            <v-card-text class="text-end">
                <span class="font-semibold">Price:</span> {{ product.price }}$
            </v-card-text>
        </v-card-actions>
    </v-card>
</template>
