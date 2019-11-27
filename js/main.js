new Vue ({
    el: '#app',
    data: {
        title: "Hello World!"
    },
    methods: {
        changeText() {
            this.title = 'Any new text'
        }
    }
});