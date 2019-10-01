
<template>
  <div class="loginbg1">
    <el-table
      :data="gameTableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      height="410"
     
      border
      style="width: 34.52%;margin-top:5%;margin-left:30%" 
    >
      <el-table-column prop="id" label="比赛场次" width="180"></el-table-column>
      <el-table-column prop="score" label="分数" width="180"></el-table-column>
      <el-table-column label="查看比赛详情" width="120px"><el-button type="primary" icon="el-icon-more"  size="mini" circle @click="showBackDialog"></el-button></el-table-column>
    </el-table>
    <el-pagination
    style="margin-top:0%;margin-left:30%" 
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="gameTableData.length"
      @current-change="handleCurrentChange"
    ></el-pagination>
    <el-dialog title="比赛详情" :visible.sync="backDialog" width="45%">
        <span>{{gameRecordDetails.id}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="backDialog = false">确定</el-button>
          
        </span>
      </el-dialog>
       <div class="buttons" style="margin-top:-50px;margin-left:990px;">
        <img src="../assets/ReturnGame.png" alt @click="skipCardShowView" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data () {
    return {
        currentPage: 1,
        pageSize: 7,
        backDialog: false,
        gameTableData: [{
          id: '2016-05-02',
          score: '33',
        },
        {
          id: '2016-05-02',
          score: '33',
        },{
          id: '2016-05-02',
          score: '33',
        },{
          id: '2016-05-02',
          score: '33',
        },{
          id: '2016-05-02',
          score: '33',
        },{
          id: '2016-05-02',
          score: '33',
        },{
          id: '2016-05-02',
          score: '33',
        },{
          id: '2016-05-02',
          score: '33',
        },{
          id: '2016-05-02',
          score: '33',
        },
      
        ],
        gameRecordDetails:{
          "id":"111111",
          "timestamp":"",
          "name":"",
          "card":["","",""],
          "score":"",
        }
      };
    },
    methods: {
     handleCurrentChange(currentPage) {
      this.currentPage = currentPage
    },
    showBackDialog() {
        this.backDialog = true
      },
    skipCardShowView(){
          this.$router.push({path:'/CardShowView'});
      },
    }
  }
</script>

<style lang="scss" scoped>
.loginbg1 {
  position: absolute;
  width: 100%;
  height: 100%;

  background: url("../assets/HistoryRecord.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  -ms-interpolation-mode: bicubic;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;

  span {
    cursor: pointer;
  }
}
</style>
