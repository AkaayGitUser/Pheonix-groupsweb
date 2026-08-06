"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function FooterPage() {
  return (
    <>
      <footer className="footer">
        <div className="footerContent">
          {/* Phoenix Logo */}
          <div className="logoSection">
            <img
              src="LOGOP.png"
              alt="Phoenix Logo"
              width={280}
              height={125}
              className="logoImage"
            />
          </div>

          {/* Quick Links */}
          <div className="footerColumn quickLinksColumn">
            <h2>Quick Links</h2>

            <nav className="quickLinks">
              <Link href="/phoenix-arena">Phoenix Arena</Link>

              <Link href="/phoenix-foundation">
                Phoenix Foundation
              </Link>

              <Link href="/phoenix-construction">
                Phoenix Construction
              </Link>

              <Link href="/phoenix-motors">Phoenix Motors</Link>

              <Link href="/vaikunta-mahaprasthana">
                Vaikunta Mahaprasthana
              </Link>
            </nav>
          </div>

          {/* Address */}
          <div className="footerColumn addressColumn">
            <h2>Address</h2>

            <div className="addressItem">
              <MapPin size={14} strokeWidth={1.5} className="mapIcon" />

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
              <MapPin size={14} strokeWidth={1.5} className="mapIcon" />

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
          margin-top: 40px; /* Added spacing between map section and footer */
          background: #084d8d;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .footerContent {
          width: 100%;
          min-height: 318px;
          display: grid;
          grid-template-columns: 33% 18% 26% 23%;
          align-items: start;
          padding: 55px 6.3% 52px;
        }

        /* Logo */

        .logoSection {
          min-height: 205px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding-top: 2px;
          padding-right: 38px;
        }

        .logoImage {
          display: block;
          width: 280px;
          height: 125px;
          max-width: 100%;
          object-fit: contain;
          object-position: left center;
        }

        /* Columns */

        .footerColumn {
          min-height: 196px;
          padding-left: 34px;
          border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .footerColumn h2 {
          margin: 0 0 25px;
          color: #ffffff;
          font-size: 21px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.1px;
        }

        /* Quick Links */

        .quickLinks {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
        }

        .quickLinks :global(a) {
          color: rgba(255, 255, 255, 0.88);
          font-size: 14px;
          font-weight: 400;
          line-height: 1;
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
          padding-left: 58px;
        }

        .addressItem {
          display: grid;
          grid-template-columns: auto 1fr;
          column-gap: 7px;
          align-items: start;
          margin-bottom: 25px;
          color: rgba(255, 255, 255, 0.82);
        }

        .addressItem :global(.mapIcon) {
          margin-top: 1px;
        }

        .addressItem p {
          margin: 0;
          font-size: 13.5px;
          font-weight: 400;
          line-height: 1.22;
          letter-spacing: 0.05px;
        }

        /* Social */

        .socialColumn {
          padding-left: 57px;
        }

        .socialIcons {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 37px;
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
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.11);
          color: rgba(255, 255, 255, 0.76);
          font-size: 9px;
          font-weight: 400;
          text-align: center;
        }

        /* Large screens */

        @media (min-width: 1500px) {
          .footerContent {
            max-width: 1500px;
            margin: 0 auto;
          }
        }

        /* Tablet */

        @media (max-width: 1100px) {
          .footerContent {
            grid-template-columns: repeat(2, 1fr);
            gap: 44px 0;
            padding: 52px 44px;
          }

          .logoSection {
            min-height: 180px;
          }

          .logoImage {
            width: 260px;
            height: auto;
          }

          .footerColumn {
            padding-left: 34px;
          }

          .addressColumn {
            padding-left: 0;
            border-left: none;
          }
        }

        /* Mobile View - Center Social Column Only */

        @media (max-width: 768px) {
          .footerContent {
            grid-template-columns: 1fr 1fr;
            gap: 20px 12px;
            padding: 24px 16px;
            align-items: start;
          }

          .logoSection {
            grid-column: span 2;
            min-height: auto;
            padding: 0 0 12px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }

          .logoImage {
            width: 190px;
            height: auto;
          }

          .footerColumn,
          .addressColumn,
          .socialColumn {
            min-height: auto;
            padding-left: 0;
            padding-top: 4px;
            border-left: none;
            border-top: none;
          }

          .quickLinksColumn {
            padding-right: 4px;
          }

          .addressColumn {
            padding-left: 10px;
            border-left: 1px solid rgba(255, 255, 255, 0.12);
            display: flex;
            flex-direction: column;
            gap: 0;
          }

          .addressItem {
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 4px;
            align-items: start;
            margin-bottom: 10px;
          }

          .addressItem :global(.mapIcon) {
            margin-top: 2px;
            width: 11px;
            height: 11px;
          }

          .addressItem p {
            font-size: 10px;
            line-height: 1.25;
            word-break: break-word;
          }

          .socialColumn {
            grid-column: span 2;
            padding-top: 12px;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
          }

          .socialColumn h2 {
            font-size: 15px;
            margin-bottom: 0;
          }

          .quickLinks {
            gap: 8px;
          }

          .quickLinks :global(a) {
            font-size: 11px;
            line-height: 1.2;
          }

          .socialIcons {
            margin-top: 0;
            gap: 14px;
          }
        }

        @media (max-width: 480px) {
          .footerContent {
            padding: 20px 14px;
            gap: 16px 10px;
          }

          .logoImage {
            width: 170px;
          }

          .footerColumn h2 {
            font-size: 14px;
            margin-bottom: 8px;
          }

          .quickLinks :global(a) {
            font-size: 10.5px;
          }

          .addressItem p {
            font-size: 9.5px;
            line-height: 1.2;
          }

          .copyright {
            min-height: 50px;
            font-size: 9px;
            padding: 10px 8px;
          }
        }
      `}</style>
    </>
  );
}