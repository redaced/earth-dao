import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/layouts/navbar'
import Script from 'next/script'
import { useVote, useAddress } from '@thirdweb-dev/react';
import Image from 'next/image'

const Detail = () => {
    const router = useRouter()
    const { pid } = router.query
    const address = useAddress();
    const vote = useVote(process.env.NEXT_PUBLIC_VOTE_ADDRESS)
    const [value, setValue] = useState(0)
    const [voteDescription, setVoteDescription] = useState([]);
    const [voteStartBlock, setVoteStartBlock] = useState([]);
    const [voteEndBlock, setVoteEndBlock] = useState([]);
    const [voteCreator, setVoteCreator] = useState('');
    useEffect(() => {
        const getVotes = async () => {
            try {
                const votes = await vote.getAll()
                votes.forEach(vote => {
                    if(vote.proposalId._hex === pid){
                        setVoteDescription(vote.description)
                        setVoteStartBlock(vote.startBlock._hex)
                        setVoteEndBlock(vote.endBlock._hex)
                        setVoteCreator(vote.proposer)
                    }
                });
            } catch (error) {
                console.error("votes: ", error);
            }
        };
        getVotes();
    }, [vote,pid,setVoteDescription,setVoteStartBlock,setVoteEndBlock,setVoteCreator]);
    const submit = async function(){
        await vote.vote(pid, value, "I like this proposal!");
    }
    return (
        <>

            <Navbar />
            {voteDescription ? (
                <>
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="rounded shadow">
                                        <div className="p-4">
                                            <h5 className="text-primary mb-0">{voteDescription}</h5>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <a className="pe-3" href="forums-comments.html#">
                                                    <Image src={'https://stamp.fyi/avatar/' + voteCreator} height="60" width="60" />
                                                    </a>
                                                    <div className="flex-1 commentor-detail">
                                                        <h6 className="mb-0"><a 
                                                            className="media-heading text-dark">{voteCreator.substring(0, 6)}...{voteCreator.substring(voteCreator.length - 5, voteCreator.length)}</a></h6>
                                                        <small className="text-muted">Санаачлагч</small>
                                                    </div>
                                                </div>
                                                <small className="text-muted">2022/5/2 <br /> 13:44 цаг</small>
                                            </div>

                                            <div className="mt-3">
                                                <h4 className="title mb-4">Дэлгэрэнгүй</h4>
                                                <p className="text mb-0">2022 оны 4 сарын 26нд Сэлэнгэ аймгийн Зүүнхараа орчимд 5-6 баллын
                                                    хүчтэй газар хөдлөлт болсон бөгөөд үүнд манай хамралын 2 гишүүний үл хөдлөх хөрөнгө
                                                    тодорхой хэмжээгээр өртсөн ба энэ талаар 4 сарын 27нд мэдэгдэж нөхөн төлбөр авах
                                                    хүсэлтээ илэрхийлсэн.</p>
                                                <div className="mt-3">
                                                    <h4 className="title mb-4">Санал</h4>
                                                    <p className="text mb-0">

                                                        <ul>

                                                            <li>Газар хөдлөлтөнд өртсөн гишүүдийн хохирлын хэмжээг тодорхойлуулах
                                                            </li>

                                                            <li>Хохирлын хэмжээ 20 саяас доош бол хамтын сангаас шууд гаргаж өгөх
                                                            </li>

                                                            <li>Хохирлын хэмжээ 20 саяас дээш бол улирлаар хувааж шилжүүлэх</li>
                                                        </ul>
                                                    </p>
                                                    <div className="mt-3">
                                                        <h4 className="title mb-4">Гүйцэтгэл</h4>
                                                        <p className="text mb-0">
                                                            <ul>

                                                                <li>Хамтралын хамтран ажилладаг үнэлгээний ААА байгууллагаар
                                                                    хохирлын шинжилгээг хийлгэх</li>

                                                                <li>Шилжүүлэг хийх талаар дахин санал оруулах</li>

                                                            </ul>
                                                        </p>

                                                        <div className="col-lg-12">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="mb-3">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-4 mt-lg-0 pt-2 pt-lg-0">

                                    <div className="card border-0 sidebar sticky-bar rounded shadow bg-light">
                                        <div className="card-body">
                                            <div
                                                className="card pricing pricing-primary starter-plan text-center shadow rounded border-0">
                                                <div className="card-body py-5">
                                                    <h6 className="title name fw-bold text-uppercase mb-4">Саналын мэдээлэл</h6>


                                                    <ul className="list-unstyled mb-0 ps-0">
                                                        <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i
                                                            className="uil uil-check-circle align-middle"></i></span>Эхэлсэн:
                                                            2022/4/28</li>
                                                        <li className="h6 text-muted mb-0"><span className="icon h5 me-2"><i
                                                            className="uil uil-check-circle align-middle"></i></span>Дуусах:
                                                            2022/5/15</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 sidebar sticky-bar rounded shadow bg-light">
                                            <div className="card-body">
                                                <div
                                                    className="card pricing pricing-primary starter-plan text-center shadow rounded border-0">
                                                    <div className="card-body py-5">
                                                        <h6 className="title name fw-bold text-uppercase mb-4">Саналын үр дүн</h6>

                                                        <ul className="list-unstyled mb-0 ps-0">
                                                            <li className="h6 text-muted mb-0">зөвшөөрсөн
                                                                    <div className="progress-box">
                                                                        <div className="progress">
                                                                            <div className="progress-bar position-relative bg-primary">
                                                                                <div
                                                                                    className="progress-value d-block text-muted h6">
                                                                                    90%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                            <br/>
                                                            <li className="h6 text-muted mb-0">татгалзсан
                                                                <div className="progress-box">
                                                                    <div className="progress">
                                                                        <div className="progress-bar position-relative bg-primary">
                                                                            <div
                                                                                className="progress-value d-block text-muted h6">
                                                                                10%</div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </li>
                                                            <br/>
                                                            <li className="h6 text-muted mb-0">Түдгэлзсэн
                                                                <div className="progress-box">
                                                                    <div className="progress">
                                                                        <div className="progress-bar position-relative bg-primary">
                                                                            <div
                                                                                className="progress-value d-block text-muted h6">
                                                                                0%</div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                            <div className="mb-0">
                                            <br/>
                                                <div className="d-flex">
                                                    <button className="btn btn-primary me-2" onClick={e => { setValue(0); submit() }}>Зөвшөөрөх</button>
                                                    <button className="btn btn-danger me-2" onClick={e => { setValue(1); submit() }}>Татгалзах</button>
                                                    <button className="btn btn-warning" onClick={e => { setValue(2); submit() }}>Түдгэлзэх</button>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ): (<>
                <div className='mh-500px' style={{minHeight: '600px'}}></div>
            </>)}
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

export default Detail