var logs = [],sums=[];
var digui = function(node,sum,log){
	var nodeid=node.id;
	
	var nowrow = node.parentNode;

	var nowrowindex = node.parentNode.id.replace('row_','');
	if(nowrowindex==1){
		sum = 0;
		log = [];
	}
	sum +=node.innerHTML*1;
	log.push(node.innerHTML);
	var spans= nowrow.getElementsByTagName('span');
	var nextOffset = 0
	for(var i=0;i<spans.length;i++){
		if(node===spans[i]){
			nextOffset = i;
			break;
		}
	}
	var nextrow = document.getElementById('row_'+(nowrowindex*1+1));
	if(!nextrow){
		sums.push(sum);
		logs.push(log.concat());
		log = [];
		return;
	}
	var nextspans = nextrow.getElementsByTagName('span');
	var nextNodeLeft = nextspans[nextOffset];
	var nextNodeRight = nextspans[nextOffset+1];
	digui(nextNodeLeft,sum,log.concat());
	digui(nextNodeRight,sum,log.concat());
}
digui(document.getElementById('folder_1'));
var max =  eval('Math.max(' + sums.toString() + ')');
console.log(logs[sums.indexOf(max)]);