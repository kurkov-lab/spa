function House(bedrooms, facilities, price, address, phone) {
    this.bedrooms = bedrooms;
    this.facilities = facilities;
    this.price=price;
    this.address=address;
    this.phone = phone;
}

House.prototype.changePrice = function(newPrice) {
    this.price = newPrice;
};

House.prototype.addFacility = function(newFacility) {
    if (newFacility !== null || newFacility !== undefined) {
        this.facilities.push(newFacility);
    }
};

House.prototype.description = function() {
    let str = "";
    let getType = {}; // NOTE(hubert): This is for type checking, in this case for function checking.
    let functionType = "[object Function]";
    for (let key in this) {
        if (getType.toString.call(this[key]) === functionType) continue;
        str += key + " = " + this[key] + "\n";
    }
    return str;
};

let houses = [
    new House(10, ["garden", "garage", "swimming pool"], 500000, "1181 Hillcrest Road, Beverly Hills, CA 90210", "600 700 800"),
    new House(2, ["garage"], 200000, "somewhere, some city", "555 555 666"),
    new House(5, ["garage", "swimming pool"], 500, "nowhere", "666 666 999"),
    new House(6, ["stajnia", "pole treningowe"], 50000, "Kaer Morhen, Kaedwen", "Tablica ogloszen"),
    new House(5, ["nic"], 30, "Łódź", "000 000 000"),
];

houses.forEach(function(house) {
    console.log(house.description());
});

// or
// for (let house of houses) {
// console.log(house.description());
// }

houses[1].changePrice(300000);
houses[1].addFacility("pole golfowe");
houses[2].addFacility("dach");
houses[4].changePrice(20);
houses[4].addFacility("dalej nic");

houses.forEach(function(house) {
    console.log(house.description());
});
