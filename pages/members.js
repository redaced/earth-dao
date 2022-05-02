import Script from 'next/script'

import MemberBalance from '../components/MemberBalance'
import Navbar from '../components/layouts/navbar'
const Members = () => {
  return (
    <>
      {/* <TokenBalance/> */}
      {/* <TokenTransfer/> */}
      <Navbar/>
      <MemberBalance/>
    

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

                //Menu
                // Toggle menu
                function toggleMenu() {
                    document.getElementById('isToggle').classList.toggle('open');
                    var isOpen = document.getElementById('navigation')
                    if (isOpen.style.display === "block") {
                        isOpen.style.display = "none";
                    } else {
                        isOpen.style.display = "block";
                    }
                };

                // Menu sticky
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

export default Members