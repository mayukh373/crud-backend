const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = new express.Router();

studentRoute.post("/create-student", (req, res) => {
    studentSchema.create(req.body, (err, data) => {
        if (err) 
            return err;
        else    
            res.json(data);
    })
});

studentRoute.get("/", (req, res) => {
    studentSchema.find((err, data) => {
        if (err) 
            return err;
        else 
            res.json(data);
    })

})

studentRoute.route("/update-student/:id")
.get((req, res) => {
    studentSchema.findById(req.params.id, (err, data) => {
        if (err) 
            return err;
        else 
            res.json(data);  
    })
})
.put((req, res) => {
    studentSchema.findByIdAndUpdate(req.params.id, {$set:req.body}, (err, data) => {
        if (err) 
            return err;
        else
            res.json(data);
    })
});

studentRoute.delete("/delete-student/:id", (req, res) => {  
    studentSchema.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) 
            return err;
        else 
            res.json(data);
    })
});

module.exports = studentRoute;

//by default, every request is GET(), and if it is a get request -> find()