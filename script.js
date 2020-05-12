let annualtravel = document.getElementById("annualtravel");
let buildcont = document.getElementById("buildcont");
let car = document.getElementById("car");
let combgap = document.getElementById("combgap");
let singletravel = document.getElementById("singletravel");
let smart = document.getElementById("smart");

const getProducts = () => {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.itccompliance.co.uk/recruitment-webservice/api/list`
  )
    .then((result) => result.json())
    .then((result) => {
      return (
        annualtravel.innerHTML = result.products.annualtravel + getInfo(annualtravel),
        buildcont.innerHTML = result.products.buildcont + getInfo(buildcont),
        car.innerHTML = result.products.car + getInfo(car),
        combgap.innerHTML = result.products.combgap + getInfo(combgap),
        singletravel.innerHTML = result.products.singletravel + getInfo(singletravel),
        smart.innerHTML = result.products.smart + getInfo(smart)
      );
    })
    .catch((err) => {
      return console.log(err), getProducts();
    });
};

const getInfo = (id) => {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://www.itccompliance.co.uk/recruitment-webservice/api/info?id=${id}`
      )
        .then((result) => result.json())
        .then((result) => {
          return result.id.name, result.id.description, result.id.type, result.id.suppliers;
        })
        .catch((err) => {
          return console.log(err), getInfo(id);
        });
    }; 

// getProducts();
