import express from 'express'
const router = express.Router();

import MoviesController from '../controllers/MoviesController.js';


  // Index 
router.get('/', MoviesController.index);
  
  // Show
router.get('/:id', MoviesController.show);

//storeReview
router.post('/:id/reviews', MoviesController.storeReview)


export default router;