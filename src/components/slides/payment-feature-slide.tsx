const PaymentFeatureSlide = () => {
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
        <h1 className="title text-5xl mb-2">Tính Năng Thanh Toán</h1>
        <div className="w-1/3 gradient-border mb-8"></div>

        {/* Main Content */}
        <div className="flex">
          {/* Left Column - App Screen Mockup */}
          <div className="w-2/5 pr-6">
            <div className="app-screen h-full flex flex-col">
              {/* App Header */}
              <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-arrow-left mr-3"></i>
                  <div className="font-bold">Thanh Toán</div>
                </div>
                <i className="fas fa-question-circle"></i>
              </div>

              {/* App Content */}
              <div className="flex-1 p-4 bg-gray-50 overflow-y-auto flex flex-col">
                {/* Success Message */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <i className="fas fa-check text-green-500 text-3xl"></i>
                  </div>
                  <h3 className="text-green-600 font-bold mb-1">Thanh toán thành công</h3>
                  <p className="text-gray-600 text-sm">Thanh toán của bạn đã được ghi nhận</p>
                </div>

                {/* Payment Details */}
                <div className="bg-white rounded-lg shadow p-4 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-bold text-gray-800">Chi tiết thanh toán</div>
                    <div className="text-xs px-2 py-1 bg-blue-100 text-blue-500 rounded-full">Hóa đơn #NHK-2025056</div>
                  </div>
                  <div className="flex flex-col space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Ngày thanh toán</span>
                      <span className="text-gray-800">15/05/2025</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Phương thức</span>
                      <span className="text-gray-800">Tại quầy</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Bác sĩ điều trị</span>
                      <span className="text-gray-800">BS. Nguyễn Văn A</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Tổng thanh toán</span>
                      <span className="font-bold text-blue-600">2.500.000₫</span>
                    </div>
                    <div className="flex items-center text-xs text-green-500">
                      <i className="fas fa-check-circle mr-1"></i> Đã thanh toán đầy đủ
                    </div>
                  </div>
                </div>

                {/* Payment History */}
                <div className="mb-2 font-bold text-gray-700">Lịch sử thanh toán</div>

                {/* Payment Cards */}
                <div className="space-y-3 flex-1">
                  <div className="payment-card">
                    <div className="p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-gray-800 font-bold">Cạo vôi răng</div>
                        <div className="text-blue-500 font-semibold">500.000₫</div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">05/05/2025</span>
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded">Đã thanh toán</span>
                      </div>
                    </div>
                  </div>

                  <div className="payment-card">
                    <div className="p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-gray-800 font-bold">Trám răng (2 răng)</div>
                        <div className="text-blue-500 font-semibold">800.000₫</div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">20/04/2025</span>
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded">Đã thanh toán</span>
                      </div>
                    </div>
                  </div>

                  <div className="payment-card">
                    <div className="p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-gray-800 font-bold">Khám tổng quát</div>
                        <div className="text-blue-500 font-semibold">200.000₫</div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">15/04/2025</span>
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded">Đã thanh toán</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Buttons */}
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center">
                    <i className="fas fa-file-invoice mr-2"></i> Xuất hóa đơn
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg flex items-center justify-center">
                    <i className="fas fa-share-alt mr-2"></i> Chia sẻ
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits and Stats */}
          <div className="w-3/5 pl-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Theo dõi thanh toán minh bạch, hiệu quả</h2>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-receipt text-blue-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Ghi nhận thanh toán tự động</h3>
                <p className="text-gray-600">
                  Hóa đơn được cập nhật tự động trên ứng dụng ngay sau khi khách hàng thanh toán tại quầy thu ngân
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-history text-green-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Lịch sử chi tiêu rõ ràng</h3>
                <p className="text-gray-600">
                  Khách hàng dễ dàng theo dõi lịch sử thanh toán, chi tiết từng dịch vụ đã sử dụng và thời gian thực
                  hiện
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-file-invoice-dollar text-purple-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Xuất hóa đơn điện tử</h3>
                <p className="text-gray-600">
                  Hỗ trợ xuất hóa đơn điện tử ngay trên ứng dụng, tiết kiệm thời gian và thân thiện với môi trường
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-chart-pie text-amber-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Phân tích chi phí điều trị</h3>
                <p className="text-gray-600">
                  Cung cấp báo cáo chi tiết về các chi phí điều trị, giúp khách hàng hoạch định tài chính dễ dàng hơn
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl font-bold mb-1">95%</div>
                <div className="text-sm">khách hàng hài lòng với tính minh bạch tài chính</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl font-bold mb-1">75%</div>
                <div className="text-sm">giảm tranh chấp về hóa đơn</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl font-bold mb-1">40%</div>
                <div className="text-sm">tăng khả năng khách hàng quay lại</div>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-100">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                Lợi ích cho phòng khám
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-gray-700">Giảm 80% thời gian xử lý khiếu nại về hóa đơn và thanh toán</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-gray-700">
                    Tăng 35% độ tin cậy của khách hàng với chính sách giá và chi phí điều trị
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-gray-700">
                    Tạo cơ hội gắn kết khách hàng thông qua hệ thống tích điểm và chương trình khách hàng thân thiết
                  </span>
                </li>
              </ul>
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

export default PaymentFeatureSlide
