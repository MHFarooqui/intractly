class CreateContactReq {
    first_name;
    last_name;
    email;
    mobile_number;
    data_store;

    constructor(args){
        this.first_name = args.first_name;
        this.last_name = args.last_name;
        this.email = args.email;
        this.mobile_number = args.mobile_number;
        this.data_store = args.data_store;
    }
}

class UpdateContactReq{
    contact_id;
    new_email;
    new_mobile_number;
    data_store;

    constructor(args){
        this.contact_id = args.contact_id;
        this.new_email = args.new_email;
        this.new_mobile_number = args.new_mobile_number;
        this.data_store = args.data_store;
    }
}

module.exports = {
    CreateContactReq,
    UpdateContactReq
}