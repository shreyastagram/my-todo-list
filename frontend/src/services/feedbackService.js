export const submitFeedback = async (feedbackData) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedbackData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit feedback");
  }

  return data;
};
