import {axiosService} from "./axios,service";
import {urls} from "../constants";


export const commentService = {
    getComments: (skip) => axiosService.get(urls.comments(skip)).then(value => value.data),
}