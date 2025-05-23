const ServiceFeatureSlide = () => {
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
        <h1 className="title text-5xl mb-2">Tính Năng Dịch Vụ</h1>
        <div className="w-1/3 gradient-border mb-8"></div>

        {/* Main Content */}
        <div className="flex">
          {/* Left Column - App Screen Mockup */}
          <div className="w-2/5 flex justify-center">
            <div className="app-screen flex flex-col h-[99%] w-8/12">
              {/* App Header */}
              <img
                src="/images/dich-vu.jpg"
                alt="Appointment Feature Screen"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Column - Benefits and Stats */}
          <div className="w-3/5 pl-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Danh mục dịch vụ chi tiết, trực quan</h2>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-eye text-purple-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Hiển thị trực quan</h3>
                <p className="text-gray-600">
                  Dịch vụ nha khoa được trình bày với hình ảnh và thông tin chi tiết, giúp khách hàng dễ dàng tìm hiểu
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-calendar-check text-amber-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Đặt lịch trực tiếp</h3>
                <p className="text-gray-600">
                  Khách hàng có thể đặt lịch ngay từ trang chi tiết dịch vụ, giảm các bước chuyển đổi không cần thiết
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-filter text-blue-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Phân loại thông minh</h3>
                <p className="text-gray-600">
                  Dịch vụ được phân loại và đề xuất theo nhu cầu của từng khách hàng dựa trên lịch sử điều trị
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-tag text-green-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Ưu đãi cá nhân hóa</h3>
                <p className="text-gray-600">Hiển thị các khuyến mãi và ưu đãi phù hợp với từng đối tượng khách hàng</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">55%</div>
                <div className="text-sm">tăng tỷ lệ đặt lịch từ trang dịch vụ</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">40%</div>
                <div className="text-sm">khách hàng xem thêm các dịch vụ khác</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">68%</div>
                <div className="text-sm">khách hàng quyết định nhanh hơn</div>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-100">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                Lợi ích kinh doanh
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500  mr-2"></i>
                  <span className="text-gray-700">
                    Tăng 30% doanh thu từ các dịch vụ cao cấp khi khách hàng có thông tin đầy đủ
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-gray-700">
                    Giảm 25% thời gian tư vấn trực tiếp nhờ thông tin chi tiết sẵn có
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-gray-700">
                    Tăng 45% khả năng bán thêm dịch vụ thông qua hệ thống đề xuất thông minh
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

export default ServiceFeatureSlide
