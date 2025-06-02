
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
          <div className="w-2/5 flex h-[90%] justify-center">
            <div className="app-screen w-8/12 h-[90%] flex flex-col">
              <video width="400" loop autoPlay muted>
                <source src="/videos/hoa-don-thanh-toan.mp4" type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
                Your browser does not support HTML video.
              </video>
            </div>
          </div>

          {/* Right Column - Benefits and Stats */}
          <div className="w-3/5 pl-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Theo dõi thanh toán minh bạch, hiệu quả</h2>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-blue-100">
                <i className="fas fa-receipt text-blue-600 text-xl"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-base! font-bold text-gray-800 mb-1">Ghi nhận thanh toán tự động </h3>
                  <p className="text-sm! text-gray-600">Hóa đơn được cập nhật tự động trên ứng dụng ngay sau khi khách hàng thanh toán tại quầy thu ngân </p>
                </div>
              </div>

              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-green-100">
                <i className="fas fa-history text-green-600 text-xl"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-base! font-bold text-gray-800 mb-1">Lịch sử chi tiêu rõ ràng</h3>
                  <p className="text-sm! text-gray-600">Khách hàng dễ dàng theo dõi lịch sử thanh toán, chi tiết từng dịch vụ đã sử dụng và thời gian thực
                  hiện</p>
                </div>
              </div>

              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-purple-100">
                <i className="fas fa-file-invoice-dollar text-purple-600 text-xl"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-base! font-bold text-gray-800 mb-1">Xuất hóa đơn điện tử</h3>
                  <p className="text-sm! text-gray-600">Hỗ trợ xuất hóa đơn điện tử ngay trên ứng dụng, tiết kiệm thời gian và thân thiện với môi trường</p>
                </div>
              </div>

              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-amber-100">
                <i className="fas fa-chart-pie text-amber-600 text-xl"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-base! font-bold text-gray-800 mb-1"> Phân tích chi phí điều trị</h3>
                  <p className="text-sm! text-gray-600">Cung cấp báo cáo chi tiết về các chi phí điều trị, giúp khách hàng hoạch định tài chính dễ dàng hơn</p>
                </div>
              </div>
              </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">95%</div>
                <div className="text-sm!">khách hàng hài lòng với tính minh bạch tài chính</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">75%</div>
                <div className="text-sm!">giảm tranh chấp về hóa đơn</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">40%</div>
                <div className="text-sm!">tăng khả năng khách hàng quay lại</div>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-100">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center text-lg!">
                <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                Lợi ích cho phòng khám
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start text-left">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm!"></i>
                  <span className="text-gray-700 text-sm!">Giảm 80% thời gian xử lý khiếu nại về hóa đơn và thanh toán</span>
                </li>
                <li className="flex items-start text-left">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm!"></i>
                  <span className="text-gray-700 text-sm!">
                    Tăng 35% độ tin cậy của khách hàng với chính sách giá và chi phí điều trị
                  </span>
                </li>
                <li className="flex items-start text-left">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm!"></i>
                  <span className="text-gray-700 text-sm!">
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
        <div className="text-gray-400 text-sm">© Cubable Dental Solutions</div>
      </div>
    </div>
  )
}

export default PaymentFeatureSlide
