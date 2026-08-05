"use client";
 
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
 
export default function FooterPage() {
  return (
    <>
      <footer className="footer">
        <div className="footerContent">
          {/* Phoenix Logo */}
          <div className="logoSection">
            <Image
              src="/LOGOP.png"
              alt="Phoenix Logo"
              width={320}
              height={145}
              className="logoImage"
              style={{
                width: "300px",
                height: "auto",
              }}
              priority
            />
          </div>
 
          {/* Quick Links */}
          <div className="footerColumn quickLinksColumn">
            <h2>Quick Links</h2>
 
            <nav className="quickLinks">
              <Link href="/phoenix-arena">
                Phoenix Arena
              </Link>
 
              <Link href="/phoenix-foundation">
                Phoenix Foundation
              </Link>
 
              <Link href="/phoenix-construction">
                Phoenix Construction
              </Link>
 
              <Link href="/phoenix-motors">
                Phoenix Motors
              </Link>
 
              <Link href="/vaikunta-mahaprasthana">
                Vaikunta Mahaprasthana
              </Link>
            </nav>
          </div>
 
          {/* Address */}
          <div className="footerColumn addressColumn">
            <h2>Address</h2>
 
            <div className="addressItem">
              <MapPin
                size={15}
                strokeWidth={1.6}
              />
 
              <p>
                Nagarjuna Residency Driveway,
                <br />
                Diamond Hills, Lumbini Avenue,
                <br />
                Gachibowli, Hyderabad,
                <br />
                Telangana 500081
              </p>
            </div>
 
            <div className="addressItem">
              <MapPin
                size={15}
                strokeWidth={1.6}
              />
 
              <p>
                Plot No. 1335, Road No. 45 Jubilee
                <br />
                Hills, Jubilee Hills, Hyderabad,
                <br />
                Telangana 500033
              </p>
            </div>
          </div>
 
          {/* Social Media */}
          <div className="footerColumn socialColumn">
            <h2>Follow US :</h2>
 
            <div className="socialIcons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Facebook in a new tab"
              >
                <FaFacebookSquare size={20} />
              </a>
 
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Instagram in a new tab"
              >
                <FaInstagram size={20} />
              </a>
 
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn in a new tab"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
 
        <div className="copyright">
          Copyright © Phoenix Groups 2026 All rights reserved.
        </div>
      </footer>
 
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
 
        .footer {
          width: 100%;
          margin-top: auto;
          background: #09558f;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }
 
        .footerContent {
          width: 100%;
          min-height: 314px;
          display: grid;
          grid-template-columns: 32% 18% 26% 24%;
          padding: 56px 6.3% 50px;
        }
 
        /* Phoenix Logo */
 
        .logoSection {
          min-height: 202px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-right: 45px;
          overflow: hidden;
        }
 
        .logoImage {
          display: block;
          width: 300px;
          height: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: left center;
        }
 
        /* Footer Columns */
 
        .footerColumn {
          min-height: 202px;
          padding-left: 34px;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }
 
        .footerColumn h2 {
          margin: 0 0 23px;
          color: #ffffff;
          font-size: 21px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.2px;
        }
 
        /* Quick Links */
 
        .quickLinks {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 17px;
        }
 
        .quickLinks :global(a) {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.1;
          text-decoration: none;
          transition:
            color 0.2s ease,
            transform 0.2s ease;
        }
 
        .quickLinks :global(a:hover) {
          color: #ffffff;
          transform: translateX(3px);
        }
 
        /* Address */
 
        .addressColumn {
          padding-left: 57px;
        }
 
        .addressItem {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          margin-bottom: 24px;
          color: rgba(255, 255, 255, 0.86);
        }
 
        .addressItem :global(svg) {
          flex-shrink: 0;
          margin-top: 1px;
        }
 
        .addressItem p {
          margin: 0;
          font-size: 13.5px;
          font-weight: 400;
          line-height: 1.23;
          letter-spacing: 0.1px;
        }
 
        /* Social Media */
 
        .socialColumn {
          padding-left: 54px;
        }
 
        .socialIcons {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 35px;
        }
 
        .socialIcons a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
        }
 
        .socialIcons a:hover {
          opacity: 0.75;
          transform: translateY(-2px);
        }
 
        /* Copyright */
 
        .copyright {
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.78);
          font-size: 9px;
          font-weight: 400;
          text-align: center;
        }
 
        /* Large Screens */
 
        @media (min-width: 1500px) {
          .footerContent {
            max-width: 1500px;
            margin: 0 auto;
          }
 
          .logoImage {
            width: 320px;
          }
        }
 
        /* Tablet */
 
        @media (max-width: 1100px) {
          .footerContent {
            grid-template-columns: repeat(2, 1fr);
            gap: 45px 0;
            padding: 55px 45px;
          }
 
          .logoSection {
            min-height: 180px;
          }
 
          .logoImage {
            width: 280px;
          }
 
          .footerColumn {
            padding-left: 35px;
          }
 
          .addressColumn {
            padding-left: 0;
            border-left: none;
          }
        }
 
        /* Small Tablet */
 
        @media (max-width: 768px) {
          .footerContent {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 45px 30px;
          }
 
          .logoSection {
            min-height: auto;
            justify-content: flex-start;
            padding: 0 0 15px;
          }
 
          .logoImage {
            width: 280px;
            max-width: 100%;
          }
 
          .footerColumn,
          .addressColumn,
          .socialColumn {
            min-height: auto;
            padding: 28px 0 0;
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
          }
 
          .socialIcons {
            margin-top: 20px;
          }
        }
 
        /* Mobile */
 
        @media (max-width: 480px) {
          .footerContent {
            padding: 40px 22px;
          }
 
          .logoImage {
            width: 240px;
          }
 
          .footerColumn h2 {
            font-size: 20px;
          }
 
          .quickLinks :global(a),
          .addressItem p {
            font-size: 13px;
          }
 
          .copyright {
            min-height: 65px;
            padding: 15px 10px;
          }
        }
      `}</style>
    </>
  );
}
 