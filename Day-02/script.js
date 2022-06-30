

new Vue({
    el: '.mydiv',
    data:{
        result: 67,
        check: "registration",
    },
    methods:{
        mymethod(){
            this.check="login"
        },
        mymethod2(){
            this.check="registration"
        }
    }
    
});

// new Vue({
//     el: 'class name'
// });