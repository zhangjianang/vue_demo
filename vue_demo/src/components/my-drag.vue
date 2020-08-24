<template>
  <div class="fluid container">
    <div class="form-group form-group-lg panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Sortable control</h3>
      </div>
      <div class="panel-body">
        <div class="checkbox">
          <label><input type="checkbox" v-model="editable">Enable drag and drop</label>
        </div>
        <button type="button" class="btn btn-default" @click="orderList">Sort by original order</button>
      </div>
    </div>
    <div class='show'>
      <div class="col-md-3">
        <draggable class="list-group" tag="ul" v-model="list" v-bind="dragOptions" :move="onMove"
                   @start="isDragging=true"
                   @end="isDragging=false">
          <transition-group type="transition" :name="'flip-list'">
            <li class="list-group-item" v-for="element in list" :key="element.order">
              <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
                 @click=" element.fixed=! element.fixed"
                 aria-hidden="true"></i>
              {{element.name}}
              <span class="badge">{{element.order}}</span>
            </li>
          </transition-group>
        </draggable>
      </div>

      <div class="col-md-3">
        <draggable element="span" v-model="list2" v-bind="dragOptions" :move="onMove">
          <transition-group name="no" class="list-group" tag="ul">
            <li class="list-group-item" v-for="element in list2" :key="element.order">
              <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
                 @click=" element.fixed=! element.fixed"
                 aria-hidden="true"></i>
              {{element.name}}
              <span class="badge">{{element.order}}</span>
            </li>
          </transition-group>
        </draggable>
      </div>
    </div>

<!--    <div class="list-group col-md-4">-->
<!--      <pre>{{listString}}</pre>-->
<!--    </div>-->
<!--    <h1>-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;分割线-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</h1>-->
<!--    <div class="list-group col-md-4">-->
<!--      <pre>{{list2String}}</pre>-->
<!--    </div>-->
    <hr/>




            <draggable element="span" v-model="useList" v-bind="dragOptions" :move="onMove">

              <el-button v-for="item in useList" :key="item.id">{{item.measureName}} </el-button>

            </draggable>
    <hr/>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-tag type="info">维度行</el-tag>
        <draggable v-model="useList2" :options="{ group: 'description' }" @start="drag = true" @end="drag = false">

          <el-button
              v-for="(item, index) in useList2"
              :key="index"
              round
              size="mini"
              type="primary"
            >
            {{ item.measureName }}
          </el-button>
        </draggable>
      </el-col>
      <el-col :span="6">
        <el-tag type="info">维度列</el-tag>
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-tag type="info">指标</el-tag>
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <el-tag type="info">筛选</el-tag>
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import {mapState, mapMutations, mapActions} from 'vuex'

const message = [
  'vue.draggable',
  'draggable',
  'component',
  'for',
  'vue.js 2.0',
  'based',
  'on',
  'Sortablejs'
]
export default {
  name: 'MyDrag',
  data () {
    return {
      list: message.map((name, index) => {
        return {
          name,
          order: index + 1,
          fixed: false
        }
      }),
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      useList2:[{"measureName":"ang"}]
    }
  },
  created () {
    this.selectMeasure()
  },
  methods: {
    ...mapActions(['selectMeasure']),
    ...mapMutations(['SET_MEASURELIST']),
    orderList () {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order
      })
    },
    onMove ({
      relatedContext,
      draggedContext
    }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    },
    mydrop(val){
      this.useList2.push(val)
    }
  },

  components: {
    draggable
  },

  computed: {
    ...mapState(['measureList']),
    useList:{
      get() {
        return this.measureList
      },
      set(value) {
        // this.$store.commit('SET_MEASURELIST', value)
        this.SET_MEASURELIST(value)
      }
    },
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    listString () {
      return JSON.stringify(this.list, null, 2)
    },
    list2String () {
      return JSON.stringify(this.list2, null, 2)
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>

<style>

  .text {
    font-size: 14px;
  }
  .show {
    border: black;
    width: auto;
    height: 800px;
    overflow: auto;
  }

  .col-md-3 {
    width: 300px;
    display: inline-block;
    float: left;
  }

  .flip-list-move {
    transition: transform 0.5s;
  }

  .no-move {
    transition: transform 0s;
  }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }

  .list-group {
    min-height: 20px;
  }

  .list-group-item {
    cursor: move;
  }

  .list-group-item i {
    cursor: pointer;
  }
</style>
