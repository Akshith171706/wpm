/* GET homepage */
const index = (req, res) => {
 res.render('index', { title: 'Health and wellness' });
};
module.exports = {
 index
};