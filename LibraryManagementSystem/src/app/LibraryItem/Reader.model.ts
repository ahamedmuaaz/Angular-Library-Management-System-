export class Reader {
    private  id: String;
    private  name: String;
    private  mobileNumber: String;
    private  email: String;

    constructor (Name: String , id: String , mobileNumber: String , email: String) {

        this.id = id;
        this.name = Name;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    public getId() {
        return this.id;
    }

    public setId(id: String ) {
        this.id = id;
    }

    public getName() {
        return this.name;
    }

    public setName(name: String ) {
        this.name = name;
    }

    public  getMobileNumber() {
        return this.mobileNumber;
    }

    public setMobileNumber(mobileNumber: String) {
        this.mobileNumber = mobileNumber;
    }

    public  getEmail() {
        return this.email;
    }

    public  setEmail(email: String ) {
        this.email = email;
    }

}
