"use client"

import { useEffect } from "react"
import { Chart } from "chart.js/auto"

const ZaloPotentialSlide = () => {
  useEffect(() => {
    let zaloUserChart: Chart | null = null
    let dentalMarketChart: Chart | null = null

    const initCharts = () => {
      // Zalo User Chart
      const zaloCtx = document.getElementById("zaloUserChart") as HTMLCanvasElement
      if (zaloCtx) {
        if (zaloUserChart) zaloUserChart.destroy()

        zaloUserChart = new Chart(zaloCtx, {
          type: "doughnut",
          data: {
            labels: [
              "Thành thị",
              "Nông thôn",
              "Người dùng trẻ (18-35)",
              "Người dùng trung niên (36-55)",
              "Người dùng cao tuổi (>55)",
            ],
            datasets: [
              {
                data: [65, 35, 55, 35, 10],
                backgroundColor: ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#dbeafe"],
                borderWidth: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "right",
                labels: {
                  boxWidth: 15,
                  padding: 15,
                },
              },
            },
          },
        })
      }

      // Dental Market Chart
      const dentalCtx = document.getElementById("dentalMarketChart") as HTMLCanvasElement
      if (dentalCtx) {
        if (dentalMarketChart) dentalMarketChart.destroy()

        dentalMarketChart = new Chart(dentalCtx, {
          type: "bar",
          data: {
            labels: [
              "Tìm kiếm dịch vụ nha khoa",
              "Đặt lịch online",
              "Xem kết quả chụp X-quang",
              "Theo dõi điều trị",
              "Thanh toán điện tử",
            ],
            datasets: [
              {
                label: "Tỷ lệ người dùng quan tâm",
                data: [80, 65, 45, 55, 40],
                backgroundColor: "rgba(14, 165, 233, 0.6)",
                borderColor: "rgb(14, 165, 233)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                title: {
                  display: true,
                  text: "%",
                },
              },
            },
          },
        })
      }
    }

    // Initialize charts when component mounts
    initCharts()

    // Cleanup function to destroy charts when component unmounts
    return () => {
      if (zaloUserChart) zaloUserChart.destroy()
      if (dentalMarketChart) dentalMarketChart.destroy()
    }
  }, [])

  return (
    <div className="slide flex flex-col p-12">
      {/* Background Elements */}
      <div
        className="circle-pattern bg-blue-300"
        style={{ width: "450px", height: "450px", top: "-200px", right: "-150px" }}
      ></div>
      <div
        className="circle-pattern bg-blue-200"
        style={{ width: "350px", height: "350px", bottom: "-150px", left: "-150px" }}
      ></div>

      <div className="z-10 flex flex-col w-full">
        {/* Header */}
        <h1 className="title text-5xl mb-2">Zalo & Zalo Mini App: Tiềm Năng Tiếp Cận</h1>
        <div className="w-1/3 gradient-border mb-8"></div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Left Column - Zalo Statistics */}
          <div className="w-1/2">
            <div className="stat-card p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <i className="fab fa-facebook-messenger text-blue-600 mr-3"></i>
                Zalo - Nền tảng số 1 Việt Nam
              </h2>

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="w-1/2">
                    <div className="stat-value text-blue-600">77.6M</div>
                    <div className="text-gray-600 font-semibold">Người dùng hoạt động hàng tháng</div>
                    <div className="citation">Nguồn: VNG, 09/2024</div>
                  </div>
                  <div className="w-1/2">
                    <div className="stat-value text-blue-600">75%</div>
                    <div className="text-gray-600 font-semibold">Dân số Việt Nam</div>
                    <div className="citation">Nguồn: Báo Người Đô Thị, 08/2023</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-1/2">
                    <div className="stat-value text-blue-600">2 tỷ</div>
                    <div className="text-gray-600 font-semibold">Tin nhắn gửi đi mỗi ngày</div>
                    <div className="citation">Nguồn: Báo Mới, 04/2025</div>
                  </div>
                  <div className="w-1/2">
                    <div className="stat-value text-blue-600">85%</div>
                    <div className="text-gray-600 font-semibold">Tỷ lệ thâm nhập thị trường</div>
                    <div className="citation">Nguồn: Báo Nhân Dân, 11/2024</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="stat-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">Phân bổ người dùng Zalo</h3>
                <div className="text-sm text-gray-500">Nguồn: Báo cáo năm 2024</div>
              </div>
              <div style={{ height: "220px" }}>
                <canvas id="zaloUserChart"></canvas>
              </div>
            </div>
          </div>

          {/* Right Column - Mini App Success Stories */}
          <div className="w-1/2">
            <div className="stat-card p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <i className="fas fa-mobile-alt text-blue-600 mr-3"></i>
                Tiềm năng Zalo Mini App
              </h2>
              <p className="text-gray-600 mb-4">
                Mini App là các ứng dụng nhẹ (dưới 10MB) chạy trong Zalo, không cần cài đặt thêm, giúp tiếp cận ngay 77+
                triệu người dùng.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-gray-800 mb-2">Thành công của Mini App trong các lĩnh vực:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-bus text-blue-500 mr-2"></i>
                    <span>
                      <b>GoBus TPHCM</b>: 245,000 người dùng chỉ sau 40 ngày
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-building text-blue-500 mr-2"></i>
                    <span>
                      <b>Đồng Nai Smart</b>: 200,000 người dùng sau 2 tháng
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-cloud-sun-rain text-blue-500 mr-2"></i>
                    <span>
                      <b>Phòng chống thiên tai</b>: 630,000 người dùng sau 1 năm
                    </span>
                  </li>
                </ul>
                <div className="citation mt-2">Nguồn: Báo tin tức, 08/2024</div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Tại sao Mini App hiệu quả cho ngành nha khoa?</h4>
                <ul className="space-y-1 pl-6 list-disc">
                  <li>Tiếp cận khách hàng trên nền tảng họ đã dùng hàng ngày</li>
                  <li>Không tốn chi phí cài đặt và vận hành ứng dụng riêng</li>
                  <li>Tích hợp hệ sinh thái Zalo (chat, thông báo, thanh toán)</li>
                  <li>Tăng sự tiện lợi và giảm rào cản công nghệ với người dùng</li>
                </ul>
              </div>
            </div>

            <div className="stat-card p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tiềm năng thị trường nha khoa trên Zalo</h3>
              <div style={{ height: "220px" }}>
                <canvas id="dentalMarketChart"></canvas>
              </div>
              <div className="citation text-right mt-2">
                Dữ liệu ước tính dựa trên thị trường nha khoa và tỷ lệ người dùng Zalo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Logo */}
      <div className="absolute bottom-6 left-8 flex items-center">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full flex items-center justify-center zalo-gradient mr-2">
            <span className="text-white font-bold">Z</span>
          </div>
          <span className="text-blue-600 font-bold">Zalo Mini App</span>
        </div>
      </div>

      <div className="flex items-center justify-end mt-5">
        <div className="text-gray-400 text-sm">© 2025 Dental Solutions</div>
      </div>
    </div>
  )
}

export default ZaloPotentialSlide
