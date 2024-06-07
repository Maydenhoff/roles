const app = require("./src/app.js")
const {conn} = require("./src/db.js")
const PORT = 4000
conn.sync({force:true}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server listening on port ${PORT}`);
    })
}).catch(error => console.error(error))