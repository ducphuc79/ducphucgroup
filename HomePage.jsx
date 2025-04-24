
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('https://tse1.mm.bing.net/th?id=OIP.HEwWABwCXGhpaKuC7ueqoQHaFv&pid=Api')" }}>
      <div className="bg-white bg-opacity-80 min-h-screen p-6 md:p-12">
        <header className="mb-10 text-center">
          <div className="mx-auto h-24 mb-4 flex items-center justify-center">
            <span className="text-3xl font-bold text-[#7b2f26] tracking-wide">
              ĐỨC PHÚC GROUP
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#7b2f26] uppercase">
            CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ ĐỨC PHÚC GROUP
          </h1>
          <p className="text-[#a94438] text-lg mt-2 font-medium">
            SÀN GIAO DỊCH BĐS ĐỨC PHÚC – Uy tín tạo niềm tin, chuyên nghiệp tạo giá trị
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="shadow-xl border border-[#7b2f26]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#7b2f26]">Lĩnh vực hoạt động</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Hỗ trợ pháp lý hồ sơ đất đai</li>
                <li>Môi giới BĐS và BĐS giá trị cao tại Đắk Lắk</li>
                <li>Tư vấn, giới thiệu, lập dự án, hợp tác đầu tư BĐS</li>
                <li>Phân phối dự án BĐS</li>
                <li>Tư vấn kiến trúc và xây dựng nhà ở, công trình doanh nghiệp</li>
                <li>Tư vấn du học và xuất khẩu lao động</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-xl border border-[#a94438]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#a94438]">Liên hệ tư vấn</h2>
              <form className="space-y-4">
                <Input placeholder="Họ và tên" />
                <Input placeholder="Số điện thoại" />
                <Input placeholder="Nội dung cần hỗ trợ" />
                <Button className="w-full bg-[#7b2f26] hover:bg-[#5e231c]">Gửi thông tin</Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <footer className="text-center text-[#7b2f26] text-sm border-t border-[#d6b8ae] pt-6">
          © 2025 CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ ĐỨC PHÚC GROUP<br />
          Sàn Giao Dịch BĐS Đức Phúc<br />
          📞 0262 360 7979 | ✉️ ducphucxd79@gmail.com<br />
          Fanpage: <a href="https://www.facebook.com/ducphucgroup79" className="text-[#a94438] hover:underline">fb.com/ducphucgroup79</a>
        </footer>
      </div>
    </div>
  );
}
