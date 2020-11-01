// main instance
new Vue({
    // this instance controls the vue-app element in html
    // connection to HTML page
    el: '#vue-app',

    // data property holds all of our data for this Vue instance
    data: {
        name: 'Benji',
        job: 'PRO cod Player'
    },

    // methonds
    methods: {
        greet: function() {
            return `Greeeetings ${this.name}!`
        }
    },
});