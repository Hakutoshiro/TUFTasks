const con = require('../Connection')


const handleCodeSubmission = async (req,res) =>{
    let {username,codeLang,stdIn,sourceCode} = req.body
    con.query('INSERT INTO mycode SET ?',{username,prefLang:codeLang,stdIn,sourceCode:sourceCode}, function(err,result){
        if(err) res.json(err)
        else res.json("success")
    })
}

const handleCreateDBTable = async (req,res) =>{
    res.json("hello");
}

const readDBTable = async (req,res) =>{
    con.query(`select * from mycode`, function(err,result){
        if(err) res.json(err)
        else res.json(result)
    })
}

module.exports = {handleCodeSubmission , handleCreateDBTable ,readDBTable}