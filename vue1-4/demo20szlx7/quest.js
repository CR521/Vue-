Vue.component('btns',{
	props:{
		que:{
			type:Number,
			default:1
		},
		ans1:{
			type:String,
			default:''
		},
		ans2:{
			type:Array,
			default:[]
		},
		ans3:{
			type:String,
			default:''
		}
	},
	data:function(){
		return {
			quest:this.que,
			answer1:this.ans1,
			answer2:this.ans2,
			answer3:this.ans3,
			last:false,
			next:false,
			reset:true,
			post:false
		}
	},
	template:`
	<div>
		<button v-show="last" class="last" @click="lastQue" >上一步</button>
		<button v-show="next" class="next" @click="nextQue" :disabled="nonext()">下一步</button>
		<button v-show="reset" class="reset" @click="resetQue" >重置</button>
		<button v-show="post" class="post" @click="postQue" :disabled="nopost()">提交</button>
	</div>
	`,
	watch:{
		quest:function(){
			this.$emit('input',this.quest);
			this.$emit('on-change',this.quest);
			this.updateQue(this.quest);
		},
		que:function(){
			this.updateQue(this.que);
		},
		ans1:function(){
			this.nonext();
			this.answer1=this.ans1;
			console.log('answer1'+this.answer1);
			console.log('ans1'+this.ans1);
		},
		answer1:function(){
			console.log('2answer1'+this.answer1);
			console.log('2ans1'+this.ans1);
//			this.$emit('input',this.answer1);
			this.$emit('on-change',this.answer1);	
			this.nonext();
//			this.updateQue(this.quest);
		},
		ans2:function(){
			this.nonext();
			console.log('ans2'+this.ans2);
		},
		answer2:function(){
			console.log('answer2'+this.answer2);
			this.$emit('changeBox',this.answer2);
			this.$emit('on-change',this.answer2);
			this.updateQue(this.quest);
		},
		ans3:function(){
			this.nopost();
		},
		answer3:function(){
			this.nopost();
		}
	},
	methods:{
		updateQue:function(q){
			this.que=q;
			if(q===1){
				this.last=false;
				this.next=true;
				this.post=false;
			}else if(q===2){
				this.last=true;
				this.next=true;
				this.post=false;
			}else{
				this.last=true;
				this.next=false;
				this.post=true;
			}
			this.nonext();
		},
		nextQue:function(){
			this.quest+=1;
		},
		lastQue:function(){
			this.quest-=1;
			
		},
		postQue:function(){
			
		},
		resetQue:function(){
			if(this.quest===1){
				this.answer1='';
		
			}else if(this.quest===2){
				this.answer2=[];
			}else{
				this.answer3='';
			}
		},
		nonext:function(){
			if(this.quest===1){
				if(this.answer1===''){
					return true;
				}else{
					return false;
				}
			}else{
				if(this.ans2.length>=2&&this.ans2.length<=3){
					return false;
				}else{
					return true;
				}
			}
		},
		nopost:function(){
			if(this.ans3.length<10){
				return true;
			}else{
				return false;
			}
		}
	},
	mounted:function(){
		console.log('开始');
		this.updateQue(this.quest);
		
	}
	
});

