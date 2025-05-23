const ChallengesSlide = () => {
  return (
    <div className="slide flex flex-col p-12">
      {/* Background Elements */}
      <div
        className="circle-pattern bg-red-200"
        style={{ width: "450px", height: "450px", top: "-200px", right: "-150px" }}
      ></div>
      <div
        className="circle-pattern bg-blue-300"
        style={{ width: "350px", height: "350px", bottom: "-150px", left: "-150px" }}
      ></div>

      <div className="z-10 flex flex-col w-full">
        {/* Header */}
        <h1 className="title text-5xl mb-2">Thách Thức Trong Chăm Sóc Khách Hàng Nha Khoa</h1>
        <div className="w-1/3 gradient-border mb-8"></div>

        {/* Main Content - Challenge Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Challenge 1 */}
          <div className="challenge-card p-6 relative">
            <div className="card-top-accent bg-gradient-to-r from-blue-500 to-blue-300"></div>
            <div className="flex items-start gap-4 pt-2">
              <div className="icon-bg bg-blue-100">
                <i className="fas fa-calendar-alt text-blue-600 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Quản lý lịch hẹn không hiệu quả</h3>
                <ul className="text-gray-600 list-disc pl-5 space-y-1 text-left">
                  <li>40% khách hàng phàn nàn về thời gian chờ đợi</li>
                  <li>30% lịch hẹn bị hủy phút chót không thông báo</li>
                  <li>Khó điều phối lịch trình bác sĩ với nhu cầu khách hàng</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="challenge-card p-6 relative">
            <div className="card-top-accent bg-gradient-to-r from-red-500 to-red-300"></div>
            <div className="flex items-start gap-4 pt-2">
              <div className="icon-bg bg-red-100">
                <i className="fas fa-comments text-red-600 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Giao tiếp không liên tục với khách hàng</h3>
                <ul className="text-gray-600 list-disc pl-5 space-y-1 text-left">
                  <li>65% khách hàng muốn nhận thông tin sau điều trị</li>
                  <li>Thiếu cập nhật về tiến trình và kết quả điều trị</li>
                  <li>Khách hàng khó tiếp cận thông tin y tế cá nhân</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="challenge-card p-6 relative">
            <div className="card-top-accent bg-gradient-to-r from-purple-500 to-purple-300"></div>
            <div className="flex items-start gap-4 pt-2">
              <div className="icon-bg bg-purple-100">
                <i className="fas fa-chart-pie text-purple-600 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Cạnh tranh khốc liệt giữa các phòng khám</h3>
                <ul className="text-gray-600 list-disc pl-5 space-y-1 text-left">
                  <li>Hơn 70% khách hàng so sánh các phòng khám online</li>
                  <li>Khó nổi bật trong thị trường bão hòa</li>
                  <li>Chi phí quảng cáo digital tăng 25% mỗi năm</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Challenge 4 */}
          <div className="challenge-card p-6 relative">
            <div className="card-top-accent bg-gradient-to-r from-green-500 to-green-300"></div>
            <div className="flex items-start gap-4 pt-2">
              <div className="icon-bg bg-green-100">
                <i className="fas fa-user-friends text-green-600 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Khó khăn trong việc giữ chân khách hàng</h3>
                <ul className="text-gray-600 list-disc pl-5 space-y-1 text-left">
                  <li>55% khách hàng không quay lại sau lần điều trị đầu</li>
                  <li>Thiếu hệ thống theo dõi và nhắc nhở chăm sóc định kỳ</li>
                  <li>Khó theo dõi lịch sử điều trị dài hạn của khách hàng</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Key Statistics */}
        <div className="challenge-card p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <i className="fas fa-exclamation-triangle text-yellow-500 mr-3"></i>
            Tác động đến hoạt động kinh doanh nha khoa
          </h3>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center p-4">
              <div className="text-4xl! font-bold text-red-500 mb-2">35%</div>
              <div className="text-gray-600 text-center">
                Tỷ lệ khách hàng
                <br />
                không quay lại
              </div>
            </div>
            <div className="h-16 border-l border-gray-200"></div>
            <div className="flex flex-col items-center p-4">
              <div className="text-4xl! font-bold text-orange-500 mb-2">20%</div>
              <div className="text-gray-600 text-center">
                Thời gian lãng phí
                <br />
                vào quản lý thủ công
              </div>
            </div>
            <div className="h-16 border-l border-gray-200"></div>
            <div className="flex flex-col items-center p-4">
              <div className="text-4xl! font-bold text-blue-500 mb-2">45%</div>
              <div className="text-gray-600 text-center">
                Khách hàng muốn
                <br />
                đặt lịch online
              </div>
            </div>
            <div className="h-16 border-l border-gray-200"></div>
            <div className="flex flex-col items-center p-4">
              <div className="text-4xl! font-bold text-green-500 mb-2">70%</div>
              <div className="text-gray-600 text-center">
                Ưu tiên trải nghiệm
                <br />
                khách hàng thuận tiện
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

export default ChallengesSlide
