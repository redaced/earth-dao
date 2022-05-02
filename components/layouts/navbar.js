import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../../assets/images/logo-light.png'
import logoDark from '../../assets/images/logo-dark.png'
export default function Navbar({ children }) {
    const address = useAddress();
    const connectWithMetamask = useMetamask();
    const disconnectWallet = useDisconnect();
    return (
        <>
            <header id="topnav" className="defaultscroll sticky tagline-height">
                <div className="container">
                    <Link href="/">
                        <a className="logo">
                            <Image src={logoDark} className="l-dark" height={40} width={140} alt="" />
                            <Image src={logoDark} className="l-light" height={40} width={140} alt="" />
                        </a>
                    </Link>
                    <div className="menu-extras">
                        <div className="menu-item">
                            <a className="navbar-toggle" id="isToggle">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </div>
                    </div>
                    {address ? (
                        <>
                            <ul className="buy-button list-inline mb-0">
                                <li className="list-inline-item ps-1 mb-0 me-2">
                                    <span className="login-btn-primary">
                                        <span className='text-primary'>{address.substring(0, 6)}...{address.substring(address.length - 5, address.length)}</span>
                                    </span>
                                    <span className="login-btn-light">
                                        <span className='text-primary'>{address.substring(0, 6)}...{address.substring(address.length - 5, address.length)}</span>
                                    </span>
                                </li>
                                <li className="list-inline-item ps-1 mb-0">
                                    <a onClick={disconnectWallet}>
                                        <div className="login-btn-primary"><span className="btn btn-icon btn-pills btn-soft-primary"><i className="uil uil-signout"></i></span></div>
                                        <div className="login-btn-light"><span className="btn btn-icon btn-pills btn-light"><i className="uil uil-signout"></i></span></div>
                                    </a>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <ul className="buy-button list-inline mb-0">
                            <li className="list-inline-item ps-1 mb-0">
                                <a onClick={connectWithMetamask}>
                                    <div className="login-btn-primary"><span className="btn btn-icon btn-pills btn-soft-primary"><i className="uil uil-signin"></i></span></div>
                                    <div className="login-btn-light"><span className="btn btn-icon btn-pills btn-light"><i className="uil uil-signin"></i></span></div>
                                </a>
                            </li>
                        </ul>
                    )}
                    <div id="navigation">
                        <ul className="navigation-menu">
                            <li>
                                <Link href='/members'><a className="sub-menu-item">Гишүүд</a></Link>
                            </li>
                            <li>
                                <Link href='/proposals'><a className="sub-menu-item">Саналууд</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}