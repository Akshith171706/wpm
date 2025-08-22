/* GET homepage */
const index = (req, res) => {
 res.render('index', { title: 'Akshith reddy' });
};
module.exports = {
 index
};