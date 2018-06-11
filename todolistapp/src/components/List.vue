<style>
* {  box-sizing: border-box;  }
ul {  margin: 0; padding: 0; }
ul li { 
    cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
    background: #eee; font-size: 14px;  transition: 0.2s;
    -webkit-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;  
}
ul li:hover {  background: #ddd;  }
ul li.checked {
    background: #BBB;  color: #fff; text-decoration: line-through;
}
ul li.checked::before {
    content: ''; position: absolute; border-color: #fff;
    border-style: solid; border-width: 0px 1px 1px 0px; 
    top: 10px; left: 16px;  transform: rotate(45deg);
    height: 8px; width: 8px;
}
.close {
    position: absolute; right: 0; top: 0;
    padding: 8px 12px 8px 12px
}
.close:hover {
    background-color: #f44336;  color: white;
}
</style>
<template>
    <ul id="todolist">
        <li v-for="(a, index) in todolist" :class="checked(a.done)"
            @click="doneToggle({index})" :key="index">
            <span>{{ a.todo }}</span>
            <span v-if="a.done"> (완료)</span>
            <span class="close" @click.stop="deleteTodo({index})">&#x00D7;</span>
        </li>
    </ul>
</template>
<script type="text/javascript">
import Constant from '../constant';
import { mapState, mapMutations } from 'vuex';
import _ from 'lodash';

export default {
    computed: mapState([ 'todolist' ]),
    methods: 
    _.extend( // lodash _.extend --> 객체와 객체의 속성을 병합하는 메서드.
              // 객체 간 중복되는 속성은 뒤에 전달된 객체의 속성을 앞 객체 속성에 덮어쓴다.
        { // 변이를 일으키지 않는 methods
            checked(done) {
                if (done) return { checked: true };
                else return { checked: false };
            }
        },
        mapMutations([
            Constant.DELETE_TODO,
            Constant.DONE_TOGGLE
        ]),
    ),
    
    // {
    //     checked(done) {
    //         if(done) return { checked:true };
    //         else return { checked:false };
    //     },
    //     doneToggle(index) {
    //         this.$store.commit(Constant.DONE_TOGGLE, {index});
    //     },
    //     deleteTodo(index) {
    //         this.$store.commit(Constant.DELETE_TODO, {index});
    //     }
    // }
}
</script>