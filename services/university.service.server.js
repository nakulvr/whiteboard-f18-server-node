const universityDao = require('../dao/university.dao.server');
module.exports = app => {
    populateDatabase = (req, res) => {
        const result = universityDao.populateDatabase();
        res.json({"result": result});
    };
    truncateDatabase = (req, res) => {
        const result = universityDao.truncateDatabase();
            res.json({"result": result});
    };
    app.delete('/api/all', truncateDatabase);
    app.post('/api/populate', populateDatabase)
};