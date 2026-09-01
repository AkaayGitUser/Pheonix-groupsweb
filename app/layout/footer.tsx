"use client";

import Image from "next/image";
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
          {/* Phoenix Logo & Send Message Box */}
          <div className="logoSection">
            <Image
              src="LOGOP.png"
              alt="Phoenix Logo"
              width={130}
              height={55}
              className="logoImage"
            />

            {/* Send Message / Newsletter Signup Box */}
            <div className="newsletterBox">
              <span className="newsletterTitle">
                Sign Up to Get Latest News / Updates
              </span>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="newsletterForm"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  className="newsletterInput"
                />
                <button type="submit" className="newsletterButton">
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footerColumn quickLinksColumn">
            <h2>Quick Links</h2>

            <div className="quickLinks ">
              <span className="quickLinkText">Phoenix Arena</span>
              <span className="quickLinkText mt-1">Phoenix Foundation</span>
              <span className="quickLinkText mt-1">Phoenix Construction</span>
              <span className="quickLinkText mt-1">Phoenix Motors</span>
              <span className="quickLinkText mt-1">Vaikunta Mahaprasthana</span>
            </div>
          </div>

          {/* Address */}
          <div className="footerColumn addressColumn">
            <h2>Address</h2>

            <div className="addressItem">
              <MapPin size={12} strokeWidth={1.5} className="mapIcon" />

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
              <MapPin size={12} strokeWidth={1.5} className="mapIcon" />

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
              <span className="socialIconStatic">
                <FaFacebookSquare size={18} />
              </span>

              <span className="socialIconStatic">
                <FaInstagram size={18} />
              </span>

              <span className="socialIconStatic">
                <FaLinkedin size={18} />
              </span>
            </div>
          </div>
        </div>

        <div className="copyright">
          Copyright © Phoenix Groups 2026 All rights reserved.
        </div>
      </footer>

      <style jsx>
        {`
        * {
          box-sizing: border-box;
        }

        .footer {
          width: 100%;
          margin-top: 5px;
          background: #084d8d;
          color: #ffffff;
        }

        .footerContent {
          width: 100%;
          min-height: auto;
          display: grid;
          grid-template-columns: 32% 20% 28% 20%;
          align-items: start;
          padding: 28px 6.3% 24px;
        }

        /* Logo & Newsletter */

        .logoSection {
          min-height: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding-top: 0;
          padding-right: 24px;
          gap: 10px;
        }

        .logoImage {
          display: block;
          width: 130px;
          height: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: left center;
        }

        .newsletterBox {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 100%;
          max-width: 200px;
        }

        .newsletterTitle {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.1;
          white-space: nowrap;
        }

        .newsletterForm {
          display: flex;
          align-items: center;
          width: 100%;
          border-radius: 3px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.08);
          padding: 1.5px;
          overflow: hidden;
        }

        .newsletterInput {
          flex: 1;
          width: 100%;
          height: 24px;
          border: none;
          background: #e5e7eb;
          color: #1f2937;
          font-size: 10px;
          padding: 0 6px;
          border-top-left-radius: 2px;
          border-bottom-left-radius: 2px;
          outline: none;
        }

        .newsletterInput::placeholder {
          color: #9ca3af;
        }

        .newsletterButton {
          height: 24px;
          padding: 0 10px;
          background: #084d8d;
          color: #ffffff;
          font-size: 10px;
          font-weight: 500;
          border: none;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .newsletterButton:hover {
          background: #063a6b;
        }

        /* Columns */

        .footerColumn {
          min-height: auto;
          padding-left: 24px;
          border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .footerColumn h2 {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.1px;
        }

        /* Quick Links */

        .quickLinks {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .quickLinkText {
          color: rgba(255, 255, 255, 0.88);
          font-size: 12px;
          font-weight: 400;
          line-height: 1;
        }

        /* Address */

        .addressColumn {
          padding-left: 32px;
        }

        .addressItem {
          display: grid;
          grid-template-columns: auto 1fr;
          column-gap: 6px;
          align-items: start;
          margin-bottom: 14px;
          color: rgba(255, 255, 255, 0.82);
        }

        .addressItem :global(.mapIcon) {
          margin-top: 1px;
        }

        .addressItem p {
          margin: 0;
          font-size: 11.5px;
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: 0.05px;
        }

        /* Social */

        .socialColumn {
          padding-left: 32px;
        }

        .socialIcons {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 14px;
        }

        .socialIconStatic {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        /* Copyright */

        .copyright {
          min-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.11);
          color: rgba(255, 255, 255, 0.72);
          font-size: 8.5px;
          font-weight: 400;
          text-align: center;
        }

        /* Large screens */

        @media (min-width: 1500px) {
          .footerContent {
            max-width: 1400px;
            margin: 0 auto;
          }
        }

        /* Tablet */

        @media (max-width: 1100px) {
          .footerContent {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 0;
            padding: 28px 32px;
          }

          .logoSection {
            min-height: auto;
          }

          .logoImage {
            width: 120px;
            height: auto;
          }

          .footerColumn {
            padding-left: 24px;
          }

          .addressColumn {
            padding-left: 0;
            border-left: none;
          }
        }

        /* Mobile View */

        @media (max-width: 768px) {
          .footerContent {
            grid-template-columns: 1fr 1fr;
            gap: 16px 10px;
            padding: 18px 14px;
            align-items: start;
          }

          .logoSection {
            grid-column: span 2;
            min-height: auto;
            padding: 0 0 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }

          .logoImage {
            width: 110px;
            height: auto;
          }

          .footerColumn,
          .addressColumn,
          .socialColumn {
            min-height: auto;
            padding-left: 0;
            padding-top: 2px;
            border-left: none;
            border-top: none;
          }

          .quickLinksColumn {
            padding-right: 4px;
          }

          .addressColumn {
            padding-left: 8px;
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
            margin-bottom: 8px;
          }

          .addressItem :global(.mapIcon) {
            margin-top: 1px;
            width: 10px;
            height: 10px;
          }

          .addressItem p {
            font-size: 9.5px;
            line-height: 1.2;
            word-break: break-word;
          }

          .socialColumn {
            grid-column: span 2;
            padding-top: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .socialColumn h2 {
            font-size: 13px;
            margin-bottom: 0;
          }

          .quickLinks {
            gap: 6px;
          }

          .quickLinkText {
            font-size: 10px;
            line-height: 1.2;
          }

          .socialIcons {
            margin-top: 0;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .footerContent {
            padding: 14px 10px;
            gap: 12px 8px;
          }

          .logoImage {
            width: 100px;
          }

          .footerColumn h2 {
            font-size: 13px;
            margin-bottom: 6px;
          }

          .quickLinkText {
            font-size: 9.5px;
          }

          .addressItem p {
            font-size: 9px;
            line-height: 1.15;
          }

          .copyright {
            min-height: 35px;
            font-size: 8px;
            padding: 6px 8px;
          }

          .newsletterTitle {
            font-size: 9px;
          }
        }
      `}</style>
    </>
  );
}