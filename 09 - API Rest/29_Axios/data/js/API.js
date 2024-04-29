function getAllRequest()
{
	axios.get('item')
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function getFilteredRequest()
{
	axios.get('item', {
		params: {
			filter : 'myFilter'
		}
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function getByIdRequest()
{
	id = 10;
	axios.get('item/' + id)
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function postRequest()
{
	axios.post('item', {
		data: 'NewItem'
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function putRequest()
{
	id = 10;
	axios.put('item/' + id, {
		data: 'NewItem'
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function patchRequest()
{
	id = 10;
	axios.patch('item/' + id, {
		data: 'NewItem'
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function deleteRequest()
{
	id = 10;
	axios.delete('item/' + id)
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}
