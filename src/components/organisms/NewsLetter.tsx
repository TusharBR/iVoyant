import "../../Newsletter.css";


interface NewsLetterProps {
    title: string;
    id: string;
    deletebtn3:(id:string)=>void;
  }


const Newsletter= ({title,id,deletebtn3}:NewsLetterProps) => {
  return (
    <div className="newsletter-container" onDoubleClick={()=>deletebtn3(id)}>
      <div className="newsletter-content">
        <h2>Never miss new lessons. - {title}</h2>
      </div>
      <div className="newsletter-icon">
        <div className="icon-circle">
         <span >&#128231;</span>
        </div>
      </div>
      <div className="newsletter-signup">
        <p>Join our growing community by subscribing to our newsletter today!</p>
        <button className="newsletter-button"><strong>Newsletter sign-up</strong></button>
      </div>
    </div>
  );
};

export default Newsletter;
