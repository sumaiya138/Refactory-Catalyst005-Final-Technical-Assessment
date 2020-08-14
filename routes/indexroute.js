const express = require('express')
const router = express.Router()


//models
const Patient = require('../models/formmd')

/**
 * GET '/': index route
 * POST '/form': index route
 * POST '/sucessform':sucess form
 * GET '/patient': patient route
 * GET '/patientdetails': details route
*/

router.get('/',(req,res)=>{
    res.render('form')
})

router.post('/form',(req,res)=>{
    const patient = new Patient(req.body)
    patient.save((error)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/')
        }
    })
})

router.get('/sucessform',(req,res)=>{
    res.render('sucessform')
})

router.post('/sucessform',(req,res)=>{
    const patient = new Patient(req.body)
    patient.save((error)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('patientdetails')
        }
    })
})

// router.get('/patientdetails',async(req,res)=>{
//     const patients = await Patients.find();
//     res.render('patient', {patients : patients})
// })

// router.get('/patient/:id', async(req,res)=>{
//     let query = req.params.id;
//     const employee = await Patient.findById(query)
//     res.render('patient', {patient: patient})
// })


module.exports = router