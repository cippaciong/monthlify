// Get state from localStorage as JSON
export function getState() {
  const state = localStorage.getItem("state")
  if (state) {
    return JSON.parse(state)
  } else {
    return []
  }
}

// Stringify the state and store it in localStorage
export function setState(state) {
  localStorage.setItem("state", JSON.stringify(state))
}

