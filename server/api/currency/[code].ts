interface EventHandlerRequest {}

interface CurrencyData {
    rates: {
        [key: string]: number;
    };
    base: string;
    date: string;
}

export default defineEventHandler<EventHandlerRequest, Promise<CurrencyData>>(async function (this: any, event: any) {
    const { code } = event.context.params;
    const { currencyKey } = useRuntimeConfig();

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

    try {
        const { data } = await this.$fetch(uri);

        return data as CurrencyData;
    } catch (error) {
        console.error('Error fetching currency data:', error);
        throw error;
    }
});
