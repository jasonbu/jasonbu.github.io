


function tree_auto_display_none(id)
{
	dtrees = document.getElementsByClassName("dtree");
	
	console.log("len:" + dtrees.length);
	
	for (var i =0;i<dtrees.length;i++){
		currentTree = dtrees[i];
		if(i == id){
			currentTree.style.display = "block";
		}else{			
			currentTree.style.display = "none";
		}
	}
	
	var me = this;
	console.log(id);
};