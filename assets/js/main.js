// Simulated API response (replace with actual API calls)
const apiData = {
  totalOrders: 125,
  totalRevenue: 3200,
  pendingOrders: 12,
  activeReservations: 7,
  orders: [
    { id: 1023, customer: "John Doe", status: "Preparing", price: 45 },
    { id: 1024, customer: "Alice Smith", status: "Completed", price: 28.5 },
    { id: 1025, customer: "Michael Lee", status: "Pending", price: 38 },
  ],
  reservations: ["Table 5 - 7:00 PM", "Table 8 - 8:30 PM"],
  salesTrends: [1200, 1500, 1800, 2000, 2500, 3100, 3200],
  topSelling: { labels: ["Burger", "Pizza", "Pasta"], data: [150, 120, 90] },
  lowStock: { labels: ["Tomatoes", "Cheese", "Chicken"], data: [5, 3, 2] },
};

// Update stats
document.getElementById("totalOrders").innerText = apiData.totalOrders;
document.getElementById("totalRevenue").innerText = apiData.totalRevenue;
document.getElementById("pendingOrders").innerText = apiData.pendingOrders;
document.getElementById("activeReservations").innerText =
  apiData.activeReservations;

// Populate recent orders table
const ordersTable = document.getElementById("ordersTable");
apiData.orders.forEach((order) => {
  let row = `<tr>
      <td>#${order.id}</td>
      <td>${order.customer}</td>
      <td>${order.status}</td>
      <td>$${order.price}</td>
  </tr>`;
  ordersTable.innerHTML += row;
});

// Populate reservations list
const reservationsList = document.getElementById("reservationsList");
apiData.reservations.forEach((reservation) => {
  let li = `<li>${reservation}</li>`;
  reservationsList.innerHTML += li;
});

// Render Sales Trends Chart
new Chart(document.getElementById("salesChart"), {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: apiData.salesTrends,
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
      },
    ],
  },
});

// Render Top Selling Items Chart
new Chart(document.getElementById("topSellingChart"), {
  type: "pie",
  data: {
    labels: apiData.topSelling.labels,
    datasets: [
      {
        data: apiData.topSelling.data,
        backgroundColor: ["red", "blue", "green"],
      },
    ],
  },
});

// Render Low Stock Items Chart
new Chart(document.getElementById("inventoryChart"), {
  type: "bar",
  data: {
    labels: apiData.lowStock.labels,
    datasets: [
      {
        label: "Low Stock Items",
        data: apiData.lowStock.data,
        backgroundColor: "orange",
      },
    ],
  },
});
