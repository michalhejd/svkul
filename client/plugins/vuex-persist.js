import VuexPersistence from "vuex-persist";

export default ({ store }) => {
    new VuexPersistence({
        key: "vuex",
        storage: window.localStorage,
        reducer: state => ({
            cookies: state.cookies,
            logged: state.logged
        })
    }).plugin(store);
    }
