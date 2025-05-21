"use client"

import { useEffect } from "react"
import { Chart } from "chart.js/auto"

const ROISlide = () => {
  useEffect(() => {
    let beforeAfterChart: Chart | null = null
    let roiProjectionChart: Chart | null = null

    const initCharts = () => {
      // Before/After Metrics Chart
      const beforeAfterCtx = document.getElementById("beforeAfterChart") as HTMLCanvasElement
      if (beforeAfterCtx) {
        if (beforeAfterChart) beforeAfterChart.destroy()

        beforeAfterChart = new Chart(beforeAfterCtx, {
          type: "bar",
          data: {
            labels: ["Lịch hẹn đúng giờ", "Tỷ lệ khách quay lại", "Hiệu quả giao tiếp", "Hài lòng khách hàng"],
            datasets: [
              {
                label: "Trước khi áp dụng",
                data: [55, 45, 40, 60],
                backgroundColor: "rgba(203, 213, 225, 0.7)",
                borderColor: "rgb(203, 213, 225)",
                borderWidth: 1,
              },
              {
                label: "Sau khi áp dụng",
                data: [85, 75, 90, 95],
                backgroundColor: "rgba(14, 165, 233, 0.7)",
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
                ticks: {
                  callback: (value) => value + "%",
                },
              },
            },
            plugins: {
              legend: {
                position: "bottom",
              },
            },
          },
        })
      }

      // ROI Projection Chart
      const roiCtx = document.getElementById("roiProjectionChart") as HTMLCanvasElement
      if (roiCtx) {
        if (roiProjectionChart) roiProjectionChart.destroy()

        roiProjectionChart = new Chart(roiCtx, {
          type: "line",
          data: {
            labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
            datasets: [
              {
                label: "Lợi nhuận ròng (triệu VNĐ)",
                data: [-40, -20, -5, 10, 22, 35, 50, 65, 80, 95, 110, 125],
                borderColor: "rgb(34, 197, 94)",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                fill: true,
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: "rgb(34, 197, 94)",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                title: {
                  display: true,
                  text: "Lợi nhuận (triệu VNĐ)",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Tháng",
                },
              },
            },
            plugins: {
              legend: {
                position: "bottom",
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
      if (beforeAfterChart) beforeAfterChart.destroy()
      if (roiProjectionChart) roiProjectionChart.destroy()
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
        className="circle-pattern bg-cyan-200"
        style={{ width: "350px", height: "350px", bottom: "-150px", left: "-150px" }}
      ></div>

      <div className="z-10 flex flex-col w-full">
        {/* Header */}
        <h1 className="title text-5xl mb-2">Chi Phí & Lợi Nhuận (ROI)</h1>
        <div className="w-1/3 gradient-border mb-8"></div>

        {/* Main Content */}
        <div className="flex">
          {/* Left Column - ROI Analysis */}
          <div className="w-1/2 pr-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-5">Phân Tích Đầu Tư</h2>

            {/* Investment Cost Table */}
            <div className="data-card p-5 mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                <i className="fas fa-coins text-yellow-500 mr-2"></i>
                Chi phí triển khai
              </h3>

              <div className="overflow-hidden mb-4">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hạng mục
                      </th>
                      <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Chi phí
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="py-2 px-4 text-sm text-gray-700">Phát triển ứng dụng</td>
                      <td className="py-2 px-4 text-sm text-gray-700 text-right">15.000.000 ₫</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-sm text-gray-700">Tích hợp hệ thống</td>
                      <td className="py-2 px-4 text-sm text-gray-700 text-right">8.000.000 ₫</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-sm text-gray-700">Đào tạo nhân viên</td>
                      <td className="py-2 px-4 text-sm text-gray-700 text-right">5.000.000 ₫</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-sm text-gray-700">Duy trì hàng năm</td>
                      <td className="py-2 px-4 text-sm text-gray-700 text-right">12.000.000 ₫</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="py-2 px-4 text-sm font-bold text-gray-800">Tổng chi phí</td>
                      <td className="py-2 px-4 text-sm font-bold text-gray-800 text-right">40.000.000 ₫</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-500">Thời gian thu hồi vốn</div>
                  <div className="text-xl font-bold text-gray-800 mt-1">~6 tháng</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-500">ROI sau 1 năm</div>
                  <div className="text-xl font-bold text-green-600 mt-1">+215%</div>
                </div>
              </div>
            </div>

            {/* ROI Highlights */}
            <div className="grid grid-cols-3 gap-4">
              <div className="roi-highlight p-4 text-white text-center">
                <div className="text-3xl font-bold mb-1">30%</div>
                <div className="text-xs">Tăng doanh thu trung bình</div>
              </div>
              <div className="roi-highlight p-4 text-white text-center">
                <div className="text-3xl font-bold mb-1">40%</div>
                <div className="text-xs">Giảm chi phí vận hành</div>
              </div>
              <div className="roi-highlight p-4 text-white text-center">
                <div className="text-3xl font-bold mb-1">25%</div>
                <div className="text-xs">Tăng số lượng khách hàng</div>
              </div>
            </div>
          </div>

          {/* Right Column - Charts */}
          <div className="w-1/2 pl-6">
            {/* Before/After Metrics Chart */}
            <div className="data-card p-5 mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <i className="fas fa-chart-bar text-blue-500 mr-2"></i>
                So sánh trước và sau khi áp dụng
              </h3>
              <div className="chart-container">
                <canvas id="beforeAfterChart"></canvas>
              </div>
            </div>

            {/* ROI Projection Chart */}
            <div className="data-card p-5">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <i className="fas fa-chart-line text-green-500 mr-2"></i>
                Dự báo lợi nhuận theo thời gian
              </h3>
              <div className="chart-container">
                <canvas id="roiProjectionChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Key Benefits */}
        <div className="mt-6">
          <div className="data-card p-5">
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
              <i className="fas fa-star text-yellow-500 mr-2"></i>
              Lợi ích kinh doanh chính
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mr-3">
                  <i className="fas fa-users text-blue-500"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">Tăng khả năng giữ chân khách hàng</div>
                  <div className="text-sm text-gray-600">
                    Tăng 65% tỷ lệ khách hàng quay lại nhờ hệ thống nhắc lịch và chăm sóc sau điều trị
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 mr-3">
                  <i className="fas fa-clock text-green-500"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">Tối ưu hóa thời gian</div>
                  <div className="text-sm text-gray-600">
                    Giảm 42% thời gian quản lý hành chính, cho phép nhân viên tập trung vào chăm sóc khách hàng
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0 mr-3">
                  <i className="fas fa-search-dollar text-purple-500"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">Tăng doanh số dịch vụ cao cấp</div>
                  <div className="text-sm text-gray-600">
                    Tăng 35% tỷ lệ chọn dịch vụ cao cấp nhờ giao diện dịch vụ trực quan, hình ảnh chất lượng cao
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end mt-5">
        <div className="text-gray-400 text-sm">© 2025 Dental Solutions</div>
      </div>
    </div>
  )
}

export default ROISlide
