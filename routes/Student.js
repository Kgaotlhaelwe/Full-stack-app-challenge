const express = require("express");
const router = express.Router();
const Joi = require('joi');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });



var Students = [
    {
        id: 1,
        name: "Kabelo",
    },

    {
        id: 2,
        name: "Amo",

    } ,

     {
        id: 3,
        name: "Vincent",

    } ,


    {
        id:6,
        name: "tgs",

    }

]

router.get("/student", (req, res) => {
    res.json(Students);
});

router.post('/student', urlencodedParser, (req, res) => {

    const { error } = validateStudent(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message)
    } {
        Students.push(req.body);
        res.json(Students);
    }

})

router.put('/student/:id', (req, res) => {

    const student = Students.find(s => s.id == parseInt(req.params.id));
    if (!student) res.status(404).send("The student with the given Id does not exist");

    const { error } = validateStudent(req.body);

    if (error) return res.status(400).send(error)
    student.name = req.body.name;
    res.send(Students);



});



router.delete('/student/:id', (req, res) => {
    const student = Students.find(s => s.id == parseInt(req.params.id));
    if (!student) res.status(404).send("The student with the given Id does not exist");

    const index =Students.indexOf(student) ;
    console.log(student )
    console.log(index)
    Students.splice(index , 1) ;

    res.json(Students);
})

function validateStudent(student) {
    const schema = {
   // id:Joi.number(),
        name: Joi.string().required()
    }

    return Joi.validate(student, schema);
}
module.exports = router;