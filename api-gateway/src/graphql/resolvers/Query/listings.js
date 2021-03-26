import ListingsServices from "#root/adapters/ListingsService";


const listingsResolver = async () => {
    return await ListingsServices.fetchAllListings();
};

export default listingsResolver;