Vue.component('greeting', {
    template: '<p> Hey there i am a {{ name }}  . <button v-on:click="changeName">change name</button> </p>',

    data: function() {
        return {
            name: 'Benny'
        }
    },

    methods: {
        changeName: function() {
            this.name = 'mario'
        }
    },
});

// main instance
var firstInstance = new Vue({
    // this instance controls the vue-app element in html
    // connection to HTML page
    el: '#vue-app-one',

});

// second instance 
var secondInstance = new Vue({
    el: '#vue-app-two',



});

// NOT IDEAL BUT WORKS
// secondInstance.title = "Changed from global ";