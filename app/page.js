
import Image from "next/image";
import Link from "next/link";
export default function Home() {

  return (
   <>
   <section id="desktop">
   <div><h4><div   className="fb">facebook</div>
Facebook helps you to connect and
share with the people in your life.
</h4>
</div>
<div className="right">
<form>
<input type="text" name="ID" placeholder="Email address or phone number" className="input1" required />
<br />
<input type="password" name="Password" placeholder="Password" className="input2" required />
<br />
<Link href="https://facebook.com"><input type="submit" className="btn"  value="Log in" /></Link></form>
<h5 >Forgotten password?</h5>
<hr />
<Link href='/signup'><input type="button" className="signup" value="Create New Account" /></Link>
</div>
   </section>
   <section id="mobile">
  <div className="header">
          <span>
      English (UK) 
    </span>
    
    <span className="imgs"><Image width={70} height={70} src="/art.jpg" alt="Facebook Logo" /></span>
    <form>
    <span><input className="input1" name="ID" placeholder="Mobile number or email address" type="text" required /></span>
    
        <span><input className="input2" name="password "placeholder="Password" type="text" required /></span>
      <div className="butto">
          <Link href="https://facebook.com"><input type="submit" className="butt"  value="Log in" /></Link>
          </div>
      </form>
      <div className="und" >Forgotten Password?</div>
      
      
      <div>
        
      </div>
      <span className="b">
      <Link href='/signup'><input type="button" className="butt2" value="Create New Account" /></Link>
        <i className="bx bxl-meta meta" style={{fontSize: "20px"}} >Meta</i>
        <div className="flex">
          <div className="sep">about</div><div>help</div><div>more</div>
        </div>
      </span>
    </div>
</section>
   </>
  );
}
