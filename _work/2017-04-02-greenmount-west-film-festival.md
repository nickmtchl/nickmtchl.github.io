---
[//]: # (Meta Info)
layout 					: project_layout
title 					: "Greenmount West Film Festival"

[//]: # (Project Info)
project-hero-icon 		: "/img/logo-big-greenmount-west.png"
project-title 			: "greenmount west film festival <br/> presented by noisy tenants"
project-subtitle 		: "a collection of films by local film makers"

[//]: # (Slide Info)
slide-template 			: "slide1"
slide-bg 				: "/img/bg_gwff.jpg"
slide-img 				: "/img/img_filmfestival.png"
slide-description 		: "a night of fundraising around film"
---

<div class="template_wrapper">
	
	<p>Greenmount West Film Festival *Greenmount West Film Festival - launching May 2018 is a collaborative project between Noisy Tenants and SVNCRWNS to... We will have 3 screenings leading up to the launch. Please take a look at short films from our most recent screening on August 10, 2017 at the Charles Theatre. </p>

	<!-- Film List -->
	{% for film in site.data.greenmount-west-films %}
		{% include film-list.html %}
	{% endfor %}

</div>
