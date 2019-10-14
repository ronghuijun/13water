<template>
  <div class="bg">
    <div style="width:390px;margin-top:9%;margin-left:35.5%;">
      <p>排&nbsp;行&nbsp;榜</p>
      <el-table
        :data="ranginglist.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        height="400"
        border
        style="width: 700"
      >
        <el-table-column prop="player_id" label="玩家id"></el-table-column>
        <el-table-column prop="name" label="名字"></el-table-column>
        <el-table-column prop="score" label="分数"></el-table-column>
      </el-table>
      <el-pagination
        style="margin-top:0%;margin-left:30%"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="ranginglist.length"
        @current-change="handleCurrentChange"
      ></el-pagination>
      <div class="buttons" style="margin-top:-100px;margin-left:590px;">
        <img src="../assets/HistoryList.png" alt @click="skipHistoryList" />
        <img src="../assets/BeginnewGame.png" alt @click="skipCardShowView" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RankingList',
  data() {
     return {
       currentPage: 1,
        pageSize: 7,
        ranginglist:[
          {
          "player_id": 1,
          "name": "NO1",
          "score": 100
          },
          {
          "player_id": 1,
          "name": "NO4",
          "score": 100
          },
           {
          "player_id": 1,
          "name": "NO2",
          "score": 100
          },
           {
          "player_id": 1,
          "name": "NO3",
          "score": 100
          },
          ],
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        backDialog: false
      }
    },
    created() {
      this.getRankingList()
    },

    methods: {
      skipCardShowView(){
          this.$router.push({path:'/CardShowView'});
      },
      skipHistoryList(){
          this.$router.push({path:'/HistoryList'});
      },
       handleCurrentChange(currentPage) {
      this.currentPage = currentPage
    },
      getRankingList(){
         let _this=this;
        console.log(_this.$store.state.UserId)
        axios.get('https://api.shisanshui.rtxux.xyz/rank/rank.json', {
           
        })
        .then(function (response) {
         
          console.log(response)
          
           
        })
        .catch(function (error) {
          console.log(error);
        })
      }
   
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
      cursor: pointer;
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
