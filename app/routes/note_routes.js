
module.exports = function(app,db){

    app.post("/notes",(req,res)=> {
        const note ={text : req.body.body , title: req.body.body};
        db.collection('notes').insert(note,(err,results)=>{
            if(err){
                res.send({'error':'An error has occured'});
            }else{
                res.send(results.ops[0]);
            }
        })
       
    });

};