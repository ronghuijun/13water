<template>
  <div class="bg">
    <div style="width:390px;margin-top:9%;margin-left:35.5%;">
      <p>排&nbsp;行&nbsp;榜</p>
      <table
        border="1px"
        cellpadding="5px"
        align="center"
        bgcolor="yellow"
        width="390px"
        height="100px"
      >
        <!--tr表示行 td表示列-->
        <tr>
          <td>&nbsp;&nbsp;&nbsp;</td>
          <td>用户名</td>
          <td>得分</td>
        </tr>
        <tr v-for="(user) in ranginglist" :key="user.name">
          <td>
            <img src="../assets/cup.png" style="width:50px" alt />
          </td>
          <td>{{user.name}}</td>
          <td>{{user.score}}</td>
        </tr>
      </table>
      <div class="buttons" style="margin-top:-100px;margin-left:590px;">
        <img src="../assets/HistoryList.png" alt @click="skipHistoryList" />
        <img src="../assets/BeginnewGame.png" alt @click="skipCardShowView" />
        
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'RankingList',
  data() {
     return {
        ranginglist:[
          {
          "player_id": 1,
          "name": "NO1",
          "score": 100
          },
          {
          "player_id": 1,
          "name": "NO1",
          "score": 100
          },
           {
          "player_id": 1,
          "name": "NO1",
          "score": 100
          },
           {
          "player_id": 1,
          "name": "NO1",
          "score": 100
          },
          ],
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        backDialog: false
      }
    },
    methods: {
      skipCardShowView(){
          this.$router.push({path:'/CardShowView'});
      },
      skipHistoryList(){
          this.$router.push({path:'/HistoryList'});
      },
   
    }
  };
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  width: 100%;
  height: 100%;

  background: url("../assets/RankListbg.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  -ms-interpolation-mode: bicubic;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  p {
    text-align: center;
    font-family: "隶书";
    font-size: 30px;
    margin-block-end: 10px;
    margin-bottom: 10px;
  }
  .buttons {
    img {
      width: 197px;
      height: 80px;
        cursor : pointer;
    }
  }
  tr {
    text-align: center;
  }

  td {
    height: 60px;
    font-family: "Cooper", "Helvetica Neue", Helvetica, "PingFang SC",
      "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 20px;
  }
}
</style>
