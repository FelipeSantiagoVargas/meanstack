const{ Router } = require('express')

const router = Router()

const employeesCtrl = require('../controller/employees.controller.js')

router.get('/', employeesCtrl.getEmployees)
router.post('/', employeesCtrl.createEmployee)
router.get('/:id', employeesCtrl.getEmployee)
router.put('/:id', employeesCtrl.editEmployee)
router.delete('/:id', employeesCtrl.deleteEmployees)

module.exports = router