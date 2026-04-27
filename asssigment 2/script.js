console.log("JS connected");

const vehicles = [
    {
        make: "Toyota",
        model: "Supra",
        year: 2004,
        colour: "Orange",
        fuel: "Petrol",
        description: "The Toyota Supra is a well-known sports car that has gained a strong reputation for performance and reliability. It offers a powerful engine, responsive handling, and a distinctive design that has made it popular among car enthusiasts. This model is often associated with tuning culture and motorsport inspiration, making it both exciting to drive and visually appealing.",
        image: "assigment 2/supra.png"
    },
    {
        make: "BMW",
        model: "M5",
        year: 2025,
        colour: "Black",
        fuel: "Petrol",
        description: "The BMW M5 is a high-performance luxury saloon that combines comfort with serious speed. It features advanced technology, a powerful engine, and a refined interior designed for long-distance driving. Despite its size, the car offers sharp handling and acceleration, making it suitable for both everyday use and performance driving.",
        image: "assigment 2/m52.png"
    },
    {
        make: "Audi",
        model: "RS6",
        year: 2025,
        colour: "Red",
        fuel: "Petrol",
        description: "The Audi RS6 is a performance estate car that blends practicality with extreme power. It offers a spacious interior and large storage capacity while still delivering sports car levels of acceleration. Its all-wheel-drive system ensures strong grip and stability, making it a versatile choice for both families and performance enthusiasts.",
        image: "assigment 2/rs62.png"
    },
    {
        make: "Ford",
        model: "Focus",
        year: 2018,
        colour: "Red",
        fuel: "Diesel",
        description: "The Ford Focus is a reliable and practical hatchback designed for everyday driving. It offers a comfortable interior, good fuel efficiency, and smooth handling on both city roads and motorways. This model is known for being affordable to maintain while still providing a solid driving experience.",
        image: "assigment 2/focus.png"
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2022,
        colour: "White",
        fuel: "Electric",
        description: "The Tesla Model 3 is a modern electric vehicle designed with advanced technology and efficiency in mind. It offers a quiet driving experience, impressive acceleration, and a long driving range on a single charge. The minimalist interior and large touchscreen display create a futuristic feel that appeals to many drivers.",
        image: "assigment 2/model3.png"
    },

    {
        make: "Toyota",
        model: "Corolla",
        year: 2020,
        colour: "White",
        fuel: "Petrol",
        description: "The Toyota Corolla is one of the most popular family cars in the world, known for its reliability and efficiency. It provides a smooth and comfortable ride, making it ideal for daily commuting and longer journeys. Its simple design and low running costs make it a practical choice for many drivers.",
        image: "assigment 2/corolla.png"
    },
    {
        make: "Toyota",
        model: "Yaris",
        year: 2019,
        colour: "Blue",
        fuel: "Petrol",
        description: "The Toyota Yaris is a compact city car designed for ease of use and efficiency. It is easy to park, fuel-efficient, and well-suited to urban environments. Despite its small size, it offers a comfortable interior and modern features that make everyday driving simple and enjoyable.",
        image: "assigment 2/yaris.png"
    },
    {
        make: "Toyota",
        model: "Prius",
        year: 2021,
        colour: "Silver",
        fuel: "Hybrid",
        description: "The Toyota Prius is a well-known hybrid vehicle that focuses on fuel efficiency and reduced emissions. It combines a petrol engine with an electric motor to provide a smooth and economical driving experience. This makes it a popular choice for environmentally conscious drivers.",
        image: "assigment 2/prius.png"
    },

    {
        make: "BMW",
        model: "M3",
        year: 2022,
        colour: "Black",
        fuel: "Petrol",
        description: "The BMW M3 is a performance-focused saloon that offers sharp handling and strong acceleration. It is designed for drivers who enjoy a sporty driving experience while still needing a practical vehicle. The interior combines comfort with high-quality materials and advanced features.",
        image: "assigment 2/m3.png"
    },
    {
        make: "BMW",
        model: "X5",
        year: 2020,
        colour: "White",
        fuel: "Diesel",
        description: "The BMW X5 is a luxury SUV that provides a spacious interior and a comfortable driving experience. It is well-suited for families or long-distance travel, offering advanced safety features and strong road presence. The diesel engine also helps with fuel efficiency on longer journeys.",
        image: "assigment 2/x5.png"
    },

    {
        make: "Audi",
        model: "A4",
        year: 2019,
        colour: "Black",
        fuel: "Diesel",
        description: "The Audi A4 is a refined saloon that focuses on comfort, technology, and build quality. It offers a smooth driving experience and a well-designed interior with modern features. This makes it a strong option for both business and personal use.",
        image: "assigment 2/a4.png"
    },
    {
        make: "Audi",
        model: "Q7",
        year: 2022,
        colour: "Blue",
        fuel: "Diesel",
        description: "The Audi Q7 is a large SUV that offers plenty of space for passengers and luggage. It is designed for comfort and practicality, making it ideal for families. The vehicle also includes advanced safety features and a powerful engine for confident driving.",
        image: "assigment 2/q7.png"
    },

    {
        make: "Ford",
        model: "Fiesta",
        year: 2017,
        colour: "Red",
        fuel: "Petrol",
        description: "The Ford Fiesta is a small and popular hatchback known for its fun driving experience. It is easy to handle, efficient, and ideal for city driving. The compact size makes it convenient for parking while still offering a comfortable interior.",
        image: "assigment 2/fiesta.png"
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2021,
        colour: "Yellow",
        fuel: "Petrol",
        description: "The Ford Mustang is an iconic muscle car known for its powerful engine and bold design. It delivers strong performance and a thrilling driving experience. The car stands out on the road and appeals to drivers who enjoy speed and style.",
        image: "assigment 2/mustang2.png"
    },

    {
        make: "Tesla",
        model: "Model S",
        year: 2022,
        colour: "White",
        fuel: "Electric",
        description: "The Tesla Model S is a luxury electric vehicle that offers impressive acceleration and long-range capability. It features advanced technology, including autopilot systems and a modern interior design. The car provides a smooth and quiet driving experience.",
        image: "assigment 2/modelS.png"
    },

    {
        make: "Mercedes",
        model: "C200",
        year: 2019,
        colour: "Silver",
        fuel: "Petrol",
        description: "The Mercedes C200 is a stylish and comfortable saloon that focuses on luxury and smooth performance. It features a well-designed interior with high-quality materials and modern technology. This makes it a strong choice for both commuting and longer trips.",
        image: "assigment 2/c200.png"
    },

    {
        make: "Volkswagen",
        model: "Golf",
        year: 2018,
        colour: "Blue",
        fuel: "Diesel",
        description: "The Volkswagen Golf is a well-rounded hatchback known for its reliability and practicality. It offers a comfortable ride and efficient fuel consumption. This makes it a popular choice for everyday driving.",
        image: "assigment 2/golf.png"
    },

    {
        make: "Honda",
        model: "Civic",
        year: 2021,
        colour: "Black",
        fuel: "Petrol",
        description: "The Honda Civic is a sporty hatchback that combines performance with reliability. It offers a comfortable interior and responsive handling. This makes it suitable for both city driving and longer journeys.",
        image: "assigment 2/civic.png"
    },

    {
        make: "Nissan",
        model: "Qashqai",
        year: 2020,
        colour: "Grey",
        fuel: "Diesel",
        description: "The Nissan Qashqai is a popular SUV that provides comfort and practicality. It is designed for everyday use, offering good fuel efficiency and a spacious interior. The elevated driving position also improves visibility on the road.",
        image: "assigment 2/qashqai.png"
    },

    {
        make: "Hyundai",
        model: "Tucson",
        year: 2022,
        colour: "Black",
        fuel: "Hybrid",
        description: "The Hyundai Tucson is a modern SUV that combines style with efficiency. It offers a spacious interior and advanced features, making it suitable for families. The hybrid system also helps reduce fuel consumption.",
        image: "assigment 2/tucson.png"
    },

    {
        make: "Kia",
        model: "Sportage",
        year: 2021,
        colour: "White",
        fuel: "Diesel",
        description: "The Kia Sportage is a practical SUV with a comfortable interior and good reliability. It offers plenty of space and modern features, making it suitable for everyday use. The design is both stylish and functional.",
        image: "assigment 2/sportage.png"
    },

    {
        make: "Peugeot",
        model: "208",
        year: 2019,
        colour: "Yellow",
        fuel: "Petrol",
        description: "The Peugeot 208 is a stylish small car designed for city driving. It offers a comfortable interior and modern technology, making it easy to use. The compact size also makes it practical for urban environments.",
        image: "assigment 2/208.png"
    },

    {
        make: "Renault",
        model: "Clio",
        year: 2018,
        colour: "Red",
        fuel: "Petrol",
        description: "The Renault Clio is a popular hatchback known for its stylish design and efficiency. It offers a smooth driving experience and a comfortable interior. This makes it a strong option for daily use.",
        image: "assigment 2/clio.png"
    },

    {
        make: "Mazda",
        model: "CX-5",
        year: 2021,
        colour: "Black",
        fuel: "Diesel",
        description: "The Mazda CX-5 is a mid-size SUV that offers a premium feel and strong driving performance. It features a high-quality interior and advanced safety features. This makes it both comfortable and reliable.",
        image: "assigment 2/cx5.png"
    },

    {
        make: "Volvo",
        model: "XC40",
        year: 2021,
        colour: "White",
        fuel: "Electric",
        description: "The Volvo XC40 is a compact luxury SUV with a strong focus on safety and design. It offers an electric powertrain, making it environmentally friendly. The interior is modern and comfortable, suitable for daily use.",
        image: "assigment 2/xc40.png"
    },

    {
        make: "Volkswagen",
        model: "Passat",
        year: 2019,
        colour: "Grey",
        fuel: "Petrol",
        description: "The Volkswagen Passat is a spacious and comfortable saloon designed for both family and business use. It offers a smooth driving experience, a well-built interior, and plenty of legroom for passengers. The car is known for its reliability and practicality, making it ideal for long journeys.",
        image: "assigment 2/pissat.png"
    },

    {
        make: "Volkswagen",
        model: "Polo",
        year: 2020,
        colour: "Red",
        fuel: "Petrol",
        description: "The Volkswagen Polo is a compact hatchback that is easy to drive and park, especially in busy urban areas. It offers a comfortable interior, modern features, and good fuel efficiency. This makes it a great option for everyday use and shorter trips.",
        image: "assigment 2/polo.png"
    },

    {
        make: "Honda",
        model: "Accord",
        year: 2019,
        colour: "White",
        fuel: "Hybrid",
        description: "The Honda Accord is a reliable and comfortable saloon that focuses on efficiency and practicality. Its hybrid system allows for better fuel economy while maintaining smooth performance. The spacious interior and advanced features make it suitable for both commuting and long-distance driving.",
        image: "assigment 2/accord.png"
    },

    {
        make: "Honda",
        model: "CR-V",
        year: 2022,
        colour: "Blue",
        fuel: "Petrol",
        description: "The Honda CR-V is a practical SUV that offers a spacious cabin and a comfortable ride. It is designed with families in mind, providing plenty of storage space and modern safety features. The car is easy to drive and suitable for both city and motorway use.",
        image: "assigment 2/crv.png"
    },

    {
        make: "Nissan",
        model: "Micra",
        year: 2017,
        colour: "Orange",
        fuel: "Petrol",
        description: "The Nissan Micra is a small and efficient city car that is perfect for short journeys and urban driving. Its compact design makes parking easy, while still offering a comfortable and simple interior. It is a practical option for new or everyday drivers.",
        image: "assigment 2/micra.png"
    },

    {
        make: "Nissan",
        model: "Leaf",
        year: 2021,
        colour: "White",
        fuel: "Electric",
        description: "The Nissan Leaf is one of the most well-known electric vehicles, offering a quiet and smooth driving experience. It is designed to reduce emissions while still being practical for daily use. The car provides good range and modern features for convenience.",
        image: "assigment 2/leaf.png"
    },

    {
        make: "Hyundai",
        model: "i10",
        year: 2018,
        colour: "Blue",
        fuel: "Petrol",
        description: "The Hyundai i10 is a compact and affordable car that is ideal for city driving. It offers simple controls, good fuel efficiency, and a comfortable ride. Despite its size, it provides enough space for passengers and everyday needs.",
        image: "assigment 2/i10.jpg"
    },

    {
        make: "Hyundai",
        model: "i30",
        year: 2019,
        colour: "White",
        fuel: "Diesel",
        description: "The Hyundai i30 is a practical hatchback that balances comfort, efficiency, and reliability. It is suitable for both short trips and longer drives, offering a smooth and stable ride. The interior includes useful features for everyday convenience.",
        image: "assigment 2/i30.png"
    },

    {
        make: "Kia",
        model: "Rio",
        year: 2018,
        colour: "Red",
        fuel: "Petrol",
        description: "The Kia Rio is a small and efficient car designed for everyday use. It is easy to drive, economical, and offers a comfortable interior for its size. This makes it a good option for city driving and commuting.",
        image: "assigment 2/rio.png"
    },

    {
        make: "Kia",
        model: "Sorento",
        year: 2022,
        colour: "Grey",
        fuel: "Hybrid",
        description: "The Kia Sorento is a large SUV that offers plenty of space for passengers and luggage. It is designed for families, with a comfortable interior and advanced safety features. The hybrid system also improves fuel efficiency for longer journeys.",
        image: "assigment 2/sorento.png"
    },

    {
        make: "Peugeot",
        model: "308",
        year: 2020,
        colour: "Blue",
        fuel: "Diesel",
        description: "The Peugeot 308 is a modern hatchback that focuses on comfort and efficiency. It offers a smooth driving experience and a well-designed interior. The car is suitable for everyday use and longer trips.",
        image: "assigment 2/308.png"
    },

    {
        make: "Peugeot",
        model: "3008",
        year: 2021,
        colour: "White",
        fuel: "Hybrid",
        description: "The Peugeot 3008 is a stylish SUV with a modern design and advanced features. It offers a comfortable interior and a raised driving position for better visibility. The hybrid engine provides improved fuel efficiency and reduced emissions.",
        image: "assigment 2/3008.png"
    },

    {
        make: "Renault",
        model: "Megane",
        year: 2019,
        colour: "Grey",
        fuel: "Diesel",
        description: "The Renault Megane is a practical hatchback that offers a comfortable ride and good fuel economy. It is suitable for both city and motorway driving, with a well-designed interior and useful features.",
        image: "assigment 2/megane.png"
    },

    {
        make: "Renault",
        model: "Captur",
        year: 2022,
        colour: "Orange",
        fuel: "Hybrid",
        description: "The Renault Captur is a compact SUV that combines style with practicality. It offers a raised driving position and a comfortable interior. The hybrid system helps reduce fuel consumption while maintaining good performance.",
        image: "assigment 2/captur.png"
    },

    {
        make: "Mazda",
        model: "Mazda2",
        year: 2017,
        colour: "Blue",
        fuel: "Petrol",
        description: "The Mazda2 is a small and efficient car designed for urban driving. It offers responsive handling and a comfortable interior. The compact size makes it easy to manoeuvre and park in tight spaces.",
        image: "assigment 2/mazda2.png"
    },

    {
        make: "Mazda",
        model: "Mazda3",
        year: 2020,
        colour: "White",
        fuel: "Petrol",
        description: "The Mazda3 is a stylish hatchback that focuses on driving enjoyment and design. It offers a premium feel inside and smooth performance on the road. The car is suitable for both daily use and longer journeys.",
        image: "assigment 2/mazda3.png"
    },

    {
        make: "Subaru",
        model: "Forester",
        year: 2021,
        colour: "Green",
        fuel: "Hybrid",
        description: "The Subaru Forester is a practical SUV known for its all-wheel drive capability and reliability. It is designed for both city driving and off-road conditions. The hybrid system adds efficiency while maintaining performance.",
        image: "assigment 2/forester.png"
    },

    {
        make: "Subaru",
        model: "Outback",
        year: 2022,
        colour: "Grey",
        fuel: "Petrol",
        description: "The Subaru Outback is a rugged estate car designed for versatility and comfort. It offers a spacious interior and strong performance on different terrains. The car is ideal for outdoor use and long journeys.",
        image: "assigment 2/outback.png"
    },

    {
        make: "Volvo",
        model: "XC60",
        year: 2020,
        colour: "Black",
        fuel: "Hybrid",
        description: "The Volvo XC60 is a luxury SUV that focuses on safety, comfort, and modern design. It offers a smooth driving experience and advanced features. The hybrid system provides better efficiency while maintaining performance.",
        image: "assigment 2/xc60.png"
    },

    {
        make: "Jaguar",
        model: "XF",
        year: 2020,
        colour: "White",
        fuel: "Petrol",
        description: "The Jaguar XF is a stylish saloon that combines performance with comfort. It offers a smooth and refined driving experience, along with a high-quality interior. The car is suitable for both business and personal use.",
        image: "assigment 2/xf.png"
    },

    {
        make: "Lexus",
        model: "IS",
        year: 2019,
        colour: "Grey",
        fuel: "Hybrid",
        description: "The Lexus IS is a luxury saloon that focuses on comfort and efficiency. Its hybrid system provides smooth performance and improved fuel economy. The interior is designed with high-quality materials and modern features.",
        image: "assigment 2/is.png"
    },

    {
        make: "Lexus",
        model: "UX",
        year: 2022,
        colour: "Blue",
        fuel: "Hybrid",
        description: "The Lexus UX is a compact luxury SUV designed for urban driving. It offers a comfortable interior and advanced technology. The hybrid engine improves efficiency while maintaining a smooth ride.",
        image: "assigment 2/ux.png"
    },

    {
        make: "Mini",
        model: "Countryman",
        year: 2020,
        colour: "Green",
        fuel: "Hybrid",
        description: "The Mini Countryman is a compact SUV that combines unique design with practicality. It offers more space than the standard Mini models and includes hybrid technology for better efficiency. The car is both fun and functional.",
        image: "assigment 2/countryman.png"
    },

    {
        make: "Mini",
        model: "Clubman",
        year: 2019,
        colour: "White",
        fuel: "Petrol",
        description: "The Mini Clubman is a stylish estate car that offers a distinctive design and practical features. It provides more space than smaller Mini models while maintaining a fun driving experience. The interior is modern and well-equipped.",
        image: "assigment 2/clubman.png"
    }
];


console.log(vehicles);

document.addEventListener("DOMContentLoaded", function () {

    function displayVehicles(vehicleArray) {

        const resultsList = document.getElementById("results");

        if (!resultsList) {
            console.log("results element not found");
            return;
        }

        resultsList.innerHTML = "";

        if (vehicleArray.length === 0) {
            const li = document.createElement("li");
            li.textContent = "No vehicles found";
            resultsList.appendChild(li);
            return;
        }

        vehicleArray.forEach(function (vehicle) {
            const li = document.createElement("li");

            li.innerHTML =
                "<img src='" + vehicle.image + "' alt='" + vehicle.make + " " + vehicle.model + "'>" +
                "<h3>" + vehicle.make + " " + vehicle.model + "</h3>" +
                "<p>Year: " + vehicle.year + "</p>" +
                "<p>Fuel: " + vehicle.fuel + "</p>" +
                "<p>Colour: " + vehicle.colour + "</p>" +
                "<p class='description'>" + vehicle.description + "</p>";

            li.addEventListener("click", function () {
                const description = li.querySelector(".description");

                if (description.style.display === "block") {
                    description.style.display = "none";
                } else {
                    description.style.display = "block";
                }
            });

            resultsList.appendChild(li);
        });
    }

    const searchInput = document.getElementById("searchInput");
    const fuelFilter = document.getElementById("fuelFilter");
    const yearFilter = document.getElementById("yearFilter");
    const colourFilter = document.getElementById("colourFilter");

    function filterVehicles() {
        const searchValue = searchInput.value.toLowerCase();
        const selectedFuel = fuelFilter.value;
        const selectedYear = yearFilter.value;
        const selectedColour = colourFilter.value;

        const filteredVehicles = vehicles.filter(function (vehicle) {

            const matchesSearch =
                vehicle.make.toLowerCase().includes(searchValue) ||
                vehicle.model.toLowerCase().includes(searchValue);

            const matchesFuel =
                selectedFuel === "" || vehicle.fuel === selectedFuel;

            const matchesYear =
                selectedYear === "" || vehicle.year.toString() === selectedYear;

            const matchesColour =
                selectedColour === "" || vehicle.colour === selectedColour;

            return matchesSearch && matchesFuel && matchesYear && matchesColour;
        });

        displayVehicles(filteredVehicles);
    }

    const resetButton = document.getElementById("resetButton");

    resetButton.addEventListener("click", function () {
        searchInput.value = "";
        fuelFilter.value = "";
        yearFilter.value = "";
        colourFilter.value = "";

        displayVehicles(vehicles);

    });

    const topButton = document.getElementById("topButton");

    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });





    searchInput.addEventListener("input", filterVehicles);
    fuelFilter.addEventListener("change", filterVehicles);
    yearFilter.addEventListener("change", filterVehicles);
    colourFilter.addEventListener("change", filterVehicles);

    displayVehicles(vehicles);

});