const errorMsg = "Oops! Something went wrong. Our engineers have been informed!";

module.exports = {
    create: (req, res) => {
        const db = req.app.get("db");
        const {name, description, price, image_url} = req.body
        db.create_product([name, description, price, image_url])
        .then(products => {
            res.status(200).send(products)
        }).catch(err => {
            console.log(err);
            res.send(500).send({errorMessage: errorMsg});
        })
    },
    getOne: (req, res) => {
        const db = req.app.get("db");
        db.read_product_by_id([req.params.product_id])
        .then(product => {
            res.status(200).send(product)
        }).catch(err => {
            console.log(err);
            res.sendStatus(400);
        })
    },
    getAll: (req, res) => {
        const db =req.app.get("db");
        db.read_products().then ( products =>{
            res.status(200).send(products)
        }).catch( err => {
            res.status(500).send({errorMessage: errorMsg});
        })
    },
    updateDescription: (req, res) => {
        const db = req.app.get("db");
        const {product_id, description} = req.body
        db.update_product_description([product_id, description])
        .then(product => {
            res.status(200).send(products)
        }).catch(err => {
            console.log(err);
            res.send(500).send({errorMessage: errorMsg});
        })
    },
    delete: (req, res) => {
        const db = req.app.get("db");
        const {product_id} = req.body
        db.delete_product([product_id, description])
        .then(product => {
            res.status(200).send(products)
        }).catch(err => {
            console.log(err);
            res.send(500).send({errorMessage: errorMsg});
        })
    },
}