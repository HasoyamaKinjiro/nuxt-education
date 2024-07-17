<script setup>
defineProps(['error']);

const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
    <v-container class="mt-7">
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card class="text-center bg-green-accent-2">
                    <p class="text-7xl font-bold mt-7">{{ error.statusCode }}</p>
                    <p class="text-6xl font-bold mt-7">Oops.</p>
                    <p class="mt-7 font-semibold">{{ error.message }}</p>
                    <v-btn class="my-7" @click="handleClearError" >Go Home...</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
