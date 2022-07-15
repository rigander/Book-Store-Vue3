import {createStore} from "vuex";
import {booksModule} from "@/store/booksModule";

export default createStore({
    modules: {
        post: booksModule
    }
})