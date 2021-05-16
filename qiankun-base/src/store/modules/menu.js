export default {
    namespaced:true,
    state:{
        is_collapse:false,
    },
    mutations:{
        SET_COLLAPSE_STATUS(state,data){
            state.is_collapse = data;
        }
    },
    actions:{
        setCollapseStatus({commit},data){
            commit('SET_COLLAPSE_STATUS',data)
        }
    }

}