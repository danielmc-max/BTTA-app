import React from 'react';

const Calendar = () => {
    return (
        <div className="calendar" id="Calendar">
            <iframe className="map" title="practice-location-map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCjG0oN483ZxITLOtkL1q7bIOzFc0f1FxI&q=Belgrave+South+Community+House" width={640} height={400}/>
            <iframe className="google-calendar" title="practice-event-calendar" src="https://calendar.google.com/calendar/embed?src=03dfb643b9869aa8e2cf88fe4736e832705a0fc69d35ea30e27f25a964ac3fa5%40group.calendar.google.com&ctz=Australia%2FHobart" width={640} height={550} frameBorder={0}/>
        </div>
    );
};

export default Calendar;