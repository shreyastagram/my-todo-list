const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export const getTodos = async () => {
  const response = await fetch(`${BACKEND_URL}/todos`);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
};

export const getTodoById = async (id) => {
  const response = await fetch(`${BACKEND_URL}/todos/${id}`);
  if (!response.ok) throw new Error("Failed to fetch task");
  return response.json();
};

export const createTodo = async (task, assignedTo) => {
  console.log("Sending req:", JSON.stringify({ task, assignedTo }));
  try {
    const response = await fetch(`${BACKEND_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task, assignedTo }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add task");
    }
    return await response.json();
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};

export const updateTodo = async (id, updatedTaskData) => {
  const response = await fetch(`${BACKEND_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTaskData),
  });
  if (!response.ok) throw new Error("Failed to update task");
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${BACKEND_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete task");
  return await response.json();
};
