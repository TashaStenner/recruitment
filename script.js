let combgap;
let smart;
let annualtravel;
let singletravel;
let buildcont;
let income;
let car;

const getProducts = () => {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.itccompliance.co.uk/recruitment-webservice/api/list`
  )
    .then((result) => result.json())
    .then(
      (result) => {
        return console.log(result);
      }
    )
    .catch((err) => {
      console.log(err), getProducts();
    });
};

getProducts();
