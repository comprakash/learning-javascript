class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  constructor() {
    console.log('default');
  }

  print() {
    // Sring interpolation
    console.log(`${this.destination}: will take ${this.length} days.`);
  }
}

const trip = new Vacation("Goa", 1);

trip.print();
