import React from 'react'
import { assets,notice } from '../../assets/assets'
import './Admission.css'
const Admission = () => {
  return (
    <div>
      <div className="process">
        <h3>Admission Process</h3>
      <div className="admission_process">
        <img src={assets.admission_img} alt="" />
      </div>
      </div><br/>
      <div className="admission-form-download">
        <div className="instruction">
        (i) Admission register in the form prescribed by the State Government concerned/Kendriya Vidyalaya Sangathan/Navodaya Vidyalaya Samiti as the case may be, shall be maintained by the "School" where the name of every student joining "the School" shall be entered.<br/>

         (ii) Successive numbers must be allotted to students on their admission and each student should retain this number throughout the whole of his career in the school. A student returning to the school after the absence of any duration shall resume his original admission number.<br/>

        (iii) If a student applying for admission to a school, has attended any other school, an authenticated copy of the Transfer certificate in the format given in Annexure I, from his last school must be produced before his name can be entered in the Admission Register.<br/>

        (iv) In no case shall a student be admitted into a class higher than that for which he is entitled according to the transfer certificate.<br/>

        (v) A student shall not be allowed to migrate from one "School" to another during the session after his name has been sent up for the examination of the Board. This condition may be waived only in special circumstances by the Chairman.<br/>

        (vi) A student leaving his school at the end of a session or who is permitted to leave his school during the session shall on a payment of all dues, receive an authenticated copy of the Transfer certificate up to date. A duplicate copy may be issued if the head of the institution is satisfied that the original is lost but it shall always be so marked.<br/>

        (vii) In case a student from an institution not affiliated to the Board seeks admission in a school affiliated to the Board, such a student shall produce a transfer certificate duly countersigned by an authority as indicated in the format given in Annexure-I.<br/>

        (viii) If the statement made by the parent or guardian of a student or by the student himself/herself, if he/she was major at the time of his/her admission to a school, is found to contain any willful misrepresentation of facts regarding the student's career, the head of the institution may punish him/her as per provision of the Education Act of the State/Union Territory or Kendriya Vidyalaya Sangathan/Navodaya Vidyalaya Samiti rules, as the case may be, respectively and report the matter to the Board.<br/>

        <b>To download admission form click on download</b>
        </div><br/>

        <a href={assets.admissionPdf}><img src={assets.downloadButon} alt="" /></a>
        
      </div><br/>

      <div className="notice">
        <h3>NOTICE</h3>
        <div className="container-notice">
          <div className="container-notice-B">
          {notice.map((item,i)=>{
            return(
              <p>{item.notice}</p>

            )})}
          </div>
        
        

        </div>
       
      </div>

      
      
    </div>
  )
}

export default Admission
