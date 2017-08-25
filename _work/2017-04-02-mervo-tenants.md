---
[//]: # (Meta Info)
layout 					: project_layout
title 					: "Mervo <br />Tenants"

[//]: # (Project Info)
project-hero-icon		: /img/logo-big-mervo.png
project-title 			: "noisy tenants &amp; <br/> mergenthaler vocational <br/> technical high school"
project-subtitle 		: "building community in local high schools"

[//]: # (Slide Info)
slide-template 			: "slide1"
slide-bg 				: "/img/bg_mervo.jpg"
slide-img 				: "/img/img_mervotenants.png"
slide-description 		: "Connecting with Students from Local Schools"

[//]: # (Misc Settings)
data-creditList 		: "mervo-credits"

---

<div class="template_wrapper">

	<!-- Image Content Block w/menu -->
	{% include

		content-block-image.html 
		
		content-image="/img/mervotenants-menu-image.jpg" 
		content-title="the noisy <br>process" 
		content-menuList="mervotenants-intro" 
	%}

	<!-- Testimonial Block -->
	{% include content-block-testimonial.html data-testimonialList='mervo-testimonials' testimonial-title='Our students said...' %}

	<!-- Special Thanks -->
	{% include credits.html %}	
</div>




