class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
        <div class="card tampil px-2 shadow-sm p-2 bg-body rounded border border-0" style="width:100% ; height:550px ;"  >
            <img src="${this.image}" width="50" height="200" class="card-img-top mt-2 text-center">
        <div class="card-body">
            <h5 class="card-title fs-6">${this.manufacture}/${this.model}</h5>
            <h5 class="card-title fs-5 fw-bold">Rp ${this.rentPerDay} / hari</h5>
            <p class="cars__p" ">${this.description}</p>
            <div class="row">
                <div class="col-1">
                      <img src="images/fi_users1.png" width="20px" alt="" srcset="">
                </div>
                <div class="col-10 ms-lg-2">
                      ${this.capacity} orang
                </div>
            </div>
            <div class="row mt-md-2">
                <div class="col-1">
                      <img src="images/fi_settings.png" width="20px" alt="" srcset="">
                  </div>
                  <div class="col-10 ms-lg-2">
                      ${this.transmission}
                  </div>
            </div>
            <div class="row mt-md-2">
                <div class="col-1">
                    <img src="images/fi_calendar.png" width="20px" alt="" srcset="">
                </div>
                <div class="col-10 ms-lg-2">
                    Tahun ${this.year}
                 </div>
            </div>
            </div>
            <a href="#" class="btn btn-success pilihmobil" style="width:100%">Pilih Mobil</a>
    </div>
  `;
  }
}
