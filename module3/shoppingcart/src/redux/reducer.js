

let initialState = [{
    id: 0,
    name: "Cant hurt me",
    img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1536184191i/41721428._UY500_SS500_.jpg",
    description: "Are you ready to successfully transform your life, push past pain, destroy fear and attain your full potential? Disclaimer: This Book is an unofficial book but written with the best of intentions. This book is a companion book to Can't Hurt Me: Master Your Mind and Defy the Odds by David Goggins",
    price: 649,
    qty: 1
},
{
    id: 1,
    name: "The subtle art of not giving a fuck",
    img:"https://n4.sdlcdn.com/imgs/j/f/u/The-Subtle-Art-of-Not-SDL335748147-1-27d3a.jpg",
    description: "Are you ready to successfully transform your life, push past pain, destroy fear and attain your full potential? Disclaimer: This Book is an unofficial book but written with the best of intentions. This book is a companion book to Can't Hurt Me: Master Your Mind and Defy the Odds by David Goggins",
    price: 249,
    qty: 1
},
{
    id: 2,
    name: "Relentless",
    img:"https://rukminim1.flixcart.com/image/416/416/kmkxbww0/regionalbooks/x/y/w/relentless-english-paperback-grover-tim-s-original-imagfg3y3gzb7shc.jpeg?q=70",
    description: "Are you ready to successfully transform your life, push past pain, destroy fear and attain your full potential? Disclaimer: This Book is an unofficial book but written with the best of intentions. This book is a companion book to Can't Hurt Me: Master Your Mind and Defy the Odds by David Goggins",
    price: 245,
    qty: 2
}]



export const cartReducer = (state = initialState, action) => {

    let cp=[];
    let id=-1;
    switch (action.type) {
        case "ADD_TO_CART":
            cp = state.map(el => el);//copying the object,We dont directly mutate the state
             id = action.payload;
            cp[id].qty = cp[id].qty + 1;
            return cp;

        case "REMOVE_FROM_CART":
            cp = state.map(el => el);
            id = action.payload;

            if (cp[id].qty > 0)  cp[id].qty = cp[id].qty - 1;
            return cp;

        default:
            return state;    

    }
}

