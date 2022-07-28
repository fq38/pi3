var sequelize = require("sequelize")

var conexao = new sequelize("progweb","adminfq","12345678fq",{
    host: "progweb.mysql.database.azure.com",
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