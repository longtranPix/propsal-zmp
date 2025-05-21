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
          <div className="w-2/5 pr-6">
            <div className="app-screen h-full flex flex-col">
              {/* App Header */}
              <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-arrow-left mr-3"></i>
                  <div className="font-bold">Dịch Vụ Nha Khoa</div>
                </div>
                <i className="fas fa-search"></i>
              </div>

              {/* App Content */}
              <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
                {/* Featured Service */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
                  <div className="bg-blue-600 h-28 flex items-center justify-center">
                    <div className="text-white text-center">
                      <i className="fas fa-tooth text-4xl mb-2"></i>
                      <div className="font-bold">Làm Trắng Răng</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold text-gray-800">Làm Trắng Răng Laser</div>
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                        Hot
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Công nghệ làm trắng răng tiên tiến, an toàn và hiệu quả chỉ sau 60 phút.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-blue-500 font-bold">1.500.000₫</div>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>

                {/* Services List */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="service-card bg-white shadow-md">
                    <div className="h-16 bg-purple-500 flex items-center justify-center">
                      <i className="fas fa-teeth text-white text-xl"></i>
                    </div>
                    <div className="p-3">
                      <div className="text-gray-800 font-bold text-sm mb-1">Niềng Răng</div>
                      <div className="text-blue-500 text-sm font-bold">Từ 15.000.000₫</div>
                    </div>
                  </div>

                  <div className="service-card bg-white shadow-md">
                    <div className="h-16 bg-blue-400 flex items-center justify-center">
                      <i className="fas fa-tooth text-white text-xl"></i>
                    </div>
                    <div className="p-3">
                      <div className="text-gray-800 font-bold text-sm mb-1">Trám Răng</div>
                      <div className="text-blue-500 text-sm font-bold">Từ 300.000₫</div>
                    </div>
                  </div>

                  <div className="service-card bg-white shadow-md">
                    <div className="h-16 bg-green-500 flex items-center justify-center">
                      <i className="fas fa-teeth-open text-white text-xl"></i>
                    </div>
                    <div className="p-3">
                      <div className="text-gray-800 font-bold text-sm mb-1">Cạo Vôi Răng</div>
                      <div className="text-blue-500 text-sm font-bold">500.000₫</div>
                    </div>
                  </div>

                  <div className="service-card bg-white shadow-md">
                    <div className="h-16 bg-amber-500 flex items-center justify-center">
                      <i className="fas fa-x-ray text-white text-xl"></i>
                    </div>
                    <div className="p-3">
                      <div className="text-gray-800 font-bold text-sm mb-1">Chụp X-quang</div>
                      <div className="text-blue-500 text-sm font-bold">200.000₫</div>
                    </div>
                  </div>
                </div>

                {/* Service Detail Screen (Overlaid) */}
                <div
                  className="absolute bg-white rounded-lg shadow-2xl p-4 bg-opacity-95"
                  style={{ marginTop: "150px" }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <i className="fas fa-arrow-left mr-3 text-blue-500"></i>
                      <h3 className="font-bold text-gray-800">Làm Trắng Răng Laser</h3>
                    </div>
                    <i className="fas fa-heart text-gray-300"></i>
                  </div>

                  <div className="bg-blue-600 h-24 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-tooth text-white text-4xl"></i>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-1">Mô tả</h4>
                    <p className="text-gray-600 text-sm">
                      Công nghệ làm trắng răng tiên tiến, hiệu quả ngay lần đầu sử dụng, an toàn cho men răng.
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center mb-1">
                      <i className="fas fa-clock text-blue-500 mr-2"></i>
                      <span className="text-sm text-gray-600">Thời gian: 60 phút</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-certificate text-blue-500 mr-2"></i>
                      <span className="text-sm text-gray-600">Bảo hành: 6 tháng</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-gray-500 text-sm">Giá dịch vụ</div>
                      <div className="text-blue-600 font-bold text-xl">1.500.000₫</div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                      <i className="far fa-calendar-plus mr-2"></i> Đặt lịch ngay
                    </button>
                  </div>
                </div>
              </div>
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
                <div className="text-4xl font-bold mb-1">55%</div>
                <div className="text-sm">tăng tỷ lệ đặt lịch từ trang dịch vụ</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl font-bold mb-1">40%</div>
                <div className="text-sm">khách hàng xem thêm các dịch vụ khác</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl font-bold mb-1">68%</div>
                <div className="text-sm">khách hàng quyết định nhanh hơn</div>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-100">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                Lợi ích kinh doanh
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-gray-700">
                    Tăng 30% doanh thu từ các dịch vụ cao cấp khi khách hàng có thông tin đầy đủ
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-gray-700">
                    Giảm 25% thời gian tư vấn trực tiếp nhờ thông tin chi tiết sẵn có
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
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
        <div className="text-gray-400 text-sm">© 2025 Dental Solutions</div>
      </div>
    </div>
  )
}

export default ServiceFeatureSlide
