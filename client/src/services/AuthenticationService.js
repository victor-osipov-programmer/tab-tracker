import Api from '@/services/api.js'

export default {
    register(credentials) {
        return Api().post('register', credentials)
    }
}