function API_get(id) {
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

function API_getFiltered(filter) {
    axios.get('item', {
        params: {
            filter: filter
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

function API_getAll() {
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

function API_post(data) {
    axios.post('item', {
        data: data
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

function API_put(id, data) {
    axios.put('item/ ' + id, {
        data: data
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

function API_patch(id, data) {
    axios.patch('item/ ' + id, {
        data: data
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


function API_delete(id) {
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
