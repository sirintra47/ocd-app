import Link from "next/link";
import React from "react";

export default function Portfolio1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเดินการเปลี่ยนแปลงองค์กรภาครัฐ
              {/* <small>Subheading</small> */}
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">หน้าหลัก</a>
              </li>
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเดินการเปลี่ยนแปลงองค์กรภาครัฐในยุคดิจิทัล</h3>
                <p>
                  ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                  กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                </p>
                <p>
                  “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง”
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-1-66.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐให้เกิดประสิทธิผล</h3>
                <p>
                  การบริหารงานภาครัฐแนวใหม่ (New Public Management) คือ
                  การปรับเปลี่ยนการบริหารจัดการภาครัฐโดยนำหลักการเพิ่มประสิทธิภาพของระบบราชการและการแสวงหาประสิทธิภาพในการปฏิบัติราชการที่มุ่งสู่ความเป็นเลิศ
                  โดยการนำเอาแนวทางหรือวิธีการบริหารงานของภาคเอกชนมาปรับใช้กับการบริหารงานภาครัฐ
                  เช่น การบริหารงานแบบมุ่งเน้นผลสัมฤทธิ์ การบริหารงานแบบมืออาชีพ
                  การคำนึงถึงหลักความคุ้มค่า
                  การจัดการโครงสร้างที่กะทัดรัดและแนวราบ
                  การเปิดโอกาสให้เอกชนเข้ามาแข่งขันการให้บริการสาธารณะ
                  การให้ความสำคัญต่อค่านิยม จรรยาบรรณวิชาชีพ คุณธรรมและจริยธรรม
                  ตลอดทั้งการมุ่งเน้นการให้บริการแก่ประชาชนโดยคำนึงถึงคุณภาพเป็นสำคัญ
                </p>
                <p>
                  เช่น การบริหารงานแบบมุ่งเน้นผลสัมฤทธิ์ การบริหารงานแบบมืออาชีพ
                  การคำนึงถึงหลักความคุ้มค่า
                  การจัดการโครงสร้างที่กะทัดรัดและแนวราบ
                  การเปิดโอกาสให้เอกชนเข้ามาแข่งขันการให้บริการสาธารณะ
                  การให้ความสำคัญต่อค่านิยม จรรยาบรรณวิชาชีพ คุณธรรมและจริยธรรม
                  ตลอดทั้งการมุ่งเน้นการให้บริการแก่ประชาชนโดยคำนึงถึงคุณภาพเป็นสำคัญ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-67-71.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลง
                  เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล
                </h3>
                <p>
                  เป็นที่ชัดเจนว่า เรากำลังเผชิญกับการใช้ชีวิต
                  การทำธุรกิจบนโลกมีลักษณะผันผวน ไม่แน่นอน สลับซับซ้อน และกำกวม
                  หรือที่เรียกว่า VUCA(Volatility, Uncertainty, Complexity และ
                  Ambiguity)
                  อันเนื่องจากผลกระทบจากเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว
                  โดยเฉพาะเทคโนโลยีดิจิทัลที่มีรากเหง้ามาจากเทคโนลีสารสนเทศและการสื่อสาร
                  (ICT: Information and Communication Technology)
                </p>
                <p>
                  เทคโนโลยีดิจิทัลเป็นหนึ่งในสามเทคโนโลยีสู่ยุคอนาคต
                  ที่รวมถึงเทคโนโลยีชีวภาพ และเทคโนโลยีนาโน
                  ซึ่งคือยุคปฏิวัติอุตสาหกรรมครั้งที่ 4 (4th Industrial
                  Revolution)
                  ที่เกิดการเชื่อมต่อระหว่างคนกับคอมพิวเตอร์อย่างไร้รอยต่อ
                  (Seamless Interaction) อันนำไปสู่จักรวาลนฤมิต หรือ เมตาเวิร์ส
                  (Metaverse)
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-72-75.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  7
                  ปัจจัยที่มีผลต่อการเปลี่ยนแปลงครั้งใหญ่จากความคิดเห็นของผู้บริหาร
                  2000 คน
                </p>
                <p>
                  ในการสำรวจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า
                  2,000 ราย โดย McKinsey ในปี 2014
                  ตอนหนึ่งของรายงานได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งสำคัญที่ช่วยให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
                  ซึ่งมีด้วยกันอยู่ 7 ข้อ ที่สรุปมาให้อ่านกันแล้ววันนี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-76-78.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Five */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  คุณพร้อมไหม? …นักจิตวิทยาพร้อมจะช่วย
                  การสร้างความพร้อมในการเปลี่ยนแปลงพฤติกรรมเพื่อส่งเสริมสุขภาพ
                </p>
                <p>
                  ผลการวิจัยทางด้านพฤติกรรมสุขภาพจำนวนมากพบผลสอดคล้องกันว่า
                  การออกกำลังกายส่งผลดีต่อสุขภาพทั้งด้านร่างกาย จิตใจ
                  และสังคมของผู้ออกกำลังกาย เช่น ทำให้ร่างกายแข็งแรง
                  และมีอารมณ์สดชื่นแจ่มใส
                  การออกกำลังกายที่ต้องทำเป็นกิจกรรมกลุ่ม เช่น การตีแบดมินตัน
                  การเล่นบาส
                  ยังเป็นการเปิดโอกาสให้เราได้สร้างความรู้จักกับคนอื่นๆ
                  ที่มีความหลากหลาย คนต่างอาชีพ ต่างวัยมากขึ้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-79-82.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project six */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง</h3>
                <p>แบบสำรวจการจัดการการเปลี่ยนแปลงมากกว่า 100 ข้อ</p>
                <p>
                  แบบสำรวจการจัดการการเปลี่ยนแปลงมากกว่า 100 ข้อ
                  แบบสำรวจการจัดการการเปลี่ยนแปลงแบบสนทนาได้รับอัตราการตอบสนองสูงสุด
                  สร้างแบบสำรวจได้อย่างง่ายดายด้วยเทมเพลตสำเร็จรูป
                  นี่คือแบบสำรวจข้อเสนอแนะเกี่ยวกับการจัดการการเปลี่ยนแปลงที่จะช่วยคุณในกระบวนการรวบรวมข้อเสนอแนะและดำเนินการตามนั้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-83-85.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project seven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://www.humanica.com/th/resistance-to-change/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การต่อต้านการเปลี่ยนแปลงคืออะไร องค์กรควรรับมืออย่างไร
                  </Link>
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลง
                  นับว่าเป็นปัญหาสำคัญที่หลายองค์กรมักมองข้าม
                  เพราะด้วยความคิดที่ว่า หากมีนโยบายการเปลี่ยนแปลงใดๆ ขึ้นมา
                  เหล่าพนักงานย่อมต้องเชื่อฟังและปฏิบัติตาม แต่เชื่อไหมว่า
                  มีบางส่วนเท่านั้นที่ยอมรับได้
                  และแน่นอนว่าก็มีบางส่วนที่ยอมรับไม่ได้เช่นกัน
                  นำมาสู่การต่อต้านการเปลี่ยนแปลงในที่สุด สำหรับบทความนี้
                  Humanica
                  จะมาเจาะลึกถึงสาเหตุและวิธีการรับมือกับสถานการณ์ที่ว่ามานี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-86-89.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project eight */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การเอาชนะการต่อต้านการเปลี่ยนแปลง </h3>
                <p>
                  <Link
                    href="https://primeast.com/us/insights/7-strategies-for-overcoming-resistance-to-change-in-the-workplace/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    7 กลยุทธ์ในการเอาชนะการต่อต้านการเปลี่ยนแปลงในสถานที่ทำงาน{" "}
                  </Link>
                </p>
                <p>
                  การเปลี่ยนแปลงองค์กรเป็นเรื่องยาก ในโลกทุกวันนี้
                  การเปลี่ยนแปลงคือสิ่งเดียวที่ไม่เปลี่ยนแปลงซึ่งอยู่รอบตัวเรา
                  ในธุรกิจก็เช่นกัน สำหรับพนักงาน
                  การเปลี่ยนแปลงอาจเป็นเรื่องสำคัญ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-90-92.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project nine */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://lsaglobal.com/essential-components-of-a-successful-vision-for-change/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    วิสัยทัศน์ในการเปลี่ยนแปลงคืออะไร?
                  </Link>
                </p>
                <p>
                  <ol style={{ listStyleType: "disc" }}>
                    <li>
                      การเปลี่ยนแปลงในอนาคตจะมีลักษณะและความรู้สึกอย่างไร?
                    </li>
                    <li>
                      {" "}
                      เหตุใดการเปลี่ยนแปลงที่ต้องการจึงดีกว่าสิ่งที่เป็นอยู่ตอนนี้?
                    </li>
                    <li>
                      ตัวเร่งปฏิกิริยาใดที่ทำให้การเปลี่ยนแปลงมีความสำคัญหรือเร่งด่วนในขณะนี้เมื่อเปรียบเทียบกับลำดับความสำคัญอื่นๆ
                    </li>
                    <li>
                      {" "}
                      อะไรทำให้การเปลี่ยนแปลงเหล่านี้สร้างแรงบันดาลใจและน่าจดจำในระดับบุคคล
                      ทีม และองค์กร?
                    </li>
                    <li>
                      การเปลี่ยนแปลงจะสอดคล้องกับกลยุทธ์โดยรวมขององค์กรของเรา
                      จุดมุ่งหมายที่กว้างขึ้น และวัฒนธรรมองค์กรอย่างไร
                    </li>
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-93-98.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project ten */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์</h3>
                <p>
                  <Link
                    href="https://www.popticles.com/branding/how-to-write-effective-vision-statement/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    วิธีเขียน Vision Statement ให้มีประสิทธิภาพ
                  </Link>
                </p>
                <p>
                  Vision Statement หรือคำกล่าวถึงวิสัยทัศน์ของแบรนด์หรือองค์กร
                  ซึ่งมันคือแนวทางที่แสดงออกให้เห็นถึงการที่จะไปสู่เป้าหมายของแบรนด์หรือการทำธุรกิจ
                  ผ่านคำพูดหรือข้อความและมีการสื่อสารไปยังผู้มีส่วนได้ส่วนเสียทุกๆฝ่าย
                  (Stakeholders) ไม่ว่าจะเป็นพนักงาน คู่ค้าทางธุรกิจ ลูกค้า
                  ผู้ถือหุ้น สื่อมวลชน และคนที่เกี่ยวข้อง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-99-102.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project eleven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การค้นหาผู้มีส่วนได้ส่วนเสีย</h3>
                <p>
                  <Link
                    href="https://thailandpolicylab.com/stakeholder-analysis/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ทำความรู้จักมนนุษย์ให้ดีขึ้นด้วย
                    วิเคราะห์ผู้มีส่วนได้ส่วนเสีย
                  </Link>
                </p>
                <p>
                  ปฏิเสธไม่ได้เลยว่าผู้มีส่วนได้ส่วนเสียเป็นหนึ่งในปัจจัยที่จะมาตัดสินความสำเร็จของโครงการใดๆ
                  ก็ตาม เนื่องจากโครงการจะ “สำเร็จ” ได้ก็ด้วยเครือข่ายสนับสนุน
                  ขณะเดียวกันโครงการนั้นก็สามารถ “ล้มเหลว”
                  ได้โดยผู้คนกลุ่มเดียวกันนี้เอง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-103-106.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project twelve */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การโน้มน้าวผู้มีส่วนได้ส่วนเสีย</h3>
                <p>
                  <Link
                    href="https://medium.com/@glenn_6066/how-to-influence-stakeholders-as-the-ceo-420128852e30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    วิธีการสร้างอิทธิพลต่อผู้มีส่วนได้ส่วนเสียในฐานะ CEO
                  </Link>
                </p>
                <p>
                  นฐานะซีอีโอ คุณมีผู้มีส่วนได้ส่วนเสียจำนวนมาก
                  และคุณมีหน้าที่รับผิดชอบในการจัดการความสัมพันธ์กับผู้มีส่วนได้ส่วนเสียเหล่านี้
                  ในโพสต์บล็อกนี้
                  ฉันจะพูดถึงวิธีที่ดีที่สุดในการจัดการความสัมพันธ์กับผู้มีส่วนได้ส่วนเสียของคุณ
                  เพื่อสร้างอิทธิพลต่อพวกเขาเพื่อประโยชน์ของคุณและบริษัทของคุณ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-107-110.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project thirteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://whatfix.com/blog/change-advisory-board/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    คณะกรรมการที่ปรึกษาการเปลี่ยนแปลงคืออะไร
                    แนวทางปฏิบัติที่ดีที่สุดและประโยชน์
                  </Link>
                </p>
                <p>
                  ลองนึกภาพองค์กรของคุณเป็นวงออเคสตราซิมโฟนี แต่ละแผนก ทีม
                  และบุคคลต่างๆ จะเล่นเครื่องดนตรีที่มีเอกลักษณ์เฉพาะตัว
                  ซึ่งช่วยให้ธุรกิจของคุณก้าวไปข้างหน้าได้อย่างกลมกลืน
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-111-114.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project fourteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การประคับประคองการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4696032/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    วิธีการปรับปรุงคุณภาพการส่งมอบการดูแลแบบประคับประคอง:
                    การทบทวนอย่างเป็นระบบ
                  </Link>
                </p>
                <p>
                  ประสิทธิผลในการปรับปรุงผลลัพธ์ในโดเมนการดูแลแบบประคับประคองยังคงไม่ชัดเจน
                  เราดำเนินการทบทวนอย่างเป็นระบบของการแทรกแซงการปรับปรุงคุณภาพประเภทต่างๆ
                  ที่เกี่ยวข้องกับการดูแลแบบประคับประคอง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_pocessing-115-119.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
