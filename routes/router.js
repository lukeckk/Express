import express from 'express';
import controller from './../controllers/controller.js';

const router = express.Router();

router.get('/hello', controller.hello)

router.get('/addMessage', controller.addMessage)

router.get('/course', controller.course)

// using .end() to end the response
router.get('/unknown', controller.unknown)

router.get('/data', controller.printData)

router.get('/pages', controller.pageLoader)

router.get('/name', controller.name)

router.get('/user/:userID', controller.user)

// router.get('/book/name', controller.bookName)
// router.get('/book/summary', controller.bookSummary)
// router.get('/book/pages', controller.bookPages)
router.get('/book/:thing', controller.book)
router.get('/book/:x/:y/:z', controller.getPoints)



export default router;