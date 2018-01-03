var app=new Vue({
	el:'#app',
	data:{
		list:[
			{
				id:1,
				name:'iPhone 7',
				price:6188,
				count:1,
				buy:false
			},
			{
				id:2,
				name:'iPad Pro',
				price:5888,
				count:1,
				buy:false
			},
			{
				id:3,
				name:'MacBook Pro',
				price:21488,
				count:1,
				buy:false
			}
		]
	},
	computed:{
		totalPrice:function(){
			var total=0;
			for(var i=0;i<this.list.length;i++){
				var item=this.list[i];
				if(item.buy) {total+=item.price*item.count;}
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
	},
	methods:{
		handleReduce:function(index){
			if(this.list[index].count===1) return ;
			this.list[index].count--;
		},
		handleAdd:function(index){
			this.list[index].count++;
		},
		handleRemove:function(index){
			this.list.splice(index,1);
		},
		handleBuy:function(index){
			this.list[index].buy=!this.list[index].buy;
		},
		handleBuyAll:function(){	
			this.list.forEach(function(event){
				event.buy=true;
			});
		}
	}
})
