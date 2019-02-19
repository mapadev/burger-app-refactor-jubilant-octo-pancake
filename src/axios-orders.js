import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://react-burger.firebaseio.com/'
    baseURL: "https://udemy-react-my-burger.firebaseapp.com/"
});

export default instance;
