#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec3 gridColor = vec3(0.17);
    vec3 backgroundColor = vec3(0.1);
	vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 pixel = backgroundColor;
    const float tickWidth = 0.1;
    float gridLineWidthX = 0.008;
    float gridLineWidthY = gridLineWidthX * u_resolution.x / u_resolution.y;
    int lineXCount = int(st.x / tickWidth);
    float lineXPre = float(lineXCount) * 0.1;
    float lineXBack = float(lineXCount + 1) * 0.1;

    float lineX = abs(lineXPre - st.x) < abs(lineXBack - st.x) ? lineXPre : lineXBack; 
	if( mod(st.x + 0.05, tickWidth) < 0.008 ) {
        if (mod(u_time * 0.1 + lineX + st.y, 1.) < 0.01) {
            int colorIndex = int(mod(float(lineXCount), 7.));
            if (colorIndex == 0) {
                pixel = vec3(1., 0.67, 0.65);
            } else if (colorIndex == 1) {
                pixel = vec3(1., 0.83, 0.71);
            } else if (colorIndex == 2) {
                pixel = vec3(0.84, 0.93, 0.76);
            } else if (colorIndex == 3) {
                pixel = vec3(0.6, 0.87, 0.79);
            } else if (colorIndex == 4) {
                pixel = vec3(0.24, 0.86, 0.94);
            } else if (colorIndex == 5) {
                pixel = vec3(0.47, 0.67, 0.95);
            } else {
                pixel = vec3(0.49, 0.51, 0.99);
            }
        } else {
            pixel = gridColor;
        }
    }

	gl_FragColor = vec4(pixel, 1.0);
}
