let defaultCity="广州"
//city的值优先从localStorage中获取，如果不能获取则使用广州
try{
	if (localStorage.city) {
		defaultCity=localStorage.city
	}
}catch(e){}

export default {
	city:defaultCity
}