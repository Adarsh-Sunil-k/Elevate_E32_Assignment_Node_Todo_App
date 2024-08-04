const {constant} = require("../constants")
const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode: 500;
    

    switch(statusCode){
        case constant.UNAUTHORIZED:
            res.json({
                title:"Unauthorized",
                message:err.message,
                stackTrace:err.stack,
            });
            break;
        case constant.NOT_FOUND:
                res.json({
                    title:"Not Found",
                    message:err.message,
                    stackTrace:err.stack,
                });
                break;
        default:
            console.log("No Error, All Good !");

    }
}
module.exports = errorHandler