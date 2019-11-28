Vue.component ('app-car', {
    data: function () {
        return {
            cars: [
                {model: "BMW"},
                {model: "Volvo"},
                {model: "Mercedes-Benz"},
                {model: "Ford"},
                {model: "Audi"},
                {model: "Siat"},
                {model: "Fiat"}
            ]
        }
    },
    template: '<di><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
});
new Vue ({
    el: "#app",
    data: {
        
    }
}); 
// 5 lesson
// Vue.filter ('capatilize', function (value){
//     if (!value) return ''
//     value = value.toString()
//     return value.replace(/\b\w/g, function(l) {return l.toUpperCase() })
// });

// new Vue ({
//     el: '#app',
//     data: {
//         show: false,
//         message: 'Hello, I am Ira. I am twenty one yeras old. I want to be a programmer', 
//         cars: [
//             {model:"BMW", speed: 250.8},
//             {model:"Audi", speed: 240.21},
//             {model:"Mercedes-Benz AMG", speed: 350.4},
//             {model:"Ford", speed: 160.5}
//         ]
        
//         1-2 lessons
//         value: 1
//         title: "Hello World!",
//         styleCSS: ''
//     },
//     methods: {
//         3 lesson
//         increment(value) {
//             this.value = value
//             if(value == 25)
//             alert("Number 25!")
//         }
//         changeText() {
//             this.title = 'Any new text'
//         }
//     },
//     computed: {
//         showMess() {
//             return this.message.toUpperCase ()
//         }
//         doubleValue() {
//             return this.value * 2
//         }
//     },
//     filters: {
//         lowercase (value) {
//             return value.toLowerCase ()
//         }
//     }
// });