#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 bgColor = vec3(0.2, 0.41, 0.73);

    vec3 pixelColor = bgColor;
    if (st.y < sin(gl_FragCoord.x)) {
        pixelColor = vec3(0.0);
    }
	gl_FragColor = vec4(pixelColor, 1.0);
}
