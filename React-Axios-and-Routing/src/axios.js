import axios from "axios"

const instance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
})

//OVERRIDING
instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE"

export default instance
