const axios = require('../libs/axios-helper');
const NOT_IMPLEMENTED_MESSAGE = "Message not implemented";
var createContanct = async function(data, data_store) {

    if(data_store.toLowerCase() == 'database'){
        /**
         * TODO:: create data in database
         */
        throw new Error(NOT_IMPLEMENTED_MESSAGE);
    }

    const res = await axios.post("contacts", { contact: data }).then(resp => resp.data);
    return res;
}

var getContanct = async function(contact_id, data_store) { 

    if(data_store.toLowerCase() == 'database'){
        /**
         * TODO:: Get data from database
         */
        throw new Error(NOT_IMPLEMENTED_MESSAGE);
    }

    const res = axios.get(`contacts/${contact_id}`).then(resp => resp.data);
    return res;
}

var updateContact = async function(data, data_store) {

    if(data_store.toLowerCase() == 'database') {
        /**
         * TODO:: update data in database
         */
        throw new Error(NOT_IMPLEMENTED_MESSAGE);
    }
    
    var payLoad = {
        contact: {
            email: data.new_email,
            mobile_number: data.new_mobile_number
        }
    }

    const res = axios.put(`contacts/${data.contact_id}`, payLoad).then(resp => resp.data);
    return res;
}

var deleteContact = async function(contact_id, data_store) {

    if(data_store.toLowerCase() == 'database'){
        /**
         * TODO:: Delete data in database
         */
        throw new Error(NOT_IMPLEMENTED_MESSAGE);
    }

    const res = axios.delete(`contacts/${contact_id}`).then(resp => resp.data);
    return res;
}

module.exports = {
    createContanct,
    getContanct,
    updateContact,
    deleteContact
}