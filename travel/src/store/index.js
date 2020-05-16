import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)


export default new Vuex.Store({
	state,
	mutations
	// actions:{可以不直接调用action的dispatch
	// 	//ctx上下文
	// 	changeCity(ctx,city){
	// 		ctx.commit('changeCity',city)
	// 	}
	// },
})