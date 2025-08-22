/* GET homepage */
const index = (req, res) => {
 res.render('index', { title: 'Community Link Hub' });
};
module.exports = {
 index
};