
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
       "card":"*2 *3 *4 *5 *6 *7 *8 *9 *Q &K *K &J #J",
       "cardsUse":[],
       "cardsTotal":[],
       "cardsDegree":[],
       "cardsType":[],
       "cardsNumber":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
       //"cardsTotalInfo":[],
       "cardsTypeNumber":[0,0,0,0],//存放卡牌类型个数
       
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
        var max1=0;//有多少重复的牌
        var max2=0;
        var cards=this.card.split(" ");
        for(var i=0;i<=12;i++){
        
          this.cardsUse[i]=false;
          this.cardsTotal[i]=cards[i];
          this.cardsType[i]=cards[i].slice(0,1);
          /*cardInfo.total=cards[i];
          cardInfo.type=cards[i].slice(0,1);*/
          if(this.cardsType[i]==="#"){
            this.cardsTypeNumber[0]++;
            this.cardsType[i]=0;
          }else if(this.cardsType[i]==="$"){
            this.cardsTypeNumber[1]++;
            this.cardsType[i]=1
          }else if(this.cardsType[i]==="&"){
            this.cardsTypeNumber[2]++;
            this.cardsType[i]=2
          }else if(this.cardsType[i]==="*"){
            this.cardsTypeNumber[3]++;
            this.cardsType[i]=3
          }
         
          if(cards[i].slice(1,2)==="A"){
             
            this.cardsDegree[i]=14;
            this.cardsDegree[i]=parseInt(this.cardsDegree[i]);
             
             this.cardsNumber[this.cardsDegree[i]]++;
          }else if(cards[i].slice(1,2)==="K"){
            this.cardsNumber[13]++;
            this.cardsDegree[i]=13;
          }else if(cards[i].slice(1,2)==="Q"){
            this.cardsDegree[i]=12;
            this.cardsNumber[12]++;
          }else if(cards[i].slice(1,2)==="J"){
            this.cardsNumber[11]++;
            this.cardsDegree[i]=11;
          }else if(cards[i].slice(1,2)==="1"){
            this.cardsDegree[i]=10;
            this.cardsNumber[10]++;
          }
          else{
            this.cardsDegree[i]=parseInt(cards[i].slice(1,2));
            this.cardsNumber[this.cardsDegree[i]]++;
          }
          //this.cardsTotalInfo.push(cardInfo);
        
      }
      //看是否有炸弹 有葫芦（重复牌数）
      for(var i=1;i<=14;i++)
      {
        if(max1<this.cardsNumber[i])
        max1=this.cardsNumber[i];
      }
      //看是否有同花
      for(var i=0;i<4;i++)
      {
        if(max2<this.cardsTypeNumber[i])
          {
            
            max2=this.cardsTypeNumber[i];
          }
      }
      
    
        for (var i = this.cardsDegree.length - 1; i > 0; i--) {
          for (var j = 0; j < i; j++) {
            if (this.cardsDegree[j] < this.cardsDegree[j + 1]) {
              [this.cardsDegree[j], this.cardsDegree[j + 1]] = [this.cardsDegree[j + 1], this.cardsDegree[j]];
              [this.cardsTotal[j], this.cardsTotal[j + 1]] = [this.cardsTotal[j + 1], this.cardsTotal[j]];
              [this.cardsType[j], this.cardsType[j + 1]] = [this.cardsType[j + 1], this.cardsType[j]];
            }
          }
        }
        this.decideHoudun(max1,max2);
        this.decideZhongdun();
   /*   console.log(this.cardsDegree)
      console.log(this.cardsUse)
      console.log(this.cardsTotal)
      console.log(this.cardsType)

      console.log(this.cardsNumber)
       //"cardsTotalInfo":[],
      console.log(this.cardsTypeNumber)*/
      console.log(this.houdun)
       console.log(this.zhongdun)
   
},
    decideHoudun(max1,max2){
      //找牌   
      var houdun=[]
      var flag;
     
     /* console.log(max1)
      console.log(max2)*/
      if(max1>2){

           flag=-1;
          for(var j=1;j<=14;j++){
                
                if(this.cardsNumber[j]==5-max1)                                  
                {
                  flag=j;
                  break
                }
              }
          if(flag>0){
            for(var j=0;j<=12;j++)
            {
              
              if(this.cardsDegree[j]===flag&&this.cardsUse[j]===false)
              {
                
                this.cardsUse[j]=true;
                this.cardsNumber[this.cardsDegree[j]]
                houdun.push(this.cardsTotal[j]);
                
              }
            }
          
        

          for(var j=1;j<=14;j++){
                
                if(this.cardsNumber[j]==max1&&this.cardsUse[this.cardsNumber[j]]===false)
                {
                  flag=j;
                  
                }
              }
              
          for(var j=0;j<=12;j++)
          {
            
            if(this.cardsDegree[j]===flag)
            {
              
              this.cardsUse[j]=true;
              this.cardsNumber[this.cardsDegree[j]];
              houdun.push(this.cardsTotal[j]);
              
            }
          }
       
          }
        }
      //同花
      if(max2>5&&flag<0){
        for(var i=0;i<=3;i++){
          if(this.cardsTypeNumber[i]>=5)
          {
            
              flag=i
              //console.log(flag)
          }
        }
        for(var i=0;i<13;i++)
        {
          if(this.cardsType[i]===flag&&houdun.length<=4){
            houdun.push(this.cardsTotal[i])
            this.cardsType[i]--
            this.cardsUse[i]=true
          }
        }
      }
      //只有2张
      else{
        for(var i=0;i<=12;i++){
         
          if(this.cardsNumber[this.cardsDegree[i]]===2&&houdun.length<=4)
          {
            
            houdun.push(this.cardsTotal[i])
           
            //console.log(this.cardsDegree[i])
           // console.log(this.cardsNumber[this.cardsDegree[i]])
            this.cardsUse[i]=true
              
          }
          
        }
            for(var j=1;j<=14;j++){
                
                if(this.cardsNumber[j]===1)                                  
                {
                  flag=j;
                  break
                }
              }
          for(var j=0;j<=12;j++)
          {
            
            if(this.cardsDegree[j]===flag)
            {
              
              this.cardsUse[j]=true;
             
              houdun.push(this.cardsTotal[j]);
              
            }
          }
      }
      this.houdun=houdun
  },
  decideZhongdun(){
         //找牌   
      var zhongdun=[]
      var flag;
      var max1=0
      var max2=0
      var cardsnumber=[];
      for(var i=0;i<15;i++)
      {
        if(this.cardsNumber[i]>0)
        for(var j=0;j<this.cardsNumber[i];j++)
        cardsnumber.push(this.cardsNumber[i])
      }
      cardsnumber.reverse();
      console.log(this.cardsNumber)

      console.log(cardsnumber)

      console.log(this.cardsUse)
      for(var i=0;i<13;i++)
      {
        
        if(max1<cardsnumber[i]&&this.cardsUse[i]===false)
        {
        max1=cardsnumber[i];
        console.log("i="+i)
        }
      }
      
      //看是否有同花
      for(var i=0;i<4;i++)
      {
        if(max2<this.cardsTypeNumber[i])
          {
            
            max2=this.cardsTypeNumber[i];
          }
      }

      console.log(max1)
      console.log(max2)
      if(max1>2){
          for(var j=1;j<=14;j++){
                
                if(cardsnumber[j]==max1&&this.cardsUse[j]===false)
                {
                  flag=j;
                  
                }
              }
              
          for(var j=0;j<=12;j++)
          {
            
            if(this.cardsDegree[j]===flag)
            {
              
              this.cardsUse[j]=true;
              zhongdun.push(this.cardsTotal[j]);
              
            }
          }
          flag=-1;
          for(var j=1;j<=14;j++){
                
                if(cardsnumber[j]==5-max1&&this.cardsUse[j]===false)                                  
                {
                  flag=j;
                  break
                }
              }
          if(flag>0){
            for(var j=0;j<=12;j++)
            {
              
              if(this.cardsDegree[j]===flag)
              {
                
                this.cardsUse[j]=true;
                zhongdun.push(this.cardsTotal[j]);
                
              }
            }
          }
          if(flag<0){
            
            for(var t=0;y<3;t++){
              for(var h=0;h<13;h++){
                if(this.cardsTotal[h]===zhongdun.pop())
                {
                  this.cardsUse=false
                }
              }
          }
          }
        }
      //同花
      if(max2>5&&flag<0){
        for(var i=0;i<=3;i++){
          if(this.cardsTypeNumber[i]>=5)
          {
            
              flag=i
              console.log(flag)
          }
        }
        for(var i=0;i<13;i++)
        {
          if(this.cardsType[i]===flag&&zhongdun.length<=4){
            zhongdun.push(this.cardsTotal[i])
            this.cardsUse[i]=true
          }
        }
      }
      //只有2张
      else{
        for(var i=0;i<=12;i++){
          if(this.cardsNumber[this.cardsDegree[i]]===2&&zhongdun.length<=4)
          {
            
            zhongdun.push(this.cardsTotal[i])
            this.cardsUse[i]=true
              
          }

        }
            for(var j=1;j<=14;j++){
                
                if(this.cardsNumber[j]===1)                                  
                {
                  flag=j;
                  break
                }
              }
          for(var j=0;j<=12;j++)
          {
            
            if(this.cardsDegree[j]===flag)
            {
              
              this.cardsUse[j]=true;
              zhongdun.push(this.cardsTotal[j]);
              
            }
          }
      }
      this.zhongdun=zhongdun
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
