const router = require('express').Router();
const controller = require('../controllers/contacts');
const { CreateContactReq, UpdateContactReq } = require('../models/contact-model');
const { validateRequestData, validateDataStoreValue } = require('../libs/data-validator');



router.post('/create', async (req, res) => {
    const newContact = new CreateContactReq(req.body);
    // validating data
    validateRequestData(newContact);
    const response = await controller.createContanct(newContact, newContact.data_store);
    res.send(response);
});

router.get('/get/:contact_id', async (req, res) => {
    // validating data
    validateDataStoreValue(req.body.data_store);
    const response = await controller.getContanct(req.params.contact_id, req.body.data_store);
    res.send(response);
});

router.post('/update', async (req, res) => {
    const updateContact = new UpdateContactReq(req.body);
    // validating data
    validateRequestData(updateContact);
    const response = await controller.updateContact(updateContact, updateContact.data_store);
    res.send(response);
});

router.post('/delete/:contact_id', async (req, res) => {
    // validating data
    validateDataStoreValue(req.body.data_store);
    const response = await controller.deleteContact(req.params.contact_id, req.body.data_store);
    res.send(response);
});

module.exports = router;