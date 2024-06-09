class User {

    #activity = {}

    constructor(id) {
        this.id = id
    }



    // setter
    setActivity(arg) {
        if (!isObject(arg)) {
            return false
        }
        this.activity = arg
    }
    //getter
    getActivity() {
        return this.activity
    }
}

let u = new User()

u.setActivity(15)
