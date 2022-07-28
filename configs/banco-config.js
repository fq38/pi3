var sequelize = require("sequelize")

var conexao = new sequelize("progweb","root","12345678fq",{
    host: "progweb.celoe2bos7lb.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
})

conexao.authenticate().then(
    function(){
        console.log("Conectado ao banco com sucesso!")
    }
).catch(
    function(erro){
        console.log("Erro ao conectar com o banco: "+erro)
    }
)

module.exports = conexao