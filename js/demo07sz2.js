var app=new Vue({
	el:'#app',
	data:{
		list:[
			[
				{
					id:1,
					name:'iPhone 7',
					price:6188,
					count:1
				},
				{
					id:2,
					name:'iPad Pro',
					price:5888,
					count:1
				},
				{
					id:3,
					name:'MacBook Pro',
					price:21488,
					count:1
				}
			],
			[
				{
					id:4,
					name:'苹果',
					price:5,
					count:1
				},
				{
					id:5,
					name:'葡萄',
					price:8,
					count:1
				},
				{
					id:6,
					name:'橙子',
					price:3,
					count:1
				}
			]
		]
	},
	computed:{
		totalPrice:function(){
			var total=0;
			for(var i=0;i<this.list.length;i++){
				var item=this.list[i];
				for(var j=0;j<item.length;j++){
					total+=item[j].price*item[j].count;
				}
				
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
	},
	methods:{
		handleReduce:function(item){
			if(item.count===1) return ;
			item.count--;
	
		},
		handleAdd:function(item){
			item.count++;
		},
		handleRemove:function(index1,index){
			if(this.list[index]===1){this.list.splice(index,1);}
			this.list[index].splice(index1,1);
		}
	}
})
