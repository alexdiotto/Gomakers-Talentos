
//var apiNoticia = $resource('http://localhost:7002/api/noticias/GetByFilter/:userId', { userId: '@id' });
app.factory('NoticiasAPI', ['$resource', function ($resource) {
    var urlAPI = '/backend/api/';
    return $resource(urlAPI + ":modulo/:id/:metodo", {},
        {
            'update': { method: 'PUT' },
            'getAll': { method: 'GET', isArray: true },
            'post': { method: 'POST', isArray: true },
            'get': {
                method: 'GET',
                cache: false,
                headers: {
                    'Content-Type': 'application/json', /*or whatever type is relevant */
                }
            }

        }
    );
}]);
