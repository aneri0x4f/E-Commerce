const pool = require('../../pool');

exports.subCategorywiseProd = (req, res) => {
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = `call subCategoryWiseProduct();`;
            pool.query(fetch, (err,result) => {
                if(err){
                    res.send({
                        data: null,
                        msg: err.message,
                        status: 0
                    })
                }
                else{
                    res.send({
                        status: 1,
                        msg: 'Sub Category Wise Product List',
                        data: result,
                    });
                }
            })
        }
    })
}
