new Vue ({
    el: '#app',
    data: {
        show: false,
        cars: [
            {model:"BMW", speed: 250.8},
            {model:"Audi", speed: 240.21},
            {model:"Mercedes-Benz AMG", speed: 350.4},
            {model:"Ford", speed: 160.5}
        ]
            

        
        // 1-2 lessons
        // value: 1
        // title: "Hello World!",
        // styleCSS: ''
    },
    methods: {
        // 3 lesson
        // increment(value) {
        //     this.value = value
        //     if(value == 25)
        //     alert("Number 25!")
        // }
        // changeText() {
        //     this.title = 'Any new text'
        // }
    },
    computed: {
        // doubleValue() {
        //     return this.value * 2
        // }
    }
});