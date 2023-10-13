class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.TipeDriver = document.getElementById("TipeDriver");
    this.availableAtDate = document.getElementById("tanggal");
    this.availableAtTime = document.getElementById("WaktuJemput");
    this.JumlahPenumpang = document.getElementById("JumlahPenumpang");
  }
  async init() {
    await this.load();
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    this.clear();
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-lg-4", "my-3", "justify-content-center");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async loadFilter(JumlahPenumpang) {
    console.log("JumlahPenumpang :", JumlahPenumpang);

    const tanggal = this.availableAtDate.value;
    console.log("tanggal :", tanggal);

    const jam = this.availableAtTime.value;
    console.log("jam :", jam);

    const tanggalJam = new Date(`${tanggal} ${jam}`);
    console.log("tanggalJam :", tanggalJam);

    const epochTime = tanggalJam.getTime();
    console.log("epochTime :", epochTime);

    const cars = await Binar.listCars((item) => {
      const capacityFilter = item.capacity >= Number(JumlahPenumpang);
      const carsAvailableAt = new Date(item.availableAt);
      const dateFilter = carsAvailableAt < epochTime;
      const availableFilter = item.available === true;
      return capacityFilter && dateFilter && availableFilter;
    });
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
