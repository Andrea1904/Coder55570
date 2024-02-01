export default class UserRepository{
    constructor(dao){
        this.dao=dao
    }

    getAllUsers=()=>{
        return this.dao.getAll()
    }

    getUserById=(id)=>{
        return this.dao.getById(id)
    }

    createUser=(user)=>{
        return this.dao.saveUser(user)
    }
    update=(id,user)=>{
        return this.dao.updateUser(id,user)
    }
}