import React, { useState, useEffect, useRef } from 'react';
import { adminRoot } from '../constants/defaultValues';
import { NavLink } from 'react-router-dom';
import {
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  Card,
  CardBody,
  ModalHeader,
  ModalBody,
  Modal,
} from 'reactstrap';
import classnames from 'classnames';
import GlideComponent from '../components/carousel/GlideComponent';
import { scroller } from 'react-scroll';
import { saveAs } from 'file-saver';
import Headroom from 'react-headroom';
import { getCurriculumService } from '../redux/model/services';
import VideoPlayer from '../components/common/VideoPlayer';
import ModalVideo from 'react-modal-video';
import ReactPlayer from 'react-player/youtube';

const slideSettings = {
  type: 'carousel',
  gap: 30,
  perView: 4,
  hideNav: true,
  peek: { before: 10, after: 10 },
  breakpoints: {
    600: { perView: 1 },
    992: { perView: 2 },
    1200: { perView: 3 },
  },
};

const slideItems = [
  {
    icon: 'simple-icon-control-play',
    title: 'Right Click Menu',
    detail: 'Peduli korban bencana gempa bumi Sulbar',
    videoId: 'ZPyLZzszFTU',
  },
  {
    icon: 'simple-icon-control-play',
    title: 'Video Player',
    detail: 'Peresmian Kelas Darurat PAUD korban banjir bandang diMasamba',
    videoId: '4QYghCK2xes',
  },
  {
    icon: 'iconsminds-keyboard',
    title: 'Keyboard Shortcuts',
    detail:
      'BP PAUD dan Dikmas Sulawesi Selatan menyerahkan bantuan kepada korban banjir di Nipa-Nipa Antang',
    videoId: 'MlJtkmE5Sto',
  },
  {
    icon: 'iconsminds-three-arrow-fork ',
    title: 'Two Panels Menu',
    detail: 'BIMTEK Pendidik dan Tenaga Kependidikan PAUD Angkatan III',
    videoId: 'rrSGzvn0-eo',
  },
];

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [data, setData] = useState({});
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  const refSectionFooter = useRef(null);
  const [modalLarge, setModalLarge] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onWindowClick);
    fetch();
    document.body.classList.add('no-footer');
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onWindowClick);
      document.body.classList.remove('no-footer');
    };
  }, []);

  const fetch = async () => {
    const data = await getCurriculumService();
    setData(data.data[0]);
  };

  const onWindowResize = (event) => {
    const homeRect = refRowHome.current.getBoundingClientRect();

    const homeSection = refSectionHome.current;
    homeSection.style.backgroundPositionX = homeRect.x - 580 + 'px';

    const footerSection = refSectionFooter.current;
    footerSection.style.backgroundPositionX =
      event.target.innerWidth - homeRect.x - 2000 + 'px';

    if (event.target.innerWidth >= 992) {
      setShowMobileMenu(false);
    }
  };

  const onWindowClick = () => {
    setShowMobileMenu(false);
  };

  const onWindowScroll = () => {
    setShowMobileMenu(false);
  };

  const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
    return false;
  };

  const onDownload = () => {
    saveAs(data.fileUrl, `${data.title}.pdf`);
  };

  const [open, setOpen] = useState({
    isOpen: false,
  });

  const openModal = (e) => {
    e.preventDefault();
    setOpen({
      isOpen: true,
    });
  };

  return (
    <div
      className={classnames('landing-page', {
        'show-mobile-menu': showMobileMenu,
      })}
    >
      <div className="mobile-menu" onClick={(event) => event.stopPropagation()}>
        <NavLink to="/">
          <img
            style={{ cursor: 'pointer' }}
            src="/assets/logos/white-full.png"
            height="10%"
            alt="Logo"
            onClick={(event) => scrollTo(event, 'home')}
          />
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'features')}
            >
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="c-pointer" onClick={onDownload}>
              KURIKULUM PAUD
            </a>
          </li>

          <li className="nav-item">
            <span style={{ color: '#3a3a3a' }}>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link" caret>
                  MODEL PEMBELAJARAN
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="/download">
                    Download
                  </DropdownItem>
                  <DropdownItem tag="a" href="/recomendation">
                    Rekomendasi
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </span>
          </li>
          <li className="nav-item">
            <NavLink to="/login">LOGIN</NavLink>
          </li>
        </ul>
      </div>

      <div className="main-container">
        <Headroom className="landing-page-nav">
          <nav>
            <div className="container d-flex align-items-center justify-content-between">
              <React.Fragment>
                <img
                  style={{ cursor: 'pointer' }}
                  src="/assets/logos/white-full.png"
                  height="50%"
                  alt="Logo"
                  href="/"
                  onClick={(event) => scrollTo(event, 'home')}
                />
              </React.Fragment>

              <ul className="navbar-nav d-none d-lg-flex flex-row">
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'features')}
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="c-pointer" onClick={onDownload}>
                    KURIKULUM PAUD
                  </a>
                </li>
                <li className="nav-item">
                  <span style={{ color: 'white' }}>
                    <UncontrolledDropdown setActiveFromChild>
                      <DropdownToggle tag="a" className="nav-link" caret>
                        MODEL PEMBELAJARAN
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a" href="/download">
                          Download
                        </DropdownItem>
                        <DropdownItem tag="a" href="/recomendation">
                          Rekomendasi
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </span>
                </li>
                <li className="nav-item">
                  <NavLink to="/login">LOGIN</NavLink>
                </li>
              </ul>
              <span
                className="mobile-menu-button"
                onClick={(event) => {
                  setShowMobileMenu(!showMobileMenu);
                  event.stopPropagation();
                }}
              >
                <i className="simple-icon-menu"></i>
              </span>
            </div>
          </nav>
        </Headroom>
        <div className="content-container" id="home">
          <div className="section home" ref={refSectionHome}>
            <div className="container">
              <div className="row home-row" ref={refRowHome}>
                <div className="col-12 d-block d-md-none">
                  <NavLink to="/">
                    <img
                      alt="mobile hero"
                      className="mobile-hero"
                      src="/assets/img/landing-page/home-hero-mobile.png"
                    />
                  </NavLink>
                </div>

                <div className="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div className="home-text">
                    <div className="display-1">
                      BP-PAUD & DIKMAS <br />
                      Sulawesi Selatan
                    </div>
                    <p className="white mb-5">
                      Kementrian Pendidikan dan Kebudayaan Republik Indonesia
                      <br />
                      <br />
                      Balai Pengembangan Pendidikan Anak Usia Dini dan
                      Pendidikan Masyarakat Sulawesi Selatan. <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6  d-none d-md-block">
                  <a href={adminRoot} target="_blank">
                    <img
                      alt="hero"
                      height="70%"
                      // src="/assets/img/landing-page/home-hero.png"
                      src="/assets/logos/white-full.png"
                    />
                  </a>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col-12 p-0">
                  <h2 style={{ color: 'black' }}>GALERI VIDEO</h2>
                  <hr />
                  <div className="home-carousel">
                    <GlideComponent settings={slideSettings}>
                      {slideItems.map((f, index) => (
                        <Card className="mb-4 mr-3" key={`slide_${index}`}>
                          <CardBody className="p-0">
                            <ReactPlayer
                              url={`https://www.youtube.com/watch?v=${f.videoId}`}
                              config={{
                                youtube: {
                                  playerVars: { showinfo: 1 },
                                },
                              }}
                              height="200px"
                              width="100%"
                            />
                          </CardBody>
                          <CardBody>
                            <p className="list-item-heading mb-4">{f.detail}</p>
                          </CardBody>
                        </Card>
                      ))}
                    </GlideComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section footer mb-0" ref={refSectionFooter}>
            <div className="container">
              <div className="row footer-row">
                <div className="col-12 text-right">
                  <a
                    className="btn btn-circle btn-outline-semi-light footer-circle-button c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <i className="simple-icon-arrow-up"></i>
                  </a>
                </div>
                <div className="col-12 text-center footer-content">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <img
                      className="footer-logo"
                      alt="footer logo"
                      src="/assets/logos/white-full.png"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="container copyright pt-5 pb-5">
              <div className="row">
                <div className="col-12"></div>
                <div className="col-12 text-center">
                  <p className="mb-0">2020 © djaduls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
