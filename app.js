let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

})

app.listen(3000, () => {
  console.log("3000 go");
})