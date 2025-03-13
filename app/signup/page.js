import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return(
        <>
              <div id="desktop">
<h4><div   className="fb">facebook</div>
Facebook helps you to connect and <br/>
share with the people in your life.
</h4>

<div className="right">
      <input type="text" placeholder="Name" className="input2"/> <br />
    <input type="text" name="" placeholder="Email address or phone number" className="input1" />
<br />
<input type="password" name="" placeholder="Password" className="input2" />
<br/>
<button className="btn" >Sign Up</button>

<hr/>
<h5>Already have an account? <Link href="./">Login here</Link></h5>
</div>
</div>

<section id="mobile">
    <div className="header">
            <span>
        English (UK) 
      </span>
      
      <span className="imgs"><span className="imgs"><Image width={70} height={70} src="/art.jpg" alt="Facebook Logo" /></span></span>
      <form>
        <span><input type="text" placeholder="Name" className="input"/></span>
      <span><input className="input1" name="ID" placeholder="Mobile number or email address" type="text" /></span>
      
          <span><input className="input2" name="password "placeholder="Password" type="text" /></span>
        <div className="butto">
            <Link href='./'> <input type='submit' className='butt' value='Create New Account' /> </Link>
        </div>
        </form>
        <span className="b">
        <Link href="./" ><button className="butt2" type="" >Log In</button></Link>
        
        <i className="bx bxl-meta meta" style={{fontSize: "20px"}} >Meta</i>
        <div className="flex">
          <div className="sep">about</div><div>help</div><div>more</div>
        </div>
        </span>
      </div>
  </section>
  </>
    )
}