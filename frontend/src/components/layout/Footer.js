import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div
          className="text-center mt-1 row"
          style={{
            background: "#004777",
            color: "white",
            height: 360,
          }}
        >
          <div class="col-12">
            <img
              className="footerimg"
              style={{ position: "relative", top: 34 }}
              src="/images/footer.jpg"
            />
            <div style={{ position: "relative", top: 50 }}>
              <b style={{ fontSize: 22 }}>
                D-Shop ( 2019-2020 ) , Developed & Desing By Deepak Singh Parmar
              </b>
              <br />
              <a
                href="https://www.linkedin.com/in/deepak-singh-parmar-229b701bb"
                target="_blank"
              >
                <i
                  className="fa fa-linkedin-square"
                  style={{ color: "white", fontSize: 30, margin: 20 }}
                  aria-hidden="true"
                ></i>
              </a>

              <a href="https://github.com/DeepakSinghParmar" target="_blank">
                <i
                  className="fa fa-github-square"
                  style={{ color: "white", fontSize: 30, margin: 20 }}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
