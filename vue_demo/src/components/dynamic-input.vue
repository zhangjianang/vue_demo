<template>
  <div id="app" class='ang-form'>
    <el-form :model="searchForm" ref="searchForm" label-width="100px" class="demo-dynamic">
    <el-form-item >
    <el-form :model="dimensionForm" ref="dimensionForm" label-width="100px" class="demo-dynamic">
      <el-form-item  label="维度" >
        <el-input v-model="dimensionForm.dimension.value"></el-input>
      </el-form-item>
      <el-form-item v-for="(dimension, index) in dimensionForm.dimensions" :label="'子维度' + index" :key="dimension.key"
        :prop="'dimensions.' + index + '.value'" :rules="{
          required: true, message: '子维度不能为空', trigger: 'blur'
        }">
        <el-input v-model="dimension.value"></el-input>
        <el-button @click.prevent="removeDomain(dimension)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button> -->
        <el-button @click="addDomain">新增子维度</el-button>
        <el-button @click="resetForm('dimensionForm')">重置子维度</el-button>
      </el-form-item>
    </el-form>
    </el-form-item>

    <el-form-item >
    <el-form :model="measureForm" ref="measureForm" label-width="100px" class="demo-dynamic">
      <el-form-item  label="度量" >
        <el-input v-model="measureForm.measure.value" ></el-input>
      </el-form-item>
      <el-form-item v-for="(measure, index) in measureForm.measures" :label="'子度量' + index" :key="measure.key"
        :prop="'measures.' + index + '.value'" :rules="{
          required: true, message: '子度量不能为空', trigger: 'blur'
        }">
        <el-input v-model="measure.value"></el-input>
        <el-button @click.prevent="removeMeasure(measure)">删除</el-button>
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

    <el-input v-model="mystore" placeholder="store内容"></el-input>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'dynamic',
  data () {
    return {
      dimensionForm: {
        dimensions: [{
          value: ''
        }],
        dimension: {value: ''}
      },
      measureForm: {
        measures: [{
          value: ''
        }],
        measure: {value: ''}
      },
      searchForm: {

      },
      info: '',
      mystore: this.$store.state.count
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let ms = []
          ms.push(this.measureForm.measure)
          ms = ms.concat(this.measureForm.measures)
          let dims = []
          dims.push(this.dimensionForm.dimension)
          dims = dims.concat(this.dimensionForm.dimensions)
          let info = {'measure': ms, 'dimension': dims}
          let url = 'http://127.0.0.1:8099/query/info'
          axios.post(url, info, {
            timeout: 1000
          }).then(response => {
            this.info = response.data.data
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain (item) {
      var index = this.dimensionForm.dimensions.indexOf(item)
      if (index !== -1) {
        this.dimensionForm.dimensions.splice(index, 1)
      }
    },
    addDomain () {
      this.dimensionForm.dimensions.push({
        value: '',
        key: Date.now()
      })
    },
    addMeasure () {
      this.measureForm.measures.push({
        value: '',
        key: Date.now()
      })
    },
    removeMeasure (item) {
      var index = this.measureForm.measures.indexOf(item)
      if (index !== -1) {
        this.measureForm.measures.splice(index, 1)
      }
    }
  }
}
</script>

<style>
  .ang-form {
    width: 40%;
  }
</style>
