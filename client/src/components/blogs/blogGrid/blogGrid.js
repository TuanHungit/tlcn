import React from 'react';
import BlogCard from './blogCard/blogCard';
export default (props) => {
  return (
    <div class='main-wrapper scrollspy-container'>
      <section class='page-wrapper pb-0'>
        <div class='page-title bg-light mb-0'>
          <div class='container'>
            <div class='row gap-15 align-items-center'>
              <div class='col-12 col-md-7'>
                <nav aria-label='breadcrumb'>
                  <ol class='breadcrumb'>
                    <li class='breadcrumb-item'>
                      <a href='blog-05.html#'>
                        <i class='fas fa-home'></i>
                      </a>
                    </li>
                    <li class='breadcrumb-item active' aria-current='page'>
                      Blog
                    </li>
                  </ol>
                </nav>

                <h4 class='mt-0 line-125'>Blog</h4>
              </div>
            </div>
          </div>
        </div>

        <div class='container'>
          <div class='row equal-height gap-0 gap-lg-30 gap-xl-40'>
            <div class='col-12 col-lg-8'>
              <div class='content-wrapper pt-50 pb-0 pb-lg-50'>
                <div class='row equal-height cols-1 cols-sm-2 cols-lg-2 gap-20'>
                  {Object.values(props.blogList).map((el, key) => (
                    <BlogCard key={key} blog={el} />
                  ))}
                </div>

                <nav class='pager-wrappper mt-50'>
                  <ul class='pagination justify-content-center justify-content-lg-left'>
                    <li>
                      <a href='blog-05.html#' aria-label='Previous'>
                        <span aria-hidden='true'>&laquo;</span>
                      </a>
                    </li>
                    <li class='active'>
                      <a href='blog-05.html#'>1</a>
                    </li>
                    <li>
                      <a href='blog-05.html#'>2</a>
                    </li>
                    <li>
                      <a href='blog-05.html#'>3</a>
                    </li>
                    <li>
                      <span>...</span>
                    </li>
                    <li>
                      <a href='blog-05.html#'>11</a>
                    </li>
                    <li>
                      <a href='blog-05.html#'>12</a>
                    </li>
                    <li>
                      <a href='blog-05.html#'>13</a>
                    </li>
                    <li>
                      <a href='blog-05.html#' aria-label='Next'>
                        <span aria-hidden='true'>&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div class='col-12 col-lg-4'>
              <aside class='sidebar-wrapper pv on-right mb-50 mb-lg-0'>
                <div class='sidebar-box'>
                  <div class='box-content'>
                    <form class='quick-form-box'>
                      <div class='input-group'>
                        <input
                          type='email'
                          class='form-control'
                          placeholder='Email address'
                        />
                        <div class='input-group-append'>
                          <button class='btn btn-primary' type='button'>
                            <i class='fas fa-search'></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class='sidebar-box'>
                  <div class='box-title'>
                    <h5>Catrgories</h5>
                  </div>

                  <div class='box-content'>
                    <ul class='category-list'>
                      <li>
                        <a href='blog-05.html#'>
                          Business<span>(25)</span>
                        </a>
                      </li>
                      <li class='active'>
                        <a href='blog-05.html#'>
                          Commerce<span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a href='blog-05.html#'>
                          Coporate<span>(14)</span>
                        </a>
                      </li>
                      <li>
                        <a href='blog-05.html#'>
                          Creative<span>(157)</span>
                        </a>
                      </li>
                      <li>
                        <a href='blog-05.html#'>
                          Entertainment<span>(87)</span>
                        </a>
                      </li>
                      <li>
                        <a href='blog-05.html#'>
                          Nonprofit<span>(47)</span>
                        </a>
                      </li>
                      <li>
                        <a href='blog-05.html#'>
                          Personal<span>(8)</span>
                        </a>
                      </li>
                      <li>
                        <a href='blog-05.html#'>
                          Technology<span>(32)</span>
                        </a>
                      </li>
                      <li>
                        <a href='blog-05.html#'>
                          Miscellaneous<span>(26)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class='sidebar-box'>
                  <div class='box-title'>
                    <h5>Recent Posts</h5>
                  </div>

                  <div class='box-content'>
                    <ul class='post-small-list'>
                      <li class='clearfix'>
                        <a href='http://crenoveative.com/envato/gijalan/blog-single.html'>
                          <div class='image'>
                            <img
                              src='/images/image-square/01.jpg'
                              alt='Popular Post'
                            />
                          </div>
                          <div class='content'>
                            <h6>
                              Enough around remove to barton agreed regret
                            </h6>
                            <p class='recent-post-sm-meta text-muted'>
                              <i class='ri ri-calendar mr-5'></i>June 01, 2016
                            </p>
                          </div>
                        </a>
                      </li>
                      <li class='clearfix'>
                        <a href='http://crenoveative.com/envato/gijalan/blog-single.html'>
                          <div class='image'>
                            <img
                              src='/images/image-square/02.jpg'
                              alt='Popular Post'
                            />
                          </div>
                          <div class='content'>
                            <h6>
                              Year well shot deny shew come stand marry taken
                              his for out
                            </h6>
                            <p class='recent-post-sm-meta text-muted'>
                              <i class='ri ri-calendar mr-5'></i>April 25, 2016
                            </p>
                          </div>
                        </a>
                      </li>
                      <li class='clearfix'>
                        <a href='http://crenoveative.com/envato/gijalan/blog-single.html'>
                          <div class='image'>
                            <img
                              src='/images/image-square/03.jpg'
                              alt='Popular Post'
                            />
                          </div>
                          <div class='content'>
                            <h6>
                              Do related mr account brandon never ready ham
                              these witty him
                            </h6>
                            <p class='recent-post-sm-meta text-muted'>
                              <i class='ri ri-calendar mr-5'></i>March 20, 2016
                            </p>
                          </div>
                        </a>
                      </li>
                      <li class='clearfix'>
                        <a href='http://crenoveative.com/envato/gijalan/blog-single.html'>
                          <div class='image'>
                            <img
                              src='/images/image-square/04.jpg'
                              alt='Popular Post'
                            />
                          </div>
                          <div class='content'>
                            <h6>
                              Our compass see age uncivil is weather forbade her
                              minutes
                            </h6>
                            <p class='recent-post-sm-meta text-muted'>
                              <i class='ri ri-calendar mr-5'></i>March 05, 2016
                            </p>
                          </div>
                        </a>
                      </li>
                      <li class='clearfix'>
                        <a href='http://crenoveative.com/envato/gijalan/blog-single.html'>
                          <div class='image'>
                            <img
                              src='/images/image-square/05.jpg'
                              alt='Popular Post'
                            />
                          </div>
                          <div class='content'>
                            <h6>Ready how but truth son new under.</h6>
                            <p class='recent-post-sm-meta text-muted'>
                              <i class='ri ri-calendar mr-5'></i>February 17,
                              2015
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class='sidebar-box'>
                  <div class='box-title'>
                    <h5>Tags</h5>
                  </div>

                  <div class='box-content'>
                    <div class='tag-cloud clearfix'>
                      <a href='blog-05.html#' class='tag-item'>
                        HTML5
                      </a>{' '}
                      <a href='blog-05.html#' class='tag-item'>
                        CSS3
                      </a>{' '}
                      <a href='blog-05.html#' class='tag-item'>
                        jQuery
                      </a>
                      <a href='blog-05.html#' class='tag-item'>
                        Creative
                      </a>{' '}
                      <a href='blog-05.html#' class='tag-item'>
                        Design
                      </a>{' '}
                      <a href='blog-05.html#' class='tag-item'>
                        iOS
                      </a>
                      <a href='blog-05.html#' class='tag-item'>
                        Android
                      </a>{' '}
                      <a href='blog-05.html#' class='tag-item'>
                        Video
                      </a>{' '}
                      <a href='blog-05.html#' class='tag-item'>
                        Markup
                      </a>
                      <a href='blog-05.html#' class='tag-item'>
                        Programming
                      </a>{' '}
                      <a href='blog-05.html#' class='tag-item'>
                        SEO
                      </a>
                    </div>
                  </div>
                </div>

                <div class='sidebar-box'>
                  <div class='box-title'>
                    <h5>Sidebar Text Widget</h5>
                  </div>

                  <div class='box-content'>
                    <div class='sidebar-text-widget'>
                      <p>
                        In alteration insipidity impression by travelling
                        reasonable up motionless. Of regard warmth by unable
                        sudden garden ladies. No kept hung am size spot no.
                        Likewise led and dissuade{' '}
                        <a href='blog-05.html#'>rejoiced</a> welcomed husbands
                        boy.
                      </p>
                      <ul>
                        <li>Eat imagine you chiefly few end ferrars compass</li>
                        <li>Be visitor females am ferrars inquiry</li>
                        <li>Latter law remark two lively thrown</li>
                        <li>Spot set they know rest its</li>
                        <li>Raptures law diverted believed jennings</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class='sidebar-box'>
                  <div class='box-title'>
                    <h5>Meta</h5>
                  </div>

                  <div class='box-content'>
                    <ul class='category-list'>
                      <li>
                        <a href='blog-05.html#'>Log in</a>
                      </li>
                      <li>
                        <a href='blog-05.html#'>Entries RSS</a>
                      </li>
                      <li>
                        <a href='blog-05.html#'>Comments RSS</a>
                      </li>
                      <li>
                        <a href='blog-05.html#'>WordPress.org</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
