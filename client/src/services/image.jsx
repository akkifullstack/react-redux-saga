export const submitImageForm = (service,  image) => service.fetch({
    method: 'POST',
    url: 'api/new',
    body:image
})