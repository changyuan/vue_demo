<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ msg | capitalize }}</h2>
    <h2>Essential Links</h2>
    <input type="checkbox" v-model="changeColor" />
    <div class="tip">
        <h1 v-bind:class="{'changeColor1': changeColor}">changeColor  tip</h1>
        <span>
           {{ 4+9+9*7-7 }} , 
          {{ ok ? 'YES' : 'NO' }} , 
          {{ msg.split('').reverse().join('') }}
        </span>
        <div v-if="seen">看见了</div>
        <pre><a v-bind:href="url">yaolan</a></pre>
        <pre><a :href="url">yaolan:href</a></pre>
        <pre><a v-on:click="doSomething">click me dosomesthing {{count}}</a></pre>
        <pre><a v-on:click="reverseMessage">click me!</a></pre>
        <pre><a @click="reverseMessage">click me @click!</a></pre>

        <div v-if="Math.random() > 0.5">
          Sorry
        </div>
        <div v-else>
          Not sorry
        </div>

        <div>
            <ul
            >
              <li v-for="(value, key,index) in object1" :key="index">
             {{ index }} {{ key }} : {{ value }}
              </li>
            </ul>
        </div>

        <div v-bind:class="[square]">{{ square }}</div>

        <a v-on:click.stop="doThis">阻止单击事件冒泡</a>
        <form v-on:submit.prevent="onSubmit">提交事件不再重载页面</form>
        <a v-on:click.stop.prevent="doThat">修饰符可以串联</a>
        <form v-on:submit.prevent>只有修饰符</form>
        <div v-on:click.capture="doThis">添加事件侦听器时使用事件捕获模式</div>
        <div v-on:click.self="doThat">只当事件在该元素本身（而不是子元素）触发时触发回调</div>
        <a v-on:click.once="doThis">click 事件至少触发一次</a>
        <input v-on:keyup.13="submit">只有在 keyCode 是 13 时调用 vm.submit()</input>
        <input v-on:keyup.enter="submit"></input>
        <input @keyup.enter="submit"></input>
        <input v-model.lazy.trim="msg"/>
        <input v-model.lazy.trim.number="x" type="number" v-focus/>
        <br />
        <vue-markdown>i am a ~~tast~~ **test**. `1232` >12312</vue-markdown>
    </div>
  </div>
  
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'demo',
  components: {
    VueMarkdown
  },
  data () {
    return {
      msg: 'this is a first vue\'s demo ~~ ',
      changeColor: true,
      ok: true,
      seen: true,
      url: 'http://www.yaolan.com/',
      count: 1,
      object1: {
        name: 'lucy',
        slogan: 'this is a test'
      },
      x: 3
    }
  },
  computed: {
    square: function () {
      return (this.x * this.x)
    }
  },
  methods: {
    doSomething: function () {
      console.log('dosomesthing')
      this.count = parseInt(this.count) + 1
      console.log(this.count)
    },
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  directives: {
    foucs2: {
      instered: function (el) {
        console.log(123123)
        el.foucs()
      }
    }
  }

}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
  color: orange;
}
.changeColor1 {
  color: green;
  background-color: #ccc;
}
li {
  list-style-type:none;
}
</style>

