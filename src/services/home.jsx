
export const getImages = async (service) => service.fetch({
    method: 'GET',
    url: 'jobs/job-stats/'
})