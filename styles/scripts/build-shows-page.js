import {BandSiteApi} from "./band-site-api.js";
let api = new BandSiteApi("my super awesome secure key");

const formatDate = (unixTime) =>{
    const date = new Date(unixTime);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayOfWeek = date.toLocaleString('en-us', { weekday: 'short' });
    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${dayOfWeek} ${month} ${day} ${year}`;
}

const fetchShows = (data) =>{
    data.data.forEach(show => {
        const time = formatDate(show.date);
        const place = show.place;
        const location = show.location;
        renderShow(time, place, location);
    });
}


(async () => {
    fetchShows(await api.getShows());
})();


function renderShow(date, venue, location){
   let showsList = document.getElementById("shows__list");

    let showsListing = document.createElement('div');
    showsListing.classList.add("shows__listing");

    let dateLabel = document.createElement('p');
    dateLabel.classList.add("shows__meta-name");

    let dateContent = document.createElement('p');
    dateContent.classList.add("shows__meta-date");
    dateContent.textContent = date;

    let venueLabel = document.createElement('p');
    venueLabel.classList.add("shows__meta-name");

    let venueContent = document.createElement('p'); //ronald lane, view lounge, etc.
    venueContent.textContent = venue;

    let locationContent = document.createElement('p');
    locationContent.classList.add("shows__meta-location");
    locationContent.textContent = location;

    let buyButton = document.createElement('button');
    buyButton.textContent = "Buy Tickets"
    buyButton.type = "button";

    let divider = document.createElement('hr');
    divider.classList.add("shows__divider");

    showsListing.appendChild(dateLabel);
    showsListing.appendChild(dateContent);
    showsListing.appendChild(venueLabel);
    showsListing.appendChild(venueContent);
    showsListing.appendChild(locationContent);
    showsListing.appendChild(buyButton);

    showsList.appendChild(showsListing);
    showsList.appendChild(divider);

}

