import React from "react";

export default function Blogpost1() {
  return (
    <div>
      <>
        !&lt;-- full Title --&gt;
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              Post Title
              <small>Subheading</small>
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Blog Home 2</li>
            </ol>
          </div>
          <div className="row">
            {/* Post Content Column */}
            <div className="col-lg-8">
              {/* Preview Image */}
              <img
                className="img-fluid rounded"
                src="images/blog-item-01.jpg"
                alt=""
              />
              <hr />
              {/* Date/Time */}
              <p>โพสเมื่อ 18 ธันวาคม 2567 โดยสิรินทรา ยืนนาน</p>
              <hr />
              {/* Post Content */}
              <p className="lead">แนวคิดปรัชญากับการพัฒนาองค์การ</p>
              <p>
                แนวคิดปรัชญากับการพัฒนาองค์การ ได้เเก่
                <ol className="ml-4" style={{ listStyleType: "lower-alpha" }}>
                  <li>
                    {" "}
                    การกำหนดรูปแบบในการพัฒนาองค์การ การกำหนดเป้าหมาย
                    และตัวชี้วัดให้ชัดเจน (KPI){" "}
                  </li>
                  <li> มีแนวคิดเชิงบวกเกี่ยวกับองค์การ</li>
                  <li> มีที่ปรึกษาด้านการพัฒนาองค์การ</li>
                </ol>
              </p>
              <p className="lead">การพัฒนาองค์กร คืออะไร</p>
              <p>
                การพัฒนาองค์กร คือ
                <ol className="ml-4" style={{ listStyleType: "upper-latin" }}>
                  <li> การกระทำที่มีการวางแผนล่วงหน้า</li>
                  <li> นำไปปฏิบัติทั่วทั้งองค์การ</li>
                  <li> บริหารโดยผู้บริหารระดับสูง</li>
                  <li>
                    {" "}
                    เพื่อเพิ่มประสิทธิผลและความสามารถขององค์การ
                    เป็นการเปลี่ยนแปลงกระบวนการขององค์การ
                  </li>
                  <li>
                    {" "}
                    กิจกรรมพัฒนาองค์การที่วางแผนไว้ (Planned Intervention)
                    และสอดคล้องกับองค์ความรู้ด้านพฤติกรรมศาสตร์ (Behavioral
                    Science)
                  </li>
                  <li>
                    {" "}
                    กระบวนการเปลี่ยนแปลงวัฒนธรรมองค์การตามที่วางแผนไว้
                    ด้วยการประยุกต์ใช้เทคโนโลยี งานวิจัย และทฤษฎี Behavioral
                    Sciences
                  </li>
                  <li>
                    {" "}
                    กิจกรรมพัฒนาองค์การที่วางแผนล่วงหน้า และอยู่บนพื้นฐานของ
                    Behavioral Sciences โดยมุ่งที่การปรับปรุงการทำงานขององค์การ
                    และการพัฒนาบุคคล
                  </li>
                  <li>
                    {" "}
                    การเปลี่ยนแปลงวัฒนธรรม เทคโนโลยีและการจัดการทั่วทั้งองค์การ
                    หรืออย่างน้อยมีหน่วยงานเกิดการเปลี่ยนแปลง
                  </li>
                  <li>
                    {" "}
                    ระบบการวางแผนลยุทธ์ด้าน Behavioral Science สร้างความเข้าใจ
                    ในพัฒนาและเปลี่ยนแปลงองค์การ เพื่อปรับปรุงประสิทธิผล
                    และความสามารถขององค์การทั้งในปัจจุบันและอนาคต
                  </li>
                </ol>
              </p>
              System Theory
              <p>
                OD ได้รับอิทธิพลองค์ความรู้มาจากศาสตร์ที่หลากหลาย ได้เเก่
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li> จิตวิทยาสังคม (Social Psychology)</li>
                  <li> กระบวนการกลุ่ม (Group Dynamics)</li>
                  <li>
                    {" "}
                    จิตวิทยาอุตสาหกรรมและองค์การ (Industrial and Organization
                    Psychology)
                  </li>
                  <li>
                    ทฤษฎีการจัดการแบบมีส่วนร่วม (Participative Management
                    Theory)
                  </li>
                  <li>พฤติกรรมองค์การ (Organization Behavior)</li>
                  <li>สังคมวิทยา (Sociology)</li>
                  <li>. จิตบำบัด (Psychotherapy)</li>
                </ol>
              </p>
              <p className="lead">ธรรมชาติของ OD คืออะไร</p>
              <p>
                ธรรมชาติของ OD (The Nature of OD) คือ
                <ol className="ml-4" style={{ listStyleType: "upper-roman" }}>
                  <li>
                    {" "}
                    OD เกี่ยวข้องศาสตร์หลายแขนง โดยมี Behavioral Sciences
                    เป็นแกนกลางหรือแกนหลัก
                  </li>
                  <li> เป้าหมายหลักของ OD คือปรับปรุงประสิทธิผลขององค์การ</li>
                  <li>
                    {" "}
                    ขอบเขตของการทำ OD คือทำทั่วทั้งระบบ ได้แก่ ฝ่าย แผนก กลุ่ม
                    บุคคล ชุมชน ประเทศ ภูมิภาค
                  </li>
                  <li>OD ตระหนักถึงความมุ่งมั่น สนับสนุน และการมีส่วนร่วม</li>
                  <li>OD กลยุทธ์ระยะยาวที่องค์การได้วางแผนไว้</li>
                  <li>OD ให้ความสำคัญกับระบบทั้งระบบ และองค์ประกอบของระบบ</li>
                  <li> OD ต้องอาศัยความร่วมมือจากบุคคลต่างๆ</li>
                  <li>
                    {" "}
                    OD คือกิจกรรมบนพื้นฐานทางวิชาการ ที่ออกแบบสำหรับการพัฒนา
                    <ul className="ml-4" style={{ listStyleType: "square" }}>
                      <li>ค่านิยม (Values)</li>
                      <li>ทัศนคติ (Attitudes)</li>
                      <li>บรรทัดฐาน (Norms)</li>
                      <li>วิธีการบริหารจัดการ (Management Practices)</li>
                    </ul>
                  </li>

                  <li>
                    ผู้มีบทบาทสำคัญในการทำ OD
                    <ul
                      className="ml-4"
                      style={{ listStyleType: "lower-roman" }}
                    >
                      <li>ทีมงาน/คณะกรรมการดำเนินโครงการ OD</li>
                      <li>ผู้จัดการฝ่ายต่างๆ (Line Manager)</li>
                      <li>ผู้อำนวยการความสะดวก (Facilitator)</li>
                      <li>อาจารย์ (Teacher)</li>
                      <li>ผู้ฝึกสอน (Coach)</li>
                    </ul>
                  </li>

                  <li>
                    OD ให้ความสำคัญกับการติดตามผลตามที่วางแผนไว้ (Planned
                    Follow-up)
                  </li>
                  <li>
                    {" "}
                    เกี่ยวข้องกับการเปลี่ยนแปลง หรือปรับปรุงกระบวนการ
                    หรือโครงสร้างขององค์การ
                  </li>
                </ol>
              </p>
              <p className="lead">ลักษณะสำคัญของ OD</p>
              <p>
                ลักษณะสำคัญของ OD ได้เเก่
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    OD เกี่ยวข้องกับการเปลี่ยน แปลงกลยุทธ์
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>โครงสร้าง</li>
                      <li>และ/หรือกระบวนการของระบบทั้งระบบ</li>
                      <li>มีความหมายครอบคลุมตั้งแต่องค์การ ฝ่ายหรือกลุ่มงาน</li>
                    </ul>
                  </li>
                  <li>
                    OD เป็นการประยุกต์ใช้และถ่ายทอดความรู้และวิธีปฏิบัติด้าน
                    Behavioral Science ให้กับสมาชิกขององค์การ เช่น
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>ภาวะผู้นำ</li>
                      <li>กระบวนการกลุ่ม</li>
                      <li>การออกแบบงาน</li>
                      <li>กลยุทธ์</li>
                      <li>รูปแบบองค์การ</li>
                      <li>ความสัมพันธ์ระหว่างประเทศ </li>
                    </ul>
                  </li>

                  <li>
                    OD เกี่ยวข้องกับการจัดการการเปลี่ยนแปลงตามที่วางแผนไว้
                  </li>
                  <li>
                    OD
                    เกี่ยวข้องกับการสร้างและส่งเสริมการเปลี่ยนแปลงให้ดำรงอยู่ต่อไป
                  </li>
                  <li>OD มุ่งปรับปรุงประสิทธิผลขององค์การ</li>
                </ol>
                การพัฒนา OD จะต้องอยู่บนรากฐานของความรู้และค่านิยม ดังนี้
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    ความเข้าใจในระบบสังคม (Understanding social systems)
                    คือต้องเข้าใจในศาสตร์ที่เกี่ยวข้องกับการพัฒนาและเปลี่ยนแปลงองค์การ
                    เช่น
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>จิตวิทยา</li>
                      <li>จิตวิทยาสังคม</li>
                      <li>สังคมวิทยา</li>
                      <li>รัฐศาสตร์</li>
                      <li>เศรษฐศาสตร์</li>
                      <li>ปรัชญา ศาสนา ฟิสิกส์และชีววิทยา</li>
                    </ul>
                  </li>

                  <li>เข้าใจในวิธีการและสาเหตุของการเปลี่ยนแปลง </li>

                  <li>
                    เข้าใจบทบาทบุคคลที่สาม (Third Party)
                    ของที่ปรึกษาด้านการเปลี่ยนแปลง{" "}
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "disc" }}>
                    <li>
                      บุคคลที่ไม่มีส่วนได้ส่วนเสีย
                      เป็นที่ปรึกษาด้านการเปลี่ยนแปลงและการพัฒนาองค์การ
                    </li>
                  </ul>
                </ol>
              </p>
              <p className="lead">ค่านิยมของ OD (OD Values)</p>
              <p>
                ค่านิยมของ OD มีดังนี้
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    การส่งเสริมศักดิ์ศรีแห่งความเป็นมนุษย์ (State of Human
                    Dignity){" "}
                  </li>
                  <li>
                    การยึดมั่นในคุณค่าของมนุษย์ (Humanistically Oriented){" "}
                  </li>
                  <li>ความเท่าเทียม (Democracy)</li>
                  <li>ความสุจริต (Honesty) </li>
                  <li>การกระจายอำนาจ (Empowerment) </li>
                  <li>ค้นหาปัญหาและเป็นวิทยาศาสตร์ (Inquiry and Sciences)</li>
                  <li>มีจิตช่วยเหลือ (Being Helpful) </li>
                </ol>
                สรุปค่านิยมของ OD ที่สำคัญ ได้แก่
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    การให้ความเคารพและการมีส่วนร่วม (Respect and Inclusion){" "}
                  </li>
                  <li>การให้ความร่วมมือ (Collaboration)</li>
                  <li>ความจริงใจ (Authenticity)</li>
                  <li>ความเข้าใจในตนเอง (Self-awareness) </li>
                  <li>การกระจายอำนาจ (Empowerment)</li>
                  <li>
                    {" "}
                    ประชาธิปไตยและความเป็นธรรมในสังคม (Democracy and Social
                    Justice){" "}
                  </li>
                </ol>
                <p className="lead">
                  ข้อแตกต่างระหว่าง OD กับ Change Management (CM)
                </p>
                <p>
                  <ol className="ml-4" style={{ listStyleType: "deciml" }}>
                    <li>
                      OD
                      ทำให้องค์การตระหนักและสร้างการเรียนรู้ผ่านกระบวนการแก้ไขปัญหาหลัก
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          ส่วน CM
                          ประยุกต์วิธีการแก้ปัญหาอย่างมีเหตุผลในการทำให้เป้าหมายที่ต้องการบรรลุผล
                        </li>
                      </ul>
                    </li>

                    <li>
                      OD มุ่งไปที่พลวัตของระบบในองค์การ
                      ซึ่งเปิดพื้นที่ให้องค์การวิจัย
                      สะท้อนและทบทวนรูปแบบของระบบที่ดำรงอยู่เวลานั้น
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>ส่วน CM มุ่งไปที่ผลลัพธ์มากกว่า</li>
                      </ul>
                    </li>
                    <li>
                      OD
                      ตั้งอยู่บนความร่วมมือระหว่างองค์การและที่ปรึกษาด้านพัฒนาองค์การในการกำหนดกระบวนการที่เกี่ยวข้อง
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          ส่วน CM
                          เน้นที่บทบาทของผู้เชี่ยวชาญหรือผู้ที่แก้ปัญหาได้อย่างเบ็ดเสร็จ
                        </li>
                      </ul>
                    </li>
                    <li>
                      OD แก้ปัญหากระบวนการต่างๆ ที่ไม่ปรากฏชัดเจน เช่น
                      การเปลี่ยนแปลงที่เกี่ยวข้องกับอำนาจ เชื้อชาติ
                      เพศและสถานะทางสังคม และการอยู่ท่ามกลางแรงกดดันอื่นๆ
                      ทางสังคม
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          ส่วน CM
                          จัดการกับการเปลี่ยนแปลงที่ปรากฏอย่างชัดเจนของสถานการณ์หนึ่งๆ
                        </li>
                      </ul>
                    </li>
                  </ol>
                </p>
                <p className="lead">
                  สรุปความแตกต่างระหว่าง OD และ Change Management (CM)
                </p>
                <p>
                  <ol className="ml-4" style={{ listStyleType: "deciml" }}>
                    <li>
                      OD
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>การเปลี่ยนแปลงเพื่อเพิ่มความสามารถของบุคลากร</li>
                        <li>
                          การเปลี่ยนแปลงตามที่วางแผนไว้ล่วงหน้า และยึดหลักการของ
                          OD
                        </li>
                      </ul>
                      ส่วน CM
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>การเปลี่ยนแปลงเพื่อเพิ่มมูลค่าทางเศรษฐกิจ</li>
                        <li>
                          เป็นไปเพื่อผลทางการตลาด และไม่ได้ยึดหลักการของ OD
                        </li>
                      </ul>
                    </li>
                    <li>OD</li>
                    <ul className="ml-4" style={{ listStyleType: "circle" }}>
                      <li>
                        ส่งเสริมศักยภาพ ความมีส่วนร่วม และการพัฒนามนุษย์พร้อมๆ
                        กับเพิ่มผลประกอบการ และการสร้างการได้เปรียบเชิงแข่งขัน
                      </li>
                      <li>
                        ถ่ายทอดความรู้
                        และทักษะเพื่อช่วยให้ระบบมีความสามารถในการจัดการการเปลี่ยนแปลงในอนาคต
                      </li>
                    </ul>
                    ส่วน CM
                    <ul className="ml-4" style={{ listStyleType: "circle" }}>
                      <li>มุ่งที่ต้นทุน คุณภาพและตารางการทำงาน</li>
                      <li>ไม่จำเป็นต้องมีการถ่ายทอดทักษะ</li>
                    </ul>
                  </ol>
                </p>
                <p className="lead">พัฒนาการของ OD (The Revolution of OD)</p>
                <p>
                  <ol className="ml-4" style={{ listStyleType: "deciml" }}>
                    <li>
                      มาจากรากฐานการฝึกอบรมเชิงปฏิบัติการ (Laboratory Training
                      Background หรือ T-group)
                    </li>
                    <li>มาจากรากฐาน Action Research และ Survey Feedback</li>
                    <li>
                      มาจากรากฐาน Normative Background
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          แนวคิดที่เชื่อว่ามีวิธีการที่ดีที่สุดเพียงวิธีการเดียว
                          (One Best Way) ในการบริหารองค์การ
                        </li>
                        <li>รูปแบบการจัดการแบบมีส่วนร่วม</li>{" "}
                        <li>หลักการของตาข่าย (เครือข่าย)</li>
                      </ul>
                    </li>
                    <li>
                      มาจากรากฐานผลิตภาพและคุณภาพชีวิตในการทำงาน (Productivity
                      และ Quality-of-Work-Life)
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          มุ่งพัฒนารูปแบบการทำงานที่ให้ความสำคัญกับความสอดคล้องระหว่างเทคโนโลยีกับมนุษย์
                        </li>
                        <li>เน้นการมีส่วนร่วมของพนักงาน</li>{" "}
                      </ul>
                    </li>
                    <li>
                      การจัดการทั่วทั้งองค์การ (Total Quality Management)
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>Total = ทุกคน ทุกระดับ กระทรวง กรม กอง หน่วย</li>
                        <li>
                          Quality = คุณภาพการให้บริการ
                          ความพึงพอใจของผู้รับบริการ
                        </li>{" "}
                        <li>Management = การบริหารองค์การ</li>{" "}
                      </ul>
                      <li>คุณภาพชีวิตในการทำงาน (Quality of Work Life)</li>
                      <li>มาจากรากฐาน Strategic Change</li>
                    </li>
                  </ol>
                </p>
                <p className="lead">
                  รูปแบบในการพัฒนาองค์การ: OD (Models of Planned Change)
                </p>
                <p>
                  <ol className="ml-4" style={{ listStyleType: "deciml" }}>
                    <li>
                      รูปแบบการเปลี่ยนแปลงของ Lewin (Lewin’s Change Model)
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>Unfreezing: การเตรียมพร้อมกับการเปลี่ยนแปลง</li>
                        <li>Moving/ Change: การดำเนินการเปลี่ยนแปลง</li>{" "}
                        <li>Refreezing: การรักษาผลของการเปลี่ยนแปลง</li>
                      </ul>
                      1.1Unfreezing: การเตรียมพร้อมกับการเปลี่ยนแปลง
                      <ul className="ml-4">
                        กระบวนการ Unfreezing คือการเตรียมพร้อมกับการเปลี่ยนแปลง
                      </ul>
                      Unfreezing:
                      การเตรียมพร้อมกับการเปลี่ยนแปลงกระบวนการนำเสนอข้อมูลความแตกต่างระหว่างพฤติกรรมที่ต้องการให้สมาชิกขององค์การแสดงออกกับพฤติกรรมปรากฏในปัจจุบัน
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          เพื่อจูงใจให้สมาชิกเข้าร่วมกิจกรรมการเปลี่ยนแปลง
                        </li>{" "}
                        <li>การสร้างแรงจูงใจหรือความพร้อมในการเปลี่ยนแปลง</li>
                        <li>
                          การทำให้ความไม่พึงพอใจต่อสถานะปัจจุบันปรากฏขึ้นชัดเจน
                        </li>
                        <li>การค้นหาทางเลือกที่ดีกว่าหรือน่าพึงพอใจมากกว่า</li>
                        <li>กระบวนการพัฒนาองค์การ</li>
                        <li>
                          การทำให้องค์การมีความพร้อมสำหรับการเปลี่ยนแปลงไปสู่สถานะใหม่ที่ดีขึ้น
                        </li>
                      </ul>
                      ทำให้สมาชิกในองค์การตระหนักว่าองค์การมีความจำเป็นต้องเปลี่ยนแปลง
                      มิฉะนั้น จะไม่สามารถสร้างผลลัพธ์ที่ดีขึ้น เช่น{" "}
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>ไม่สามารถมีผลประกอบการทางการเงินที่ดีขึ้น</li>
                        <li>ไม่สามารถยกระดับคุณภาพชีวิตในการทำงานของพนักงาน</li>
                        <li>ไม่สามารถดำเนินกิจการต่อไปได้</li>
                        <li>
                          Disruptive Technology
                          เกิดการทำลายเพื่อให้เกิดสิ่งใหม่ที่ดีขึ้นหรือดีกว่าเดิม
                        </li>
                      </ul>
                      1.2Moving/ Change: การดำเนินการเปลี่ยนแปลง
                      <ul className="ml-4">
                        Moving/ Change:
                        การดำเนินการเปลี่ยนแปลงการยกระดับพฤติกรรมขององค์การ
                        ฝ่ายหรือบุคคลไปสู่ระดับใหม่{" "}
                      </ul>
                      การแทรกแซงระบบด้วยการเปลี่ยนโครงสร้างและกระบวนการขององค์การ
                      เพื่อหล่อหลอมพฤติกรรมและค่านิยมและทัศนคติใหม่
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          การแทรกแซงระบบด้วยการเปลี่ยนโครงสร้างและกระบวนการขององค์การ
                          เพื่อหล่อหลอมพฤติกรรมและค่านิยมและทัศนคติใหม่
                        </li>
                        <li>
                          ยึดมั่นในพฤติกรรมใหม่
                          เพื่อให้สถานะในอนาคตตามที่ต้องการเกิดขึ้น
                        </li>
                        <li>
                          รับรู้ถึงความจำเป็นของการเปลี่ยนแปลง
                          ต้องทำให้ก้าวสู่สถานะใหม่ที่ดีกว่าเดิม
                        </li>{" "}
                      </ul>
                      3. Refreezing: การรักษาผลของการเปลี่ยนแปลง{" "}
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          {" "}
                          Refreezing: การรักษาผลของการเปลี่ยนแปลง
                          เป็นขั้นตอนที่ทำให้สมาชิกในองค์การแสดงพฤติกรรมใหม่ที่สอดคล้องกับการเปลี่ยนแปลงองค์การด้วยกิจกรรมพัฒนาองค์การในขั้นตอน
                          Moving/Change และไม่หวนกลับไปแสดงพฤติกรรมเดิมอีก
                        </li>
                        <li>
                          Refreezing
                          เป็นขั้นตอนที่ทำให้องค์การดำรงอยู่ในสถานะใหม่ที่มีความสมดุล
                          โดยกระทำผ่านกลไกสนับสนุน
                          ที่ส่งเสริมสถานะใหม่ขององค์การ ด้าน
                        </li>
                        <li>การพัฒนาศักยภาพของพนักงาน</li>
                        <li>การเปลี่ยนแปลงระบบให้รางวัลขององค์การ</li>
                      </ul>
                    </li>
                  </ol>
                </p>
                <p className="lead">
                  แนวคิดเชิงบวกในการพัฒนาและเปลี่ยนแปลงองค์การ Positive
                  Organizational Scholarship (POS)
                </p>
                <p>
                  <ol className="ml-4" style={{ listStyleType: "deciml" }}>
                    <li>
                      แนวคิดเชิงบวกเกี่ยวกับองค์การ (Lewin’s Change Model)
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          การเบี่ยงเบนเชิงบวก (Positive Deviance)
                          ผลลัพธ์เชิงบวกที่ดีเลิศและกระบวนการที่ทำให้ผลลัพธ์ดังกล่าวเกิดขึ้น
                        </li>
                        <li>
                          การมุ่งปัจจัยด้านบวก (An Affirmative orientation)
                          การให้ความสำคัญกับจุดแข็งแทนที่จะเป็นจุดอ่อน
                          หรือความสัมพันธ์ที่เป็นประโยชน์แทนที่เป็นความสัมพันธ์ที่ก่อให้เกิดปัญหา
                        </li>{" "}
                        <li>
                          ความประพฤติที่ซื่อสัตย์และถูกทำนองคลองธรรม
                          (Virtuousness) และการยกระดับกระบวนการต่างๆ (Elevating
                          Process) Refreezing: การรักษาผลของการเปลี่ยนแปลง
                        </li>
                      </ul>
                      หลักการพื้นฐานของ POS
                      (แนวคิดเชิงบวกในการพัฒนาและเปลี่ยนแปลงองค์การ Positive
                      Organizational Scholarship)
                      <ul className="ml-4">
                        แนวคิดเชิงบวกเกี่ยวกับองค์การหรือ POS
                        เป็นการอธิบายหลักการพื้นฐานว่า
                        มนุษย์และองค์การดำรงอยู่ในสถานะต่างๆ 3 สถานะ ได้แก่
                      </ul>
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>การเบี่ยงเบนเชิงลบ (Negative Deviance)</li>{" "}
                        <li>ปกติ (Ordinary)</li>
                        <li>การเบี่ยงเบนเชิงบวก (Positive Deviance)</li>
                        <li>การค้นหาทางเลือกที่ดีกว่าหรือน่าพึงพอใจมากกว่า</li>
                        <li>กระบวนการพัฒนาองค์การ</li>
                        <li></li>
                      </ul>
                      1. Negative Deviance
                      การเบี่ยงเบนเชิงลบก่อให้เกิดจุดอ่อนในองค์การ
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          Negative Deviance การเบี่ยงเบนเชิงลบ
                          สถานะไม่สามารถปฏิบัติหน้าที่ได้ตามปกติ (Dysfucntion
                          State)
                        </li>
                        <li>เหมือนมนุษย์ที่กำลังป่วย</li>
                        <li>ปัญหาคุณภาพและความผิดพลาดในการผลิต</li>
                        <li>ความสัมพันธ์ระหว่างบุคคลในอยู่ในภาวะเลวร้าย</li>
                      </ul>
                      2. Ordinary ความเป็นปกติภายในองค์กร
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>Reliable มีความเชื่อถือ</li>
                        <li>Ethical มีจริยธรรม </li>
                        <li>Compromise ประนีประนอม</li>{" "}
                      </ul>
                      3. Positive Deviance
                      การเบี่ยงเบนเชิงบวกก่อให้เกิดจุดแข็งในองค์การ
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          สถานะที่ปฏิบัติหน้าที่ได้ดีเลิศ (An Extraodinarily
                          Function State)
                        </li>
                        <li>ปฏิบัติหน้าที่อย่างราบรื่น</li>
                        <li>การปฎิบัติงานขององค์การสอดคล้องกับจริยะรรม</li>
                        <li>สมาชิกขององค์การให้เกียรติซึ่งกันและกัน</li>
                        <li>ความก้าวหน้าเกิดขึ้นในทุกระดับชั้นขององค์การ</li>
                      </ul>
                    </li>
                  </ol>
                </p>
                <p className="lead">
                  การประยุกต์ใช้รูปแบบการเปลี่ยนแปลงเชิงบวกกับการเปลี่ยนแปลงตามที่วางไว้
                  (The Application of Positive Model)
                </p>
                <p>
                  <ol className="ml-4" style={{ listStyleType: "deciml" }}>
                    <li>
                      รูปแบบการเปลี่ยนแปลงเชิงบวก Appreciate Inquiry (AI)
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          รูปแบบการเปลี่ยนแปลงเชิงบวก (Appreciate Inquiry: AI)
                          คือการเปลี่ยนจุดแข็งให้เป็นจุดแกร่ง
                        </li>
                        <li>
                          รูปแบบการเปลี่ยนแปลงเชิงบวก Appreciate Inquiry (AI)
                          คือการประยุกต์ใช้การเปลี่ยนแปลงตามที่วางแผนไว้
                        </li>{" "}
                        <li>
                          การรวบรวมข้อมูลและการวิเคราะห์เบื้องต้น (Data
                          Gathering and Preliminary Diagnosis)
                        </li>
                      </ul>
                      3รูปแบบการเปลี่ยนแปลงเชิงบวก Appreciate Inquiry (AI)
                      คือการดำเนินการเปลี่ยนแปลงตามที่วางแผนไว้ ได้แก่
                      <ul className="ml-4" style={{ listStyleType: "circle" }}>
                        <li>
                          เป็นรูปแบบลัทธิการสร้างสังคม (Social Constructionism)
                          มีลักษณะเชิงปฏิวัติเพื่อนำไปสู่การเปลี่ยนแปลง
                        </li>
                        <li>
                          สนับสนุนการใช้ค่านิยมเชิงบวกในการวินิจฉัยและเปลี่ยนแปลงองค์การ
                        </li>
                        <li>
                          ระบบที่มีประสิทธิผลและความสามารถสูงสุดในเชิงเศรษฐกิจ
                          (Economy) นิเวศวิทยา (Ecology) และความเป็นมนุษย์
                          (Human Terms)
                        </li>
                        <li>
                          กระบวนการเปลี่ยนแปลงที่เริ่มจากจุดแข็ง
                          (จุดแข็งมาชนกับโอกาส)
                        </li>
                        <li>
                          สร้างโอกาสการเจริญเติบโตและเปลี่ยนแปลงด้วยการค้นหาสิ่งที่ดำเนินไปด้วยดีในระบบนั้น
                        </li>
                      </ul>
                    </li>
                  </ol>
                </p>
                <p className="lead">
                  ที่ปรึกษาด้านการพัฒนาองค์การ (OD Practitioner)
                </p>
                <ol className="ml-4" style={{ listStyleType: "deciml" }}>
                  <li>
                    ที่ปรึกษาด้านการพัฒนาองค์การ มีชื่อเรียกแตกต่างกัน ดังนี้
                    <ul className="ml-4" style={{ listStyleType: "circle" }}>
                      <li>OD Practitioner</li>
                      <li>OD Consultants</li> <li>OD Expert</li>
                    </ul>
                    บุคคลที่มีบทบาทต่อการเปลี่ยนแปลงองค์การ
                    <ul className="ml-4" style={{ listStyleType: "circle" }}>
                      <li>
                        ลูกค้า (Client) หมายถึง ผู้ที่เป็นสมาชิกขององค์การ
                        ได้แก่
                      </li>
                      <li>
                        ขวัญใจพนักงาน (Champions) คือผู้ที่เคยประสบความสำเร็จ
                        มีบทบาท ดังนี้
                      </li>
                      <li>พนักงานและผู้จัดการ (Staff and Managers)</li>
                    </ul>
                  </li>
                </ol>
                <p className="lead">
                  ที่ปรึกษาภายในและภายนอก (Internal and External Practitioners)
                </p>
                <p>
                  1. ที่ปรึกษาภายนอก ได้แก่{" "}
                  <ol className="ml-4" style={{ listStyleType: "deciml" }}>
                    <li>บุคคลที่ได้รับการว่าจ้างให้ช่วยเปลี่ยนแปลงองค์การ</li>
                    <li>พนักงานบริษัทที่ให้คำปรึกษา (Consulting Firm)</li>
                    <li>บุคลากรของมหาวิทยาลัย หรือวิทยากรที่ปรึกษาอิสระ</li>

                    <p className="lead">
                      คุณสมบัติของที่ปรึกษาด้านการพัฒนาองค์การ (Competencies of
                      Practitioners)
                    </p>

                    <li>
                      ทักษะด้านการทำความเข้าใจตนเอง หรือ Competency
                      ด้านการบริหารอารมณ์ความรู้สึกของตนเอง
                    </li>
                    <li>
                      ทักษะการสร้างความสัมพันธ์กับผู้อื่น (Interpersonal Skills)
                    </li>
                    <li>
                      ทักษะการให้คำปรึกษาทั่วไป (General Consultation Skills)
                    </li>
                    <li>
                      ทฤษฎีเกี่ยวกับการพัฒนาองค์การ (Organization Development
                      Theory)
                    </li>
                    <li>เป็นนักวิเคราะห์ (Diagnostician)</li>
                    <li>
                      <li>
                        เป็นนักวิจัยสังคมวิทยา (Social Scientist Researcher)
                      </li>
                    </li>
                  </ol>
                </p>
                <p className="lead">
                  ทักษะและความสามารถของที่ปรึกษาด้านการพัฒนาองค์การจะต้องประกอบด้วย
                </p>
                <li>ความรู้ (Knowledge) </li>
                <li>
                  การยึดมั่นในมาตรฐานสูงสุดของจริยธรรมและอาชีพ (Commitment)
                </li>
                <li>ความสามารถในการสร้างเครือข่าย (Network Ability)</li>
                <li>ทักษะในการแสวงหาข้อมูล (Elicitation Skills)</li>
                <li>
                  {" "}
                  ทักษะการประเมินและการบูรณาการ (Evaluation and Integration
                  Skills)
                </li>
                <li>
                  {" "}
                  ทักษะการวินิจฉัยและการนำเสนอแนวทาง (Diagnostic and Prognosis
                  Skills)
                </li>
                <p className="lead">
                  ที่ปรึกษาภายในและภายนอก (Internal and External Practitioners)
                  <li>การสำแดงข้อมูลเท็จ (Misrepresentation) </li>
                  <li>การนำข้อมูลไปใช้ในทางที่ผิด (Misuse of Data)</li>
                  <li>การบังคับ (Coecion)</li>
                  <li>
                    ความเห็นต่างในค่านิยมและเป้าหมาย (Value and Goal Conflict)
                  </li>
                  <li>ความไม่พร้อมด้านเทคนิค (Technical Ineptness)</li>
                </p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                doloribus, dolorem iusto blanditiis unde eius illum consequuntur
                neque dicta incidunt ullam ea hic porro optio ratione repellat
                perspiciatis. Enim, iure!
              </p>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <p>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Error, nostrum, aliquid, animi, ut quas placeat totam sunt
                tempora commodi nihil ullam alias modi dicta saepe minima ab quo
                voluptatem obcaecati?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
                quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                recusandae? Qui, necessitatibus, est!
              </p>
              <hr />
              <div className="blog-right-side">
                {/* Comments Form */}
                <div className="card my-4">
                  <h5 className="card-header">Leave a Comment:</h5>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Single Comment */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_01.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
              {/* Comment with nested comments */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_02.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_01.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_03.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Widgets Column */}
            <div className="col-md-4 blog-right-side">
              {/* Search Widget */}
              <div className="card mb-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              {/* Categories Widget */}
              <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side Widget */}
              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
