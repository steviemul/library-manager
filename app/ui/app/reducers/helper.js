export function start (state) {
  state.pending = true;
  state.status = {};
}

export function status (state, payload) {
  state.pending = false;
  state.status = payload;
}