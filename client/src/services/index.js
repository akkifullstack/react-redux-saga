import * as home  from './home';
import * as images from './image';
import ApiService from './ApiServices';







export default new ApiService({
    ...home,
    ...images
})