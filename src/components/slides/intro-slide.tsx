
const IntroSlide = () => {
  return (
    <div className="slide flex flex-col items-center justify-center p-12 font-[family-name:var(--font-montserrat)]">
      {/* Background Elements */}
      <div
        className="circle-pattern bg-blue-200"
        style={{ width: "500px", height: "500px", top: "-200px", right: "-100px" }}
      ></div>
      <div
        className="circle-pattern bg-blue-300"
        style={{ width: "300px", height: "300px", bottom: "-100px", left: "-100px" }}
      ></div>

      <div className="z-10 flex flex-col items-center w-full h-full">
        {/* Logo and Icon Row */}
        <div className="mb-6 flex items-center justify-center">
          <i className="fas fa-teeth text-blue-500 bg-inherit text-5xl mr-4"></i>
          <i className="fab fa-telegram text-blue-400 text-5xl"></i>
        </div>

        {/* Title Section */}
        <h1 className={`title text-6xl mb-4 text-center`}>Zalo Mini App Nha Khoa</h1>

        <div className="w-1/2 gradient-border mb-6"></div>

        <h2 className="subtitle text-2xl! text-center mb-12">
          Giải pháp toàn diện cho quản lý chăm sóc khách hàng nha khoa
        </h2>

        {/* Main Visual: Phone Mockup */}
        <div className="flex justify-center items-center mb-8">
          <div
            className="phone-mockup bg-white p-1.5 border-6 border-gray-800"
            style={{ width: "250px", height: "470px" }}
          >
            <div className="bg-blue-50 w-full h-full flex flex-col">
              <div className="bg-blue-500 text-white p-3 text-center font-semibold">Zalo Mini App</div>
              <div className="flex flex-col items-center justify-center p-4 gap-4 flex-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-tooth text-blue-500 text-2xl"></i>
                </div>
                <div className="text-center text-lg">
                  <p className="font-bold text-lg!">Đặt lịch hẹn</p>
                  <p className="text-lg!">Giới thiệu dịch vụ</p>
                  <p className="text-lg!">Quản lý thanh toán</p>
                  <p className="text-lg!">Theo dõi điều trị</p>
                </div>
                <div className="w-full bg-white rounded-lg p-3 shadow-sm">
                  <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 right-3">
        <div className="text-gray-400 text-sm">© Cubable Dental Solutions</div>
      </div>
    </div>
  )
}

export default IntroSlide
