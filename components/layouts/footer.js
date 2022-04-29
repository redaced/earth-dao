import Image from 'next/image'
import logoImg from '../../assets/images/logo-light.png'

export default function Footer({ children }) {
    return (
      <>
        <footer className="footer">    
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <a href="index-blockchain.html#" className="logo-footer">
                                        <Image src={logoImg} height={24} width={84} alt="" />
                                    </a>
                                    <p className="mt-4">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                        <li className="list-inline-item"><a href="#" className="rounded"><i data-feather="facebook" className="fea icon-sm fea-social"></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="rounded"><i data-feather="instagram" className="fea icon-sm fea-social"></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="rounded"><i data-feather="twitter" className="fea icon-sm fea-social"></i></a></li>
                                        <li className="list-inline-item"><a href="#" className="rounded"><i data-feather="linkedin" className="fea icon-sm fea-social"></i></a></li>
                                    </ul>
                                </div>
                        
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Company</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> About us</a></li>
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Services</a></li>
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Team</a></li>
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Pricing</a></li>
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Project</a></li>
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Careers</a></li>
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Blog</a></li>
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Login</a></li>
                                    </ul>
                                </div>
                        
                                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Usefull Links</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Terms of Services</a></li>
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Privacy Policy</a></li>
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Documentation</a></li>
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Changelog</a></li>
                                        <li><a href="#" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Components</a></li>
                                    </ul>
                                </div>
    
                                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Newsletter</h5>
                                    <p className="mt-4">Sign up and receive the latest tips via email.</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="foot-subscribe mb-3">
                                                    <label className="form-label">Write your email <span className="text-danger">*</span></label>
                                                    <div className="form-icon position-relative">
                                                        <i data-feather="mail" className="fea icon-sm icons"></i>
                                                        <input type="email" id="emailsubscribe" className="form-control ps-5 rounded" placeholder="Your email : " required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="d-grid">
                                                    <input type="submit" id="submitsubscribe"  className="btn btn-soft-primary" value="Subscribe" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
      </>
    )
  }