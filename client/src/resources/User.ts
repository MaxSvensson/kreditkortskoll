import axios from "axios";

interface UserInterFace {
    name? : string;
    email? :  string;
    token :  string;
}

class User {
    constructor (public user: UserInterFace) {}

    async subscribeToEmailList (email : string) {
        await axios.post(`/email/subscribe/${email}`);
        this.user.email = email;
    }

}

export default User;