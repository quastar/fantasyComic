import axios from "axios";
import Qs from 'qs';
axios.defaults.timeout = 6000;
axios.defaults.baseURL = ""; //填写域名

// const baseApi="http://localhost:8080"
const baseApi=''
interface responseData{
    data:Array<any>|any
}
class request{

    /**
     * 封装get方法
     * @param url
     * @param data
     * @returns {Promise}
     */

    get(url:string, params = {}):Promise<responseData> {
        return new Promise((resolve, reject) => {
            axios
                .get(baseApi+url, {
                    params: params
                })
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    /**
     * 封装post请求
     * @param url
     * @param data
     * @returns {Promise}
     */

    post(url:string, data = {}):Promise<responseData> {
        return new Promise((resolve, reject) => {
            axios.post(baseApi+url, data).then(
                response => {
                    resolve(response.data);
                },
                err => {
                    reject(err);
                }
            );
        });
    }
}
export default  new request()