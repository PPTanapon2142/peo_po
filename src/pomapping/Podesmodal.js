import react from "react";
import './Poapp.css'

function Podesmodal({ closedesModal }) {
    return (
        <div className="podesmodalBackground">
            <div className="podesmodalContainer">
                <div className="podestitleCloseBtn" >
                    <button onClick={() => closedesModal(false)}>X</button>

                </div>

                <div className="title">

                    <h1>ผลลัพธ์การศึกษา</h1>

                </div>

                <div className="body">

                    <div className="bodytext">

                        <text>

                            ผลลัพธ์การศึกษา ข้อความที่อธิบายว่านิสิตนักศึกษาที่เรียนได้รับการคาดหวังว่า
                            จะมีความรู้ ความชำนาญ ความสามารถ และความประพฤติตามที่ต้องการในการประกอบวิชาชีพวิศวกรรม
                            ในแต่ละสาขาความชำนาญ เมื่อสำเร็จการศึกษาจากหลักสูตรนั้น
                            <br />
                            <br />
                            ผลลัพธ์การศึกษาที่นิสิตนักศึกษาพึงมีเมื่อสำเร็จการศึกษามีดังต่อไปนี้
                            <br />
                            1. ความรู้ทางด้านวิศวกรรมและพื้นฐานทางวิทยาศาสตร์<br />
                            สามารถประยุกต์ความรู้ทางด้านคณิตศาสตร์ วิทยาศาสตร์ พื้นฐานทางด้านวิศวกรรม
                            และความรู้เฉพาะทางวิศวกรรมเพื่อกำหนดกรอบความคิดของแบบจำลองทางวิศวกรรม หรือนิยาม
                            และประยุกต์วิธีการ กระบวนงาน กระบวนการ หรือระบบงานทางวิศวกรรมในการทำงานได้<br />
                            2. การวิเคราะห์ปัญหาทางวิศวกรรม<br />
                            สามารถระบุปัญหา ตั้งสมการความสัมพันธ์ สืบค้นทางเอกสาร และแก้ไขปัญหาทางวิศวกรรม
                            ที่ซับซ้อน จนได้ข้อสรุปเบื้องต้นโดยใช้หลักการและเครื่องมือวิเคราะห์ทางด้านคณิตศาสตร์
                            วิทยาศาสตร์ และทางด้านวิศวกรรมศาสตร์ได้อย่างถูกต้อง<br />
                            3. การออกแบบและพัฒนาเพื่อหาคำตอบของปัญหา<br />
                            สามารถหาคำตอบของปัญหาทางวิศวกรรมที่ซับซ้อน และออกแบบระบบงานหรือกระบวนการ
                            ทางวิศวกรรมตามความต้องการและข้อกำหนดงานโดยคำนึงถึงข้อกำหนดด้านสังคม
                            ความปลอดภัย การอนามัยและสิ่งแวดล้อมหรือมาตรฐานการปฏิบัติวิชาชีพ<br />
                            4. การพิจารณาตรวจสอบ<br />
                            สามารถตรวจสอบ วินิจฉัย ประเมินผลงานและปัญหาทางวิศวกรรมที่ซับซ้อนซึ่งครอบคลุมถึง
                            การตั้งสมมติฐาน การออกแบบการทดลอง การวิเคราะห์การแปลความหมายข้อมูล
                            และสังเคราะห์ข้อมูลข่าวสารเพื่อให้ได้ผลสรุปที่ถูกต้องตามหลักเหตุผล<br />
                            5. การใช้อุปกรณ์เครื่องมือทันสมัย<br />
                            สามารถสร้าง เลือก และประยุกต์ใช้เทคนิควิธีทรัพยากร อุปกรณ์เครื่องมือทางวิศวกรรม
                            และเทคโนโลยีสารสนเทศที่เหมาะสมและทันสมัย โดยคำนึงถึงข้อกำหนดและข้อจำกัด
                            ของเครื่องมือและอุปกรณ์นั้น<br />
                            6. การทำงานร่วมกันเป็นทีม<br />
                            สามารถทำงานร่วมกับผู้อื่นที่มีความหลากหลายในสหสาขาวิชาได้อย่างมีประสิทธิภาพ
                            สามารถทำงานในฐานะสมาชิกของกลุ่มและผู้นำกลุ่มได้<br />
                            7. การติดต่อสื่อสาร<br />
                            สามารถติดต่อสื่อสารในงานวิศวกรรม วิชาชีพอื่น และบุคคลทั่วไปได้อย่างมีประสิทธิผล
                            ด้วยวาจา ด้วยการเขียนรายงาน การเสนอผลงาน การเขียนและอ่านแบบทางวิศวกรรม
                            ตลอดจนสามารถออกคำสั่งและรับคำสั่งงานได้อย่างชัดเจน<br />
                            8. กิจกรรมสังคม สิ่งแวดล้อม การพัฒนาที่ยั่งยืน และวิชาชีพวิศวกรรม<br />
                            มีความเข้าใจและความรับผิดชอบต่อการปฏิบัติวิชาชีพวิศวกรรม ต่อบริบทของสังคม
                            และสิ่งแวดล้อม และสามารถประเมินผลกระทบของการแก้ไขปัญหาทางวิศวกรรมที่ซับซ้อน
                            ต่อสังคม สิ่งแวดล้อม และการพัฒนาที่ยั่งยืน<br />
                            9. จรรยาบรรณวิชาชีพ<br />
                            มีความเข้าใจและยึดมั่นในจรรยาบรรณแห่งวิชาชีพ และยึดถือตามกรอบมาตรฐานการปฏิบัติ
                            วิชาชีพ<br />
                            10. การบริหารงานวิศวกรรม<br />
                            มีความรู้และความเข้าใจในด้านเศรษฐศาสตร์และการบริหารงานวิศวกรรมโดยคำนึงถึง
                            ความเสี่ยงและการเปลี่ยนแปลง<br />
                            11. การเรียนรู้ตลอดชีพ<br />
                            ตระหนักถึงความจำเป็น และมีความสามารถในการเรียนรู้และพัฒนาตนเองตลอดชีพ
                        </text>
                    </div>






                </div>

            </div>



        </div>



    )


}

export default Podesmodal