
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
          <div className="w-2/5 flex h-[90%] justify-center">
            <div className="app-screen w-8/12 h-[78%] flex flex-col">
              <video width="400" loop autoPlay muted>
                <source src="/videos/tinh-nang-bo-sung.mp4" type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
                Your browser does not support HTML video.
              </video>
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
                <h3 className="font-bold text-gray-800 mb-2 text-sm! text-left">Thẻ bảo hiểm điện tử</h3>
                <p className="text-gray-600 text-sm! text-left">
                  Quản lý thẻ bảo hiểm y tế, theo dõi quyền lợi và sử dụng trực tiếp tại phòng khám không cần mang thẻ
                  vật lý
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-notes-medical text-green-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm! text-left">Hướng dẫn sau điều trị</h3>
                <p className="text-gray-600 text-sm!">
                  Các chỉ dẫn chi tiết cho từng liệu trình, nhắc nhở chăm sóc và theo dõi tiến trình hồi phục sau điều
                  trị
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-prescription text-purple-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm! text-left">Đơn thuốc điện tử</h3>
                <p className="text-gray-600 text-sm!">
                  Quản lý đơn thuốc, lịch uống thuốc với cảnh báo nhắc nhở và thông tin chi tiết về thuốc được kê toa
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="stat-box p-4 text-white text-center">
                <div className="text-3xl! font-bold mb-1">75%</div>
                <div className="text-xs!">giảm sai sót về quyền lợi bảo hiểm</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-3xl! font-bold mb-1">65%</div>
                <div className="text-xs!">tăng tuân thủ hướng dẫn sau điều trị</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-3xl! font-bold mb-1">80%</div>
                <div className="text-xs!">giảm mất đơn thuốc</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-3xl! font-bold mb-1">90%</div>
                <div className="text-xs!">khách hàng hài lòng với các tính năng bổ sung</div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-800 mb-3 text-sm!">
                  <i className="fas fa-smile-beam text-blue-500 mr-2 text-sm!"></i>
                  Lợi ích cho khách hàng
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-left">
                    <i className="fas fa-check-circle text-green-500 mr-2 text-sm!"></i>
                    <span className="text-gray-700 text-sm!">Truy cập thông tin y tế mọi lúc mọi nơi, không lo mất giấy tờ</span>
                  </li>
                  <li className="flex items-start text-left">
                    <i className="fas fa-check-circle text-green-500 mr-2 text-sm!"></i>
                    <span className="text-gray-700 text-sm!">Hiểu rõ hướng dẫn sau điều trị, giảm 60% biến chứng</span>
                  </li>
                  <li className="flex items-start text-left">
                    <i className="fas fa-check-circle text-green-500 mr-2 text-sm!"></i>
                    <span className="text-gray-700 text-sm!">
                      Quản lý và sử dụng quyền lợi bảo hiểm hiệu quả, tiết kiệm chi phí
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-800 mb-3 text-sm!">
                  <i className="fas fa-clinic-medical text-blue-500 mr-2 text-sm!"></i>
                  Lợi ích cho phòng khám
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-left">
                    <i className="fas fa-check-circle text-green-500 mr-2 text-sm!"></i>
                    <span className="text-gray-700 text-sm!">Giảm 45% thời gian xử lý giấy tờ bảo hiểm và đơn thuốc</span>
                  </li>
                  <li className="flex items-start text-left">
                    <i className="fas fa-check-circle text-green-500 mr-2 text-sm!"></i>
                    <span className="text-gray-700 text-sm!">
                      Tăng 70% tỷ lệ tuân thủ sau điều trị, nâng cao kết quả lâm sàng
                    </span>
                  </li>
                  <li className="flex items-start text-left">
                    <i className="fas fa-check-circle text-green-500 mr-2 text-sm!"></i>
                    <span className="text-gray-700 text-sm!">
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
                  <p className="text-gray-700 italic mb-3 text-base!">
                    Tính năng hướng dẫn sau điều trị giúp bệnh nhân của chúng tôi hiểu rõ quy trình chăm sóc tại nhà.
                    Kết quả là giảm đáng kể các cuộc gọi hỏi đáp và tỷ lệ biến chứng sau điều trị.
                  </p>
                  <div className="font-semibold text-gray-800 text-sm!">— BS. Nguyễn Thu Hà, Giám đốc Nha khoa Việt Đức</div>
                </div>
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

export default AdditionalFeaturesSlide
