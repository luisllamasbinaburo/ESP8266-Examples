Vue.component('my-component', {
    props: ['my'],
    template: '<div>{{my.text}}<button v-on:click="get(my.id)">Get</button><button v-on:click="update(my.id)">Update</button><button v-on:click="replac(my.id)">Replace</button><button v-on:click="delet(my.id)">Delete</button></div>',
    methods: {
        get: function (id) {
            API_get(id);
        },
        
        update: function (id) {
            API_update(id, 'NewItem');
        },
        
        replac: function (id) {
            API_replace(id, 'NewItem');
        },
        
        delet: function (id) {
            API_delete(id);
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        filter: "",
		getId: "",
        items: [
            { id: 0, text: 'Item1'},
            { id: 1, text: 'Item2' },
            { id: 2, text: 'Item3'}
        ]
    },
    
    methods: {
        getAll() {
            API_getAll();
        },
        
		get() {
            API_get(this.$data.getId);
        },
        
		
        getFiltered() {
            API_getFiltered(this.$data.filter);
        },
        
        create() {
            API_create('NewItem');
        },	
    }
})
