const executives = [
  { no: 1, name: "ผศ.ดร.ชุมพล เสมาขันธ์", position: "อธิการบดี", status: "ยังไม่ตอบ" },
  { no: 2, name: "ผศ.ดร.พิทักษ์ อยู่มี", position: "รองอธิการบดีฝ่ายบริหาร", status: "เข้าร่วม" },
  { no: 3, name: "รศ.ดร.โชติ บดีรัฐ", position: "รองอธิการบดีฝ่ายแผนและยุทธศาสตร์", status: "เข้าร่วม" },
  { no: 4, name: "รศ.ดร.สนิท ปิ่นสกุล", position: "รองอธิการบดีฝ่ายพัฒนาบัณฑิต", status: "ยังไม่ตอบ" },
  { no: 5, name: "ศ.ดร.คงศักดิ์ ศรีแก้ว", position: "รองอธิการบดีฝ่ายนวัตกรรมและผู้ประกอบการ", status: "รอแจ้งผล" },
  { no: 6, name: "ผศ.ดร.บัญชา ศรีสมบัติ", position: "รองอธิการบดีฝ่ายโครงสร้างพื้นฐานและสารสนเทศ", status: "ไม่เข้าร่วม" },
  { no: 7, name: "ผศ.ว่าที่ ร.ต.ดร.บัญชา สำรวยรื่น", position: "ผู้ช่วยอธิการบดีฝ่ายกิจการนักศึกษา และวิเทศสัมพันธ์", status: "ยังไม่ตอบ" },
  { no: 8, name: "ผศ.ดร.ชาติชาย จันทร์ประทีป", position: "ผู้ช่วยอธิการบดีฝ่ายพัฒนาอาคารสถานที่", status: "เข้าร่วม" },
  { no: 9, name: "รศ.ดร.ประสิทธิชัย นรากรณ์", position: "ผู้ช่วยอธิการบดีฝ่ายบริหารสินทรัพย์และการลงทุน", status: "ยังไม่ตอบ" },
  { no: 10, name: "ผศ.ดร.ปิยวรรณ ศุภวิทิตพัฒนา", position: "ผู้ช่วยอธิการบดีฝ่ายมาตรฐานวิชาการ", status: "เข้าร่วม" },
];

function badgeClass(status: string) {
  if (status === "เข้าร่วม") return "badge success";
  if (status === "ไม่เข้าร่วม") return "badge danger";
  if (status === "รอแจ้งผล") return "badge warning";
  return "badge pending";
}

export default function Home() {
  return (
    <main className="page">
      <header className="topbar">
        <div>
          <p className="eyebrow">มหาวิทยาลัยราชภัฏพิบูลสงคราม</p>
          <h1>ระบบสำรวจการเข้าร่วมกิจกรรมผู้บริหาร</h1>
        </div>
        <button className="primaryButton">+ สร้างกิจกรรมใหม่</button>
      </header>

      <section className="welcome">
        <div>
          <h2>ภาพรวมการตอบรับกิจกรรม</h2>
          <p>ติดตามสถานะการเข้าร่วมของผู้บริหาร และบริหารการส่งคำเชิญจากส่วนกลาง</p>
        </div>
        <span className="demoTag">โหมดตัวอย่าง</span>
      </section>

      <section className="stats">
        <article className="statCard">
          <span>กิจกรรมทั้งหมด</span>
          <strong>1</strong>
          <small>กิจกรรมที่กำลังดำเนินการ</small>
        </article>
        <article className="statCard">
          <span>ตอบรับเข้าร่วม</span>
          <strong className="green">4</strong>
          <small>จากผู้ได้รับเชิญ 10 ท่าน</small>
        </article>
        <article className="statCard">
          <span>ยังไม่ตอบ</span>
          <strong className="blue">4</strong>
          <small>ควรติดตามและส่งเตือน</small>
        </article>
        <article className="statCard">
          <span>ไม่เข้าร่วม / รอแจ้งผล</span>
          <strong className="orange">2</strong>
          <small>ตรวจสอบรายละเอียดรายบุคคล</small>
        </article>
      </section>

      <section className="activityCard">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">กิจกรรมล่าสุด</p>
            <h2>ประชุมคณะกรรมการบริหารมหาวิทยาลัย</h2>
            <p className="muted">วันจันทร์ที่ 30 มีนาคม 2569 เวลา 09:00 น. • ห้องประชุมสภามหาวิทยาลัย</p>
          </div>
          <div className="actions">
            <button className="secondaryButton">คัดลอกสรุป</button>
            <button className="primaryButton">ส่งเตือนผู้ยังไม่ตอบ</button>
          </div>
        </div>

        <div className="progressRow">
          <div>
            <strong>ตอบรับแล้ว 6 จาก 10 ท่าน</strong>
            <p className="muted">กำหนดปิดรับคำตอบ: 29 มีนาคม 2569 เวลา 16:00 น.</p>
          </div>
          <div className="progress"><span /></div>
        </div>

        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>ชื่อ-สกุล</th>
                <th>ตำแหน่ง</th>
                <th>สถานะตอบรับ</th>
                <th>ดำเนินการ</th>
              </tr>
            </thead>
            <tbody>
              {executives.map((executive) => (
                <tr key={executive.no}>
                  <td>{executive.no}</td>
                  <td className="name">{executive.name}</td>
                  <td>{executive.position}</td>
                  <td><span className={badgeClass(executive.status)}>{executive.status}</span></td>
                  <td><button className="linkButton">บันทึกสถานะ</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="footerNote">
        ข้อมูลหน้านี้เป็นตัวอย่างชั่วคราว ขั้นถัดไปจะเชื่อมฐานข้อมูล PostgreSQL และ LINE OA
      </p>
    </main>
  );
}
