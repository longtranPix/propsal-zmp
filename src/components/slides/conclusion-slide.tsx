const ConclusionSlide = () => {
  return (
    <div className="slide flex flex-col p-12">
      {/* Background Elements */}
      <div
        className="circle-pattern bg-blue-300"
        style={{ width: "450px", height: "450px", top: "-200px", right: "-150px" }}
      ></div>
      <div
        className="circle-pattern bg-cyan-200"
        style={{ width: "400px", height: "400px", bottom: "-150px", left: "-100px" }}
      ></div>
      <div
        className="circle-pattern bg-blue-100"
        style={{ width: "200px", height: "200px", top: "350px", right: "100px" }}
      ></div>

      <div className="z-10 flex flex-col w-full h-full">
        {/* Header */}
        <h1 className="title text-5xl mb-2">Kết Luận & Hành Động</h1>
        <div className="w-1/3 gradient-border mb-8"></div>

        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Left column: Benefits Summary */}
          <div className="col-span-7">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              <i className="fas fa-check-circle text-blue-500 mr-2"></i>
              Tại sao chọn Zalo Mini App Nha Khoa?
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {/* Benefit 1 */}
              <div className="benefit-card bg-white p-4 rounded-xl shadow-md border-l-4 border-blue-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-calendar-check text-blue-600"></i>
                  </div>
                  <h3 className="font-bold text-gray-800">Quản lý lịch hẹn</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Tối ưu hóa quy trình đặt lịch, giảm 60% thời gian quản lý hành chính
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="benefit-card bg-white p-4 rounded-xl shadow-md border-l-4 border-cyan-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-teeth text-cyan-600"></i>
                  </div>
                  <h3 className="font-bold text-gray-800">Trải nghiệm khách hàng</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Nâng cao 85% mức độ hài lòng với trải nghiệm mượt mà, đa tính năng
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="benefit-card bg-white p-4 rounded-xl shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-chart-line text-green-600"></i>
                  </div>
                  <h3 className="font-bold text-gray-800">Tăng doanh thu</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Tăng 30% doanh thu với dịch vụ cao cấp và tỷ lệ chuyển đổi tốt hơn
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="benefit-card bg-white p-4 rounded-xl shadow-md border-l-4 border-indigo-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-user-check text-indigo-600"></i>
                  </div>
                  <h3 className="font-bold text-gray-800">Giữ chân khách hàng</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Tăng 65% tỷ lệ khách hàng quay lại nhờ chăm sóc liên tục, cá nhân hóa
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-6 bg-blue-50 p-5 rounded-xl border border-blue-100 relative">
              <div className="text-5xl absolute text-blue-200 font-serif -top-4 -left-2">"</div>
              <p className="text-gray-700 italic text-sm ml-6">
                Zalo Mini App đã giúp phòng khám chúng tôi tiết kiệm hàng chục giờ quản lý mỗi tuần và tăng 35% lượt đặt
                hẹn. Đây là khoản đầu tư sinh lời nhanh nhất từ trước đến nay của chúng tôi.
              </p>
              <div className="flex items-center mt-3 ml-6">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-800">TS. BS. Trần Minh</p>
                  <p className="text-xs text-gray-500">Giám đốc Nha Khoa Smile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: CTA */}
          <div className="col-span-5">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-sky-400 py-5 px-6 text-white">
                <h3 className="text-2xl font-bold">Bắt đầu ngay hôm nay</h3>
                <p className="opacity-90 text-sm">Nâng cao trải nghiệm nha khoa của bạn</p>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow">
                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="text-blue-500 mr-3">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <p className="font-medium">Triển khai nhanh chóng trong 8 tuần</p>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="text-blue-500 mr-3">
                      <i className="fas fa-sync"></i>
                    </div>
                    <p className="font-medium">Hỗ trợ kỹ thuật 24/7</p>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="text-blue-500 mr-3">
                      <i className="fas fa-chart-pie"></i>
                    </div>
                    <p className="font-medium">ROI dương sau 6 tháng</p>
                  </div>
                </div>

                {/* Action buttons */}
                <button className="cta-btn w-full py-4 rounded-xl text-white font-bold mb-4 pulse-effect">
                  <i className="fas fa-headset mr-2"></i> Liên hệ tư vấn miễn phí
                </button>

                <button className="w-full py-3 rounded-xl border-2 border-blue-500 text-blue-500 font-medium hover:bg-blue-50 transition">
                  <i className="fas fa-calendar-alt mr-2"></i> Đặt lịch demo
                </button>

                {/* Contact info */}
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <p className="text-gray-700">0123.456.789</p>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <p className="text-gray-700">contact@dentalsolutions.vn</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
                      <i className="fas fa-globe"></i>
                    </div>
                    <p className="text-gray-700">www.dentalsolutions.vn</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 p-4 text-center">
                <div className="text-sm text-gray-500 mb-2">Theo dõi chúng tôi</div>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: Questions and next steps */}
        <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-xl p-6 flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">Còn câu hỏi nào khác?</h3>
            <p className="text-blue-100">Chúng tôi sẵn sàng tư vấn giải pháp phù hợp nhất cho phòng khám của bạn</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white px-6 py-3 rounded-lg font-bold text-blue-600 hover:shadow-lg transition">
              <i className="fas fa-question-circle mr-2"></i> Hỏi đáp
            </button>
            <button className="bg-blue-800 bg-opacity-30 border-2 border-white px-6 py-3 rounded-lg font-bold text-white hover:bg-opacity-50 transition">
              <i className="fas fa-arrow-right mr-2"></i> Bước tiếp theo
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end text-gray-400 text-sm">© 2025 Dental Solutions</div>
    </div>
  )
}

export default ConclusionSlide
