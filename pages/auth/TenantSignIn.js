import Head from 'next/head'
import Image from "next/image";
import Tenant from "../../public/images/tenant.png";
import Home_fill from "../../public/images/Home_fill.png";
import Ellipse47 from "../../public/images/Ellipse47.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { Store } from "../../utility/Store";
import axios from "axios";
import Cookies from "js-cookie";
import { useContext } from "react";

function Tenant_signin() {
  // anujjadhav0215@gmail.com
  // 9ty1976t

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { redirect } = router.query;
  const { dispatch, state } = useContext(Store);

  if (Cookies.get("userInfo")) {
    router.push("/profile/tenant");
  }

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(details);
  };

  const checkDetails = (details) => {
    id(details.email.length == 0);
  };

  const validateData = (details) => {
    if (!details.email) {
    }
  };

  // temp comment

  const submitHandler = async (details) => {
    closeSnackbar();
    // var correct = validateData(details);
    try {
      const res = await axios.post("/api/auth/users/signin", details);
      dispatch({ type: "USER_LOGIN", payload: res.data });
      Cookies.set("userInfo", JSON.stringify(res.data));
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      enqueueSnackbar("User Signed In Successfully", { variant: "success" });
      router.push(redirect || "/profile/tenant");
    } catch (err) {
      console.log(err.response);
      enqueueSnackbar(err.response?.data?.message, { variant: "error" });
    }
  };

  return (
    <>
      <Head>
        <title>Tenant SignIn</title>
      </Head>
      <div className="main1">
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <section className="sign-in">
          <div className="container pr_container prj">
            <Link href="/homepage/HomePage">
              <div className="returnHome">
                <div className="fish1">
                  <Image src={Home_fill} alt="sub" />
                </div>
                <div className="fishes1">
                  <Image src={Ellipse47} alt="sub" />
                </div>
              </div>
            </Link>
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <Image
                    src={Tenant}
                    height={428}
                    width={500}
                    alt="sign up image"
                  />
                </figure>
              </div>
              <div className="signin-form">
                <h2 className="form-title pr_form-title">Tenant Sign In</h2>
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group pr_form-group">
                    <label className="pr_label" htmlFor="your_name">
                      <i className="fas fa-user"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="text"
                      name="email"
                      onChange={(e) => onChange(e)}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group pr_form-group">
                    <label className="pr_label" htmlFor="your_pass">
                      <i className="fas fa-lock"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="custom-control custom-checkbox pt-5">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label p_remember"
                      htmlFor="customCheck1"
                    >
                      <span className="disable">Remember Me</span>
                    </label>
                  </div>
                  <div>
                    <div className="form-group pr_form-group form-button pr_form-button">
                      <button
                        type="submit"
                        name="signin"
                        className=" btn btn-primary pr_form-submit"
                        value="Sign In"
                        onClick={(e) => onSubmit(e)}
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                  <div className="p_mem">
                    Not a member?
                    <Link href="/auth/TenantSignUp">Sign Up</Link>
                  </div>
                </form>
                <div className="social-login">
                  <span className="social-label">Or login with</span>
                  <ul className="socials">
                    <li>
                      <a href="#">
                        <i className=" fab fa-facebook-square fa-3x "></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className=" fab fa-twitter fa-3x"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="zmdi-google fab fa-google fa-3x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Tenant_signin;
