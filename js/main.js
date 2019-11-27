new Vue ({
    el: '#app',
    data: {
        value: 1
        // title: "Hello World!",
        // styleCSS: ''
    },
    methods: {
        increment(value) {
            this.value = value
            if(value == 25)
            alert("Number 25!")
        }
        // changeText() {
        //     this.title = 'Any new text'
        // }
    },
    computed: {
        doubleValue() {
            return this.value * 2
        }
    }
});