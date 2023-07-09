import React from 'react'

export default function Navigation() {
  return (
    <>
     
     <div className="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div id="navigation">
                            <ul>
                                <li className="active"><a href="index.html">Home</a></li>
                                <li className="has-sub"><a href="#">Mobiles</a>
                                    <ul>
                                        <li><a href="product-list.html">Mobile List</a></li>
                                        <li><a href="product-single.html">Mobile Single </a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About</a>
                                </li>
                                <li className="has-sub"><a href="#">Pages</a>
                                    <ul>
                                        <li><a href="checkout.html">Checkout Form</a></li>
                                        <li><a href="cart.html">Cart</a> </li>
                                        <li><a href="login-form.html">Login</a> </li>
                                        <li><a href="signup-form.html">Signup</a> </li>
                                        <li><a href="404-page.html">404-page</a> </li>
                                        <li><a href="styleguide.html">styleguide</a> </li>
                                    </ul>
                                </li>
                                <li className="has-sub"><a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog-default.html">Blog Default</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact-us.html">Contact Us</a>
                                </li>
                                <li><a href="template-feature.html">Template Feature</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}
