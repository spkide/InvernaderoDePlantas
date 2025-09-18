// Datos de ejemplo para mostrar la gráfica
const data = [
  { year: '2020', count: 10 },
  { year: '2021', count: 15 },
  { year: '2022', count: 7 },
  { year: '2023', count: 12 },
  { year: '2024', count: 20 }
];

new Chart(
  document.getElementById('acquisitions'),
  {
    type: 'bar',
    options: {
      animation: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true
        }
      }
    },
    data: {
      labels: data.map(row => row.year),
      datasets: [
        {
          label: 'Adquisiciones por año',
          data: data.map(row => row.count),
          backgroundColor: 'rgba(54, 162, 235, 0.5)'
        }
      ]
    }
  }
);
