let preveiwContainer = document.querySelector(".products-preview");
let preveiwBox = preveiwContainer.querySelectorAll(".preview");

document.querySelectorAll(".products-container .product").forEach(product =>{
  product.onclik = () =>{
    preveiwContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    preveiwBox.forEach(preview =>{
      let target = preview.getAttribute("data-target");
      if(name == target){
        preview.classList.add("active");
      }
    });
  };
});

