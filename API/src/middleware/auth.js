// const jwt = require('jsonwebtoken');
// const User = require('../Models/user');


// const auth = async (req, res, next)=>{
//     try{
//         const token = req.headers.authorization;
//         const decoded = jwt.verify(token, 'kreditkollkorts');
//         const user = await User.findOne({_id:decoded._id})
//         if(!user){
//             throw new Error()
//         }
//         req.token = token;
//         req.user = user;
//         next();
//     }catch(e){
//         res.status(400).send({
//             message:'Not authenticated',
//             error:'true'
//         })
//     }
// }

// module.exports = auth;
