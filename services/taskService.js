let tasks = require("../data/taskData");

const getAllTasks = () => tasks;

const getTaskById = (id) => tasks.find((t) => t.id === id);

const addTask = (title, priority) => {
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
    priority,
  };

  tasks.push(newTask);
  return newTask;
};

const updateTask = (id, data) => {
  const task = tasks.find((t) => t.id === id);

  if (!task) return null;

  if (data.title !== undefined) task.title = data.title;
  if (data.completed !== undefined) task.completed = data.completed;
  if (data.priority !== undefined) task.priority = data.priority;

  return task;
};

const deleteTask = (id) => {
  const initialLength = tasks.length;
  tasks = tasks.filter((t) => t.id !== id);
  return tasks.length < initialLength;
};

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
