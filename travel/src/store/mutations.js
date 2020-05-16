export default {
	changeCity(state,city){
		state.city=city
		//本地存储保存此时的city，当用户刷新界面时，city值将调用本地存储的值
		try{
			localStorage.city=city
		}catch(e){}
	}
}