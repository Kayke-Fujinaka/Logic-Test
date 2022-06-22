function myFunc(rato) {
  this.rato = rato;
  console.log(this.rato);
}

myFunc("Danny");

const object = {
  rato: "ratagão",
  func() {
    console.log(this.rato);
  },
};

object.func();
