<template>
  <div id="app">
    <el-form :model="searchForm" ref="searchForm" label-width="100px" class="demo-dynamic">
    <el-form-item >
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item  label="维度" >
        <el-input v-model="dynamicValidateForm.dimension"></el-input>
      </el-form-item>
      <el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'子维度' + index" :key="domain.key"
        :prop="'domains.' + index + '.value'" :rules="{
          required: true, message: '子维度不能为空', trigger: 'blur'
        }">
        <el-input v-model="domain.value"></el-input>
        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button> -->
        <el-button @click="addDomain">新增子维度</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置子维度</el-button>
      </el-form-item>
    </el-form>
    </el-form-item>

    <el-form-item >
    <el-form :model="measureForm" ref="measureForm" label-width="100px" class="demo-dynamic">
      <el-form-item  label="度量" >
        <el-input v-model="measureForm.measure" ></el-input>
      </el-form-item>
      <el-form-item v-for="(subm, index) in measureForm.submeasures" :label="'子度量' + index" :key="subm.key"
        :prop="'submeasures.' + index + '.value'" :rules="{
          required: true, message: '子度量不能为空', trigger: 'blur'
        }">
        <el-input v-model="subm.value"></el-input>
        <el-button @click.prevent="removeDomain(subm)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" @click="submitForm('measureForm')">提交</el-button> -->
        <el-button @click="addMeasure">新增子度量</el-button>
        <el-button @click="resetForm('measureForm')">重置子度量</el-button>
      </el-form-item>
    </el-form>
    </el-form-item>
    <el-form-item>
      <el-input v-model="info" placeholder="显示内容"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('searchForm')">提交</el-button>
    </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: "dynamic",
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          dimension: ''
        },
        measureForm: {
          submeasures: [{
            value: ''
          }],
          measure: ''
        },
        searchForm:{

        },
        info:""
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            console.log(this.measureForm)
            console.log(this.dynamicValidateForm)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
      addMeasure() {
        this.measureForm.submeasures.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>

<style>

</style>
