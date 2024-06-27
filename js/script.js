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
        location: "Wellington CBD",
        type: "Hotel",
        longitude: 174.77392156713972,
        latitude: -41.28885629399996,
        price: "$157.00",
        description: "Centrally located in Wellington, Boulcott Suites is a unique luxury apartment hotel featuring a selection of stylish accommodation from studios to four-bedroom townhouses. Guests enjoy free WiFi.",
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
        location: "Wellington CBD",
        type: "Hotel",
        longitude: 174.77570415364698,
        latitude: -41.283945355141334,
        price: "$157.00",
        description: "Situated in Wellington's CBD, Doubletree By Hilton Wellington offers guests a city escape, just 450 metres from the waterfront. Dine at Spring restaurant for breakfast, lunch or dinner, featuring Asian and European inspired cuisine.",
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
        location: "Wellington CBD",
        type: "Hotel",
        longitude: 174.77861457058725,
        latitude: -41.280698574210916,
        price: "$157.00",
        description: "Rydges Wellington is centrally located on downtown Featherston Street, and features a unique combination of harbour and city outlooks. The accommodation is ideally located to walk to nearby Lambton Quay, Westpac Stadium, Queens Wharf and Wellington Railway Station.",
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
        location: "Wellington CBD",
        type: "Hotel",
        longitude: 174.78048878183816,
        latitude: -41.296482295296855,
        price: "$157.00",
        description: "Well situated in the Wellington CBD district of Wellington, Microtel by Wyndham Wellington is set 1.4 km from Freyberg Beach, 2.6 km from Hataitai Beach and 500 metres from National War Memorial.",
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
        description: "Just 13 minutes walk from the iconic Te Papa Museum in the heart of Wellington, Travelodge offers rooms with flat-screen cable TV. It features a fitness centre. Free WiFi is available.",
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
        description: "Located within a 10-minute drive from Wellington CBD where you will find shopping, entertainment and other activities, Bella Vista Motel Wellington offers 4-star accommodation with free private parking. Wellington Airport is just a 9-minute drive from the property.",
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
        description: "Refurbished in 2016, Newlands Court Motel is located in Newlands, within 15 minutes drive from the centre of Wellington. Guests of this motel can enjoy gardens and free on-site parking.",
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
        description: "Conveniently located a 2-minute walk from Wellington Hospital, Adelaide Motel offers self-contained units with free, unlimited WiFi access. All rooms have a flat-screen TV with more than 50 satellite channels.",
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
        description: "All rooms at Apollo Lodge Motel Wellington feature ironing facilities and a private bathroom. Tea/coffee making facilities, plus a microwave, refrigerator and toaster are provided.",
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
        location: "Wellington CBD",
        type: "Motel",
        longitude: 174.77357319533223,
        latitude: -41.293412195260636,
        price: "$90.00",
        description: "Located in the heart of Wellington, Victoria Court Motor Lodge is 15 minutes walk from Lambton Quay and Courtenay Place. Wellington Airport is a 15-minute drive away.",
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
        location: "Wellington CBD",
        type: "Hostel",
        longitude: 174.77668343830413,
        latitude: -41.293993626515274,
        price: "$30.00",
        description: "Located in the heart of the city of Wellington,The Marion Hostel offers a range of backpacker accommodation  and features a rooftop terrace. It is just a 1-minute walk from Cuba Street where you will find a variety of restaurants, cafes and bars. Free high speed unlimited WiFi is offered throughout the property.",
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
        location: "Wellington CBD",
        type: "Hostel",
        longitude: 174.7769667383039,
        latitude: -41.28947083435604,
        price: "$30.00",
        description: "Located in the heart of the city, Nomads Capital Backpackers offers 5-star backpackers accommodation. It is a 5-minute walk from Wellington's stunning waterfront.",
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
        location: "Wellington CBD",
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
        location: "Wellington CBD",
        type: "Hostel",
        longitude: 174.77362991131915,
        latitude: -41.28875543214625,
        price: "$90.00",
        description: "Trek Global features 4 communal guest kitchens and a barbecue area. It is a 10-minute walk from Wellingtons CBD and Wellington Waterfront. Free unlimited WiFi is provided.",
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
        location: "Wellington CBD",
        type: "Hostel",
        longitude: 174.7838873248117,
        latitude: -41.2928752838278,
        price: "$90.00",
        description: "Our shared rooms are the perfect option for budget-conscious travelers who want to enjoy the convenience and social aspects of sharing a space with like-minded travelers, without compromising on comfort or value for money.",
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
        location: "Wellington CBD",
        type: "House",
        longitude: 174.7932634959736,
        latitude: -41.2559804277536,
        price: "$240.00",
        description: "Set in Wellington and only 3.4 km from Westpac Stadium, The perfect stop over offers accommodation with sea views, free WiFi and free private parking. The property is situated 3.8 km from Wellington Botanical Gardens, 4 km from Beehive Parliament Building and 4.1 km from Wellington Cable Car.",
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
        location: "Newlands Wellington",
        type: "House",
        longitude: 174.82222329782286,
        latitude: -41.226365339550796,
        price: "$240.00",
        description: "Robert ST Newlands, a property with a shared lounge, is located in Wellington, 8.7 km from Westpac Stadium, 9.1 km from Beehive Parliament Building, as well as 9.2 km from Wellington Botanical Gardens. Guests can benefit from a patio and a barbecue. There is a sun terrace and guests can make use of free WiFi and free private parking.",
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
        address: "156 Homebush Road 156B, Khandallah Wellington 6035",
        location: "Khandallah Wellington",
        type: "House",
        longitude: 174.80755028248063,
        latitude: -41.24601720172397,
        price: "$240.00",
        description: "The spacious homestay with a balcony and sea views has 1 bedroom, a living room, a flat-screen TV, an equipped kitchen with a dishwasher and an oven, and 1 bathroom with a shower. Towels and bed linen are offered in the homestay. The accommodation is non-smoking.",
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
        description: "Davidsons Luxury Homestay is situated in the heart of Lower Hutt, 7 minutes' walk from Waterloo Train Station, with direct link to Westpac Stadium. The property is 20 minutes' north of Wellington CBD.",
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
        description: "Set in Lower Hutt, the recently renovated Seaglass Cottage features accommodation 21 km from Westpac Stadium and 21 km from Beehive Parliament Building. This guest house provides accommodation with a patio. The property is non-smoking and is situated 21 km from Wellington Cable Car.",
        images: ["images/houses/cottage-house.webp", "images/houses/cottage-house(2).webp", "images/houses/cottage-house(3).webp"],
        minStay: 2,
        maxStay: 15,
        minPeople: 1,
        maxPeople: 4,
        family: "Yes",
    },

];


$(document).ready(function () {

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


    /** modals instead of page */

    let mySwiper;

    // Modal Functions
    function openModal(content) {
        $('#accModal .modal-body').html(content);
        $('#accModal').fadeIn();
        $('body').addClass('no-scroll'); // Prevent background scrolling

        if (!mySwiper) {
            // Initialize Swiper inside modal
            mySwiper = new Swiper('.modal-images', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

        } else {
            mySwiper.update();
        }

    }

    function closeModal() {
        $('#accModal').fadeOut();
        $('body').removeClass('no-scroll'); // Allow background scrolling
    }

    $(document).on('click', '.accommodation-image', function () {
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
            <p> <i class="fa-solid fa-people-group"></i> ${accommodation.minPeople} - ${accommodation.maxPeople}  | <i class="fa-solid fa-bed"></i> ${accommodation.minStay} - ${accommodation.maxStay}</p>

            <div class="meal-selection"><h4> Provided Meal Options: </h4>
            <div class="checkboxes"> <input type="checkbox" name="" id=""> <label> Breakfast $30 </label> <input type="checkbox" name="" id=""> <label> Lunch $32 </label>  <input type="checkbox" name="" id=""> <label> Dinner $55 </label> </div> </div>
            <p id="noteMessage"> Please Note: All provided meals are buffet meals held in the dining area. Each with an additional price.
Selected meals will be for each night booked. </p>
            </div>

            <div class="right-side">  
            <h3>${accommodation.price}</h3>
                <div id="map">for mpabox</div>
                <button id="bookBtn"> Book Now </button>
            </div>
        </div>
        </div>
    `;
        openModal(modalContent);
        console.log('click works');
    });
    // for the icons beside the building types, could create the icon objects inside of each accommodation array-- that can be left til later


    // Modal Close Button
    $(document).on('click', '.close', closeModal);
    $(window).on('click', function (event) {
        if ($(event.target).is('#accModal')) {
            closeModal();
        }
    });

    /** filtering */

    $('#location, #type, #family').change(filterAccommodations);
    $("#price-low-to-high-btn").click(sortAccLowToHigh);
    $("#price-high-to-low-btn").click(sortAccHighToLow);


    // filtering functions
    function filterAccommodations() {
        const selectedLocation = $("#location").val();
        const selectedType = $("#type").val();
        const selectedFamily = $("#family").val();

        const filteredAccommodations = accommodations.filter(accommodation => {
            return (!selectedLocation || accommodation.location === selectedLocation) &&
                (!selectedType || accommodation.type === selectedType) &&
                (!selectedFamily || accommodation.family === selectedFamily);
        });

        generateAccCards(filteredAccommodations);
    }

    // sorting functions
    function sortAccLowToHigh() {
        const sortedAccommodation = accommodations.slice().sort((a, b) => {
            return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        });
        generateAccCards(sortedAccommodation);
    }

    function sortAccHighToLow() {
        const sortedAccommodation = accommodations.slice().sort((a, b) => {
            return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
        });

        generateAccCards(sortedAccommodation);
    }

    // dynamic creation of cards

    function allAccommodations(accommodations) {
        return `
            <div class="accommodation-card" data-id="${accommodations.id}">
                <div class="swiper-container">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"> <img src="${accommodations.images[0]}" alt=${accommodations.name}" class="accommodation-image"> </div>
                            <div class="swiper-slide"> <img src="${accommodations.images[1]}" alt=${accommodations.name}" class="accommodation-image"> </div>
                            <div class="swiper-slide"> <img src="${accommodations.images[2]}" alt=${accommodations.name}" class="accommodation-image"> </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>

                <div class="accommodation-details">
                    <h3> ${accommodations.name} </h3>
                    <h4> ${accommodations.type} | ${accommodations.location} </h4>
                    <p> ${accommodations.description} </p>
                    <p> ${accommodations.minPeople} - ${accommodations.maxPeople} </p>
                    <p> ${accommodations.minStay} - ${accommodations.maxStay} </p>
                    <p> ${accommodations.family} </p>
                

                <div class="other-details">
                    <h4> ${accommodations.price} </h4>
                    <button id="read-more> Read More </button>
                </div>
            </div>
        </div>
        `;
    }

    function generateAccCards(accommodations) {
        const container = $("#results");
        container.empty(); // clears previous content
        accommodations.forEach(accommodations => {
            const cardHTML = allAccommodations(accommodations);
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

    // call out the function
    generateAccCards(accommodations);


    // ABOVE IS ME TRYNA REDO THE CODE //


    // end of jquery doc
});