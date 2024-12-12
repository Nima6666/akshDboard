import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <img src="/akasharalogo.png" alt="" className="w-75" />
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="/">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </a>
          </li>
          {/* End Dashboard Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-menu-button-wide" />
              <span>Components</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/banner-img">
                  <i className="bi bi-circle" />
                  <span>Hero Slider</span>
                </Link>
              </li>

              <li>
                <Link to="/get3d-photos">
                  <i className="bi bi-circle" />
                  <span>Rotate Image</span>
                </Link>
              </li>

              <li>
                <Link to="/get-notice">
                  <i className="bi bi-circle" />
                  <span>Notices</span>
                </Link>
              </li>
              <li>
                <Link to="/get-blogs">
                  <i className="bi bi-circle" />
                  <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link to="/get-activities">
                  <i className="bi bi-circle" />
                  <span>Activities</span>
                </Link>
              </li>
              <li>
                <Link to="/getalltestimonial">
                  <i className="bi bi-circle" />
                  <span>Testimonials</span>
                </Link>
              </li>

              <li>
                <Link to="/getallphotos">
                  <i className="bi bi-circle" />
                  <span>Galleries</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/getallcreativeweek">
                  <i className="bi bi-circle" />
                  <span>Get Creative Week</span>
                </Link>
              </li> */}
              <li>
                <Link to="/getpdf">
                  <i className="bi bi-circle" />
                  <span>PDF </span>
                </Link>
              </li>
              <li>
                <Link to="/getallteacherprofile">
                  <i className="bi bi-circle" />
                  <span>Staff Profiles</span>
                </Link>
              </li>
              <li>
                <Link to="/blogcategory">
                  <i className="bi bi-circle" />
                  <span>Blog Category</span>
                </Link>
              </li>
              <li>
                <Link to="/activitycategory">
                  <i className="bi bi-circle" />
                  <span>Activity Category</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End Components Nav */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-journal-text" />
              <span>Upload Forms</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/latest-blog">
                  <i className="bi bi-circle" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/activity-blog">
                  <i className="bi bi-circle" />
                  <span>Activities</span>
                </Link>
              </li>
              <li>
                <Link to="/banner-photo">
                  <i className="bi bi-circle" />
                  <span>Hero Slider</span>
                </Link>
              </li>
              <li>
                <Link to="/threeD">
                  <i className="bi bi-circle" />
                  <span>Rotate Image</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonial">
                  <i className="bi bi-circle" />
                  <span>Testimonial</span>
                </Link>
              </li>
              <li>
                <Link to="/important-notice">
                  <i className="bi bi-circle" />
                  <span>Notices</span>
                </Link>
              </li>
              <li>
                <Link to="/galleries">
                  <i className="bi bi-circle" />
                  <span>Galleries Event</span>
                </Link>
              </li>

              {/* <li>
                <Link to="/creativeweek">
                  <i className="bi bi-circle" />
                  <span>Creative Week</span>
                </Link>
              </li> */}
              <li>
                <Link to="/downloads">
                  <i className="bi bi-circle" />
                  <span>Upload PDF</span>
                </Link>
              </li>

              <li>
                <Link to="/teacherprofile">
                  <i className="bi bi-circle" />
                  <span>Upload Staff Profile</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End Forms Nav */}

          {/* End Icons Nav */}

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/profile">
              <i className="bi bi-person" />
              <span>Profile</span>
            </Link>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            <Link className="nav-link collapsed" to="/profile">
              <i className="bi-box-arrow-in-left"></i>
              <span>Logout</span>
            </Link>
          </li>
          {/* End Profile Page Nav */}

          {/* <li className="nav-item">
            <Link className="nav-link collapsed" to="/register">
              <i className="bi bi-card-list" />
              <span>Register</span>
            </Link>
          </li> */}
          {/* End Register Page Nav */}

          {/* <li className="nav-item">
            <Link className="nav-link collapsed" to="/login">
              <i className="bi bi-box-arrow-in-right" />
              <span>Login</span>
            </Link>
          </li> */}
          {/* End Login Page Nav */}
          {/* <li className="nav-item">
            <Link className="nav-link collapsed" to="*">
              <i className="bi bi-dash-circle" />
              <span>Error 404</span>
            </Link>
          </li> */}
          {/* End Error 404 Page Nav */}
        </ul>
      </aside>
      {/* End Sidebar*/}
    </>
  );
};

export default Sidebar;
