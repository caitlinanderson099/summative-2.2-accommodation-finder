/* jshint esversion: 6 */

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
        family: true,
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
        images: ["images/hotels/doubletree-hotel.webp", "images/hotels/doubletree-hotel(2).webp", "images/hotels/doubletree-hotel(3).webp"]
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
        images: ["images/hotels/rydges-hotel.webp", "images/hotels/rydges-hotel(2).webp", "images/hotels/rydges-hotel(3).webp"]
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
        family: true,
        images: ["images/hotels/microtel-hotel.webp", "images/hotels/microtel-hotel(2).webp", "images/hotels/microtel-hotel(3).webp"]
    },
    {
        id: 5,
        name: "Travelodge Hotel Wellington",
        address: "2-6 Gilmer Terrace, Wellington 6011",
        location: "Wellington CBD",
        type: "Hotel",
        longitude:  174.7750440125198,
        latitude: -41.28563502238838,
        price: "$157.00",
        description: "Just 13 minutes walk from the iconic Te Papa Museum in the heart of Wellington, Travelodge offers rooms with flat-screen cable TV. It features a fitness centre. Free WiFi is available.",
        minStay: 1,
        maxStay: 5,
        minPeople: 1,
        maxPeople: 2,
        images: ["images/hotels/travelodge-hotel.webp", "images/hotels/travelodge-hotel(2).webp", "images/hotels/travelodge-hotel(3).webp"]
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
        family: true,
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
        family: true,
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
        images: ["images/hostels/nomads-hostel.webp", "images/hostels/nomads-hostel(2).webp", "images/hostels/nomads-hostel(3).webp"],
        minStay: 1,
        maxStay: 10,
        minPeople: 1,
        maxPeople: 1,
        family: true,
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
        family: true,
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
        family: true,
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
        images: ["images/houses/davidsons-house.webp", "images/houses/davidsons-house(2).webp", "images/houses/davidsons-house(3).webp"],
        minStay: 2,
        maxStay: 15,
        minPeople: 1,
        maxPeople: 4,
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
        family: true,
    },
  
  ];

$(document).ready(function() {
    
    //  Full Page Init:
    new fullpage('#fullpage', {
        licenseKey: 'gplv3-license', // this is the Open Source free license
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        controlArrows: false,
    });

    //  To prevent scroll of sections and slides:
    /** fullpage_api.setAllowScrolling(false); **/

     // Mapbox Init:
     mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

     function initaliseMap(longitude, latitude) {
         const map = new mapboxgl.Map({
             container: 'map',
             style: 'mapbox://styles/mapbox/streets-v11',
             center: [longitude, latitude],
             zoom: 13
         });
     }

    // Swiper Init:
    let swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

     
    // Function to move to the specified section
    function moveToSection(number) {
        fullpage_api.moveTo(number); // allows you to move sections or "jump"
    }

    /** MOVING ARROW CLICK */
     $(".fa-circle-chevron-down").click(function() {
        console.log('worked');
        moveToSection(2);
     });

     /** POPULATE LOCATION OPTIONS */
     function populateLocationOptions() {
        const locations = Array.from(new Set(accommodations.map(accommodation => accommodation.location)));
        locations.sort();
        const locationSelect = $("#location");
        locationSelect.empty();
        locationSelect.append(`<option value="any"> Any </option>`);
        locations.forEach (location => {
            locationSelect.append(`<option value="${location}"> ${location} </option>`);
        });
     }

     function populateTypeOptions() {
        const types = Array.from(new Set(accommodations.map(accommodation => accommodation.type)));
        types.sort();
        const typeSelect = $("#type");
        typeSelect.empty();
        typeSelect.append(`<option value="any"> Any </option>`);
        types.forEach (type => {
            typeSelect.append(`<option value="${type}"> ${type} </option>`);
        });
    }

     populateLocationOptions();
     populateTypeOptions();

     function validateFilters() {
        let isValid = true;
        let errorMessage = "";

        if($("#location").val() === "") {
            isValid = false;
            errorMessage += "Please Select A Location. <br>";
        }
        if ($("#type").val() === "") {
            isValid = false;
            errorMessage += "Please Select A Building Type. <br>";
        }
        if ($("#startDate").val() === "") {
            isValid = false;
            errorMessage += "Please Select A Start Date. <br>";
        }
        if($("#endDate").val() === "") {
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

    $("#findBtn").click(function (e) {
        e.preventDefault();
        if (validateFilters()) {
            fullpage_api.moveTo(2, 0);
            filterAndDisplayProperties();
        }
    });

    function filterAndDisplayProperties() {
        const location = $("#location").val();
        const type = $("#type").val();
        const diffDays = calculateDays();
        console.log(diffDays);

        // run filters over accommodations array
        const filteredAccommodations = accommodations.filter(accommodation => {
            return (location === 'any' || accommodation.location === location) &&
            (accommodation.type >= type) &&
            (accommodation.minStay <= diffDays) &&
            (accommodation.maxStay >= diffDays);
        });

        console.log(filteredAccommodations);

        displayAccommodations(filteredAccommodations);
    }

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

    function displayAccommodations(accommodations) {
        const accommodationsPerPageSmall = 1;
        const accommodationsPerPageMedium = 2;
        const accommodationsPerPageLarge = 3;

        function getAccommodationsPerPage() {
            if (window.matchMedia('(max-width: 600px)').matches) {
                return accommodationsPerPageSmall;
            } else if (window.matchMedia('(max-width: 1024px)').matches) {
                return accommodationsPerPageMedium;
            } else {
                return accommodationsPerPageLarge;
            }
        }

        let accommodationsPerPage = getAccommodationsPerPage();

        const swiperWrapper = $(".swiper-wrapper");
        // empty the swiper
        swiperWrapper.empty();

        // for loop
        for (let i = 0; i < accommodations.length; i += accommodationsPerPage) {
            const slide = $(`<div class="swiper-slide"></div>`); // this is each slide

            // nother for loop hehe
            for (let j = i; j < i + accommodationsPerPage && j < accommodations.length; j++) {
                const accommodation = accommodations[j];
                const accommodationElement = `
                    <div class="accommodation">
                        <img src=" ${accommodation.images}" alt="${accommodation.name}">
                        <div class="accommodation-details">
                            <h3> ${accommodation.name} </h3>
                            <p> ${accommodation.location} </p>
                            <p> ${accommodation.type} </p>
                            <p><i class="fa-solid fa-bed"></i> ${accommodation.minStay} - ${accommodation.maxStay}</p>
                            <button class="read-more" data-id="${accommodation.id}"> Read More </button>
                        </div>
                        </div>
                    </div>
                `;

                slide.append(accommodationElement);
            }
            swiperWrapper.append(slide);
        }

        // gotta destroy the swiper lol
        swiper.destroy(true, true);
        // initialise the new one
        swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            pagination: {
                el: 'swiper.pagination',
                clickable: true,
            },
        });

        // rebuild our fullpage to see the new slides
        fullpage_api.reBuild();

        $(".read-more").click(function() {
            console.log('working');
            const accommodationId = $(this).data('id');
            console.log(accommodationId);
            populateSelectedOutput(accommodationId);
            fullpage_api.moveTo(1, 2);
        });
    }

    // many functions later...

    function populateSelectedOutput(selectedId) {
        const outputSlide = $("#selectedOutputSlide");

        const slideOutputHtml = `
            <div class="output-wrapper">
                <div class="output-image"> <img src=" ${accommodations[selectedId -1].images}" alt="${accommodations.name}"> </div>
                <div class="output-details">
                    <h3> ${accommodations[selectedId -1].name}</h3>
                    <p> ${accommodations[selectedId-1].type} </p> 
                    <p> ${accommodations[selectedId-1].location} </p> 
                    <p> ${accommodations[selectedId-1].description} </p> 
                    <div id="map"></div>
                </div>
            </div>
        `;

        const longitude = accommodations[selectedId -1].longitude;
        const latitude = accommodations[selectedId -1].latitude;

        outputSlide.empty();
        outputSlide.append(slideOutputHtml);
        initaliseMap(longitude, latitude);
    }













// end of jquery doc
});