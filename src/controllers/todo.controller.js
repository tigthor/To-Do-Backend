/* eslint-disable no-mixed-spaces-and-tabs */
import TodoService from '../services/todo.service';
import ResponseService from '../services/response.service';

/**
 * This is a todo controller
 */
class TodoController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} returns a created todo
   */
  static createTodo = async (req, res) => {
  	const createdTodo = await TodoService.createTodo({

  		title: req.body.title,
  		description: req.body.description,
  		priority: req.body.priority,
  	});
  	ResponseService.setSuccess(
  		code.created,
  		'Todo task successfully created',
  		createdTodo
  	);
  	return ResponseService.send(res);
  };

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} returns a single todo
   */
  static getSingleTodo = async (req, res) => {
  	const toDo = await TodoService.findTodoByAttribute({ id: req.params.id });
  	ResponseService.setSuccess(
  		code.ok,
  		'Todo task successfully retrieved',
  		toDo
  	);
  	return ResponseService.send(res);
  };

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} returns all todos
   */
  static getAllTodos = async (req, res) => {
  	const allTodos = await TodoService.findAllTodos();
  	ResponseService.setSuccess(
  		code.ok,
  		'All Todos successfully retrieved',
  		allTodos
  	);
  	return ResponseService.send(res);
  };

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} returns updated todos
   */
  static updateTodo = async (req, res) => {
  	if (req.body !== null) {
  		await TodoService.updateTodoByAttribute({ id: req.params.id }, req.body);
  		ResponseService.setSuccess(
  			code.ok,
  			`Todo with id ${req.params.id} successfully edited`
  		);
  		return ResponseService.send(res);
  	}
  	ResponseService.setError(
  		code.notFound,
  		`Todo with id ${req.params.id} can not be found`
  	);
  	return ResponseService.send(res);
  };

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} delete a todo
   */
  static deleteSingleTodo = async (req, res) => {
  	await TodoService.deleteTodoByAttribute({ id: req.params.id });
  	ResponseService.setSuccess(
  		code.deleted,
  		`Todo with id ${req.params.id} successfully deleted`
  	);

  	return ResponseService.send(res);
  };

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} deete all todos
   */
  static deleteAllTodos = async (req, res) => {
  	await TodoService.deleteAllTodos();
  	ResponseService.setSuccess(
  		code.deleted,
  		'All Todos successfully deleted'
  	);
  	return ResponseService.send(res);
  };

  /**
	 * * Search a to do item
	 * @param  {object} req
	 * @param  {object} res
	 * @returns {object} search to do item
	 */
  static async searchTodoItem(req, res) {
  	const { q } = req.query;
  	const { page = 1, limit = 10 } = req.query;
  	const offset = (page - 1) * limit;

  	const searchResults = await TodoService.findAndCountTodos(
  		{
  			[Op.and]: {
  				[Op.or]: {
  					title: { [Op.iLike]: `%${q}%` },
  					description: { [Op.iLike]: `%${q}%` },
  				},
  			},
  		},
  		{ offset, limit }
  	);
	  ResponseService.setSuccess(
  		code.ok,
  		`Search results of ${req.query.q}`,
  		searchResults
  	);
  	return ResponseService.send(res);
  }
}

export default TodoController;
