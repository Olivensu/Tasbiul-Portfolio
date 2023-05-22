import React from 'react';

import img1 from '../../img/projects/nutras.png';
import img2 from '../../img/emajohn.PNG';
import img3 from '../../img/projects/car-garage-site.png';
import img4 from '../../img/projects/phone-finder.png';
import img5 from '../../img/projects/education-management-system.PNG';
import img6 from '../../img/projects/bike-house.png';
import img7 from '../../img/projects/game-review-site.png';
import img8 from '../../img/projects/meal-hunting.png';
import img9 from '../../img/projects/money-master.png';
import img10 from '../../img/projects/panda-ecommerse-bootstrap.PNG';
import img11 from '../../img/projects/honda-cbr-review-page.PNG';
import img12 from '../../img/projects/responsive-football.png';
import img13 from '../../img/projects/Doctor-portal.PNG';





import WorkData from './WorkData';
 

const worksData = [
    {
        name: "Nutras - Fitness & Nutrition",
        description: "Check out this outstanding and versatile fitness and nutrition HTML template and build a well-functional website according to your requirements.",
        github: "https://github.com/Olivensu/The-Nutras",
        live: "https://the-nutras.web.app/",
        icon: img1
    },
    
    {
        name: "Doctors Portal",
        description: "Doctors Portal: Connect with trusted doctors, book appointments, access medical records, and communicate securely for efficient healthcare management and improved patient-doctor interactions.",
        github: "https://github.com/Olivensu/Doctors-Portal",
        live: "https://doctors-portals-site.netlify.app/",
        icon: img13
    },
    {
        name: "Educational Management System",
        description: "Doctors Portal: Connect with trusted doctors, book appointments, access medical records, and communicate securely for efficient healthcare management and improved patient-doctor interactions.",
        github: "https://github.com/Olivensu/Education-Management-System",
        live: "https://education-management-system.netlify.app/",
        icon: img5
    },
    {
        name: "Ema John",
        description: "It is an e-commerce site like as amazon where user can order their desire products easily. ",
        github: "https://github.com/Olivensu/Ema-John-Site",
        live: "https://shoe-cart-site.netlify.app/",
        icon: img2
    },
    {
        name: "Car Garage Site",
        description: "Car Garage Site is your one-stop destination for all your car repair and maintenance needs. Find reliable garages, book appointments, and access expert advice for keeping your vehicle in top condition.",
        github: "https://github.com/Olivensu/Car-Garage-Service",
        live: "https://car-garage-site.web.app/",
        icon: img3
    },
    {
        name: "Phone Finder",
        description: "Phone Finder Website simplifies the process of finding your perfect smartphone. Explore a wide range of models, compare specifications, prices, and user reviews to make an informed decision and find the ideal phone for you.",
        github: "https://github.com/Olivensu/Phone_finder",
        live: "https://phones-finder-site.netlify.app/",
        icon: img4
    },
 
    {
        name: "Bike House",
        description: "Bike-House is the ultimate destination for all things related to biking. Discover a wide selection of bikes, accessories, expert tips, and connect with fellow enthusiasts in this comprehensive biking community.",
        github: "https://github.com/Olivensu/Bike-House",
        live: "https://lucky-bike-choose.netlify.app/",
        icon: img6
    },
    {
        name: "Game Review Site",
        description: "Game Review Site is your go-to platform for the latest video game reviews. Explore comprehensive game analyses, ratings, and insights to make informed decisions and stay updated on the gaming industry's latest releases.",
        github: "https://github.com/Olivensu/Game-Review-Site",
        live: "https://spider-man-review-site.netlify.app",
        icon: img7
    },
    {
        name: "Meal Hunting",
        description: "Meal-Hunting Website is your ultimate resource for finding delicious meals. Discover a wide range of restaurants, browse menus, read reviews, and make reservations to satisfy your culinary cravings with ease.",
        github: "https://github.com/Olivensu/Meal-Hunting",
        live: "https://meal-hunting.netlify.app/",
        icon: img8
    },
    {
        name: "Money Master",
        description: "Money-Master Website is your ultimate guide to financial success. Explore expert advice, tips, and resources on budgeting, investing, and money management to achieve your financial goals and master your finances.",
        github: "https://github.com/Olivensu/money-master",
        live: "https://money-master000.netlify.app",
        icon: img9
    },
    {
        name: "Panda Ecommerse Bootstrap",
        description: "Panda-Ecommerce-Bootstrap is a powerful platform for building stunning and functional e-commerce websites. Utilize its robust features, responsive design, and customizable templates to create an exceptional online shopping experience for your customers.",
        github: "https://github.com/Olivensu/Panda-Commerce-Bootstrap",
        live: "https://pandas-ecommerce-site.netlify.app",
        icon: img10

    },
    {
        name: "Honda CBR Review Page",
        description: "It's a bootstrap project also completely responsive for mobile desktop and laptop and otheres device. ",
        github: "https://github.com/Olivensu/CBR-review-page",
        live: "https://cbr-honda-350.netlify.app",
        icon: img11
    },

    {
        name: "Responsive Football",
        description: "Responsive Football Website delivers the latest football news, scores, and updates. Enjoy a seamless browsing experience on any device, keeping you informed and connected to the world of football anytime, anywhere.",
        github: "https://github.com/Olivensu/responsive-football",
        live: "https://olivensu.github.io/responsive-football/",
        icon: img12
    },
]


const AllWork = () => {

    return (
        <div className="container">
            
               <div className="allwork pt-2 pb-5" data-aos="fade-down">
                <h3 className="text-center ">My <span className="text-warning ">Works </span></h3>
                <div className="btmline mx-auto "> </div>
                <div className="btmline mx-auto mb-3"> </div>
           

            </div>

        
        


            <div className="row ">

                {
                    worksData.map(info => <WorkData info={info}></WorkData>)
                }

            </div>


        </div>




    );
};

export default AllWork;