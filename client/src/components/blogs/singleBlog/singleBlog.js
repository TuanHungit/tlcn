import React from 'react';
import ToDateForView from '../../../common/convertDateForView'
export default (props) => { 
    return (
        <div class="main-wrapper scrollspy-container">

			<section class="page-wrapper page-result pb-0">
			
				<div class="page-title bg-light mb-0">
				
					<div class="container">
					
						<div class="row gap-15 align-items-center">
						
							<div class="col-12 col-md-7">
								
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item"><a href="blog-single-02.html#"><i class="fas fa-home"></i></a></li>
										<li class="breadcrumb-item"><a href="blog-single-02.html#">Blogs</a></li>
										<li class="breadcrumb-item active" aria-current="page">{props.blog.slug}</li>
									</ol>
								</nav>
								
								<h4 class="mt-0 line-125">{props.blog.title}</h4>
								
							</div>
							
						</div>
				
					</div>
					
				</div>
				
				<div class="container">

					<div class="row equal-height gap-0 gap-lg-40">
					
						<div class="col-12 col-lg-8">
							
							<div class="content-wrapper pt-50 pb-0 pb-lg-50">
							
								<article class="blog-single-wrapper">
								
									<div class="image mb-40">
										<img src="/images/image-wide/01.jpg" alt="/images" />
									</div>
									
									<div class="blog-single-heading">
										<h3 class="text-capitalize line-125">{props.blog.title}</h3>
										<ul class="meta-list text-muted mb-20">
											<li>by <a href="blog-single-02.html#">{props.blog.user.name}</a></li>
											<li>on {ToDateForView(props.blog.createdAt)}</li>
											<li>32 bình luận</li>
										</ul>
									</div>
									
									<div class="blog-entry mt-0"> 
											<div dangerouslySetInnerHTML={{ __html: props.blog.content }} />
								
										
										<div class="row gap-30 mt-40">
										
											<div class="col-12 col-sm-6">
												<div class="col-inner">
													<h6>Tags:</h6>
													<div class="tag-cloud clearfix">
														<a href="blog-single-02.html#" class="tag-item">HTML5</a> <a href="blog-single-02.html#" class="tag-item">CSS3</a> <a href="blog-single-02.html#" class="tag-item">jQuery</a> 
														<a href="blog-single-02.html#" class="tag-item">Creative</a>
													</div>
												</div>
											</div>
											
											<div class="col-12 col-sm-6 text-sm-right">
												<div class="col-inner">
													<h6>Share:</h6>
													<div class="box-socials clearfix">
														<a href="blog-single-02.html#" class="text-muted"><i class="fab fa-facebook-square"></i></a>
														<a href="blog-single-02.html#" class="text-muted"><i class="fab fa-twitter-square"></i></a>
														<a href="blog-single-02.html#" class="text-muted"><i class="fab fa-google-plus-square"></i></a>
														<a href="blog-single-02.html#" class="text-muted"><i class="fab fa-pinterest-square"></i></a>
														<a href="blog-single-02.html#" class="text-muted"><i class="fab fa-flickr"></i></a>
													</div>
												</div>
											</div>
										
										</div>
										
									</div>
									
									<hr class="mt-40" />
									
									<div class="blog-pager-wrapper">
								
										<div class="row gap-30 gap-lg-60 mb-30 align-items-center">
											<div class="col-6">
												<h5 class="blog-pager-prev">
													<a href="http://crenoveative.com/envato/gijalan/blog-single.html">
														<span class="text-muted labeling font12 font400 letter-spacing-2"><i class="ri-arrow-left font14 mr-10"></i> Previous post</span>
														<div class="image">
															<img src="/images/image-square/01.jpg" class="img-circle" alt="blog" />
														</div>
														<span>Detract yet delight written farther his general.</span>
													</a>
												</h5>
											</div>
											<div class="col-6">
												<h5 class="blog-pager-next">
													<a href="http://crenoveative.com/envato/gijalan/blog-single.html">
														<span class="text-muted labeling font12 font400 letter-spacing-2">Next post <i class="ri-arrow-right font14 ml-10"></i></span>
														<div class="image">
															<img src="/images/image-square/02.jpg" class="img-circle" alt="blog" />
														</div>
														<span>Latter remark hunted enough vulgar say man.</span>
													</a>
												</h5>
											</div>
										</div>
									
									</div>
									
									<div class="mb-50"></div>
									
									<h4 class="heading-title"><span>Author</span></h4>
									
									<div class="blog-author bg-light">
										<div class="author-label">
											<img src="/images/image-man/01.jpg" alt="author image" class="img-circle" />
										</div>
										<div class="author-details">
											<h5 class="heading"><a href="blog-single-02.html#">Christine Gateau</a></h5>
											<p>Prepared do an dissuade be so whatever steepest. Yet her beyond looked either day wished nay. By doubtful disposed do juvenile an. Now curiosity you explained immediate why behaviour. An dispatched impossible of of melancholy favourable. </p>
										</div>
									</div>
									
									<div class="mb-50"></div>
									
									<h4 class="heading-title"><span>9 comments</span></h4>
									
									<div class="comment-wrapper">
							
										<ul class="comment-item">
											<li>
												<div class="comment-avatar">
													<img src="/images/image-man/03.jpg" alt="author image" />
												</div>
												<div class="comment-header">
													<a href="blog-single-02.html#" class="comment-reply">reply</a>
													<h6 class="heading mt-0">Ibrahim ibn al-Walid</h6>
													<span class="comment-time">23 minutes</span>
												</div>
												<div class="comment-content">
													<p>Received the likewise law graceful his. Nor might set along charm now equal green. Pleased yet equally correct colonel not one. Say anxious carried compact conduct sex general nay certain. Mrs for recommend exquisite household eagerness preserved now. My improved honoured he am ecstatic quitting greatest formerly. </p>
												</div>
												<ul class="comment-item">
													<li>
														<div class="comment-avatar">
															<img src="/images/image-man/01.jpg" alt="author image" />
														</div>
														<div class="comment-header">
															<a href="blog-single-02.html#" class="comment-reply">reply</a>
															<h6 class="heading mt-0">Ibrahim ibn al-Walid</h6>
															<span class="comment-time">18 minutes</span>
														</div>
														<div class="comment-content">
															<p>Received the likewise law graceful his. Nor might set along charm now equal green. Pleased yet equally correct colonel not one. Say anxious carried compact conduct sex general nay certain. Mrs for recommend exquisite household eagerness preserved now. My improved honoured he am ecstatic quitting greatest formerly. </p>
														</div>
														<ul class="comment-item">
															<li>
																<div class="comment-avatar">
																	<img src="/images/image-man/02.jpg" alt="author image" />
																</div>
																<div class="comment-header">
																	<a href="blog-single-02.html#" class="comment-reply">reply</a>
																	<h6 class="heading mt-0">Admin</h6>
																	<span class="comment-time">16 minutes</span>
																</div>
																<div class="comment-content">
																	<p>Received the likewise law graceful his. Nor might set along charm now equal green. Pleased yet equally correct colonel not one. Say anxious carried compact conduct sex general nay certain. Mrs for recommend exquisite household eagerness preserved now. My improved honoured he am ecstatic quitting greatest formerly. </p>
																</div>
															</li>
															<li>
																<div class="comment-avatar">
																	<img src="/images/image-man/04.jpg" alt="author image" />
																</div>
																<div class="comment-header">
																	<a href="blog-single-02.html#" class="comment-reply">reply</a>
																	<h6 class="heading mt-0">Uthman ibn Affan</h6>
																	<span class="comment-time">5 minutes</span>
																</div>
																<div class="comment-content">
																	<p>Received the likewise law graceful his. Nor might set along charm now equal green. Pleased yet equally correct colonel not one. Say anxious carried compact conduct sex general nay certain. Mrs for recommend exquisite household eagerness preserved now. My improved honoured he am ecstatic quitting greatest formerly. </p>
																</div>
															</li>
														</ul>
													</li>
													<li>
														<div class="comment-avatar">
															<img src="/images/image-man/02.jpg" alt="author image" />
														</div>
														<div class="comment-header">
															<a href="blog-single-02.html#" class="comment-reply">reply</a>
															<h6 class="heading mt-0">Admin</h6>
															<span class="comment-time">22 minutes</span>
														</div>
														<div class="comment-content">
															<p>Received the likewise law graceful his. Nor might set along charm now equal green. Pleased yet equally correct colonel not one. Say anxious carried compact conduct sex general nay certain. Mrs for recommend exquisite household eagerness preserved now. My improved honoured he am ecstatic quitting greatest formerly. </p>
														</div>
													</li>
												</ul>
											</li>
											<li>
												<div class="comment-avatar">
													<img src="/images/image-man/01.jpg" alt="author image" />
												</div>
												<div class="comment-header">
													<a href="blog-single-02.html#" class="comment-reply">reply</a>
													<h6 class="heading mt-0">Admin</h6>
													<span class="comment-time">23 days</span>
												</div>
												<div class="comment-content">
													<p>Received the likewise law graceful his. Nor might set along charm now equal green. Pleased yet equally correct colonel not one. Say anxious carried compact conduct sex general nay certain. Mrs for recommend exquisite household eagerness preserved now. My improved honoured he am ecstatic quitting greatest formerly. </p>
												</div>
											</li>
											<li>
												<div class="comment-avatar">
													<img src="/images/image-man/04.jpg" alt="author image" />
												</div>
												<div class="comment-header">
													<a href="blog-single-02.html#" class="comment-reply">reply</a>
													<h6 class="heading mt-0">Uthman ibn Affan</h6>
													<span class="comment-time">Nov, 23, 2013</span>
												</div>
												<div class="comment-content">
													<p>Received the likewise law graceful his. Nor might set along charm now equal green. Pleased yet equally correct colonel not one. Say anxious carried compact conduct sex general nay certain. Mrs for recommend exquisite household eagerness preserved now. My improved honoured he am ecstatic quitting greatest formerly. </p>
												</div>
											</li>
										</ul>
										
										<div class="clear"></div>
										
										<div class="text-center">
											<a href="blog-single-02.html#" class="btn btn-primary btn-sm">Load More</a>
										</div>
										
									</div>
									
									<div class="mb-50"></div>
									
									<h4 class="heading-title"><span>Leave your comment</span></h4>
									
									<form method="post" action="http://crenoveative.com/envato/gijalan/post" class="comment-form">
										<div class="row">
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label for="comment-name">Your Name <span class="text-danger">*</span></label>
													<input type="text" class="form-control" id="comment-name" />
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label for="comment-email">Your Email <span class="text-danger">*</span></label>
													<input type="text" class="form-control" id="comment-email" />
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<label for="comment-message">Message <span class="text-danger">*</span></label>
													<textarea name="message" id="comment-message" class="form-control" rows="8"></textarea>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<button type="submit" class="btn btn-primary btn-wide">Comment</button>
											</div>
										</div>
									</form>
									
									
								</article>
								
							</div>

						</div>

						<div class="col-12 col-lg-4">

							<aside class="sidebar-wrapper pv on-right mb-50 mb-lg-0">
							
								<div class="sidebar-box">
								
									<div class="box-content">
									
										<form class="quick-form-box">
								
											<div class="input-group">
												<input type="email" class="form-control" placeholder="Email address"/>
												<div class="input-group-append">
													<button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
												</div>
											</div>
											
										</form>
										
									</div>
								
								</div>
								
								<div class="sidebar-box">
								
									<div class="box-title"><h5>Catrgories</h5></div>
									
									<div class="box-content">
										<ul class="category-list">
											<li><a href="blog-single-02.html#">Business<span>(25)</span></a></li>
											<li class="active"><a href="blog-single-02.html#">Commerce<span>(2)</span></a></li>
											<li><a href="blog-single-02.html#">Coporate<span>(14)</span></a></li>
											<li><a href="blog-single-02.html#">Creative<span>(157)</span></a></li>
											<li><a href="blog-single-02.html#">Entertainment<span>(87)</span></a></li>
											<li><a href="blog-single-02.html#">Nonprofit<span>(47)</span></a></li>
											<li><a href="blog-single-02.html#">Personal<span>(8)</span></a></li>
											<li><a href="blog-single-02.html#">Technology<span>(32)</span></a></li>
											<li><a href="blog-single-02.html#">Miscellaneous<span>(26)</span></a></li>
										</ul>
									</div>
									
								</div>
								
								<div class="sidebar-box">
								
									<div class="box-title"><h5>Recent Posts</h5></div>
									
									<div class="box-content">
										<ul class="post-small-list">
											<li class="clearfix">
												<a href="http://crenoveative.com/envato/gijalan/blog-single.html">
													<div class="image">
														<img src="/images/image-square/01.jpg" alt="Popular Post" />
													</div>
													<div class="content">
														<h6>Enough around remove to barton agreed regret</h6>
														<p class="recent-post-sm-meta text-muted"><i class="ri ri-calendar mr-5"></i>June 01, 2016</p>
													</div>
												</a>
											</li>
											<li class="clearfix">
												<a href="http://crenoveative.com/envato/gijalan/blog-single.html">
													<div class="image">
														<img src="/images/image-square/02.jpg" alt="Popular Post" />
													</div>
													<div class="content">
														<h6>Year well shot deny shew come stand marry taken his for out</h6>
														<p class="recent-post-sm-meta text-muted"><i class="ri ri-calendar mr-5"></i>April 25, 2016</p>
													</div>
												</a>
											</li>
											<li class="clearfix">
												<a href="http://crenoveative.com/envato/gijalan/blog-single.html">
													<div class="image">
														<img src="/images/image-square/03.jpg" alt="Popular Post" />
													</div>
													<div class="content">
														<h6>Do related mr account brandon never ready ham these witty him</h6>
														<p class="recent-post-sm-meta text-muted"><i class="ri ri-calendar mr-5"></i>March 20, 2016</p>
													</div>
												</a>
											</li>
											<li class="clearfix">
												<a href="http://crenoveative.com/envato/gijalan/blog-single.html">
													<div class="image">
														<img src="/images/image-square/04.jpg" alt="Popular Post" />
													</div>
													<div class="content">
														<h6>Our compass see age uncivil is weather forbade her minutes</h6>
														<p class="recent-post-sm-meta text-muted"><i class="ri ri-calendar mr-5"></i>March 05, 2016</p>
													</div>
												</a>
											</li>
											<li class="clearfix">
												<a href="http://crenoveative.com/envato/gijalan/blog-single.html">
													<div class="image">
														<img src="/images/image-square/05.jpg" alt="Popular Post" />
													</div>
													<div class="content">
														<h6>Ready how but truth son new under.</h6>
														<p class="recent-post-sm-meta text-muted"><i class="ri ri-calendar mr-5"></i>February 17, 2015</p>
													</div>
												</a>
											</li>
										</ul>
									</div>
									
								</div>
								
								<div class="sidebar-box">
								
									<div class="box-title"><h5>Tags</h5></div>
									
									<div class="box-content">
									
										<div class="tag-cloud clearfix">
											<a href="blog-single-02.html#" class="tag-item">HTML5</a> <a href="blog-single-02.html#" class="tag-item">CSS3</a> <a href="blog-single-02.html#" class="tag-item">jQuery</a> 
											<a href="blog-single-02.html#" class="tag-item">Creative</a> <a href="blog-single-02.html#" class="tag-item">Design</a> <a href="blog-single-02.html#" class="tag-item">iOS</a> 
											<a href="blog-single-02.html#" class="tag-item">Android</a> <a href="blog-single-02.html#" class="tag-item">Video</a> <a href="blog-single-02.html#" class="tag-item">Markup</a> 
											<a href="blog-single-02.html#" class="tag-item">Programming</a> <a href="blog-single-02.html#" class="tag-item">SEO</a>
										</div>
										
									</div>
									
								</div>
								
								<div class="sidebar-box">
								
									<div class="box-title"><h5>Sidebar Text Widget</h5></div>
									
									<div class="box-content">
									
										<div class="sidebar-text-widget">
											<p>In alteration insipidity impression by travelling reasonable up motionless. Of regard warmth by unable sudden garden ladies. No kept hung am size spot no. Likewise led and dissuade <a href="blog-single-02.html#">rejoiced</a> welcomed husbands boy.</p>
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
								
								<div class="sidebar-box">
								
									<div class="box-title"><h5>Meta</h5></div>
									
									<div class="box-content">
										<ul class="category-list">
											<li><a href="blog-single-02.html#">Log in</a></li>
											<li><a href="blog-single-02.html#">Entries RSS</a></li>
											<li><a href="blog-single-02.html#">Comments RSS</a></li>
											<li><a href="blog-single-02.html#">WordPress.org</a></li>
										</ul>
									</div>
									
								</div>
								
							</aside>

						</div>
						
					</div>
					
				</div>
			
			</section>
			
		</div>		
    )
}