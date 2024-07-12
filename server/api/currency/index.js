export default defineEventHandler(async (event) => {
    const data = await $fetch('https://fakestoreapi.com/products');

    if (!data) {
        throw new Error('Failed to fetch products');
    }

    return data;
});
