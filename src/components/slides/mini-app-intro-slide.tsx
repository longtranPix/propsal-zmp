const MiniAppIntroSlide = () => {
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
        <h1 className="title text-5xl mb-2">Giới Thiệu Zalo Mini App Nha Khoa</h1>
        <div className="w-1/3 gradient-border mb-8"></div>

        {/* Main Content */}
        <div className="flex">
          {/* Left Column - Phone Mockup */}
          <div className="w-1/3 flex items-center justify-center">
            <div className="phone-mockup w-64 h-96">
              <div className="bg-blue-500 text-white p-4 flex items-center">
                <i className="fas fa-tooth text-2xl mr-2"></i>
                <div className="text-lg font-bold">Nha Khoa Mini App</div>
              </div>
              <div className="p-4">
                <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                  <div className="font-bold text-blue-600">Lịch hẹn sắp tới</div>
                  <div className="flex items-center text-gray-700 mt-2">
                    <i className="far fa-calendar mr-2"></i>
                    <span>15/05/2025 - 10:30</span>
                  </div>
                  <div className="flex items-center text-gray-700 mt-1">
                    <i className="fas fa-user-md mr-2"></i>
                    <span>BS. Nguyễn Văn A</span>
                  </div>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="w-1/2 bg-blue-50 rounded-lg p-3 mr-1 text-center">
                    <i className="fas fa-clipboard-list text-blue-500 mb-1 text-xl"></i>
                    <div className="text-sm">Dịch vụ</div>
                  </div>
                  <div className="w-1/2 bg-cyan-50 rounded-lg p-3 ml-1 text-center">
                    <i className="fas fa-file-medical text-cyan-500 mb-1 text-xl"></i>
                    <div className="text-sm">Kết quả</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-1/2 bg-teal-50 rounded-lg p-3 mr-1 text-center">
                    <i className="fas fa-credit-card text-teal-500 mb-1 text-xl"></i>
                    <div className="text-sm">Thanh toán</div>
                  </div>
                  <div className="w-1/2 bg-indigo-50 rounded-lg p-3 ml-1 text-center">
                    <i className="fas fa-comment-medical text-indigo-500 mb-1 text-xl"></i>
                    <div className="text-sm">Hỗ trợ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="w-2/3 pl-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Giải pháp toàn diện kết nối phòng khám với bệnh nhân
            </h2>
            <p className="text-gray-600 mb-6">
              Zalo Mini App Nha Khoa mang đến trải nghiệm liền mạch, hiện đại cho khách hàng và tối ưu quy trình quản lý
              cho phòng khám thông qua nền tảng Zalo với hơn 75 triệu người dùng tại Việt Nam.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-blue-100">
                  <i className="far fa-calendar-check text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Quản lý lịch hẹn thông minh</h3>
                  <p className="text-gray-600 text-sm">Đặt lịch tự động, nhắc nhở, giảm tỷ lệ bỏ hẹn</p>
                </div>
              </div>

              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-green-100">
                  <i className="fas fa-clipboard-list text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Danh mục dịch vụ trực quan</h3>
                  <p className="text-gray-600 text-sm">Thông tin dịch vụ chi tiết với hình ảnh, mô tả rõ ràng</p>
                </div>
              </div>

              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-purple-100">
                  <i className="fas fa-credit-card text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Quản lý thanh toán</h3>
                  <p className="text-gray-600 text-sm">Ghi nhận thanh toán, lịch sử chi tiêu, minh bạch</p>
                </div>
              </div>

              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-yellow-100">
                  <i className="fas fa-x-ray text-yellow-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phim X-quang & xét nghiệm</h3>
                  <p className="text-gray-600 text-sm">Truy cập kết quả chụp phim, xét nghiệm trực tiếp</p>
                </div>
              </div>

              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-red-100">
                  <i className="fas fa-file-medical text-red-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Hồ sơ điện tử toàn diện</h3>
                  <p className="text-gray-600 text-sm">Bảo hiểm, đơn thuốc, hướng dẫn sau điều trị</p>
                </div>
              </div>

              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-teal-100">
                  <i className="fas fa-chart-line text-teal-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phân tích & báo cáo</h3>
                  <p className="text-gray-600 text-sm">Thống kê khách hàng, tối ưu hoạt động phòng khám</p>
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

export default MiniAppIntroSlide
