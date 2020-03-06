import express from 'express';

const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send({"wazz": "zzup"});
});
app.listen(port, err => {
    if(err){
        return console.error(err);
    }
    return console.log(`server listening on ${port}`);
});