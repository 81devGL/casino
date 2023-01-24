import axios from 'axios'

class axiosServices {
    constructor() {
        var instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError)
        this.instance = instance
    }


    handleSuccess = (res) => {
        return res
    }

    handleError = (err) => {
        return err
    }

    get(url) {
        return this.instance.get(url);
    }

    post(url, data) {
        return this.instance.post(url, data);
    }
}


export default new axiosServices();