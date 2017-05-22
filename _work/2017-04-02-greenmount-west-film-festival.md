---
layout 						: work_film_layout
title 						: "Greenmount West Film Festival"

data-creditList 	: "mervo-credits"
data-galleryList 	: "mervo-gallery"

film-host					: "presented by noisy tenants"

project-hero 			: /img/mervo-hero.png

slide-img 					: "/img/filmfestival.png"
slide-featured 					: "yes"
slide-featured-rank 		: "2"
slide-template 						: "slide2"

video-url 				: "https://player.vimeo.com/video/163042727?api=1"

work-description 	: "a night of fundraising around film"
work-thumbnail		: "/img/thumbnail-greenmount-film-festival.png"
---

<div class="template_wrapper">
	<div class="element_wrapper">
		<div class="image_center">
			<img src="/img/logo-greenmount-west-film-festival.png" width="150" />
		</div>
		<div class="default_initial">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</div>
	</div>

	{% for film in site.data.greenmount-west-films %}
	<div class="film_item clearfix">
		<div class="film_item_thumbnail">
			<img src="{{ film.thumbnail }}">
		</div>
		<div class="film_item_text">
			<div class="headline_lg pull_left title_underline">{{ film.title }}</div>
			<div class="default_initial normal_text">
				Produced by: {{ film.producer }}<br/>
				Run Time: {{ film.runtime }}<br/>
				{{ film.description }}<br/>
			</div>
		</div>
	</div>
	{% endfor %}

</div>
{% include signup.html signup-text='Signup for our newsletter to receive our secret menu developed by mervo students' signup-bgcolor='#e44d4e' %}