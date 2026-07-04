window.Estate = {
  activeResident: null,
  activeZone: "Estate",

  setResident(name) {
    this.activeResident = name;
    this.broadcast();
  },

  setZone(zone) {
    this.activeZone = zone;
    this.broadcast();
  },

  broadcast() {
    window.dispatchEvent(new CustomEvent("estate:update", {
      detail: this
    }));

    console.log("Estate State:", this);
  }
};
