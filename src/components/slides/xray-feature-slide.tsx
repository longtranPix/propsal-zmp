import Image from "next/image"

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
          <div className="w-2/5 flex justify-center">
            <div className="app-screen flex flex-col h-[96%] w-8/12">
              {/* App Header */}
              <Image
                src="/images/x-quang.jpg"
                alt="Appointment Feature Screen"
                className="w-full rounded-lg shadow-lg"
              />
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
                <div className="text-4xl! font-bold mb-1">90%</div>
                <div className="text-sm">khách hàng đánh giá cao tính năng xem X-quang</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">85%</div>
                <div className="text-sm">giảm khiếu nại về mất phim X-quang</div>
              </div>

              <div className="stat-box p-4 text-white text-center">
                <div className="text-4xl! font-bold mb-1">35%</div>
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
                  <i className="fas fa-check-circle text-green-500  mr-2"></i>
                  <span className="text-gray-700">
                    Giảm 75% chi phí lưu trữ và quản lý phim X-quang vật lý, tiết kiệm không gian và nhân lực
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-gray-700">
                    Tăng 40% hiệu quả giải thích kế hoạch điều trị khi bệnh nhân có thể xem kết quả trên điện thoại
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
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
        <div className="text-gray-400 text-sm">© Cubable Dental Solutions</div>
      </div>
    </div>
  )
}

export default XrayFeatureSlide
