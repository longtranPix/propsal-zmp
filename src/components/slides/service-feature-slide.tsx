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
            <div className="app-screen w-8/12 h-[90%] flex flex-col">
              <video width="400" loop autoPlay muted>
                <source src="/videos/services.mp4" type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
                Your browser does not support HTML video.
            </video>
            </div>
          </div>

          {/* Right Column - Benefits and Stats */}
          <div className="w-3/5 pl-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Danh mục dịch vụ chi tiết, trực quan</h2>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-purple-100">
                <i className="fas fa-eye text-purple-600 text-xl"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-base! font-bold text-gray-800 mb-1">Hiển thị trực quan</h3>
                  <p className="text-sm! text-gray-600"> Dịch vụ nha khoa được trình bày với hình ảnh và thông tin chi tiết, giúp khách hàng dễ dàng tìm hiểu</p>
                </div>
              </div>

              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-purple-100">
                  <i className="fas fa-calendar-check text-amber-600 text-xl"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-base! font-bold text-gray-800 mb-1">Đặt lịch trực tiế</h3>
                  <p className="text-sm! text-gray-600"> Khách hàng có thể đặt lịch ngay từ trang chi tiết dịch vụ, giảm các bước chuyển đổi không cần thiết</p>
                </div>
              </div>

              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-amber-100">
                <i className="fas fa-filter text-blue-600 text-xl"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-base! font-bold text-gray-800 mb-1">Phân loại thông minh</h3>
                  <p className="text-sm! text-gray-600">Dịch vụ được phân loại và đề xuất theo nhu cầu của từng khách hàng dựa trên lịch sử điều trị</p>
                </div>
              </div>

              <div className="app-feature p-4 flex items-start">
                <div className="feature-icon bg-green-100">
                <i className="fas fa-tag text-green-600 text-xl"></i>
                </div>
                <div className="text-left">
                  <h3 className="text-base! font-bold text-gray-800 mb-1">Ưu đãi cá nhân hóa</h3>
                  <p className="text-sm! text-gray-600">Hiển thị các khuyến mãi và ưu đãi phù hợp với từng đối tượng khách hàng</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">55%</div>
                <div className="text-sm!">tăng tỷ lệ đặt lịch từ trang dịch vụ</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">40%</div>
                <div className="text-sm!">khách hàng xem thêm các dịch vụ khác</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">68%</div>
                <div className="text-sm!">khách hàng quyết định nhanh hơn</div>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg! font-bold text-gray-800 mb-3 flex items-center">
                <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                Lợi ích kinh doanh
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500  mr-2 text-sm!"></i>
                  <span className="text-gray-700 text-sm!">
                    Tăng 30% doanh thu từ các dịch vụ cao cấp khi khách hàng có thông tin đầy đủ
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 text-sm!"></i>
                  <span className="text-gray-700 text-sm!">
                    Giảm 25% thời gian tư vấn trực tiếp nhờ thông tin chi tiết sẵn có
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 text-sm!"></i>
                  <span className="text-gray-700 text-sm!">
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
