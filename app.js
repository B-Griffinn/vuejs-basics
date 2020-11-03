// main instance
new Vue({
    // this instance controls the vue-app element in html
    // connection to HTML page
    el: '#vue-app',

    // data property holds all of our data for this Vue instance
    data: {
        name: '',
        age: 0,
        job: 'PRO cod Player',
        website: 'https://github.com/B-Griffinn/vuejs-basics',
        websiteTag: '<a href="https://github.com/B-Griffinn/vuejs-basics"> BOUND </a>',
        x: 0,
        y:0,
        modifyMe: 0,
    },

    // methonds
    methods: {
        greet: function() {
            return `Greeeetings ${this.name}!`
        },

        addYear: function(increment) {
            this.age += increment
        },
        subtractYear: function(decrement) {
            this.age -= decrement
        },
        // track cursor
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        modifyFn: function(inc) {
            this.modifyMe += inc
        },
        clickHref: function() {
            alert("You clicked meh")
        },
        logName: function() {
            // console.log('youn entered your name')
            
        },
        logAge: function() {
            // console.log('youn entered your age')
        }
    },
});