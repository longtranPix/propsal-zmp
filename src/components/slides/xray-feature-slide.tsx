const XrayFeatureSlide = () => {
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
        <h1 className="title text-5xl mb-2">Kết Quả X-quang và Xét Nghiệm</h1>
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
                  <div className="font-bold">Kết Quả X-quang</div>
                </div>
                <i className="fas fa-cloud-download-alt"></i>
              </div>

              {/* App Content */}
              <div className="flex-1 p-4 bg-gray-50 overflow-y-auto flex flex-col">
                {/* Patient Info */}
                <div className="bg-white rounded-lg shadow p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <i className="fas fa-user text-blue-500"></i>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Nguyễn Văn Bình</div>
                        <div className="text-xs text-gray-500">ID: BN-20250515</div>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">
                      Mới cập nhật
                    </div>
                  </div>
                </div>

                {/* X-ray Results */}
                <div className="bg-white rounded-lg shadow p-4 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-bold text-gray-800">X-quang Panorama</div>
                    <div className="text-xs text-gray-500">15/05/2025</div>
                  </div>

                  {/* X-ray Image */}
                  <div className="xray-img mb-3 flex items-center justify-center">
                    <div className="text-white opacity-70 text-center">
                      <i className="fas fa-tooth text-4xl mb-2"></i>
                      <div>Hình ảnh X-quang toàn cảnh</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-700 mb-1">Kết luận</div>
                    <div className="text-sm text-gray-600">
                      Phát hiện sâu răng mặt nhai số 46, 47. Cần điều trị nha khoa.
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button className="flex items-center text-blue-500 text-sm font-semibold">
                      <i className="fas fa-share-alt mr-1"></i> Chia sẻ
                    </button>
                    <button className="flex items-center text-blue-500 text-sm font-semibold">
                      <i className="fas fa-download mr-1"></i> Tải về
                    </button>
                  </div>
                </div>

                {/* Other Tests */}
                <div className="font-bold text-gray-700 mb-2">Các kết quả khác</div>

                <div className="space-y-3">
                  <div className="bg-white rounded-lg shadow p-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <i className="fas fa-x-ray text-amber-500"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">X-quang cận trâm</div>
                        <div className="text-xs text-gray-500">10/05/2025</div>
                      </div>
                    </div>
                    <i className="fas fa-chevron-right text-gray-400"></i>
                  </div>

                  <div className="bg-white rounded-lg shadow p-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <i className="fas fa-vial text-purple-500"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Xét nghiệm nha chu</div>
                        <div className="text-xs text-gray-500">08/05/2025</div>
                      </div>
                    </div>
                    <i className="fas fa-chevron-right text-gray-400"></i>
                  </div>

                  <div className="bg-white rounded-lg shadow p-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <i className="fas fa-camera text-green-500"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Hình ảnh nội khoa</div>
                        <div className="text-xs text-gray-500">01/05/2025</div>
                      </div>
                    </div>
                    <i className="fas fa-chevron-right text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits and Stats */}
          <div className="w-3/5 pl-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quản lý kết quả chẩn đoán hình ảnh hiệu quả</h2>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-bolt text-blue-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Chuyển kết quả tức thời</h3>
                <p className="text-gray-600">
                  Phim X-quang và kết quả xét nghiệm được gửi trực tiếp đến ứng dụng của khách hàng ngay sau khi thực
                  hiện
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-lock text-green-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Bảo mật thông tin y tế</h3>
                <p className="text-gray-600">
                  Hệ thống mã hóa đầu cuối giúp bảo vệ dữ liệu nhạy cảm, đảm bảo an toàn thông tin cho khách hàng
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-history text-purple-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Lưu trữ lâu dài</h3>
                <p className="text-gray-600">
                  Khách hàng có thể truy cập kết quả X-quang và xét nghiệm mọi lúc, không giới hạn thời gian và không lo
                  mất dữ liệu
                </p>
              </div>

              <div className="feature-card p-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-share-nodes text-amber-600 text-xl"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Chia sẻ với chuyên gia</h3>
                <p className="text-gray-600">
                  Khách hàng có thể dễ dàng chia sẻ kết quả với các bác sĩ khác để xin ý kiến tư vấn hoặc chăm sóc tiếp
                  theo
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl font-bold mb-1">90%</div>
                <div className="text-sm">khách hàng đánh giá cao tính năng xem X-quang</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl font-bold mb-1">85%</div>
                <div className="text-sm">giảm khiếu nại về mất phim X-quang</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl font-bold mb-1">35%</div>
                <div className="text-sm">tăng hiệu quả tư vấn điều trị</div>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-100">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                Lợi ích cho nha khoa
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-gray-700">
                    Giảm 75% chi phí lưu trữ và quản lý phim X-quang vật lý, tiết kiệm không gian và nhân lực
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-gray-700">
                    Tăng 40% hiệu quả giải thích kế hoạch điều trị khi bệnh nhân có thể xem kết quả trên điện thoại
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-gray-700">
                    Thu hút khách hàng mới với công nghệ hiện đại, tạo lợi thế cạnh tranh so với các phòng khám truyền
                    thống
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

export default XrayFeatureSlide
