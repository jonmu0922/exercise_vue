'use strict';

$(function () {
    var app = new Vue({
        el: '#app',
        data: {
            msg: 'hello world',
            Name: ''
        },
        methods: {
            //Hello: () => { alert(this.Name) }
            Hello: function Hello() {
                //alert(this.Name); 
                var sayhello = function sayhello(name) {
                    alert(name + ' 你好');
                };
                sayhello(this.Name);
            }
        },
        computed: {}
    });
});