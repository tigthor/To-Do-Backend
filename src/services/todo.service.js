import models from '../database/models';

const { todo } = models;

/**
 * This is a service dealing with todos
 */
class TodoService {
  /**
   *
   * @param {object} task
   * @returns {object} return a created todo
   */
  static createTodo = (task) => todo.create(task);

  /**
   * @param {object} attribute
   * @returns {object} get all Todos
   */
  static findAllTodos = () => todo.findAll() ;

  /**
   * @param {object} attribute
   * @param {object} payload
   * @returns {object} update any todo by attribute
   */
  static updateTodoByAttribute = (attribute, payload) => todo.update(payload, { where: attribute });

  /**
   * @param {object} attribute
   * @returns {object} find todo by attribute
   */
  static findTodoByAttribute = (attribute) => todo.findOne({ where: attribute });

  /**
   * @param {object} attribute
   * @returns {object} remove single todo by attribute
   */
  static deleteTodoByAttribute = (attribute) => todo.destroy({ where: attribute })

  /**
   * Delete all Todos
   * @returns {object} delete all todos
   */
  static deleteAllTodos = () => todo.destroy({ truncate: true })
}

export default TodoService;
