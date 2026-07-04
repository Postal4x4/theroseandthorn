window.Estate = {
  activeResident: null,

  listeners: [],

  setResident(name) {
    this.activeResident = name;
    this.emit();
  },

  onChange(fn) {
    this.listeners.push(fn);
  },

  emit() {
    this.listeners.forEach(fn =>
      fn(this.activeResident)
    );
  }
};
