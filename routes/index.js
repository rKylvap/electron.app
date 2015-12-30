module.exports = function(router){
    router.get('/', function(req, res){
        res.render('layout', { title: 'Home', message: 'Welcome Home!' });
    });

    return router;
}
