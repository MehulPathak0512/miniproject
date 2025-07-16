const cards = [
 {
   image: 'images/apparel.jpg',
   title: 'Apparel & Accessories',
   description: 'Discover clothing and accessories for every style and season.',
   button: 'Browse Styles',
   modifier: 'card__button--primary'
 },
 {
   image: 'images/electronics.jpg',
   title: 'Latest Tech Picks',
   description: 'Shop phones, wearables, and smart devices built to impress.',
   button: 'Shop Now',
   modifier: 'card__button--secondary'
 },
 {
   image: 'images/home_ess.jpg',
   title: 'Home Essentials',
   description: 'Upgrade your space with quality furnishings and décor items.',
   button: 'Explore Decor',
   modifier: 'card__button--primary'
 },
 {
   image: 'images/resized2.jpg',
   title: 'Skincare & Makeup',
   description: 'Find everyday skincare favorites from trusted global brands.',
   button: 'Treat Yourself',
   modifier: 'card__button--secondary'
 },
 {
   image: 'images/toys.jpg',
   title: 'Fun & Toys',
   description: 'Fun, safe products designed to spark imagination and joy.',
   button: 'Discover More',
   modifier: 'card__button--primary'
 },
 {
   image: 'images/groceries_img.avif',
   title: 'Daily Groceries',
   description: 'Pantry staples, snacks, and home must-haves delivered fresh.',
   button: 'Stock Up',
   modifier: 'card__button--secondary'
 }
];
const container = document.getElementById('cardGrid');

cards.forEach(card => {
 container.innerHTML += `
<div class="card card--primary">
<img src="${card.image}" alt="${card.title}" class="card__image" />
<h2 class="card__title">${card.title}</h2>
<p class="card__description">${card.description}</p>
<button class="card__button ${card.modifier}">${card.button}</button>
</div>
 `;
});