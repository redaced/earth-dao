import { useAddress, useDisconnect, useMetamask, useVote, useToken, VoteType } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Script from 'next/script'
import firstImg from '../assets/images/new/12345.png'
import EQDImg from '../assets/images/new/EQD.png'
import iconJS from '../assets/libs/feather-icons/feather.min.js'
import NavbarHome from '../components/layouts/navbarHome'
import TokenTransfer from '../components/tokenTransfer'

var converter = require('hex2dec');

const Home = () => {
  const vote = useVote("0x2205B2275b7A81BD65f9d776c735520DdaC8d14c")
  const token = useToken("0x372750d4b65e47B6eD5b0367ba39931eb959c14e")
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  // const [proposals, setProposals] = useState([]);
  const [myEarthToken, setMyEarthToken] = useState([]);


  // useEffect(() => {
  //   const getAllProposals = async () => {
  //     try {
  //       const proposals = await vote.getAll()
  //       var dec = converter.hexToDec(proposals[0].endBlock._hex);
  //       var miliseconds = parseInt('16511' + dec);
  //       const end_date = new Date(miliseconds);
  //       dec = converter.hexToDec(proposals[0].startBlock._hex);
  //       miliseconds = parseInt('16511' + dec);
  //       const start_date = new Date(miliseconds);
  //       console.log(start_date, end_date);
  //       // setProposals(proposals);
  //     } catch (error) {
  //       console.log("failed to get proposals", error);
  //     }
  //   };
  //   getAllProposals();
  // }, [vote]);

  // useEffect(() => {
  //   const submitVote = async () => {
  //     try {
  //       const proposalId = "0x6683eadba60e167278cc4601051f6641716a641d8090cd797a2a154eaa56046b";
  //       const voteType = 1;
  //       const reason = "I like this proposal!";

  //       let proposal = await vote.vote(proposalId, voteType, reason);
  //       if (proposal.state === 4) {
  //         return vote.execute(proposalId);
  //       }
  //       // const canExecute = await vote.canExecute(proposalId);
  //       // await vote.hasVoted(proposalId, address);
  //     } catch (error) {
  //       console.log("failed to get proposals", error);
  //     }
  //   };
  //   submitVote();
  // }, [vote]);

  useEffect(() => {
    if (token) {
      token.balanceOf(address).then((balance) => {
        setMyEarthToken(balance.displayValue)
        console.log(address, balance);
      }).catch(error => {
        console.log(error)
      })
    }
  }, [token, address]);

  // useEffect(() => {
  //   if(token){


  //     // Address of the wallet sending the tokens
  //     const fromAddress = "0x2fF2ca7E37c2Ac3dD5FeA79214ab971A0b0aEb24";

  //     // Address of the wallet you want to send the tokens to
  //     const toAddress = "0x20242ed732b9A4c718B62F69Ceb47D24482EAAa1";

  //     // The number of tokens to give as allowance
  //     const amount = 100

  //     token.setAllowance(fromAddress, amount).then((data) => {
  //       token.transferFrom(fromAddress, toAddress, amount).then((data) => {
  //         console.log(data)
  //       }).catch((error) => {
  //         console.log(error)
  //       })
  //     }).catch((error) => {
  //       console.log(error)
  //     })

  //     // Note that the connected wallet must have approval to transfer the tokens of the fromAddress

  //   }
  // })

  return (
    <>
      <NavbarHome />
      <section className="bg-home d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h4 className="heading fw-bold text-white title-dark mb-3">EARTHQUAKE ХАМТРАЛ <br /> газар хөдлөлтийг хамтын хүчээр</h4>
                <h5 className="para-desc mx-auto text-light title-dark">Эрсдэлээ даа. Ашиг ол.</h5>
                <div className="mt-4 pt-2">
                  <a className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#login-popup">Илүүг мэдье</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-100 mt-60">
        <div className="row align-items-center">
          <div className="col-lg-5 order-2 order-lg-1 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div className="section-title me-lg-4">
              <h1 className="title mb-3">Яагаад газар хөдлөлт гэж ?</h1>
              <p className="para-desc text-muted">Газар хөдлөлт бол хувь хүн ганцаар даван туулж үл чадах байгалийн давагдашгүй хүчин зүйл юм.</p>

              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items-center pt-4">
                    <h2><i data-feather="shield" className="fea icon-m-md text-primary"></i></h2>
                    <div className="ms-3">
                      <h5>Газар хөдлөлтийн давтамж</h5>
                      <p className="text-muted mb-0">Сүүлийн 15 жилд газар хөдлөлтийн тоо 5 дахин өссөн ба жилээс жилд хохирлын хэмжээ өсч байна.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex align-items-center pt-4">
                    <h2><i data-feather="cpu" className="fea icon-m-md text-primary"></i></h2>
                    <div className="ms-3">
                      <h5>Хохирол сүйрлийн хэмжэээ</h5>
                      <p className="text-muted mb-0">1950 оноос хойш болсон нийт 15 томоохон газар хөдлөлтөнд нийтдээ 2 тэрбум төгрөгийн хохирол учирсан бол нэг хүнд ногдох хохирлын хэмжээ 10 сая байдаг.</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div className="col-lg-7 order-1 order-lg-2">
            <div className="saas-feature-shape-right position-relative">
              <Image src={firstImg} className="img-fluid mx-auto d-block rounded shadow" />
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-4 mt-100 mt-60">
        <div className="row justify-content-center" id="counter">
          <div className="col-12 text-center">
            <div className="section-title">
              <h4 className="title mb-4">EARTHQAUKE хамтрал гэж юу вэ?</h4>
              <p className="text-muted para-desc mx-auto mb-0">Газар хөдлөлийн эрдслээс өөрсдийгөө хамгаалахын тулд хамтын эрсдлийн сан үүсгэх ба уг сангаа хамтын шийдвэрээр удирдана. Өөрөөр хэлбэл, та эрсдэлээс хамгаалагдах эсвэл цугларсан санг өөрөөр захиран зарцуулах эрхтэй болно.</p>

            </div>
          </div>
        </div>
      </div>

      <section className="section overflow-hidden">
        <div className="container pb-5 mb-md-5">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="features feature-primary text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-airplay h2 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5 className="mt-0"><span className="text-primary">Хамтын эзэмшил</span></h5>
                  <p className="text-muted mb-0">Таны оруулсан мөнгө дундын эзэмшлийнх. Үйл ажиллагаанаас олсон бүх цэвэр ашгийг та өөрийн оруулсан хувиар хүртэнэ.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 mt-5 mt-sm-0">
              <div className="features feature-primary text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-calendar-alt h2 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5 className="mt-0"><span className="text-primary">Хамтын шийдвэр</span></h5>
                  <p className="text-muted mb-0">Давхар даатгалын компани сонгох эсэх, хохирлоос урьдчилсан сэргийлэх ямар арга хэмжээ авах зэрэг бүхий л шийдвэр хамтын саналаар гарна.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 mt-5 mt-sm-0">
              <div className="features feature-primary text-center">
                <div className="image position-relative d-inline-block">
                  <i className="uil uil-clock h2 text-primary"></i>
                </div>

                <div className="content mt-4">
                  <h5 className="mt-0"><span className="text-primary">Шилэн данс</span></h5>
                  <p className="text-muted mb-0">Цугларсан хөрөнгийг хамтын шийдвэрээр зарцуулах, ажил гүйцэтгүүлэх эсвэл дахин хөрөнгө оруулж эргэлтэнд оруулах зэрэг мөнгөн урсгал ил байна.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" id="counter">
          <div className="col-12 text-center">
            <div className="section-title">
              <h4 className="title mb-4">Даатгалаас юугаараа ялгаатай вэ?</h4>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="d-flex">
                <i data-feather="help-circle" className="fea icon-ex-md text-primary me-2 mt-1"></i>
                <div className="flex-1">
                  <h6>Хаагдмал</h6>
                  <p className="answer text-muted mb-0">Даатгагдсан мөнгө ямар зориулалтаар зарцуулагдаж байгааг мэдэх боломжгүй байдаг.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="d-flex">
                <i data-feather="help-circle" className="fea icon-ex-md text-primary me-2 mt-1"></i>
                <div className="flex-1">
                  <h6>Өгөөжгүй</h6>
                  <p className="answer text-muted mb-0">Даатгалын хугацаа дуусахад таны мөнгө даатгалын компанид 100% үлддэг.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 mt-4 pt-2">
              <div className="d-flex">
                <i data-feather="help-circle" className="fea icon-ex-md text-primary me-2 mt-1"></i>
                <div className="flex-1">
                  <h6>Хамгаалалт</h6>
                  <p className="answer text-muted mb-0">Даатгал бол хөрөнгө оруулалт биш, ердөө хамгаалалт.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 mt-4 pt-2">
              <div className="d-flex">
                <i data-feather="help-circle" className="fea icon-ex-md text-primary me-2 mt-1"></i>
                <div className="flex-1">
                  <h6>Хүндрэлтэй</h6>
                  <p className="answer text-muted mb-0">Эрсдэл тохиолдвол нөхөн олговроо авахад түвэгтэй.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-home-2 d-flex align-items-center" id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
              <div className="title-heading margin-top-100">
                <h1 className="heading mb-3">Earth хамтрал хэрхэн ажиллах вэ?</h1>
              </div>

              <div className="home-dashboard">
                <Image src={EQDImg} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light mt-0 mt-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="mt-4 pt-2">
                <a className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#login-popup">Нэгдье<i className="uil uil-angle-right-b"></i></a>
              </div>
            </div>
          </div>

        </div>
      </section>
      <div className="modal fade" id="login-popup" aria-hidden="true">
        <div className="modal-dialog  modal-sm modal-dialog-centered">
          <div className="modal-content rounded shadow border-0">
            <div className="modal-body p-0">
              <div className="container-fluid px-0">
                <div className="row align-items-center g-0">

                  <div className="col-lg-12 col-md-7">
                    <TokenTransfer/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.min.js" />
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js' />
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
export default Home