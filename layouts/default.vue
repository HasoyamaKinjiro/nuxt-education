<script setup lang="ts">
import { ref } from 'vue';

interface PathItem {
    path: string;
    name: string;
}

const paths = ref<PathItem[]>([
    {
        path: 'about',
        name: 'About'
    },
    {
        path: 'products',
        name: 'Products'
    }
]);
</script>

<template>
    <v-app>
        <v-app-bar color="green-accent-2">
            <v-app-bar-title class="no-underline">
                <NuxtLink to="/">
                    Home
                </NuxtLink>
            </v-app-bar-title>
            <template v-slot:append>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn
                            v-bind="props"
                            icon="$menu"
                        />
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="({ path, name }, index) in paths"
                            :key="index"
                            :value="index"
                        >
                            <NuxtLink :to="`/${path}`" class="no-underline">
                                {{ name }}
                            </NuxtLink>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-app-bar>
        <v-main>
            <slot/>
        </v-main>
    </v-app>
</template>
