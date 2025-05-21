const AdditionalFeaturesSlide = () => {
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
        <h1 className="title text-5xl mb-2">Các Tính Năng Bổ Sung</h1>
        <div className="w-1/3 gradient-border mb-8"></div>

        {/* Main Content */}
        <div className="flex">
          {/* Left Column - App Screen Mockup */}
          <div className="w-2/5 pr-6">
            <div className="app-screen h-full flex flex-col">
              {/* App Header */}
              <div className="bg-blue-500 text-white p-4 flex items-center">
                <i className="fas fa-user-circle mr-3 text-xl"></i>
                <div className="font-bold">Hồ sơ nha khoa</div>
              </div>

              {/* App Content */}
              <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
                {/* Tab Navigation */}
                <div className="flex mb-4 border-b border-gray-200">
                  <div className="feature-tab tab-active px-4 py-2">
                    <i className="fas fa-id-card mr-1"></i> Bảo hiểm
                  </div>
                  <div className="feature-tab px-4 py-2 text-gray-500">
                    <i className="fas fa-notes-medical mr-1"></i> Hướng dẫn
                  </div>
                  <div className="feature-tab px-4 py-2 text-gray-500">
                    <i className="fas fa-prescription mr-1"></i> Đơn thuốc
                  </div>
                </div>

                {/* Electronic Insurance Card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg overflow-hidden mb-6">
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-blue-200 text-xs mb-1">Thẻ bảo hiểm y tế</div>
                        <div className="text-white font-bold text-lg">BẢO VIỆT HEALTHCARE</div>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <i className="fas fa-heartbeat text-white text-xl"></i>
                      </div>
                    </div>

                    <div className="mt-5 mb-3">
                      <div className="text-blue-200 text-xs mb-1">Họ và tên</div>
                      <div className="text-white font-bold">NGUYỄN VĂN BÌNH</div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="text-blue-200 text-xs mb-1">Số thẻ</div>
                        <div className="text-white">BV-0123456789</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-blue-200 text-xs mb-1">Hiệu lực</div>
                        <div className="text-white">01/2025 - 12/2025</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 p-3 flex justify-between items-center">
                    <div className="text-white text-sm">Gói Nha Khoa Premium</div>
                    <div className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
                      Đang hoạt động
                    </div>
                  </div>
                </div>

                {/* Insurance Benefits */}
                <div className="bg-white rounded-lg shadow p-4 mb-4">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    Quyền lợi bảo hiểm
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="text-gray-700">Khám nha khoa định kỳ</div>
                      <div className="text-green-600 font-semibold">100%</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-gray-700">Chụp X-quang</div>
                      <div className="text-green-600 font-semibold">100%</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-gray-700">Cạo vôi răng</div>
                      <div className="text-green-600 font-semibold">100%</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-gray-700">Trám răng</div>
                      <div className="text-green-600 font-semibold">80%</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-gray-700">Điều trị tủy</div>
                      <div className="text-green-600 font-semibold">70%</div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button className="text-blue-500 text-sm font-semibold flex items-center">
                      <i className="fas fa-file-contract mr-1"></i> Xem chi tiết
                    </button>
                    <button className="text-blue-500 text-sm font-semibold flex items-center">
                      <i className="fas fa-share-alt mr-1"></i> Chia sẻ
                    </button>
                  </div>
                </div>

                {/* Post-treatment Instructions Preview */}
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-gray-800 flex items-center">
                      <i className="fas fa-notes-medical text-blue-500 mr-2"></i>
                      Hướng dẫn sau điều trị
                    </h3>
                    <div className="text-xs text-gray-500">10/05/2025</div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg mb-3">
                    <div className="text-sm text-gray-600">
                      <div className="font-semibold mb-1">Sau trám răng:</div>
                      <div className="space-y-1 opacity-70">
                        <div>• Không ăn trong 1 giờ đầu</div>
                        <div>• Tránh thực phẩm quá cứng</div>
                        <div>• Giữ vệ sinh răng miệng...</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-2 text-center text-sm font-semibold text-blue-600 border border-blue-200 rounded-lg">
                    Xem tất cả hướng dẫn <i className="fas fa-chevron-right ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits and Stats */}
          <div className="w-3/5 pl-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Theo dõi sức khỏe răng miệng toàn diện</h2>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-id-card text-blue-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Thẻ bảo hiểm điện tử</h3>
                <p className="text-gray-600 text-sm">
                  Quản lý thẻ bảo hiểm y tế, theo dõi quyền lợi và sử dụng trực tiếp tại phòng khám không cần mang thẻ
                  vật lý
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-notes-medical text-green-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Hướng dẫn sau điều trị</h3>
                <p className="text-gray-600 text-sm">
                  Các chỉ dẫn chi tiết cho từng liệu trình, nhắc nhở chăm sóc và theo dõi tiến trình hồi phục sau điều
                  trị
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-prescription text-purple-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Đơn thuốc điện tử</h3>
                <p className="text-gray-600 text-sm">
                  Quản lý đơn thuốc, lịch uống thuốc với cảnh báo nhắc nhở và thông tin chi tiết về thuốc được kê toa
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="stat-box p-4 text-white text-center">
                <div className="text-3xl font-bold mb-1">75%</div>
                <div className="text-xs">giảm sai sót về quyền lợi bảo hiểm</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-3xl font-bold mb-1">65%</div>
                <div className="text-xs">tăng tuân thủ hướng dẫn sau điều trị</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-3xl font-bold mb-1">80%</div>
                <div className="text-xs">giảm mất đơn thuốc</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-3xl font-bold mb-1">90%</div>
                <div className="text-xs">khách hàng hài lòng với các tính năng bổ sung</div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-800 mb-3">
                  <i className="fas fa-smile-beam text-blue-500 mr-2"></i>
                  Lợi ích cho khách hàng
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-gray-700">Truy cập thông tin y tế mọi lúc mọi nơi, không lo mất giấy tờ</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-gray-700">Hiểu rõ hướng dẫn sau điều trị, giảm 60% biến chứng</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-gray-700">
                      Quản lý và sử dụng quyền lợi bảo hiểm hiệu quả, tiết kiệm chi phí
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-800 mb-3">
                  <i className="fas fa-clinic-medical text-blue-500 mr-2"></i>
                  Lợi ích cho phòng khám
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-gray-700">Giảm 45% thời gian xử lý giấy tờ bảo hiểm và đơn thuốc</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-gray-700">
                      Tăng 70% tỷ lệ tuân thủ sau điều trị, nâng cao kết quả lâm sàng
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-gray-700">
                      Xây dựng hình ảnh phòng khám hiện đại, thu hút 35% khách hàng mới
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-lg shadow-lg p-5 border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="text-blue-500 text-3xl mr-3">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div>
                  <p className="text-gray-700 italic mb-3">
                    Tính năng hướng dẫn sau điều trị giúp bệnh nhân của chúng tôi hiểu rõ quy trình chăm sóc tại nhà.
                    Kết quả là giảm đáng kể các cuộc gọi hỏi đáp và tỷ lệ biến chứng sau điều trị.
                  </p>
                  <div className="font-semibold text-gray-800">— BS. Nguyễn Thu Hà, Giám đốc Nha khoa Việt Đức</div>
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

export default AdditionalFeaturesSlide
