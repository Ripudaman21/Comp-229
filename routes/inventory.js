let express = require('express');
let router = express.Router();

let inventoryController = require('../controllers/inventory');

/* GET users listing. */
router.get('/list', inventoryController.list);

// Get method to Render the Add Items Page
router.get('/add', inventoryController.displayAddPage);
// Post method to handle the Add Items process
router.post('/add', inventoryController.processAddPage);

// Get method to Render the Edit Items Page
router.get('/edit/:id', inventoryController.displayEditPage);
// Post method to handle the Edit Items process
router.post('/edit/:id', inventoryController.processEditPage);

// Precess Delete items
router.get('/delete/:id', inventoryController.performDelete);

module.exports = router;