//https://samthor.au/2022/event-driven-js/
//  EventTarget object, Event, CustomEvent

// subclass Event or instantiate CustomEvent

let body = document.querySelector('body')
let btn = document.getElementById('btn')
const detail = "From CustomEvent";  // literally anything can go here
const e = new Event('my_event'); e.detail = "From Event"
// CustomEvent hérite de Event
const ce = new CustomEvent('something_done', { detail });


setTimeout(() => {
    this.dispatchEvent(ce);
    this.dispatchEvent(e);
}, 1000);



this.addEventListener('something_done', (e) => {
    console.info(e.detail);
})

this.addEventListener('my_event', (e) => {
    console.info(e.detail);
})

// EventTarget, tout arbitrairement devient écouteur d'événement
// bizarrement l'émetteur est aussi le listener
const target = new EventTarget();
const targetEvent = new Event('target_listener')
target.addEventListener('target_listener', (e) => {
    console.log('event target')
});


setTimeout(() => {
    target.dispatchEvent(targetEvent);
}, 1500);