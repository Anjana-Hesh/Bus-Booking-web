# 🚌 Bus Booking Web Application

A modern, fully-functional bus ticket booking platform built with **React** and **Tailwind CSS**. Experience seamless bus bookings with an intuitive interface and complete ticket management system.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8.svg)
![Status](https://img.shields.io/badge/status-completed-success.svg)

![Top of Home Page](/screenshots/image-1.png)
![Bottom of Home Page](/screenshots/image-2.png)
![Ticket Page](/screenshots/image-3.png)
![Top of Reserve Ticket Page](/screenshots/image-4.png)
![Bottom of Reserve Ticket Page](/screenshots/image-5.png)
![Checkout Page](/screenshots/image-6.png)
![The Ticket with QR](/screenshots/image-6.png)


---

## ✨ Features Implemented

### 🔍 Bus Search & Filtering
- **Smart Search Interface** - Search buses by source city, destination, and travel date
- **Advanced Filters** - Filter by bus type (AC/Non-AC/Sleeper), price range, departure time
- **Real-time Results** - Instant search results with dummy data
- **Sort Options** - Sort by price, duration, departure time, or rating
- **Multiple Routes** - Browse various routes with detailed bus information

### 🎫 Seat Selection System
- **Interactive Seat Layout** - Visual seat map with real-time availability
- **Seat Types** - Different seat categories (Seater, Sleeper, Premium)
- **Gender-based Booking** - Male/Female/Reserved seat indicators
- **Live Availability** - Real-time seat status updates
- **Multi-seat Selection** - Book multiple seats in one transaction
- **Seat Pricing** - Dynamic pricing based on seat type and position

### 💳 Booking & Payment
- **Passenger Details Form** - Collect passenger information securely
- **Multiple Payment Options** - Credit/Debit cards, UPI, Wallets (UI implemented)
- **Booking Summary** - Detailed fare breakdown and journey details
- **Payment Confirmation** - Instant booking confirmation page
- **Transaction ID Generation** - Unique booking reference numbers

### 🎟️ Ticket Generation & Management
- **Digital Ticket** - Professional e-ticket with all journey details
- **QR Code Integration** - Scannable QR code for easy verification
- **Download/Print Options** - Save or print tickets directly
- **Booking History** - View all past and upcoming bookings
- **Ticket Details Display**:
  - Passenger name and contact info
  - Bus details (name, number, type)
  - Journey information (source, destination, date, time)
  - Seat numbers and fare breakdown
  - Booking ID and PNR number
  - Boarding and dropping points

### 📱 User Interface
- **Responsive Navbar** - Mobile-friendly navigation with burger menu
- **Home Page** - Attractive landing page with search widget
- **Bus Listing Page** - Grid/List view of available buses
- **Seat Selection Page** - Interactive seat map interface
- **Booking Confirmation** - Success page with ticket preview
- **My Bookings Page** - Personal booking dashboard
- **Responsive Design** - Optimized for mobile, tablet, and desktop

### 🎨 User Experience
- **Modern UI/UX** - Clean, intuitive design with smooth animations
- **Loading States** - Elegant loading indicators
- **Error Handling** - User-friendly error messages
- **Form Validation** - Client-side validation for all forms
- **Toast Notifications** - Success/error notifications
- **Smooth Transitions** - Page transitions and animations

---

## 🗂️ Components Structure

```
src/
|__ assets /
├── components/
│   ├── allertMessage/
│   │   └──WarningAlert
|   |   |__ error / ErrorMessage.jsx
│   ├── footer/
│   │   └── Footer.jsx
│   ├── navbar/
│   │   ├── Navbar.jsx
│   ├── payment/
│   │   ├── PaymentCard.jsx
│   ├── priceRange/
│   │   ├── PriceRangeSlider.jsx
│   ├── service/
│   │   ├── ServiceCard.jsx
│   ├── ticket/
│   │   ├── TicketCard.jsx
│   └── tigglebutton/
│   |   ├── ToggleButton.jsx
|   |__ topSearch
|   |    |__ TopSearchCard.jsx
|___ constant
|   |__ busseat
|      |__ BusSeatData.js
|__ layouts
|  |__ topPage
|  |  |__ TopLayout.jsx
|  |__ RootLayout.jsx
├── pages/
|  |__ about
|  |  |__ About.jsx
|  |__ home
|  |  |__ hero
|  |  |  |__ search
|  |  |  |  |__ Search.jsx
|  |  |  |__Hero.jsx
|  |  |__ services
|  |  |  |__ Services.jsx
|  |  |__ topSearch
|  |  |  |__ TopSearch.jsx
|  |  |__ Home.jsx
|  |__ ticket
|  |  |__ checkout
|  |  |  |__ bookingstatus
|  |  |  |  |__ BookingStatus.jsx
|  |  |  |__ passangerdata
|  |  |  |  |__ payment
|  |  |  |  |  |__ PaymentMethod.jsx
|  |  |  |  |__ PassangerData.jsx
|  |  |  |__ Checkout.jsx
|  |  |__ detail
|  |  |  |__ amenities
|  |  |  |  |__ Amenities.jsx
|  |  |  |__ busimage
|  |  |  |  |__ BusImage.jsx
|  |  |  |__ reservationpolicy
|  |  |  |  |__ ReservationPolicy.jsx
|  |  |  |__ seat
|  |  |  |  |__ busseat
|  |  |  |  |  |__ BusSeat.jsx
|  |  |  |__ Deatail.jsx
|  |  |__ filter
|  |  |  |__ Filter.jsx
|  |  |__ invoice
|  |  |  |__ company
|  |  |  |  |__ CompanyInvoice.jsx
|  |  |  |__ passangerinvoice
|  |  |  |  |__ PassangerInvoice.jsx
|  |  |  |__ Invoice.jsx
|  |  |__ searchResult
|  |  |  |__ SearchResult.jsx
|  |  |__ Ticket.jsx
├── App.jsx
└── index.js
```

---

## 📊 Dummy Data Structure

### Bus Data
```javascript
{
  id: 1,
  busName: "Royal Express",
  busNumber: "KA-01-1234",
  busType: "AC Sleeper",
  rating: 4.5,
  totalSeats: 40,
  availableSeats: 25,
  departureTime: "10:30 PM",
  arrivalTime: "6:30 AM",
  duration: "8h",
  fare: 1200,
  amenities: ["WiFi", "Charging Point", "Water Bottle", "Blanket"]
}
```

### Seat Data
```javascript
{ 
    id: 'B1',
    status: 'booked',
    price: 850
},
```

### Booking Data
```javascript
{
  bookingId: "BK123456789",
  pnr: "PNR987654321",
  passengerName: "John Doe",
  phone: "+91 9876543210",
  email: "john@example.com",
  busDetails: {...},
  seats: ["L1", "L2"],
  fare: 2400,
  bookingDate: "2024-10-20",
  journeyDate: "2024-10-25",
  status: "confirmed"
}
```

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React.js** | Frontend Framework | 18.x |
| **Tailwind CSS** | Styling & Design | 3.x |
| **React Router** | Page Navigation | 6.x |
| **React Icons** | Icon Library | 4.x |
| **Date Picker** | Date Selection | - |
| **Context API** | State Management | - |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Anjana-Hesh/Bus-Booking-web.git
cd Bus-Booking-web
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open browser**
```
http://localhost:3000
```

---

## 🎯 How to Use

### 1. Search for Buses
- Enter source city, destination city, and journey date
- Click "Search Buses" to view available options

### 2. Select a Bus
- Browse through bus listings
- View details like timings, amenities, and ratings
- Click "Select Seats" to proceed

### 3. Choose Seats
- View interactive seat layout
- Select desired seats (available seats shown in white/green)
- Booked seats shown in grey, gender-specific bookings indicated

### 4. Enter Passenger Details
- Fill in passenger information
- Review booking summary
- Proceed to payment

### 5. Make Payment (UI Demo)
- Choose payment method
- Complete payment process
- Receive booking confirmation

### 6. Get Your Ticket
- View digital ticket with QR code
- Download or print ticket
- Access ticket from "My Bookings" section

---

## 📱 Screenshots

*(Add screenshots of your application here)*

- Top of Home Page
- Bottom of Home Page
- Ticket Page
- Top of Reserve Ticket Page
- Bottom of Reserve Ticket Page
- Checkout Page

---

## 🎨 Design Features

- **Color Scheme**: Modern blue and white palette
- **Typography**: Clean, readable fonts
- **Icons**: Font Awesome via React Icons
- **Animations**: Smooth transitions and hover effects
- **Mobile First**: Responsive design for all screen sizes
- **Accessibility**: ARIA labels and keyboard navigation

---

## 🔜 Future Enhancements

- [ ] Backend integration with Express.js
- [ ] MongoDB database for real data
- [ ] User authentication & authorization
- [ ] Payment gateway integration
- [ ] Real-time seat booking updates
- [ ] Email/SMS notifications
- [ ] Bus operator dashboard
- [ ] Route management system
- [ ] Cancellation & refund system
- [ ] Review and rating system

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Anjana Hesh**

- GitHub: [@Anjana-Hesh](https://github.com/Anjana-Hesh)
- Email: anjanaheshan676@gmail.com

---

## 🙏 Acknowledgments

- React Icons for beautiful icons
- Tailwind CSS for amazing utility classes
- Inspiration from leading travel booking platforms
- Open source community

---

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Email: anjanaheshan676@gmail.com

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Anjana Heshan

</div>