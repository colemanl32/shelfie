const { default: Axios } = require("axios");

module.exports = {
  getInventory: (req, res) => {
      const dbInstance = req.app.get('db');

      dbInstance.get_inventory().then(inventory => res.status(200).send(inventory))
        .catch (err => {
            res.status(500).send({errorMessage: "this isn't working"})
            console.log(err)
        })
  },

    
  createProduct: (req, res)=> {
    const dbInstance = req.app.get('db');
    const { name, price, image_url } = req.body
    
    dbInstance.create_product([name, price, image_url]).then((product) => {
      res.status(200).send(product)
    })
    .catch (err => {
      res.status(500).send({errorMessage: "this isn't working"})
      console.log(err)
  })

  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_product(id).then(() => {
      res.sendStatus(200);
      console.log('all good');
    });
  }


};