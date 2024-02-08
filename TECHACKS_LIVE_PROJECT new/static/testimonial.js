const testimonials =[
    {
        name: "Karan Singh",
        position:"User",
        image:"https://cdn.pixabay.com/photo/2014/04/03/11/47/avatar-312160_1280.png",
        testimonial:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus autem natus quisquam, qui quae est amet. Ex veritatis, ipsa corporis tempora facere quidem ab dolorum molestiae! Perspiciatis aperiam doloribus rem amet ab laboriosam quae illo. Maxime itaque architecto rerum libero totam. Optio facilis placeat ea eligendi corrupti quae cum at!",


    },
    {
        name: "Pranay Anand",
        position:"User",
        image:"https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png",
        testimonial:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus autem natus quisquam, qui quae est amet. Ex veritatis, ipsa corporis tempora facere quidem ab dolorum molestiae! Perspiciatis aperiam doloribus rem amet ab laboriosam quae illo. Maxime itaque architecto rerum libero totam. Optio facilis placeat ea eligendi corrupti quae cum at!",


    },
    {
        name: "Amit Singh",
        position:"User",
        image:"https://cdn.pixabay.com/photo/2014/04/03/11/47/avatar-312160_1280.png",
        testimonial:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus autem natus quisquam, qui quae est amet. Ex veritatis, ipsa corporis tempora facere quidem ab dolorum molestiae! Perspiciatis aperiam doloribus rem amet ab laboriosam quae illo. Maxime itaque architecto rerum libero totam. Optio facilis placeat ea eligendi corrupti quae cum at!",


    },
];

const testimonialContainer = document.getElementById("_testimonial-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex= 0;

function showTestimonial(){

    const testimonial = testimonials[currentIndex];
    testimonialContainer.innerHTML=`
        <img src="${testimonial.image}" />
        <h3>${testimonial.name}</h3>
        <h6>${testimonial.position}</h6>
        <p>${testimonial.testimonial}</p>
    
    `;

    
    
    
    





}

function changeTestimonial(direction){
    currentIndex+= direction;
    if(currentIndex < 0){
        currentIndex = testimonials.length -1
    } else if(currentIndex >=testimonials.length){
        currentIndex = 0;
    }

    showTestimonial();




}
prevButton.addEventListener("click",()=> changeTestimonial(-1));
nextButton.addEventListener("click",()=> changeTestimonial(1));

showTestimonial();