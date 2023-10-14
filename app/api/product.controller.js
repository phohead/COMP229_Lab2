const Product = require('./product.model'); 

// GET: Get all Products
exports.getAllProducts = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(500).send(err));
};

// GET: Get Product by id
exports.getProductById = (req, res) => {
    const productId = req.params.id; 
  
    Product.findById(productId)
      .then((product) => {
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };

// POST: Add new Product
exports.addProduct = (req, res) => {
  const product = new Product(req.body);
  product.save()
    .then((product) => res.json(product))
    .catch((err) => res.status(500).send(err));
};

// PUT: Update Product by id
exports.updateProduct = (req, res) => {
const productId = req.params.id; 

Product.findByIdAndUpdate(productId, req.body, { new: true })
    .then((product) => {
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
    })
    .catch((err) => {
    res.status(500).send(err);
    });
};

// DELETE: Remove Product by id
exports.deleteProduct = (req, res) => {
const productId = req.params.id; 

Product.findByIdAndRemove(productId)
    .then((product) => {
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
    })
    .catch((err) => {
    res.status(500).send(err);
    });
};

// DELETE: Remove all Products
exports.deleteAllProducts = (req, res) => {
    Product.deleteMany({})
      .then(() => {
        res.json({ message: 'All products deleted' });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
  
// GET: Find all Products by name  
exports.findProductsByName = (req, res) => {
const kw = req.query.name; 

Product.find({ name: { $regex: kw, $options: 'i' } })
    .then((products) => {
    res.json(products);
    })
    .catch((err) => {
    res.status(500).send(err);
    });
};
  