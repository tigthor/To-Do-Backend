/* eslint-disable radix */
/* eslint-disable import/prefer-default-export */
import ResponseService from '../services/response.service';
import TodoService from '../services/todo.service';
import code from '../helpers/status-code.helper';

export const checkIfTodoExist = async (req, res, next) => {
	if (parseInt(req.params.id)) {
		const todo = await TodoService.findTodoByAttribute({ id: req.params.id });
		if (!todo) {
			ResponseService.setError(code.notFound, `Todo with id ${req.params.id} does not exist`);
			return ResponseService.send(res);
		}
		next();
	}
};
