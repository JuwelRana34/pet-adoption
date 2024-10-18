const cetagoryBtn = document.getElementById("cetagoryBtn");
const petsdiv = document.getElementById("pets");
const likedPets = document.getElementById("selectedPets");
const likedPetsMainDiv = document.getElementById("likedPetsMainDiv");
const modal = document.getElementById("my_modal_5");
const sortBtn = document.getElementById("sortBtn");

// sortted btn
sortBtn.addEventListener("click", () => {
  let div = Array.from(petsdiv.children);

  div.sort((a, b) => {
    let priceA = parseInt(a.querySelector("span").innerHTML);
    let priceB = parseInt(b.querySelector("span").innerHTML);
    return priceB - priceA;
  });

  petsdiv.innerHTML = '<span class="loading loading-bars loading-lg"></span>';
  petsdiv.classList.remove("grid", "border");
  petsdiv.classList.add("text-center");
  likedPetsMainDiv.classList.add("hidden");

  setTimeout(() => {
    likedPetsMainDiv.classList.add("border");
    likedPetsMainDiv.classList.remove("hidden");
    petsdiv.classList.add("grid", "border");
    petsdiv.innerHTML = "";

    div.forEach((item) => petsdiv.appendChild(item));
  }, 2000);
});
// sortBtn end

// pet creation  common function
function cardfunc(pet) {
  const { image, pet_name, date_of_birth, breed, gender, price, petId } = pet;
  return `
<div class="card bg-base-100 rounded-lg border border-gray-200  shadow-md">

<figure class="m-2 rounded-md">
<img class="h-48 w-full object-cover"
src=${image}
alt=${pet_name} />
</figure>

<div class="card-body p-2 ">
<h2 class="card-title font-bold text-xl">${pet_name}</h2>

<div class="text-[#131313B3] border-b pb-2">
<p class='flex font-semibold'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
</svg>
Breed: ${breed == undefined || null ? "Not available" : breed}
</p>
</p>

<p class="flex font-semibold" >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg> birth: ${
    date_of_birth == undefined || null
      ? "Not available"
      : new Date(date_of_birth).getFullYear()
  }
</p>

<p  class="flex font-semibold items-center">
<i class="fa-solid fa-mercury text-2xl pr-2 pl-[2px]"></i>
Gender: ${gender == undefined || null ? "Not available" : gender}
</p>

<p class="flex font-semibold">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Price: <span>${price == undefined || null ? "Not available" : price}</span> 
</p>

</div>

<div class="card-actions grid grid-cols-3 gap-2">

<button onclick="LikePhoto('${image}')" class="btn focus:bg-green-100 bg-white border border-gray-200 hover:border-[#0E7A81] hover:bg-white "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
</button>
<button  onclick='adoptfun(event)' class="btn border border-gray-200 bg-white text-[#0E7A81] hover:text-white  hover:bg-[#0E7A81] text-lg  ">Adopt</button>
<button onclick="showDetails('${petId}')" class="btn border  border-gray-200 bg-white text-[#0E7A81] hover:text-white  hover:bg-[#0E7A81] text-lg  ">Details</button>
</div>
</div>
</div>`;
}
// pet creation  common function

// pet category btn fatch funtion
function cetagoryFun() {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => {
      data.categories.forEach((Cbtn) => {
        const { category_icon, category } = Cbtn;

        const btn = document.createElement("button");
        btn.innerHTML = `
                 <img class="w-auto h-10 object-cover " src=${category_icon} alt="" srcset="">
                 <h1 class=" font-bold px-2 text-lg ">${category}</h1> 
                 `;

        btn.classList.add(
          "border",
          "rounded-lg",
          "flex",
          "px-9",
          "py-2",
          "justify-between",
          "items-center",
          "md:w-fit"
        );
        cetagoryBtn.appendChild(btn);

        btn.addEventListener("click", (e) => {
          const btns = e.target.parentElement.parentElement.children;
          for (const btn of btns) {
            btn.classList.remove(
              "rounded-full",
              "border-[#0E7A81]",
              "bg-[#0E7A811A]"
            );
            btn.classList.add("rounded-lg");
          }

          btn.classList.replace("rounded-lg", "rounded-full");
          btn.classList.add("border-[#0E7A81]", "bg-[#0E7A811A]");

          petsdiv.innerHTML =
            '<span class="loading loading-bars loading-lg"></span>';
          petsdiv.classList.remove("grid", "border", "bg-gray-100", "py-10");
          petsdiv.classList.add("text-center");
          likedPetsMainDiv.classList.add("hidden");

          setTimeout(() => {
            petsdiv.classList.add("grid", "border");
            likedPetsMainDiv.classList.remove("hidden");
            categoryBasedPets(category);
          }, 2000);
        });
      });
    });
}
// pet category btn fatch funtion end

// allpets data show function
function showAllPets() {
  petsdiv.innerHTML = '<span class="loading loading-bars loading-lg"></span>';
  petsdiv.classList.remove("grid", "border");
  petsdiv.classList.add("text-center");

  setTimeout(() => {
    likedPetsMainDiv.classList.add("border");
    petsdiv.classList.add("grid", "border");
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => {
        petsdiv.innerHTML = `${data.pets.map(cardfunc).join("")}`;
      });
  }, 2000);
}
// all pets data show function end

// fatch pets based on catagory function
function categoryBasedPets(category) {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.data.length <= 0) {
        petsdiv.classList.remove("grid");
        petsdiv.classList.add("bg-gray-100", "py-10");
        likedPetsMainDiv.classList.add("border");
      } else {
        petsdiv.classList.remove("bg-gray-100", "py-10");
        petsdiv.classList.add("grid");
        likedPetsMainDiv.classList.add("border");
      }
      petsdiv.innerHTML = `${
        data.data.length > 0
          ? data.data.map(cardfunc).join("")
          : `
    <img class="mx-auto" src='../images/error.webp'  >
    <h1 class="text-xl md:text-3xl py-3 font-bold text-center">No Information Available</h1>
    <p class="text-center px-4 md:w-5/6 mx-auto text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
      its layout. The point of using Lorem Ipsum is that it has a.</p>`
      }`;
    });
}
// fatch pets based on catagory function end

// like and add photo another div function
function LikePhoto(photo) {
  const img = document.createElement("img");
  img.setAttribute("src", `${photo}`);
  img.classList.add("w-full", "rounded-md", "object-cover", "md:h-[130px]");

  likedPets.appendChild(img);
}
// like and add photo another div function  end

// show pet details function
function showDetails(petid) {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petid}`)
    .then((res) => res.json())
    .then((data) => {
      const {
        breed,
        gender,
        date_of_birth,
        image,
        pet_details,
        price,
        pet_name,
        vaccinated_status,
      } = data.petData;

      const modalbox = document.getElementById("modal-box");
      modalbox.innerHTML = `
      <img class="w-full rounded-md object-cover" src=${image} alt="">
     <div>
    
<h2 class="card-title font-bold my-2">${pet_name}</h2>

<div class="text-[#131313B3] border-b pb-2 grid md:grid-cols-2">
<div class='flex font-semibold'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
</svg>
Breed: ${breed == undefined || null ? "Not available" : breed}
</div>


<p class="flex font-semibold" >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg> birth: ${
        date_of_birth == undefined || null
          ? "Not available"
          : new Date(date_of_birth).getFullYear()
      }
</p>

<p  class="flex font-semibold items-center">
<i class="fa-solid fa-mercury text-2xl pr-2 pl-[2px]"></i>
Gender: ${gender == undefined || null ? "Not available" : gender}
</p>

<p class="flex font-semibold">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Price: ${price == undefined || null ? "Not available" : price}
</p>


<p  class="flex font-semibold items-center">
<i class="fa-solid fa-mercury text-2xl pr-2 pl-[2px]"></i>
Vaccinated status: ${
        vaccinated_status == undefined || null
          ? "Not available"
          : vaccinated_status
      }
</p>
</div>


<div class="py-4 space-y-4">
<h1 class="text-xl font-bold ">Details Information</h1>
<p class="text-justify px-2">${pet_details}</p>

</div>
      
   `;
    });

  modal.showModal();
}
// show pet details function end

// adoption pet function
function adoptfun(e) {
  e.target.setAttribute("disabled", true);
  document.getElementById("adopt").showModal();
  document.getElementById("adopt-modal-box").innerHTML = "3";

  let numer = 3;

  const timeCounter = setInterval(() => {
    numer--;
    document.getElementById("adopt-modal-box").innerHTML = `${numer}`;
  }, 1000);
  setTimeout(() => {
    clearInterval(timeCounter);
    document.getElementById("Cancelbtn").click();
  }, 3000);
}
// adoption pet function end

cetagoryFun();
showAllPets();
