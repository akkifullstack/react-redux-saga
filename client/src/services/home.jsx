
export const getImages = async (service) => service.fetch({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/photos'
})