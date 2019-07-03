
module.exports = function(app,db){

    app.post("/notes",(req,res)=> {
        console.log(req.body)
        // create the note here
        res.send('Hello');
    });

};