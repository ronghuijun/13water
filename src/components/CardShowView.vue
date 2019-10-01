
<template>
  <div class="loginbg">
    <span></span>
    <div class="qian" style="margin-left:40%;margin-top:15%">
      <li><img src="../assets/poker/first.png"  alt=""></li>
      <li><img src="../assets/poker/first.png"  alt=""></li>
      <li><img src="../assets/poker/first.png"  alt=""></li>
    </div>
     <div class="zhong" style="margin-left:35%;margin-top:25%">
      <li><img src="../assets/poker/first.png"  alt=""></li>
      <li><img src="../assets/poker/first.png"  alt=""></li>
      <li><img src="../assets/poker/first.png"  alt=""></li>
      <li><img src="../assets/poker/first.png"  alt=""></li>
      <li><img src="../assets/poker/first.png"  alt=""></li>
    </div>
     <div class="hou" style="margin-left:35%;margin-top:35%">
     <li><img src="../assets/poker/first.png"  alt=""></li>
     <li><img src="../assets/poker/first.png"  alt=""></li>
     <li><img src="../assets/poker/first.png"  alt=""></li>
     <li><img src="../assets/poker/first.png"  alt=""></li>
     <li><img src="../assets/poker/first.png"  alt=""></li>
    </div>
    <div class="buttons" style="margin-top:-150px;margin-left:1180px;">
      <img src="../assets/Ranking.png" alt @click="skipRankingList" />
      <img src="../assets/HistoryList.png" alt @click="skipHistoryList" />
      <img src="../assets/Begingame.png" alt @click="PlayAndShowCard" />
      
      <!--退出按钮是要改成查看当前排行榜的按钮-->
    </div>

    <!--排行榜-->
  
  </div>
</template>

<script>
export default {
  name: 'RankingList',
  data() {
     return {
       "card":"*2 *3 *4 *5 *6 *7 *8 *9 *10 *J *Q *K *A",
       
       "cardsTotalInfo":[],
       "cardsTypeNumber":[0,0,0,0],//存放卡牌类型个数
       "cardsNumber":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
       "qiandun":["","",""],
       "zhongdun":["","","","",""],
       "houdun":["","","","",""],
      }
    },
  methods: {
    skipRankingList(){
          this.$router.push({path:'/RankingList'});
    },
    skipHistoryList(){
          this.$router.push({path:'/HistoryList'});
      },
    PlayAndShowCard(){
      //把牌分好
        var cards=this.card.split(" ");
        for(var i=0;i<=12;i++){
           var cardInfo={
              degree:0,
              type:"",
              total:"",
              number:0,//同等大小的牌
              use:false,

          };
          cardInfo.total=cards[i];
          cardInfo.type=cards[i].slice(0,1);
          if(cardInfo.type==="#"){
            this.cardsTypeNumber[0]++;
          }else if(cardInfo.type==="$"){
            this.cardsTypeNumber[1]++;
          }else if(cardInfo.type==="&"){
            this.cardsTypeNumber[2]++;
          }else if(cardInfo.type==="*"){
            this.cardsTypeNumber[3]++;
          }
          if(cards[i].slice(1,2)==="A"){
             cardInfo.degree=14;
             this.cardsNumber[14]++;
          }else if(cards[i].slice(1,2)==="K"){
            this.cardsNumber[13]++;
            cardInfo.degree=13;
          }else if(cards[i].slice(1,2)==="Q"){
            cardInfo.degree=12;
            this.cardsNumber[12]++;
          }else if(cards[i].slice(1,2)==="J"){
            this.cardsNumber[11]++;
            cardInfo.degree=11;
          }else if(cards[i].slice(1,2)==="1"){
            cardInfo.degree=10;
            this.cardsNumber[10]++;
          }
          else{
            cardInfo.degree=parseInt(cards[i].slice(1,2));
            this.cardsNumber[cardInfo.degree]++;
          }
          this.cardsTotalInfo.push(cardInfo);
        
      }
        /*console.log(this.cardsTotalInfo[0].degree);
          console.log(this.cardsTotalInfo[1].degree);
          console.log(this.cardsTotalInfo[2].degree);
            console.log(this.cardsTotalInfo[3].degree);*/
           
/*对该数组进行冒泡排序 
	var flag=false;*/
//大的排序次数（arr.length-1）

//排序
this.cardsTotalInfo.sort(function(a,b){
			
				return  a.degree-b.degree
			
    })
//把牌数赋值给各个牌
for(var i=0;i<14;i++){
  var j;
  for(var item in this.cardsTotalInfo[i]){
 //let obj=this.cardsTotalInfo[j];
 // this.cardsTotalInfo[j][number]=this.cardsNumber[obj.degree];
if(item==="degree"){
   j=this.cardsTotalInfo[i][item];
 }
}
 for(var item in this.cardsTotalInfo[i]){
  if(item==="number")
  {
    
    this.cardsTotalInfo[i][item]=this.cardsNumber[j]
    console.log(this.cardsTotalInfo[i][item])
  }
}
}
//console.log(this.cardsTotalInfo); 
//先找炸弹 葫芦 顺子 同花 后墩
/* for(var j=14;j<=1;j--){
   //找炸弹
   if(this.cardsNumber[j]==4){
      var h=0;
      for(var i=13;i<0;i++){
       
        if(this.cardsTotalInfo[i].degree===j){
          this.cardsTotalInfo[i].use=true;//表示牌被使用
          this.houdun[h]= this.cardsTotalInfo[i].total;
          h++;
        }
        for()
      }

   }

 }*/
/* 找到连续的数字算法
var arr = [1,2,5,7,10,11,12,13,18,19,20,21,22,56,57,58];
var index = 0;
var result = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] + 1 != arr[i+1]) {
        var mini = arr.slice(index, i+1);
        if (mini.length >= 5) {
            result.push(mini);
        }
        index = i+1;
    }
}
console.log(result); 
*/
    }
     
     
  },
}
</script>

<style lang="scss" scoped>
.loginbg {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;

  background: url("../assets/CardViewbg.png");
  background-size: contain;
  background-repeat: no-repeat;
  -ms-interpolation-mode: bicubic;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  .qian{
    
    li{
      float: left;
      list-style: none;
      img{
        margin-left:15px;
        width:70px;
      }
    }
  }
  .zhong{
     li{
      float: left;
      list-style: none;
      img{
        margin-left:15px;
        width:70px;
      }
    }
  }
  .hou{
     li{
      float: left;
      list-style: none;
      img{
        margin-left:15px;
        width:70px;
      }
    }
  }
  img {
    z-index: 0;
  }
  .phb {
    z-index: 1;
    margin-top:-85%;
    margin-left: 80px;
    p {
      text-align: center;
      font-family: "隶书";
      font-size: 30px;
      margin-block-end: 10px;
      margin-bottom: 10px;
    }
  }

  .buttons {

    img {
        cursor : pointer;
      width: 197px;
      height: 80px;
    }
  }
}
</style>
