<template>
  <div class="main_index" v-alvinDrag>

    <alTransition> 
       <component v-bind:is="view"></component>
    </alTransition>

    <button @click="remove"> remove</button>
    <button >aaa</button>
    <button @click="add" > add</button>
    
    
      
    
    <transition-group name='list' tag="p">
      <span class="list-item" v-for="item in items" v-bind:key="item">{{item}}</span> 
    </transition-group>
    <button @click="testFn">test</button>


    <input v-if="test"  type="text" v-focus>

  
   
 </div>
</template>


<script>
import alTransition from "../../../_components/al-transition-com";
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      nextNum: 11,
      test: false,
      view: "v-a"
    };
  },
  components: {
    alTransition,
    "v-a": {
      template: "<div>Component A</div>"
    },
    "v-b": {
      template: "<div>Component B</div>"
    }
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    testFn() {
      this.test = !this.test;
      this.view = this.view == "v-b" ? "v-a" : "v-b";
    }
  },
  directives: {
    focus: {
      bind: function(el, binding, vnode) {
        //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
      },
      inserted(el, binding, vnode) {
        //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
        el.focus();
      },
      update(el, binding, vnode, oldVnode) {
        //所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
      },
      componentUpdated(el, binding, vnode, oldVnode) {
        //指令所在组件的 VNode 及其子 VNode 全部更新后调用。
      },
      unbind(el, binding, vnode) {
        //只调用一次，指令与元素解绑时调用。
      }
    }
  }
};
</script>

<style lang="less">
.main_index {
  position: absolute;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
  width: 20px;
  font-size: 20px;
  text-align: center;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-move {
  transition: transform 1s;
}

input {
  position: absolute;
}
</style>
