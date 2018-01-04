var app=new Vue({
	el:'#app',
	data:{
		que:1,
		ans1:'',
		ans2:[],
		ans3:'',
	},
	methods:{
		changeAns:function(val,event){
			var s=document.getElementsByName('sex');
			console.log('val='+val);
			if(val===''){
				for(var i=0;i<s.length;i++){
				s[i].checked=false;
				}
			}
			for(var i=0;i<s.length;i++){
				if(s[i].checked===true){
					console.log(this.ans1+'shou');
					this.ans1=s[i].value;
				}
			}
			
			
		},
		changeBox:function(){
			var s=document.getElementsByName('hobby');
			var arr=[];
			for(var i=0;i<s.length;i++){
				if(s[i].checked===true){
					arr.push(s[i].value);
				}
			}
			this.ans2=arr;
			console.log(this.ans2);
		},
		changeText:function(){
			console.log(this.ans3);
		}
	},
	mounted:function(){
		
	}
})
