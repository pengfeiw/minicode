#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float wave(vec2 st, float y) {
    return 1.0 - smoothstep(y, y + 0.002, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 bgColor = vec3(0.59, 0.75, 0.71);

    vec4 pixelColor = vec4(bgColor, 0.3);
    pixelColor = mix(pixelColor, vec4(vec3(1.0), 0.5) * wave(st, sin(st.x * 10. + u_time) * 0.06 + 0.2), 0.5);
    pixelColor = mix(pixelColor, vec4(1.0), wave(st, sin(st.x * 17. + u_time) * 0.07 * st.x + 0.2));
    pixelColor = mix(pixelColor, vec4(0.14, 0.35, 0.49, 1.0), wave(st, sin(st.x * 20. + u_time) * 0.05 * st.x + 0.2));
	gl_FragColor = pixelColor;
}
