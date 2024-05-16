<script lang="ts" setup name="Home"></script>

<template>
  <div class="home-container">
    <!-- 营业数据统计 -->
    <div class="home-statistic">
      <div class="home-statistic-title">营业数据统计</div>
      <el-row :gutter="20">
        <el-col :lg="6" :md="12" :sm="12" :xs="24">
          <el-card shadow="hover">1</el-card>
        </el-col>
        <el-col :lg="6" :md="12" :sm="12" :xs="24">
          <el-card shadow="hover">2</el-card>
        </el-col>
        <el-col :lg="6" :md="12" :sm="12" :xs="24">
          <el-card shadow="hover">3</el-card>
        </el-col>
        <el-col :lg="6" :md="12" :sm="12" :xs="24">
          <el-card shadow="hover">4</el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 分类销售以及近30天销售趋势 -->
    <el-row :gutter="20">
      <el-col :lg="8" :md="8" :sm="8" :xs="24" :span="8">
        <el-card shadow="hover" class="card"> 1 </el-card>
      </el-col>
      <el-col :lg="16" :md="16" :sm="16" :xs="24" :span="16">
        <el-card shadow="hover" class="card"> 2 </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :lg="16" :md="16" :sm="16" :xs="24" :span="8">
        <el-card shadow="hover" class="card"> 1 </el-card>
      </el-col>
      <el-col :lg="8" :md="8" :sm="8" :xs="24" :span="16">
        <el-card shadow="hover" class="card"> 2 </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.home-container {
  .home-statistic {
    .home-statistic-title {
      font-size: 18px;
      height: 25px;
      line-height: 25px;
      border-left: 2px solid var(--el-color-primary);
      padding-left: 10px;
      margin: 15px 0;
    }

    .el-row {
      .el-col {
        .el-card {
          background-color: yellow;
          height: 80px;
        }

        // background-color: red;
      }
    }
  }

  .el-card {
    margin-bottom: 20px;
  }

  .card {
    height: 380px;
  }
}
</style>