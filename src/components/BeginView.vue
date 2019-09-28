
<template>
  <div class="loginbg1" >
    <span>
  <img src="../assets/BeginGame.png" alt="" @click="skipCardShowView" style="margin-top:38%;margin-left:35%;">    
    

  <img src="../assets/HistoryList.png" alt="" @click="skipRankingList" style="margin-top:38%;margin-left:3%;">
   </span> 
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data () {
    return {
      
        
      };
    },
    methods: {
      skipCardShowView(){
          this.$router.push({path:'/CardShowView'});
      },
      skipRankingList(){
          this.$router.push({path:'/HistoryList'});
      }
       
    }
  }
</script>

<style lang="scss" scoped>
.loginbg1 {
  
  position:absolute;
  width: 100%;
  height:100%;
 
  background: url("../assets/bg.jpg");
  background-size: contain;
 background-repeat: no-repeat;
   -ms-interpolation-mode: bicubic;
   background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
 
  span{ 
    cursor : pointer;
}
}

</style>
