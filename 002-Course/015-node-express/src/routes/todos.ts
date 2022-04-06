import { Router } from 'express'
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from '../controllers/todos'

const router = Router()

router.post('/', createTodo)
router.get('/', getTodos)
router.patch('/:id', updateTodo) // PATCH request to http://url/todos/yourid
router.delete('/:id', deleteTodo)

export default router
