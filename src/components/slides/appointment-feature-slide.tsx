import Image from "next/image"

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
          <div className="w-2/5 flex justify-center">
            <div className="app-screen w-8/12 flex flex-col">
              <Image
                src="/images/calendar.jpg"
                alt="Appointment Feature Screen"
                className="w-full rounded-lg shadow-lg"
              />
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
                <p className="text-gray-600 leading-4">
                  Giảm 70% thời gian hành chính cho việc quản lý lịch hẹn so với phương pháp truyền thống
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-phone-slash text-green-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Giảm cuộc gọi nhỡ</h3>
                <p className="text-gray-600 leading-4">
                  Khách hàng đặt lịch 24/7, không bị giới hạn bởi giờ làm việc của nhân viên lễ tân
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-bell text-purple-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Nhắc nhở tự động</h3>
                <p className="text-gray-600 leading-4">
                  Hệ thống tự động gửi thông báo nhắc lịch hẹn, giảm tỷ lệ khách hàng bỏ hẹn
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-user-check text-amber-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Trải nghiệm khách hàng</h3>
                <p className="text-gray-600 leading-4">
                  Tăng mức độ hài lòng khi khách hàng chủ động lựa chọn thời gian và bác sĩ phù hợp
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">45%</div>
                <div className="text-sm">khách hàng ưu tiên đặt lịch online</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">60%</div>
                <div className="text-sm">giảm tỷ lệ bỏ lỡ cuộc hẹn</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">85%</div>
                <div className="text-sm">khách hàng hài lòng với hệ thống</div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="italic text-gray-700">
                {`"Từ khi áp dụng Zalo Mini App, phòng khám chúng tôi đã giảm 30% cuộc gọi đặt lịch và tăng 25% số lượng
                khách hàng mới. Đây là công cụ không thể thiếu cho nha khoa hiện đại."`}
              </p>
              <p className="font-bold text-gray-800 mt-2">— TS. BS Trần Minh, Giám đốc Nha Khoa Smile</p>
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

export default AppointmentFeatureSlide
