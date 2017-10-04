$(function () {
    var app = new Vue({
        el: '#app',
        data: {
            msg: 'hello world',
            Name: ''
        },
        methods: {
            //Hello: () => { alert(this.Name) }
            Hello: function () { 
                //alert(this.Name); 
                let sayhello = (name) => {alert(name + ' 你好')}
                sayhello(this.Name);
            }
        },
        computed: {
        }
    })
})
