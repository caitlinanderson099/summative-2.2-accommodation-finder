/* jshint esversion: 6 */
mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

/* --------------- Data Set for Hotels ------------ */

/** Hotel 1-2 people – $157/night – min 1 night, max 5 nights
Hostel 1 person – $30/night – min 1 night, max 10 nights
Motel 2-4 people $90/night – min 3 nights, max 10 nights
House 1-4 people $240/night – min 2 nights, max 15 nights */

const accommodations = [

    // -------- HOTELS --------- //
    {
        id: 1,
        name: "Boulcott Suites",
        address: "5 O'Reily Avenue, Wellington 6011",
        location: "Wellington",
        type: "Hotel",
        longitude: 174.77392156713972,
        latitude: -41.28885629399996,
        price: "$157.00",
        description: "Centrally located in Wellington, Boulcott Suites offers stylish accommodation from studios to four-bedroom townhouses with free WiFi.",
        minStay: 1,
        maxStay: 5,
        minPeople: 1,
        maxPeople: 2,
        family: "Yes",
        images: ["images/hotels/boulcott-hotel.webp", "images/hotels/boulcott-hotel(2).webp", "images/hotels/boulcott-hotel(3).webp"]
    },
    {
        id: 2,
        name: "DoubleTree By Hilton Wellington",
        address: "28 Grey Street, Wellington 6011",
        location: "Wellington",
        type: "Hotel",
        longitude: 174.77570415364698,
        latitude: -41.283945355141334,
        price: "$157.00",
        description: "Located in Wellington's CBD, DoubleTree By Hilton is 450 meters from the waterfront. Enjoy the Spring restaurant for breakfast, lunch, or dinner.",
        minStay: 1,
        maxStay: 5,
        minPeople: 1,
        maxPeople: 2,
        images: ["images/hotels/doubletree-hotel.webp", "images/hotels/doubletree-hotel(2).webp", "images/hotels/doubletree-hotel(3).webp"],
        family: "No",
    },
    {
        id: 3,
        name: "The Rydges Hotel",
        address: "75 Featherston Street, Wellington 6011",
        location: "Wellington",
        type: "Hotel",
        longitude: 174.77861457058725,
        latitude: -41.280698574210916,
        price: "$157.00",
        description: "Rydges Wellington on Featherston Street offers unique harbour and city views. It's ideally situated near Lambton Quay, and Westpac Stadium.",
        minStay: 1,
        maxStay: 5,
        minPeople: 1,
        maxPeople: 2,
        images: ["images/hotels/rydges-hotel.webp", "images/hotels/rydges-hotel(2).webp", "images/hotels/rydges-hotel(3).webp"],
        family: "No",
    },
    {
        id: 4,
        name: "Microtel By Wyndham Wellington",
        address: "25 Vivian Street, Wellington 6011",
        location: "Wellington",
        type: "Hotel",
        longitude: 174.78048878183816,
        latitude: -41.296482295296855,
        price: "$157.00",
        description: "Located in Wellington CBD, Microtel by Wyndham is near Freyberg Beach, Hataitai Beach, and the National War Memorial.",
        minStay: 1,
        maxStay: 5,
        minPeople: 1,
        maxPeople: 2,
        images: ["images/hotels/microtel-hotel.webp", "images/hotels/microtel-hotel(2).webp", "images/hotels/microtel-hotel(3).webp"],
        family: "Yes",
    },
    {
        id: 5,
        name: "Travelodge Hotel Wellington",
        address: "2-6 Gilmer Terrace, Wellington 6011",
        location: "Wellington CBD",
        type: "Hotel",
        longitude: 174.7750440125198,
        latitude: -41.28563502238838,
        price: "$157.00",
        description: "A 13-minute walk from Te Papa Museum, Travelodge Wellington offers rooms with flat-screen cable TV and features a fitness centre. Free WiFi is available.",
        minStay: 1,
        maxStay: 5,
        minPeople: 1,
        maxPeople: 2,
        images: ["images/hotels/travelodge-hotel.webp", "images/hotels/travelodge-hotel(2).webp", "images/hotels/travelodge-hotel(3).webp"],
        family: "No",
    },

    // -------- MOTELS --------- //
    {
        id: 6,
        name: "Bella Vista Motel Wellington",
        address: "302-304 Evans Bay Parade, Wellington 6021",
        location: "Oriental Bay Wellington",
        type: "Motel",
        longitude: 174.795361303414,
        latitude: -41.25298890739783,
        price: "$90.00",
        description: "Bella Vista Motel Wellington offers 4-star accommodation with free private parking, a 10-minute drive from Wellington CBD.",
        images: ["images/motels/bella-vista-motel.webp", "images/motels/bella-vista-motel(2).webp", "images/motels/bella-vista-motel(3).webp"],
        minStay: 3,
        maxStay: 10,
        minPeople: 2,
        maxPeople: 4,
        family: "Yes",
    },
    {
        id: 7,
        name: "Newlands Court Motel",
        address: "96 Newland Road, Newlands Wellington 6037",
        location: "Newlands Wellington",
        type: "Motel",
        longitude: 174.81761835179262,
        latitude: -41.22986975036241,
        price: "$90.00",
        description: "Refurbished in 2016, Newlands Court Motel is located in Newlands, 15 minutes from Wellington's center. Guests enjoy gardens and free on-site parking.",
        images: ["images/motels/newlands-motel.webp", "images/motels/newlands-motel(2).webp", "images/motels/newlands-motel(3).webp"],
        minStay: 3,
        maxStay: 10,
        minPeople: 2,
        maxPeople: 4,
        family: "Yes",
    },
    {
        id: 8,
        name: "Adelaide Motel",
        address: "209 Adelaide Street, Newtown Wellington 6021",
        location: "Newtown Wellington",
        type: "Motel",
        longitude: 174.7776884806333,
        latitude: -41.30820046546185,
        price: "$90.00",
        description: "Located a 2-minute walk from Wellington Hospital, Adelaide Motel offers self-contained units with free unlimited WiFi. All rooms feature a flat-screen TV.",
        images: ["images/motels/adelaide-motel.webp", "images/motels/adelaide-motel(2).webp", "images/motels/adelaide-motel(3).webp"],
        minStay: 3,
        maxStay: 10,
        minPeople: 2,
        maxPeople: 4,
        family: "Yes",
    },
    {
        id: 9,
        name: "Apollo Lodge Motel",
        address: "49 Majoribanks Street, Wellington 5016",
        location: "Wellington CBD",
        type: "Motel",
        longitude: 174.78653379717923,
        latitude: -41.29443546701984,
        price: "$90.00",
        description: "All rooms at Apollo Lodge Motel Wellington include ironing facilities, a private bathroom, tea/coffee making facilities, a microwave, refrigerator, and a toaster.",
        images: ["images/motels/apollo-motel.webp", "images/motels/apollo-motel(2).webp", "images/motels/apollo-motel(3).webp"],
        minStay: 3,
        maxStay: 10,
        minPeople: 2,
        maxPeople: 4,
        family: "Yes",
    },
    {
        id: 10,
        name: "Victoria Court Motor Lodge",
        address: "201 Victoria Street, Wellington 6011",
        location: "Wellington",
        type: "Motel",
        longitude: 174.77357319533223,
        latitude: -41.293412195260636,
        price: "$90.00",
        description: "Located in the heart of Wellington, Victoria Court Motor Lodge is 15 minutes walk from Lambton Quay and Courtenay Place.",
        images: ["images/motels/victoria-motel.webp", "images/motels/victoria-motel(2).webp", "images/motels/victoria-motel(3).webp"],
        minStay: 3,
        maxStay: 10,
        minPeople: 2,
        maxPeople: 4,
        family: "Yes",
    },

    // -------- HOSTELS --------- //
    {
        id: 11,
        name: "The Marion Hostel",
        address: "13 Marion Street, Wellington 6011",
        location: "Wellington",
        type: "Hostel",
        longitude: 174.77668343830413,
        latitude: -41.293993626515274,
        price: "$30.00",
        description: "Located in Wellington's heart, The Marion Hostel offers backpacker accommodation with a rooftop terrace. Just a 1-minute walk from Cuba Street's dining.",
        images: ["images/hostels/marion-hostel.webp", "images/hostels/marion-hostel(2).webp", "images/hostels/marion-hostel(3).webp"],
        minStay: 1,
        maxStay: 10,
        minPeople: 1,
        maxPeople: 1,
        family: "No",
    },
    {
        id: 12,
        name: "Nomads Capital Backpackers",
        address: "118 Wakefield Street, Wellington 6011",
        location: "Wellington",
        type: "Hostel",
        longitude: 174.7769667383039,
        latitude: -41.28947083435604,
        price: "$30.00",
        description: "Located in the heart of the city, Nomads Capital Backpackers offers great backpackers accommodation. Just a 5-minute walk to the waterfront.",
        images: ["images/hostels/nomads-hostel.webp", "images/hostels/nomads-hostel (2).webp", "images/hostels/nomads-hostel(3).webp"],
        minStay: 1,
        maxStay: 10,
        minPeople: 1,
        maxPeople: 1,
        family: "No",
    },
    {
        id: 13,
        name: "140 Ghuznee Hostel",
        address: "140 Ghuznee Street, Wellington 6011",
        location: "Wellington",
        type: "Hostel",
        longitude: 174.77117796898386,
        latitude: -41.29091295326304,
        price: "$90.00",
        description: "Situated in Wellington and within 2.1 km of Freyberg Beach, 140 Ghuznee Hostel has a terrace, non-smoking rooms, and free WiFi throughout the property. ",
        images: ["images/hostels/ghuznee-hostel.webp", "images/hostels/ghuznee-hostel(2).webp", "images/hostels/ghuznee-hostel(3).webp"],
        minStay: 1,
        maxStay: 10,
        minPeople: 1,
        maxPeople: 1,
        family: "No",
    },
    {
        id: 14,
        name: "Trek Global Backpackers Hostel",
        address: "9 O'Reily Avenue, Wellington 5016",
        location: "Wellington",
        type: "Hostel",
        longitude: 174.77362991131915,
        latitude: -41.28875543214625,
        price: "$90.00",
        description: "Trek Global features 4 communal guest kitchens and a barbecue area. It is a 10-minute walk from Wellingtons CBD. Free unlimited WiFi is provided.",
        images: ["images/hostels/trek-hostel.webp", "images/hostels/trek-hostel(2).webp", "images/hostels/trek-hostel(3).webp"],
        minStay: 1,
        maxStay: 10,
        minPeople: 1,
        maxPeople: 1,
        family: "No",
    },
    {
        id: 15,
        name: "Haka House Wellington",
        address: "292 Wakefield Street, Wellington 6011",
        location: "Wellington",
        type: "Hostel",
        longitude: 174.7838873248117,
        latitude: -41.2928752838278,
        price: "$90.00",
        description: "Our shared rooms are ideal for budget-conscious travelers seeking convenience and social interaction, offering comfort and excellent value.",
        images: ["images/hostels/haka-hostel.webp", "images/hostels/haka-hostel(2).webp", "images/hostels/haka-hostel(3).webp"],
        minStay: 1,
        maxStay: 10,
        minPeople: 1,
        maxPeople: 1,
        family: "No",
    },

    // -------- HOUSES --------- //
    {
        id: 16,
        name: "The Perfect Stop Over",
        address: "6 Brasch Way, Wellington 6035",
        location: "Wellington",
        type: "House",
        longitude: 174.7932634959736,
        latitude: -41.2559804277536,
        price: "$240.00",
        description: "Located in Wellington, The Perfect Stop Over offers sea-view accommodation with free WiFi and parking. It's close to Westpac Stadium, and the Botanical Gardens.",
        images: ["images/houses/stop-over-house.webp", "images/houses/stop-over-house(2).webp", "images/houses/stop-over-house(3).webp"],
        minStay: 2,
        maxStay: 15,
        minPeople: 1,
        maxPeople: 4,
        family: "Yes",
    },
    {
        id: 17,
        name: "Robert ST Newlands",
        address: "8 Roberts Street, Newlands Wellington 6037",
        location: "Newlands",
        type: "House",
        longitude: 174.82222329782286,
        latitude: -41.226365339550796,
        price: "$240.00",
        description: "Located in Wellington, this property features a shared lounge, patio, and barbecue facilities. Guests enjoy free WiFi and private parking.",
        images: ["images/houses/robert-house.webp", "images/houses/robert-house(2).webp", "images/houses/robert-house(3).webp"],
        minStay: 2,
        maxStay: 15,
        minPeople: 1,
        maxPeople: 4,
        family: "No",
    },
    {
        id: 18,
        name: "Sea Views from Sunny House",
        address: "156 Homebush Road, Khandallah Wellington 6035",
        location: "Khandallah Wellington",
        type: "House",
        longitude: 174.80755028248063,
        latitude: -41.24601720172397,
        price: "$240.00",
        description: "This spacious homestay offers sea views, a balcony, 1 bedroom, a living room with a flat-screen TV, and a fully equipped kitchen.",
        images: ["images/houses/sunny-house.webp", "images/houses/sunny-house(2).webp", "images/houses/sunny-house(3).webp"],
        minStay: 2,
        maxStay: 15,
        minPeople: 1,
        maxPeople: 4,
        family: "Yes",
    },
    {
        id: 19,
        name: "Davidsons Luxury Homestay",
        address: "162B Waterloo Road, Lower Hutt 5010",
        location: "Lower Hutt",
        type: "House",
        longitude: 174.91615246713502,
        latitude: -41.21099804607493,
        price: "$240.00",
        description: "Davidsons Luxury Homestay is situated in the heart of Lower Hutt, 7 minutes' walk from Waterloo Train Station, with direct link to Westpac Stadium.",
        images: ["/images/houses/davidsons-house.webp", "images/houses/davidsons-house(2).webp", "images/houses/davidsons-house(3).webp"],
        minStay: 2,
        maxStay: 15,
        minPeople: 1,
        maxPeople: 4,
        family: "Yes",
    },
    {
        id: 19,
        name: "Seaglass Cottage",
        address: "65 Marine Drive, Lower Hutt Eastbourne 5013",
        location: "Lower Hutt",
        type: "House",
        longitude: 174.9030774671395,
        latitude: -41.284451153477896,
        price: "$240.00",
        description: "Recently renovated, Seaglass Cottage in Lower Hutt offers accommodation 21 km from Westpac Stadium and Beehive Parliament Building.",
        images: ["images/houses/cottage-house.webp", "images/houses/cottage-house(2).webp", "images/houses/cottage-house(3).webp"],
        minStay: 2,
        maxStay: 15,
        minPeople: 1,
        maxPeople: 4,
        family: "Yes",
    },

];


$(document).ready(function () {
    console.log('jquery is working');

    // Fullpage Initialization
    new fullpage('#fullpage', {
        // license
        licenseKey: 'gplv3-license', // this is the Open Source free license
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true, // comment out or remove to remove nav arrows
        controlArrows: true, // this takes off the arrows for slides

    });

    function moveToSection(number) {
        fullpage_api.moveTo(number);
    }

    $(".fa-circle-chevron-down").click(function () {
        moveToSection(2);
    });


    function validateFilters() {
        let isValid = true;
        let errorMessage = "";

        if ($("#location").val() === "") {
            isValid = false;
            errorMessage += "Please Select A Location. <br>";
        }
        if ($("#type").val() === "") {
            isValid = false;
            errorMessage += "Please Select A Building Type. <br>";
        }
        if ($("#guests").val() === "") {
            isValid = false;
            errorMessage += "Please Select Number of Guests. <br>";
        }
        if ($("#startDate").val() === "") {
            isValid = false;
            errorMessage += "Please Select A Start Date. <br>";
        }
        if ($("#endDate").val() === "") {
            isValid = false;
            errorMessage += "Please Select An End Date. <br>";
        }
        if (!isValid) {
            $("#error-message").html(errorMessage).show();
        } else {
            $("#error-message").hide();
        }

        return isValid;

    }

    // DatePickers:
    $("#startDate").datepicker({
        dateFormat: "dd/mm/yy"
    });
    $("#endDate").datepicker({
        dateFormat: "dd/mm/yy"
    });


    /** filtering */

    $('#location, #type, #family, #guests').on('change', filterAccommodations);


    $("#price-low-to-high-btn").click(sortAccLowToHigh);
    $("#price-high-to-low-btn").click(sortAccHighToLow);
    $("#findBtn").click(function (e) {
        e.preventDefault();
        if (validateFilters()) {
            filterAccommodations();
        }
    });

    function calculateDays() {
        const startDate = $("#startDate").datepicker("getDate");
        const endDate = $("#endDate").datepicker("getDate");

        if (startDate && endDate) {
            // calcualating the difference
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime()); // this will be posistive number
            // convert this to days
            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            return diffDays;
        } else {
            return 0;
        }
    }



    // filtering functions
    function filterAccommodations() {
        console.log("Filtering works");
    
        const selectedLocation = $("#location").val();
        const selectedType = $("#type").val();
        const selectedFamily = $("#family").val();
        const selectedGuests = parseInt($("#guests").val());
        const stayDuration = calculateDays(); // Calculate the duration of stay
    
        const filteredAccommodations = accommodations.filter(accommodation => {
            return (!selectedLocation || accommodation.location === selectedLocation) &&
                (!selectedType || accommodation.type === selectedType) &&
                (!selectedFamily || accommodation.family === selectedFamily) &&
                (!selectedGuests|| (accommodation.minPeople <= selectedGuests && accommodation.maxPeople >= selectedGuests)) &&
                (!stayDuration || (accommodation.minStay <= stayDuration && accommodation.maxStay >= stayDuration));
        });
    
        generateAccommodationCards(filteredAccommodations);
    }

    // sorting functions
    function sortAccLowToHigh() {
        const sortedAccommodation = accommodations.slice().sort((a, b) => {
            return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        });
        generateAccommodationCards(sortedAccommodation);
    }

    function sortAccHighToLow() {
        const sortedAccommodation = accommodations.slice().sort((a, b) => {
            return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
        });

        generateAccommodationCards(sortedAccommodation);
    }

    // dynamic creation of cards

    function generateAccommodationCards(accommodations) {
        const container = $("#results");
        container.empty(); // clears previous content

        accommodations.forEach(accommodations => {
            const cardHTML =
                `<div class="accommodation-card" data-id="${accommodations.id}">
                      <img src="${accommodations.images[0]}" class="accommodation-image">

                <div class="accommodation-details">
                    <h3> ${accommodations.name} </h3>
                    <h4> ${accommodations.type} | ${accommodations.location} </h4>
                    <p> ${accommodations.description} </p>
                        <div class="min-max-details">
                            <p>  <i class="fa-solid fa-people-group"></i>   ${accommodations.minPeople} - ${accommodations.maxPeople} </p>
                            <p>  <i class="fa-solid fa-bed"></i>   ${accommodations.minStay} - ${accommodations.maxStay} </p>
                            <p>  <i class="fa-solid fa-child"></i>   ${accommodations.family} </p>
                        </div>

                        <p> <i class="fa-solid fa-location-dot"></i> ${accommodations.address} </p>
                

                    <div class="other-details">
                        <h4> ${accommodations.price}/ night</h4>
                        <button id="read-more"> Read More </button>
                    </div>
                </div>
             </div>
 `;
            container.append(cardHTML);

        });

        // intialise swiper
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: 'swiper.pagination',
                clickable: true,
            }
        });
    }

    // call out the function, this HAS TO BE HERE
    generateAccommodationCards(accommodations);


    let mySwiper;

    // Modal Functions
    function openModal(content) {
        $('#accModal .modal-body').html(content);
        $('#accModal').fadeIn();
        $('body').addClass('no-scroll'); // Prevent background scrolling
        // Destroy existing Swiper instance if it exists
        if (mySwiper) {
            mySwiper.destroy();
            mySwiper = null;
        }

        // Initialize Swiper inside modal
        mySwiper = new Swiper('.modal-images', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

    }

    function closeModal() {
        $('#accModal').fadeOut();
        $('body').removeClass('no-scroll'); // Allow background scrolling
    }

    $(document).on('click', '.accommodation-image, #read-more', function () {
        const accommodationId = $(this).closest('.accommodation-card').data('id');
        const accommodation = accommodations.find(item => item.id === accommodationId);
        const modalContent = `  
        <div class="swiper modal-images"> 
            <div class="swiper-wrapper">
                ${accommodation.images.map(img => `<div class="swiper-slide"><img src="${img}" alt="${accommodation.name}"></div>`).join('')}
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="modal-details">

            <div class="left-side">
                <h2>${accommodation.name}</h2>
            <h3>${accommodation.type} | ${accommodation.location}</h3>
            <p>${accommodation.description}</p>
            <p> <i class="fa-solid fa-people-group"></i> ${accommodation.minPeople} - ${accommodation.maxPeople}  | <i class="fa-solid fa-bed"></i> ${accommodation.minStay} - ${accommodation.maxStay} | <i class="fa-solid fa-child"></i> ${accommodation.family}</p>

            <div class="meal-selection">
                <h4> Provided Meal Options: </h4>
                <div class="checkboxes">
                    <input type="checkbox" id="checkbox1" class="price-checkbox" data-price="30"> <label for="checkbox1"> Breakfast $30 </label> 
                    <input type="checkbox" id="checkbox2" class="price-checkbox" data-price="32"> <label for="checkbox2"> Lunch $32 </label>  
                    <input type="checkbox" id="checkbox3" class="price-checkbox" data-price="55"> <label for="checkbox3"> Dinner $55 </label> 
                    <p> Total Meal Price: $<span id="mealPrice">0</span> </p>
                </div>
            </div>
            
            <p id="noteMessage"> Please Note: All provided meals are buffet meals held in the dining area. Each with an additional price.
                Selected meals will be for each night booked. </p>
            </div>

            <div class="right-side">  
            <h3>${accommodation.price}</h3>
                <div id="map"></div>
                <button id="bookBtn"> Book Now </button>
            </div>
        </div>
        </div>
    `;

        openModal(modalContent);


        // Initialize Mapbox after the modal content is added to the DOM
        setTimeout(() => {
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [accommodation.longitude, accommodation.latitude],
                zoom: 14
            });

            new mapboxgl.Marker()
                .setLngLat([accommodation.longitude, accommodation.latitude])
                .addTo(map);
        }, 0); // Delay to ensure DOM is updated

        /** THIS IS THE CHECKBOX FUNCTIONS */
        let mealCost = 0;

        // Add onclick to each checkbox
        $(document).on('click', '.price-checkbox', function (){
            console.log('checkbox has been clicked');

            // get the price from the data-price attribute
            const price = parseFloat($(this).data('price'));

            // check if boxes have been checked
            if ($(this).is(':checked')) {
                console.log('this checkbox is checked and added the price');
                // this will take the price of each checkbox and add it into the total price 'p' tag
                mealCost += price;
            } else {
                // if not, subtract the price form the total cost when unchecked
                console.log('this checkbox is unchecked and subtracted the price');
                // this will take the price of each checkbox and subtract it from the total price 'p' tag
                mealCost -= price;
            }

            // update the displayed total cost, this will update any and all changes

            $("#mealPrice").text(mealCost.toFixed(2));
        }); 

        

        /** DO THIS AFTER FILTERING IS FIXED */

        // Booking button function, this moves user to 3rd section when clicking 'book now'

        $('#bookBtn').on('click', function (event) {
            event.preventDefault();
            closeModal();
            moveToSection(3,0);
        });
    });


    // Modal Close Button
    $(document).on('click', '.close', closeModal);
    $(window).on('click', function (event) {
        if ($(event.target).is('#accModal')) {
            closeModal();
        }
    });

    /** POPULATING THE USER SELECTED INFO */



    // let stayDuration = "";


    // /** CALCULATE TOTAL PRICES */
    // totalCost =
    // ((accommodations.price * stayDuration)) + ((mealCost * stayDuration)) * selectedGuests;
    // console.log("Total Cost", totalCost);

    

    // the submit button for confirm booking

    // $("#submitBtn").click(function (e) {
    //     e.preventDefault();
    //     if (validateFilters()) {
    //        moveToSection(3,1);
    //     }
    // });

    $('#submitBtn').click(function (event) {
        event.preventDefault();
        console.log('working');

        // Setup Regex for form validation:
        const firstNameRegex = /^[a-zA-Z]{3,10}$/;
        const lastNameRegex = /^[a-zA-Z]{3,10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const numberRegex = /^[0-9]{10}$/;

        // Get input values:
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const email = $('#email').val();
        const number = $('#number').val();

        console.log(firstName + " " + lastName + " " + email + " " + number);

        // Test against regex for form validation:
        if (!firstNameRegex.test(firstName)) {
            $('#validate-message').html(`Invalid first name. Must be 3-10 characters long and contain only letters. <br>`);
        } else if (!lastNameRegex.test(lastName)) {
            $('#validate-message').html(`Invalid last name. Must be 3-10 characters long and contain only letters. <br>`);
        } else if (!emailRegex.test(email)) {
            $('#validate-message').html(`Invalid email format.`);
        } else if (!numberRegex.test(number)) {
            $('#validate-message').html(`Invalid number. Must be exactly 10 digits long. <br>`);
        } else {
            // if passed all regex tests:
            $(".booking-confirmation").show();
            $("#personal-details").hide();
            $('#validate-message').html('<p>Form is valid!</p>');
            console.log('Form is valid');
            // Clear the input fields when user clicks submit
            $('#firstName').val('');
            $('#lastName').val('');
            $('#email').val('');
            $('#number').val('');
        }
    });


    // end of jquery doc
});