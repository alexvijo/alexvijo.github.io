

Recursos...
{% for post in paginator.posts %}
    {% include post_list.html %}
{% endfor %}

<nav class="pagination" role="navigation">
    {% if paginator.next_page %}
        <a class="older-posts" href="/page/{{ paginator.next_page }}">Older Posts &rarr;</a>
    {% endif %}
    <span class="page-number">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>
    {% if paginator.previous_page %} 
        {% if paginator.page == 2 %}
            <a class="newer-posts" href="/">&larr; Newer Posts</a>
        {% else %}
            <a class="newer-posts" href="/page/{{ paginator.previous_page }}">&larr; Newer Posts</a>
        {% endif %}
    {% endif %}
</nav>
