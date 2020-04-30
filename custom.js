function count(){
	var watch_str=localStorage.getItem("cake-shop");
	if (watch_str) {
		var watch_arr=JSON.parse(watch_str);
		var count=0;
		$.each(watch_arr,function(i,v){
			count+=v.qty;
			$("#count").text("("+count+")");
		})
	}
	else{
			$("#count").text("");

	}
}