const ImplementationSlide = () => {
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

      <div className="z-10 flex flex-col w-full h-full">
        {/* Header */}
        <h1 className="title text-5xl mb-2">Kế Hoạch Triển Khai</h1>
        <div className="w-1/3 gradient-border mb-8"></div>

        <div className="flex space-x-6">
          {/* Left Column - Timeline */}
          <div className="w-4/5">
            <div className="timeline-container relative h-full">
              <div className="timeline-line"></div>

              {/* Phase 1 */}
              <div className="timeline-item">
                <div className="timeline-point text-right"></div>
                <div className="timeline-content">
                  <div className="phase-pill bg-blue-100 text-blue-700 text-base!">Giai đoạn 1 • Tuần 1-2</div>
                  <h3 className="text-lg! font-bold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-clipboard-check text-blue-500 mr-2"></i>
                    Đánh giá & Chuẩn bị
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-blue-500 mr-2"></i> Phân tích nhu cầu phòng khám
                    </li>
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-blue-500 mr-2"></i> Thu thập yêu cầu cụ thể
                    </li>
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-blue-500 mr-2"></i> Đánh giá hệ thống hiện tại
                    </li>
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-blue-500 mr-2"></i> Lập kế hoạch triển khai
                    </li>
                  </ul>
                  <div className="mt-3 bg-blue-50 p-2 rounded-lg text-xs text-blue-700 text-base!">
                    <i className="fas fa-lightbulb mr-1"></i> Kết quả: Bản phân tích yêu cầu & lộ trình triển khai
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="timeline-item">
                <div className="timeline-point"></div>
                <div className="timeline-content">
                  <div className="phase-pill bg-cyan-100 text-cyan-700 text-base!">Giai đoạn 2 • Tuần 3</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-cogs text-cyan-500 mr-2"></i>
                    Cài đặt & Tích hợp
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1 text-left">
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-cyan-500 mr-2 text-base!"></i> Cài đặt Mini App trên hệ thống Zalo
                    </li>
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-cyan-500 mr-2 text-base!"></i> Tích hợp với phần mềm nha khoa hiện
                      tại
                    </li>
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-cyan-500 mr-2 text-base!"></i> Thiết lập hệ thống thông báo
                    </li>
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-cyan-500 mr-2 text-base!"></i> Cấu hình bảo mật dữ liệu
                    </li>
                  </ul>
                  <div className="mt-3 bg-cyan-50 p-2 rounded-lg text-xs text-cyan-700 text-base!">
                    <i className="fas fa-check-circle mr-1"></i> Kết quả: Hệ thống mini app hoạt động đầy đủ
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="timeline-item">
                <div className="timeline-point"></div>
                <div className="timeline-content">
                  <div className="phase-pill bg-green-100 text-green-700 text-base!">Giai đoạn 3 • Tuần 4</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center text-base!">
                    <i className="fas fa-user-cog text-green-500 mr-2"></i>
                    Đào tạo nhân viên
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-green-500 mr-2 text-base!"></i> Đào tạo đội ngũ lễ tân & quản lý
                    </li>
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-green-500 mr-2 text-base!"></i> Hướng dẫn bác sĩ sử dụng hệ thống
                    </li>
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-green-500 mr-2 text-base!"></i> Tạo tài liệu hướng dẫn sử dụng
                    </li>
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-green-500 mr-2 text-base!"></i> Giải đáp thắc mắc & hỗ trợ trực tiếp
                    </li>
                  </ul>
                  <div className="mt-3 bg-green-50 p-2 rounded-lg text-xs text-green-700 text-base!">
                    <i className="fas fa-graduation-cap mr-1"></i> Kết quả: Nhân viên sử dụng thành thạo
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="timeline-item">
                <div className="timeline-point"></div>
                <div className="timeline-content">
                  <div className="phase-pill bg-indigo-100 text-indigo-700 text-base!">Giai đoạn 4 • Tuần 4</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center text-base!">
                    <i className="fas fa-rocket text-indigo-500 mr-2"></i>
                    Triển khai & Hỗ trợ
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1 text-left">
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-indigo-500 mr-2"></i> Ra mắt cho khách hàng
                    </li>
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-indigo-500 mr-2"></i> Chiến dịch truyền thông & hướng dẫn
                      KH
                    </li>
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-indigo-500 mr-2"></i> Giám sát & tối ưu hóa hoạt động
                    </li>
                    <li className="flex items-center text-base!">
                      <i className="fas fa-circle text-xs text-indigo-500 mr-2"></i> Hỗ trợ kỹ thuật 24/7
                    </li>
                  </ul>
                  <div className="mt-3 bg-indigo-50 p-2 rounded-lg text-xs text-indigo-700 text-base!">
                    <i className="fas fa-flag-checkered mr-1"></i> Kết quả: Hệ thống hoạt động toàn diện
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Information */}
          <div className="w-1/5 flex flex-col space-y-4">
            <div className="quick-facts text-white">
              <h3 className="font-bold text-lg mb-4">Thời gian triển khai</h3>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div>
                  <div className="text-xs opacity-80 text-base!">Tổng thời gian</div>
                  <div className="text-xl font-bold text-base!">4 tuần</div>
                </div>
              </div>
              <div className="h-px bg-white bg-opacity-20 my-3"></div>
              <div className="text-sm font-semibold mb-1 text-base!">Nâng cấp liên tục</div>
              <div className="text-xs opacity-80 text-base!">Cập nhật tính năng mới mỗi quý</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800 text-lg mb-4 text-base!">Yêu cầu chuẩn bị</h3>
              <ul className="text-sm text-gray-600 space-y-3 text-left">
                <li className="flex items-start text-sm!">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span>Dữ liệu khách hàng hiện có</span>
                </li>
                <li className="flex items-start text-sm!">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span>Danh sách dịch vụ & bảng giá</span>
                </li>
                <li className="flex items-start text-sm!">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span>Quy trình vận hành phòng khám</span>
                </li>
                <li className="flex items-start text-sm!">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span>Tài khoản Zalo OA Business</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="font-semibold text-blue-700 mb-2 text-base!">Cam kết hỗ trợ</div>
              <div className="text-sm text-gray-600 text-base!">
                Hỗ trợ kỹ thuật 24/7 trong suốt quá trình triển khai và 12 tháng sau khi hoàn tất
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 right-8 text-gray-400 text-sm">© Cubable Dental Solutions</div>
    </div>
  )
}

export default ImplementationSlide
