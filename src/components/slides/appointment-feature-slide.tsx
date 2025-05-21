const AppointmentFeatureSlide = () => {
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
        <h1 className="title text-5xl mb-2">Tính Năng Đặt Lịch Hẹn</h1>
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
                  <div className="font-bold">Đặt Lịch Hẹn</div>
                </div>
                <i className="fas fa-ellipsis-v"></i>
              </div>

              {/* App Content */}
              <div className="flex-1 p-4 bg-gray-50">
                {/* Calendar Section */}
                <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-blue-600 font-bold">Tháng 5, 2025</div>
                    <div className="flex">
                      <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-500">
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-500">
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="grid grid-cols-7 gap-1 mb-3 text-center">
                    <div className="text-xs text-gray-500">CN</div>
                    <div className="text-xs text-gray-500">T2</div>
                    <div className="text-xs text-gray-500">T3</div>
                    <div className="text-xs text-gray-500">T4</div>
                    <div className="text-xs text-gray-500">T5</div>
                    <div className="text-xs text-gray-500">T6</div>
                    <div className="text-xs text-gray-500">T7</div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center">
                    <div className="w-8 h-8 text-gray-300">28</div>
                    <div className="w-8 h-8 text-gray-300">29</div>
                    <div className="w-8 h-8 text-gray-300">30</div>
                    <div className="w-8 h-8 text-gray-500">1</div>
                    <div className="w-8 h-8 text-gray-500">2</div>
                    <div className="w-8 h-8 text-gray-500">3</div>
                    <div className="w-8 h-8 text-gray-500">4</div>

                    <div className="w-8 h-8 text-gray-500">5</div>
                    <div className="w-8 h-8 text-gray-500">6</div>
                    <div className="w-8 h-8 text-gray-500">7</div>
                    <div className="w-8 h-8 text-gray-500">8</div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                      9
                    </div>
                    <div className="w-8 h-8 text-gray-500">10</div>
                    <div className="w-8 h-8 text-gray-500">11</div>

                    <div className="w-8 h-8 text-gray-500">12</div>
                    <div className="w-8 h-8 text-gray-500">13</div>
                    <div className="w-8 h-8 text-gray-500">14</div>
                    <div className="w-8 h-8 text-gray-500">15</div>
                    <div className="w-8 h-8 text-gray-500">16</div>
                    <div className="w-8 h-8 text-gray-500">17</div>
                    <div className="w-8 h-8 text-gray-500">18</div>
                  </div>
                </div>

                {/* Time Selection */}
                <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
                  <div className="text-blue-600 font-bold mb-2">Khung Giờ Có Sẵn</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-blue-50 text-blue-600 p-2 rounded text-center border-2 border-blue-500">
                      8:30
                    </div>
                    <div className="bg-gray-100 text-gray-500 p-2 rounded text-center">9:00</div>
                    <div className="bg-gray-100 text-gray-500 p-2 rounded text-center">9:30</div>
                    <div className="bg-gray-100 text-gray-500 p-2 rounded text-center">10:00</div>
                    <div className="bg-gray-100 text-gray-500 p-2 rounded text-center">10:30</div>
                    <div className="bg-gray-100 text-gray-500 p-2 rounded text-center">11:00</div>
                  </div>
                </div>

                {/* Doctor Selection */}
                <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
                  <div className="text-blue-600 font-bold mb-2">Chọn Bác Sĩ</div>
                  <div className="flex mb-2 items-center p-2 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-user-md text-blue-500"></i>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">BS. Nguyễn Văn A</div>
                      <div className="text-sm text-gray-500">Chuyên khoa Răng Hàm Mặt</div>
                    </div>
                    <i className="fas fa-check-circle ml-auto text-blue-500 text-xl"></i>
                  </div>
                  <div className="flex items-center p-2 rounded-lg border border-gray-200">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-user-md text-gray-500"></i>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">BS. Lê Thị B</div>
                      <div className="text-sm text-gray-500">Chuyên khoa Nha Chu</div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center">
                  <i className="far fa-calendar-check mr-2"></i> Xác Nhận Lịch Hẹn
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits and Stats */}
          <div className="w-3/5 pl-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Đơn giản hóa quy trình đặt lịch hẹn</h2>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-clock text-blue-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Tiết kiệm thời gian</h3>
                <p className="text-gray-600">
                  Giảm 70% thời gian hành chính cho việc quản lý lịch hẹn so với phương pháp truyền thống
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-phone-slash text-green-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Giảm cuộc gọi nhỡ</h3>
                <p className="text-gray-600">
                  Khách hàng đặt lịch 24/7, không bị giới hạn bởi giờ làm việc của nhân viên lễ tân
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-bell text-purple-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Nhắc nhở tự động</h3>
                <p className="text-gray-600">
                  Hệ thống tự động gửi thông báo nhắc lịch hẹn, giảm tỷ lệ khách hàng bỏ hẹn
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-user-check text-amber-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Trải nghiệm khách hàng</h3>
                <p className="text-gray-600">
                  Tăng mức độ hài lòng khi khách hàng chủ động lựa chọn thời gian và bác sĩ phù hợp
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl font-bold mb-1">45%</div>
                <div className="text-sm">khách hàng ưu tiên đặt lịch online</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl font-bold mb-1">60%</div>
                <div className="text-sm">giảm tỷ lệ bỏ lỡ cuộc hẹn</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl font-bold mb-1">85%</div>
                <div className="text-sm">khách hàng hài lòng với hệ thống</div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="italic text-gray-700">
                "Từ khi áp dụng Zalo Mini App, phòng khám chúng tôi đã giảm 30% cuộc gọi đặt lịch và tăng 25% số lượng
                khách hàng mới. Đây là công cụ không thể thiếu cho nha khoa hiện đại."
              </p>
              <p className="font-bold text-gray-800 mt-2">— TS. BS Trần Minh, Giám đốc Nha Khoa Smile</p>
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

export default AppointmentFeatureSlide
