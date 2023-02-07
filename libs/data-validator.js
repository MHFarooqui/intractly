function validateRequestData(data) {
    for(var prop in data){
        if(data[prop] == null){
            if(prop.startsWith('new')) // ignore props for update request
                continue;
            throw new Error(`Incorrect data please send correct value for ${prop}`);
        }
        if(prop.toLocaleLowerCase() == 'data_source')
            validateDataStoreValue(data[prop]);
    }
}

function validateDataStoreValue(data_store) {
    const error_message = `data_store has incorrect value please use either CRM or DATABASE`;
    if (typeof data_store != 'string')
        throw new Error(error_message);
    if (data_store.toLocaleLowerCase() != 'crm' && data_store.toLocaleLowerCase() != 'database')
        throw new Error(error_message);
}

module.exports = {
    validateRequestData,
    validateDataStoreValue
}