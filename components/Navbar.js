import React from "react";
import Link from "next/link";
import style from "@/styles/navbar.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <style jsx>
        {`
          .app_name {
            color: white;
          }
          .container {
            padding-top: 20px;
            padding-bottom: 20px;
          }
          .outer_con {
            background-color: #5c4a4d;
          }
          @media (min-width: 760px) {
            //screen size>=760px or more
            .col-md-3 {
              flex: 0 0 auto;
              width: 35%;
            }
          }
          @media (min-width: 0px) and (max-width: 760px) {
            .col-md-3.app_name {
              text-align: center;
            }
            .margintop{
              margin-top: 10px;
            }  
          }
        `}
      </style>
      <div className="outer_con">
        <div className="container">
          <div className="row justify-content-between">

            <div className="col-md-3 app_name">
              <h4>Hunting Coder</h4>
            </div>

            <div className="col-md-3 d-flex justify-content-around margintop">
              <span className="col-md-auto">
                <Link href="/" className={style.nav_link}>
                  Home
                </Link>
              </span>
              <span className="col-md-auto">
                <Link className={style.nav_link} href="/blog">
                  Blog
                </Link>
              </span>
              <span className="col-md-auto">
                <Link className={style.nav_link} href="/contact">
                  Contact
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

//API file based routing  //index.js - homepage /api/
//console.log() prints not in browser
