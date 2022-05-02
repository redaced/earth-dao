import Script from 'next/script'
import Navbar from '../components/layouts/navbar'
import GetVotes from '../components/getVotes'
const Proposals = () => {
    return (
        <>
            <Navbar />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center subcribe-form mb-2">
                                <form className='mw-800px'>
                                    <input type="text" id="name" name="name" className="rounded-pill shadow" placeholder="Search forums..." required />
                                    <button type="submit" className="btn btn-pills btn-primary">Search Forums</button>
                                </form>
                            </div>
                            <div className="table-responsive bg-white shadow rounded mt-4">
                                <table className="table mb-0 table-center">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-bottom p-3" >Санал</th>
                                            <th scope="col" className="border-bottom p-3 text-center" >Санаачлагч</th>
                                            {/* <th scope="col" className="border-bottom p-3 text-center">Тоо</th> */}
                                            <th scope="col" className="border-bottom p-3 text-end" >Хувь</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <GetVotes/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.min.js" />
            <Script id="show-banner" strategy="lazyOnload">
                {`
                    feather.replace();
                    window.addEventListener('load',   fn , false )
                    //  window.onload = function loader() {
                    function fn() {
                        // Preloader
                        if(document.getElementById('preloader')){
                            setTimeout(() => {
                                document.getElementById('preloader').style.visibility = 'hidden';
                                document.getElementById('preloader').style.opacity = '0';
                            }, 350);
                        }
                        // Menus
                        activateMenu();
                    }

                    function toggleMenu() {
                        document.getElementById('isToggle').classList.toggle('open');
                        var isOpen = document.getElementById('navigation')
                        if (isOpen.style.display === "block") {
                            isOpen.style.display = "none";
                        } else {
                            isOpen.style.display = "block";
                        }
                    };

                    function windowScroll() {
                        const navbar = document.getElementById("topnav");
                        if(navbar!=null){
                            if (
                                document.body.scrollTop >= 50 ||
                                document.documentElement.scrollTop >= 50
                            ) {
                                navbar.classList.add("nav-sticky");
                            } else {
                                navbar.classList.remove("nav-sticky");
                            }
                        }
                    }

                    window.addEventListener('scroll', (ev) => {
                        ev.preventDefault();
                        windowScroll();
                    })

                    // back-to-top
                    var mybutton = document.getElementById("back-to-top");
                    window.onscroll = function () {
                        scrollFunction();
                    };

                    function scrollFunction() {
                        if(mybutton!=null){
                            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                                mybutton.style.display = "block";
                            } else {
                                mybutton.style.display = "none";
                            }
                        }
                    }

                    function topFunction() {
                        document.body.scrollTop = 0;
                        document.documentElement.scrollTop = 0;
                    }
        `}
            </Script>
        </>
    );
}

export default Proposals