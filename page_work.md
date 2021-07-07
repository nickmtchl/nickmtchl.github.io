---
title: Work
permalink: "/work/"
layout: hero_bg
---

<div class="full_height_group">
    <div class="frow direction-column wrap-frow-content-work">
        <ul class="brand_list">
            {% assign sorted_work = site.work | sort: 'order' %}
            {% for item in sorted_work limit: 5 %}
                <li class="js_hover_trigger">
                    <a href="{{ item.url }}">{{ item.title }}</a>
                    <div class="js_bg_receiver_work" style="background-image: url('{{ item.work_hover_img }}');"></div>
                </li>
            {% endfor %}
        </ul>

    </div>
</div>
