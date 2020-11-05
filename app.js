// main instance
var firstInstance = new Vue({
    // this instance controls the vue-app element in html
    // connection to HTML page
    el: '#vue-app-one',

    // data property holds all of our data for this Vue instance
    data: {
        // name: '',
        // age: 0,
        title: 'Vue App ONE',
        a: 0,
        b: 0,
        job: 'PRO cod Player',
        website: 'https://github.com/B-Griffinn/vuejs-basics',
        websiteTag: '<a href="https://github.com/B-Griffinn/vuejs-basics"> BOUND </a>',
        x: 0,
        y:0,
        modifyMe: 0,
        // CSS
        available: false,
        nearby: false,
        error: false,
        success: false,
        // Looping with v-for
        name: 'ben',
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            {name: 'Mario' , age: 25 },
            {name: 'Benji', age: 35 },
            {name: 'Ken', age: 45 },
        ]
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
        },
    },
    computed: {
        addToA: function() {
            console.log("add to A")
            return this.a + this.age
        },
        addToB: function() {
            console.log("add to B")
            return this.b + this.age
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    },
});

// second instance 
var secondInstance = new Vue({
    el: '#vue-app-two',

    data: {
        title: 'VUE APP ONE'
    },

    methods: {
        changeTitle: function() {
            firstInstance.title = 'CHANGED ME';
        }
    },

    computed: {
        greet: function() {
            return 'Greetings from application two!'
        }
    },

});

// NOT IDEAL BUT WORKS
// secondInstance.title = "Changed from global ";