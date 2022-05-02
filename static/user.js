
const users = [
    {
        id:1,
        username:"Admin",
        password:"e3274be5c857fb42ab72d786e281b4b8",
        permission:"admin"
    },
    {
        id:2,
        username:"Teacher",
        password:"6a4c692a7ba12da347c0d0b489af187d",
        permission:"teacher"
    },
    {
        id:3,
        username:"Student",
        password:"3489b909418aec96e54689274211bf1a",
        permission:"student"
    },

]


const get_user_by_id = (id) => {
    users.forEach((user) => {
        if (user.id === parseInt(id)){
            return user
        }
    })
}

const get_user_by_username = (username) => {
    let retuser;
    users.forEach((user)=> {
        if (user.username === username){
            retuser = user;
        }
    });
    return retuser
}