// Foursquare API Info
const clientId = '2ZAOKXUX3CWE5KF23NKSMIVOOV4RAFEF4PEVHMOYNT2MMA2Q';
const clientSecret = 'R4YVPADTKZGKRQZKQ0WIO25FND4S1EL25UL0CCIXF2JOLMK1';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = 'e5c3ac12682bd33e108ccc82246f34ad';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
const city = $input.val();
const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180101`;


  try{

    const response = await fetch(urlToFetch);

    if(response.ok){

     
     const jsonResponse= await response.json();
     const venues = jsonResponse.response.groups[0].items.map(item=>item.venue);
      console.log(venues);

     return venues;
    }

 
  }catch(error){
    console.log(error);
  }



}

const getForecast = async () => {

  try{

  }catch(error){

    console.log(error);
  }


}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = '';
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)