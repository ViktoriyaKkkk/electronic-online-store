const Router = require(`express`)
const userController = require(`../controllers/userController`)
const router = new Router()

router.post(`/registration`, userController.registration)
router.post(`/login`,userController.login)
router.get(`/auth`,userController.check)
router.delete(`/delete `, userController.delete)


module.exports = router