function process() {
			var city = document.getElementById("city").value;
			var price = document.getElementById("price").value;
			price=parseInt(price);
			var area = document.getElementById("area").value;
			var city_string;
			switch(city){
				case "Taipei":
					city_string="�x�_��";
					break;
				case "Taichung":
					city_string="�x����";
					break;
				case "Kaosiung":
					city_string="������";
					break;
				case "Chaiyi":
					city_string="�Ÿq��";
					break;
				default:
					city_string="�x�_��";
			}
			alert(city+" "+price+" "+area);
			alert(city_string);
			
			var objFSO=new ActiveXObject("Scripting.FileSystemObject");
			var objStream=objFSO.OpenTextFile("$filePath\\house.txt",1,true,false)
			
			 
			while (!objStream.AtEndOfStream) 
		{ 
			var s = objStream.Readline(); 
			
			var a = s;
			var newarray = new Array();
			newarray = s.split(" ")
			alert(city_string+" "+newarray[1]);
			if(city_string[0]==newarray[1][0]){
				if(city_string[1]==newarray[1][1]){
					if(city_string[2]==newarray[1][2]){
						if(price<=parseInt(newarray[3])&&(price+5000000)>=parseInt(newarray[3])){
							
							if(area<=parseInt(newarray[4])&&(area+10)>=parseInt(newarray[4]))alert("?");
						}
					}
					
				}
			}
			
			
			
			//if(city_string==newarray[1])alert(newarray[1]);
					
			    
			
		} 
  
}