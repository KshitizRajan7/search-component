// data/mockHotels.js
export const mockHotels = [
  {
    id: 1,
    slug: "hotel-peaceful-stay-kathmandu",
    name: "Hotel Peaceful Stay",
    city: "Kathmandu",
    area: "Thamel",
    price_per_night: 1200,
    description:
      "Simple, clean rooms in central Thamel, perfect for budget travelers.",
    amenities: ["Free WiFi", "Hot shower", "Attached bathroom", "24/7 reception"],
    photos: ["/images/hotel1-1.jpg", "/images/hotel1-2.jpg"],
    phone: "+977-9800000000",
    whatsapp_number: "+977-9800000000",
    is_verified: true,
  },
  {
    id: 2,
    slug: "budget-inn-pokhara",
    name: "Budget Inn Pokhara",
    city: "Pokhara",
    area: "Lakeside",
    price_per_night: 1400,
    description: "Lake-side budget stay with clean rooms and hot water.",
    amenities: ["Free WiFi", "Lake view (some rooms)", "Hot shower"],
    photos: ["/images/hotel2-1.jpg"],
    phone: "+977-9801111111",
    whatsapp_number: "+977-9801111111",
    is_verified: false,
  },
];
