// routes.js 

routes = {
    '/special-message' : function(req,res){
        res.end("you're not special");
    },
    '/non-special-message' : function(req, res){
        res.end("you're awsome!");
    }
}
module.exports = routes;