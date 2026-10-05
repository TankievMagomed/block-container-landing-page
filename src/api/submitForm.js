// Единая точка отправки форм.
// Локально (npm start + node server/index.js) данные уходят на бэкенд.
// На опубликованной демо-версии (GitHub Pages) бэкенда нет,
// поэтому запрос не выполняется и форма просто считается отправленной.
const API_URL = "http://localhost:4000/api/submit";

const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

export const IS_DEMO = !isLocalhost;

export const submitForm = async (data) => {
  if (IS_DEMO) {
    return { ok: true };
  }

  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};
