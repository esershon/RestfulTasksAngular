var Task = require('./models');

module.exports = {
    getalltasks:(req, res)=>{
        Task.find({})
            .then(tasks=>res.json({"tasks":tasks}))
            .catch(err =>res.json(err))
    },

    gettask:(req,res)=>{
        Task.findById(req.params.id)
            .then(task=>res.json({message:"Success.", data: task}))
            .catch(err=>res.json({message:"Error", error: err}))
    },

    create:(req, res)=>{
        Task.create(req.body, function(err, task){
            if (err){
                res.json({message:"Error creating task.", error:err})
            }
            else{
                res.json({message:"Success", data:task})
            }
        })
    },

    update:(req, res)=>{
        const ID = req.params.id;
        const DATA = req.body;
        console.log(ID);
        Task.findByIdAndUpdate(ID, DATA, {new: true})
            .then(result => {
                console.log('rubber baby buggy bumpers');
                res.json({
                    message: 'Success.', 
                    data: result
                })
             })
             .catch(err => {
                 console.log('doh!');
                 res.json({
                     message: 'Error updating task',
                     data: err
                 })
             })
        // {
        //     if (err){
        //         res.json({message:"Error",error:err})
        //     }
        //     else{
        //         res.json({message:"Success. Document updated", data:result})
        //     }
        // })
    },

    delete:(req, res)=>{
        Task.findByIdAndDelete(req.params.id, function(err, result){
            if (err){
                res.json({message:"Error", error: err})
            }
            else{
                res.json({message:"Success. Record deleted.", data:result})
            }
        })
    }
}