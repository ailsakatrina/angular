var VK ={
	obj:new Object(),
	creatObj:function(obj){
		this.obj = obj;
		console.log(this.obj);
	},
	add:function(obj){
		this.obj.value += obj.alt;
		this.clickEffect(obj);
	},
	delete:function(obj){
		var len = this.obj.value.length;
		/*console.log(len);*/
		this.obj.value = this.obj.value.substring(0,len-1);
		this.clickEffect(obj);
	},
	empty:function(obj){
		this.obj.value ='';
		this.clickEffect(obj);
	},
	changeTab:function(obj){
		var label =  obj.id.substring(0,3);
		var panelID = label + 'Panel';
		$('#'+panelID).css('display','block');


		var otherPanel = $('#Panel').find('.map').not('#'+panelID);
		otherPanel.css('display','none');

		var anotherTab = $('#'+obj.id).siblings()[0];
		//console.log(anotherTab);

		this.addFocus(obj);
		this.removeFocus(anotherTab);

		
	},
	addFocus:function(obj){
		obj.style.backgroundColor = '#ffa95e';
		obj.style.color='white';
	},
	removeFocus:function(obj){
		obj.style.backgroundColor = '#ffd2ab';
		obj.style.color='#ffa95e';
	},
	clickEffect:function(obj){
		var coords = obj.coords.split(',');
		console.log(coords);
		var x = coords[0];
		var y = coords[1];
		var name = obj.parentNode.name;
		if(name=='map1'){
			var tabLabel = $('#pre_alp')[0].style;
			
			tabLabel.left = (x - 2)+'px';
			tabLabel.top = (y - 4)+'px';
			tabLabel.display = 'block';
			setTimeout(function(){
				tabLabel.display = 'none';
			},160);

		}
		else{
			tabLabel = $('#pre_num')[0].style;
			tabLabel.left = (x -(-76))+'px';
			tabLabel.top = (y - 18)+'px';
			tabLabel.display = 'block';
			setTimeout(function(){
				tabLabel.display = 'none';
			},160);
		}
		



	}
};