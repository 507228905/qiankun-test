export default {
    namespaced:true,
    state:{
        msg:'',
    },
    mutations:{
        SET_MSG(state,data){
            state.msg = data;
        }
    },
    actions:{
        setMsg({commit},data){
            commit('SET_MSG',data)
        }
    }
}