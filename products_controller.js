module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');

        db.create_product().then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops, something went wrong.'})
            console.log(err)
        })
    },

    getOne: (req, res) => {
        const db = req.app.get('db');

        db.read_product().then(product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops, something went wrong.'})
            console.log(err)
        })
    },

    getAll: (req, res) => {
        const db = req.app.get('db');

        db.read_products().then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops, something went wrong.'})
            console.log(err)
        })
    },

    update: (req, res) => {
        const db = req.app.get('db');

        db.update_product().then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops, something went wrong.'})
            console.log(err)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db');

        db.delete_product().then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops, something went wrong.'})
            console.log(err)
        })
    }
}