"use client"

import { useEffect } from "react"
import { Chart } from "chart.js/auto"

const MarketSlide = () => {
  useEffect(() => {
    let marketChart: Chart | null = null

    const initChart = () => {
      const ctx = document.getElementById("marketChart") as HTMLCanvasElement
      if (ctx) {
        // Destroy existing chart if it exists
        if (marketChart) {
          marketChart.destroy()
        }

        marketChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["2023", "2024", "2025", "2026", "2027", "2028", "2030"],
            datasets: [
              {
                label: "Giá trị thị trường (tỷ USD)",
                data: [4.21, 4.41, 4.62, 4.84, 5.07, 5.31, 6.0],
                fill: true,
                backgroundColor: "rgba(2, 132, 199, 0.2)",
                borderColor: "rgba(2, 132, 199, 1)",
                borderWidth: 3,
                tension: 0.3,
                pointBackgroundColor: "rgba(2, 132, 199, 1)",
                pointRadius: 5,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                beginAtZero: false,
                grid: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.05)",
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
          },
        })
      }
    }

    // Initialize chart when component mounts
    initChart()

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (marketChart) {
        marketChart.destroy()
      }
    }
  }, [])

  return (
    <div className="slide relative flex h-full flex-col p-12">
      {/* Background Elements */}
      <div
        className="circle-pattern bg-blue-200"
        style={{ width: "400px", height: "400px", top: "-150px", right: "-100px" }}
      ></div>
      <div
        className="circle-pattern bg-blue-300"
        style={{ width: "300px", height: "300px", bottom: "-100px", left: "-100px" }}
      ></div>

      <div className="z-10 flex flex-col w-full">
        {/* Header */}
        <h1 className="title text-5xl mb-2">Thị Trường Nha Khoa Việt Nam</h1>
        <div className="w-1/3 gradient-border mb-8"></div>

        {/* Main Content */}
        <div className="flex flex-row gap-8 mb-6">
          {/* Left Column - Statistics */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-4">
              <div className="stat-card p-6 w-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-blue-600 text-xl">Quy mô thị trường</h3>
                  <i className="fas fa-chart-line text-blue-500 text-2xl"></i>
                </div>
                <p className="text-4xl! font-bold text-gray-800 mb-1">4.21 tỷ USD</p>
                <p className="text-sm text-gray-500">Giá trị thị trường nha khoa năm 2023</p>
              </div>

              <div className="stat-card p-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-blue-600">Tăng trưởng</h3>
                  <i className="fas fa-arrow-trend-up text-green-500 text-xl"></i>
                </div>
                <p className="text-3xl! font-bold text-gray-800">4.75%</p>
                <p className="text-sm text-gray-500">CAGR trong 5 năm tới</p>
              </div>

              <div className="stat-card p-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-blue-600">Kỳ vọng</h3>
                  <i className="fas fa-bullseye text-red-500 text-xl"></i>
                </div>
                <p className="text-3xl! font-bold text-gray-800">2.5 tỷ USD</p>
                <p className="text-sm text-gray-500">Dự báo đạt vào năm 2030</p>
              </div>
            </div>
          </div>

          {/* Right Column - Chart */}
          <div className="flex-1">
            <div className="stat-card p-6 h-full">
              <h3 className="font-bold text-blue-600 mb-4">Xu hướng tăng trưởng</h3>
              <div className="chart-container">
                <canvas id="marketChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="flex gap-6 mb-6">
          <div className="stat-card p-6 flex-1">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <i className="fas fa-users text-blue-500 text-2xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-blue-600 mb-1">Nhu cầu thị trường</h3>
                <p className="text-3xl! font-bold text-gray-800">80%</p>
                <p className="text-sm text-gray-500">Dân số cần dịch vụ nha khoa</p>
              </div>
            </div>
          </div>

          <div className="stat-card p-6 flex-1">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <i className="fas fa-tooth text-orange-500 text-2xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-orange-600 mb-1">Sử dụng dịch vụ</h3>
                <p className="text-3xl! font-bold text-gray-800">20%</p>
                <p className="text-sm text-gray-500">Dân số tiếp cận dịch vụ</p>
              </div>
            </div>
          </div>

          <div className="stat-card p-6 flex-1">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-4 rounded-full">
                <i className="fas fa-percentage text-green-500 text-2xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-green-600 mb-1">Tăng trưởng hàng năm</h3>
                <p className="text-3xl! font-bold text-gray-800">10-15%</p>
                <p className="text-sm text-gray-500">Dự báo đến năm 2030</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end mt-5">
        <div className="text-gray-400 text-sm">© Cubable Dental Solutions</div>
      </div>
    </div>
  )
}

export default MarketSlide
