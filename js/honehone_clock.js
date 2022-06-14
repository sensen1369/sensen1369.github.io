		function browerdetect(){
			var userAgent = navigator.userAgent;
      		var desc = navigator.mimeTypes['application/x-shockwave-flash'];     
			//我看好多方法是用注释这一句,但是实践起来,在谷歌浏览器里navigator.mimeTypes['application/x-shockwave-flash']打印没有值,所以后面的方法会报错
			//navigator.mimeTypes['application/x-shockwave-flash'].description.toLowerCase();
			if (userAgent.indexOf("Chrome") > -1) {
				if(!desc){
					//谷歌浏览器
					return('chrome');
				}else{
					//360
					return('360');
				}
			}else{
				//其他浏览器
				return('other');
				/*console.log('其他浏览器')*/
			}
		}
		
		if(browerdetect() == '360'){
		 	var str = "<div class='clock'><script charset='Shift_JIS' src='js/honehone_clock_tr.js'>"+"</script"+"><"+"/div>";
			document.write(str);
		}
	






/*<div class="clock"><script charset="Shift_JIS" src="js/honehone_clock_tr.js"></script></div>*/
	
/*通过浏览器内核版本判断*/
	/*<script>	
		function getChromeVersion() {
    		var arr = navigator.userAgent.split(' '); 
    		var chromeVersion = '';
    		for(var i=0;i < arr.length;i++){
				if(/chrome/i.test(arr[i]))
					chromeVersion = arr[i]
			}
			if(chromeVersion){
				return Number(chromeVersion.split('/')[1].split('.')[0]);
			} else {
				return false;
			}
		}

		if(getChromeVersion()<90){
			str = "<div class='clock'><script charset='Shift_JIS' src='js/honehone_clock_tr.js'>"+"</script"+"><"+"/div>";
			document.write(str);
		}
	</script>*/
		

	      
	
	
	
	
	