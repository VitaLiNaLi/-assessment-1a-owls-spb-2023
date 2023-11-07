class ShippingContainer {
  constructor({ destination, boxes, maxWeight, type }) {
    this.destination = destination;
    this.boxes = boxes;
    this.maxWeight = maxWeight;
    this.type = type;
  }

  get currentWeight() {
    return this.boxes.reduce((a, b) => a + b.weight, 0);
  }

  addBox(newBox) {
    if (
      this.currentWeight + newBox.weight <= this.maxWeight &&
      this.type === newBox.type
    ) {
      this.boxes.push(newBox);
      return true;
    }
    return false;
  }
}

module.exports = ShippingContainer;
