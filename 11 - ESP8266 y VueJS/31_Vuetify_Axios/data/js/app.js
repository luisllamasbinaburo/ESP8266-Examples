new Vue({
	el: '#app',
	
	data: () => ({
		items: [
			{
				id: 0,
				done: false,
				text: 'Init 0'
			}
		],
		
		newItem: null,
		getId: null,
		updateId: null,
		updateText: null,
		
		snackbar: false,
		timeout: 1500,
		text: '',
		
		lastId : 0,
	}),
	
	computed: {
	},
	
	methods: {
		create () {
			lastId = Math.max(...this.items.map(d => d.id));
			this.items.push({
				id: ++this.lastId,
				done: false,
				text: this.newItem
			})
			
			API_post(this.newItem)
			this.newItem = null
		},
		getAll() {
			this.text = "Getting all"
			this.snackbar = true
			
			API_getAll()
			
			lastId = Math.max(...this.items.map(d => d.id));
			this.items.push({id: ++this.lastId, text: 'Loaded all '})
			this.items.push({id: ++this.lastId, text: 'Loaded all '})
		},
		getById() {
			if(this.getId == null) return;
			if(((typeof this.items.find(x => x.id === this.getId) !== 'undefined'))) return;
			
			this.text = "Getting by Id " + this.getId
			this.snackbar = true
			
			API_get(this.getId)
			
			this.items.push({id: this.getId, text: 'Loaded by Id'})
		},
		updateById(id) {
			if(this.updateId == null || this.updateId == null) return;
			
			this.text = "Updating " + this.updateId + " with " + this.updateText
			this.snackbar = true
			
			API_put(this.updateId, this.updateText)
			
			this.items.find(x => x.id === this.updateId).text = this.updateText
		},
		remove(item) {
			this.text = "Deleting " + item.id
			this.snackbar = true
			
			API_delete(item.id)
			
			this.items.splice(this.items.indexOf(item), 1)
		}
	}
})