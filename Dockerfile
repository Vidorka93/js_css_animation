FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY ./js_css_animation/* /usr/share/nginx/html/