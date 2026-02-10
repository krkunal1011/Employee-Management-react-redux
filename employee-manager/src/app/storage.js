export const loadState = () => {
  try {
    const raw = localStorage.getItem("employee_state");
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem("employee_state", JSON.stringify(state));
  } catch {}
};
