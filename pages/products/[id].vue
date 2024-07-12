<script setup>
const { id } = useRoute().params;

const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`);
</script>

<template>
    <Head> <!-- Another one way to overwrite meta  -->
        <Title> Nuxt | {{ product.title }} </Title>
    </Head>
    <v-container>
        <v-card
            class="mx-auto"
            max-width="800"
        >
            <v-card-title>
                {{ product.title }}
            </v-card-title>
            <v-img
                height="200"
                width="200"
                :src="product.image"
            />
            <v-card-text>
                <span class="font-semibold">Description:</span>
                {{ product.description }}
            </v-card-text>
        </v-card>
    </v-container>
</template>
