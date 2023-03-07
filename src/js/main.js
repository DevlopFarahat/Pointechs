class Main {
  defaultSelectedTapId = 1;

  setDefaultSelectedTapId(selectedTap) {
    this.defaultSelectedTapId = selectedTap;
  }
  getDefaultSelectedTapId() {
    return this.defaultSelectedTapId;
  }
}

let main = new Main();
let navbarTaps = document.querySelectorAll(".nav-item");
for (let i = 0; i < navbarTaps.length; i++) {
  navbarTaps[i].addEventListener(
    "click",
    function (event) {
      main.setDefaultSelectedTapId(event.currentTarget.id);
      if (event.currentTarget.id == main.getDefaultSelectedTapId()) {
        navbarTaps[i].classList.add("active-tap-component");
      }
      for (let i = 0; i < navbarTaps.length; i++) {
        if (event.currentTarget.id != navbarTaps[i].id)
          navbarTaps[i].classList.remove("active-tap-component");
      }
    },
    false
  );
}
